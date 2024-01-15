import bcrypt from "bcrypt";
import NextAuth, { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDb } from "@/lib/helpers";
import primsa from "@/prisma";

export const authOptions: AuthOptions = {
  providers: [
    GithubProvider({
      clientId: "",
      clientSecret: "",
    }),
    GoogleProvider({
      clientId: "",
      clientSecret: "",
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { type: "text" },
        password: { type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials || !credentials.email || !credentials.password) {
          return null;
        }
        try {
          await connectToDb();
          const user = await primsa.user.findFirst({
            where: { email: credentials.email },
          });

          if (!user) {
            return null;
          }
          if (!user.password) {
            return null;
          }
          const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            user.password
          );
          if (!isPasswordCorrect) {
            return null;
          }
          return { ...user, id: user.id };
        } catch (error) {
          return null;
        } finally {
          await primsa.$disconnect();
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
