import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { ZodError } from "zod";
import { 
  referralFormSchema, 
  insertReferralSchema, 
  contactFormSchema, 
  insertContactSchema 
} from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route prefix
  app.use("/api", (req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    next();
  });

  // Handle referral form submissions
  app.post("/api/referrals", async (req, res) => {
    try {
      // Validate the request body against our schema
      const formData = referralFormSchema.parse(req.body);
      
      // Transform the validated data to match our database schema
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
        consent: formData.consent,
      };
      
      // Validate transformed data against our insert schema
      const validReferralData = insertReferralSchema.parse(referralData);
      
      // Save the referral to storage
      const savedReferral = await storage.createReferral(validReferralData);
      
      // Return success response
      res.status(201).json({
        success: true,
        message: "Referral submitted successfully",
        data: savedReferral,
      });
    } catch (error) {
      console.error("Error processing referral submission:", error);
      
      // Handle validation errors specially
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({
          success: false,
          message: "Validation error",
          errors: validationError.details,
        });
      }
      
      // Handle other errors
      res.status(500).json({
        success: false,
        message: "Failed to process referral",
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  });

  // Get all referrals (would typically be protected)
  app.get("/api/referrals", async (req, res) => {
    try {
      const referrals = await storage.getReferrals();
      res.json({
        success: true,
        data: referrals,
      });
    } catch (error) {
      console.error("Error fetching referrals:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch referrals",
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  });

  // Get a specific referral by ID (would typically be protected)
  app.get("/api/referrals/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({
          success: false,
          message: "Invalid referral ID",
        });
      }

      const referral = await storage.getReferralById(id);
      if (!referral) {
        return res.status(404).json({
          success: false,
          message: "Referral not found",
        });
      }

      res.json({
        success: true,
        data: referral,
      });
    } catch (error) {
      console.error("Error fetching referral:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch referral",
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  });

  // Handle contact form submissions
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body against our schema
      const formData = contactFormSchema.parse(req.body);
      
      // Validate against our insert schema
      const validContactData = insertContactSchema.parse(formData);
      
      // Save the contact to storage
      const savedContact = await storage.createContact(validContactData);
      
      // Return success response
      res.status(201).json({
        success: true,
        message: "Contact form submitted successfully",
        data: savedContact,
      });
    } catch (error) {
      console.error("Error processing contact submission:", error);
      
      // Handle validation errors specially
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({
          success: false,
          message: "Validation error",
          errors: validationError.details,
        });
      }
      
      // Handle other errors
      res.status(500).json({
        success: false,
        message: "Failed to process contact form",
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  });

  // Get all contacts (would typically be protected)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json({
        success: true,
        data: contacts,
      });
    } catch (error) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch contacts",
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  });

  // Get a specific contact by ID (would typically be protected)
  app.get("/api/contacts/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({
          success: false,
          message: "Invalid contact ID",
        });
      }

      const contact = await storage.getContactById(id);
      if (!contact) {
        return res.status(404).json({
          success: false,
          message: "Contact not found",
        });
      }

      res.json({
        success: true,
        data: contact,
      });
    } catch (error) {
      console.error("Error fetching contact:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch contact",
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
