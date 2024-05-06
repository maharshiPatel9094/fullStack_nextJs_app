import NextAuth from "next-auth/next";
import { authOptions } from "./options";

// next auth is a method which takes options
const handler = NextAuth(authOptions)

// 
export {handler as GET, handler as POST}