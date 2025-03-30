import { pgTable, text, serial, integer, boolean, timestamp, json } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Referral schema
export const referrals = pgTable("referrals", {
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
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertReferralSchema = createInsertSchema(referrals).omit({
  id: true,
  createdAt: true,
});

export const referralFormSchema = z.object({
  client: z.object({
    name: z.string().min(2, { message: "Name is required" }),
    dob: z.string().min(1, { message: "Date of birth is required" }),
    phone: z.string().min(10, { message: "Valid phone number is required" }),
    email: z.string().email().optional().or(z.literal("")),
    address: z.string().optional(),
  }),
  referrer: z.object({
    name: z.string().min(2, { message: "Name is required" }),
    organization: z.string().min(2, { message: "Organization is required" }),
    phone: z.string().min(10, { message: "Valid phone number is required" }),
    email: z.string().email({ message: "Valid email is required" }),
  }),
  services: z.object({
    transition: z.boolean().optional(),
    sustaining: z.boolean().optional(),
    consultation: z.boolean().optional(),
  }).refine(data => data.transition || data.sustaining || data.consultation, {
    message: "At least one service must be selected",
    path: ["root"],
  }),
  notes: z.string().optional(),
  consent: z.boolean().refine(val => val === true, {
    message: "You must confirm client consent",
  }),
});

export type InsertReferral = z.infer<typeof insertReferralSchema>;
export type Referral = typeof referrals.$inferSelect;
export type ReferralFormValues = z.infer<typeof referralFormSchema>;

// Contact schema
export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertContactSchema = createInsertSchema(contacts).omit({
  id: true,
  createdAt: true,
});

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Valid email is required" }),
  subject: z.string().min(2, { message: "Subject is required" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contacts.$inferSelect;
export type ContactFormValues = z.infer<typeof contactFormSchema>;
