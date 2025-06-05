// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/storage.ts
var MemStorage = class {
  users;
  referrals;
  contacts;
  userId;
  referralId;
  contactId;
  constructor() {
    this.users = /* @__PURE__ */ new Map();
    this.referrals = /* @__PURE__ */ new Map();
    this.contacts = /* @__PURE__ */ new Map();
    this.userId = 1;
    this.referralId = 1;
    this.contactId = 1;
  }
  // User methods
  async getUser(id) {
    return this.users.get(id);
  }
  async getUserByUsername(username) {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }
  async createUser(insertUser) {
    const id = this.userId++;
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  // Referral methods
  async createReferral(insertReferral) {
    const id = this.referralId++;
    const createdAt = /* @__PURE__ */ new Date();
    const referral = { ...insertReferral, id, createdAt };
    this.referrals.set(id, referral);
    return referral;
  }
  async getReferrals() {
    return Array.from(this.referrals.values());
  }
  async getReferralById(id) {
    return this.referrals.get(id);
  }
  // Contact methods
  async createContact(insertContact) {
    const id = this.contactId++;
    const createdAt = /* @__PURE__ */ new Date();
    const contact = { ...insertContact, id, createdAt };
    this.contacts.set(id, contact);
    return contact;
  }
  async getContacts() {
    return Array.from(this.contacts.values());
  }
  async getContactById(id) {
    return this.contacts.get(id);
  }
};
var storage = new MemStorage();

// server/routes.ts
import { ZodError } from "zod";

// shared/schema.ts
import { pgTable, text, serial, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
var users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull()
});
var insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true
});
var referrals = pgTable("referrals", {
  id: serial("id").primaryKey(),
  clientName: text("client_name").notNull(),
  clientDob: text("client_dob").notNull(),
  clientPhone: text("client_phone").notNull(),
  clientEmail: text("client_email"),
  clientAddress: text("client_address"),
  referrerName: text("referrer_name").notNull(),
  referrerOrganization: text("referrer_organization").notNull(),
  referrerPhone: text("referrer_phone").notNull(),
  referrerEmail: text("referrer_email").notNull(),
  transitionServices: boolean("transition_services").default(false),
  sustainingServices: boolean("sustaining_services").default(false),
  consultationServices: boolean("consultation_services").default(false),
  notes: text("notes"),
  consent: boolean("consent").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull()
});
var insertReferralSchema = createInsertSchema(referrals).omit({
  id: true,
  createdAt: true
});
var referralFormSchema = z.object({
  client: z.object({
    name: z.string().min(2, { message: "Name is required" }),
    dob: z.string().min(1, { message: "Date of birth is required" }),
    phone: z.string().min(10, { message: "Valid phone number is required" }),
    email: z.string().email().optional().or(z.literal("")),
    address: z.string().optional()
  }),
  referrer: z.object({
    name: z.string().min(2, { message: "Name is required" }),
    organization: z.string().min(2, { message: "Organization is required" }),
    phone: z.string().min(10, { message: "Valid phone number is required" }),
    email: z.string().email({ message: "Valid email is required" })
  }),
  services: z.object({
    transition: z.boolean().optional(),
    sustaining: z.boolean().optional(),
    consultation: z.boolean().optional()
  }).refine((data) => data.transition || data.sustaining || data.consultation, {
    message: "At least one service must be selected",
    path: ["root"]
  }),
  notes: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must confirm client consent"
  })
});
var contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull()
});
var insertContactSchema = createInsertSchema(contacts).omit({
  id: true,
  createdAt: true
});
var contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Valid email is required" }),
  subject: z.string().min(2, { message: "Subject is required" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

// server/routes.ts
import { fromZodError } from "zod-validation-error";
async function registerRoutes(app2) {
  app2.use("/api", (req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    next();
  });
  app2.post("/api/referrals", async (req, res) => {
    try {
      const formData = referralFormSchema.parse(req.body);
      const referralData = {
        clientName: formData.client.name,
        clientDob: formData.client.dob,
        clientPhone: formData.client.phone,
        clientEmail: formData.client.email || null,
        clientAddress: formData.client.address || null,
        referrerName: formData.referrer.name,
        referrerOrganization: formData.referrer.organization,
        referrerPhone: formData.referrer.phone,
        referrerEmail: formData.referrer.email,
        transitionServices: formData.services.transition || false,
        sustainingServices: formData.services.sustaining || false,
        consultationServices: formData.services.consultation || false,
        notes: formData.notes || null,
        consent: formData.consent
      };
      const validReferralData = insertReferralSchema.parse(referralData);
      const savedReferral = await storage.createReferral(validReferralData);
      res.status(201).json({
        success: true,
        message: "Referral submitted successfully",
        data: savedReferral
      });
    } catch (error) {
      console.error("Error processing referral submission:", error);
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({
          success: false,
          message: "Validation error",
          errors: validationError.details
        });
      }
      res.status(500).json({
        success: false,
        message: "Failed to process referral",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });
  app2.get("/api/referrals", async (req, res) => {
    try {
      const referrals2 = await storage.getReferrals();
      res.json({
        success: true,
        data: referrals2
      });
    } catch (error) {
      console.error("Error fetching referrals:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch referrals",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });
  app2.get("/api/referrals/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({
          success: false,
          message: "Invalid referral ID"
        });
      }
      const referral = await storage.getReferralById(id);
      if (!referral) {
        return res.status(404).json({
          success: false,
          message: "Referral not found"
        });
      }
      res.json({
        success: true,
        data: referral
      });
    } catch (error) {
      console.error("Error fetching referral:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch referral",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });
  app2.post("/api/contact", async (req, res) => {
    try {
      const formData = contactFormSchema.parse(req.body);
      const validContactData = insertContactSchema.parse(formData);
      const savedContact = await storage.createContact(validContactData);
      res.status(201).json({
        success: true,
        message: "Contact form submitted successfully",
        data: savedContact
      });
    } catch (error) {
      console.error("Error processing contact submission:", error);
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({
          success: false,
          message: "Validation error",
          errors: validationError.details
        });
      }
      res.status(500).json({
        success: false,
        message: "Failed to process contact form",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });
  app2.get("/api/contacts", async (req, res) => {
    try {
      const contacts2 = await storage.getContacts();
      res.json({
        success: true,
        data: contacts2
      });
    } catch (error) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch contacts",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });
  app2.get("/api/contacts/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({
          success: false,
          message: "Invalid contact ID"
        });
      }
      const contact = await storage.getContactById(id);
      if (!contact) {
        return res.status(404).json({
          success: false,
          message: "Contact not found"
        });
      }
      res.json({
        success: true,
        data: contact
      });
    } catch (error) {
      console.error("Error fetching contact:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch contact",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2, { dirname as dirname2 } from "path";
import { fileURLToPath as fileURLToPath2 } from "url";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path, { dirname } from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { fileURLToPath } from "url";
var __filename = fileURLToPath(import.meta.url);
var __dirname = dirname(__filename);
var vite_config_default = defineConfig({
  base: "./",
  plugins: [
    react(),
    runtimeErrorOverlay(),
    themePlugin(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets")
    }
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var __filename2 = fileURLToPath2(import.meta.url);
var __dirname2 = dirname2(__filename2);
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        __dirname2,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(__dirname2, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = 5e3;
  server.listen(port, "0.0.0.0", () => {
    console.log(`serving on http://localhost:${port}`);
  });
})();
