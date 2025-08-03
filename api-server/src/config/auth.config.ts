import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb"; 
import 'dotenv/config';
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGODB_URI!);
const db = client.db();

export const auth = betterAuth({
  trustedOrigins: ['http://localhost:3000', 'http://localhost:3000/dashboard'],
  database: mongodbAdapter(db),  
  emailAndPassword: {
    enabled: false, 
  }, 
  socialProviders: {
    github: {
      prompt: "select_account", 
      clientId: process.env.GITHUB_CLIENT_ID as string, 
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string, 
    }, 
    google: {
      prompt: "select_account+consent", 
      clientId: process.env.GOOGLE_CLIENT_ID as string, 
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string, 
    },
  }, 
});