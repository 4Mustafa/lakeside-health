import { 
  users, type User, type InsertUser,
  referrals, type Referral, type InsertReferral,
  contacts, type Contact, type InsertContact
} from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Referral methods
  createReferral(referral: InsertReferral): Promise<Referral>;
  getReferrals(): Promise<Referral[]>;
  getReferralById(id: number): Promise<Referral | undefined>;

  // Contact methods
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  getContactById(id: number): Promise<Contact | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private referrals: Map<number, Referral>;
  private contacts: Map<number, Contact>;
  private userId: number;
  private referralId: number;
  private contactId: number;

  constructor() {
    this.users = new Map();
    this.referrals = new Map();
    this.contacts = new Map();
    this.userId = 1;
    this.referralId = 1;
    this.contactId = 1;
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Referral methods
  async createReferral(insertReferral: InsertReferral): Promise<Referral> {
    const id = this.referralId++;
    const createdAt = new Date();
    const referral: Referral = { ...insertReferral, id, createdAt };
    this.referrals.set(id, referral);
    return referral;
  }

  async getReferrals(): Promise<Referral[]> {
    return Array.from(this.referrals.values());
  }

  async getReferralById(id: number): Promise<Referral | undefined> {
    return this.referrals.get(id);
  }

  // Contact methods
  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.contactId++;
    const createdAt = new Date();
    const contact: Contact = { ...insertContact, id, createdAt };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }

  async getContactById(id: number): Promise<Contact | undefined> {
    return this.contacts.get(id);
  }
}

export const storage = new MemStorage();
