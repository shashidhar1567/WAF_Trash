import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

const authSecret =
  process.env.AUTH_SECRET ??
  process.env.BETTER_AUTH_SECRET ??
  "development-secret-change-me";

export const { handlers, auth, signIn, signOut } = NextAuth({
  secret: authSecret,

  providers: [
    Credentials({
      credentials: {
        email: {
          label: "Email ID",
          type: "email",
        },
        username: {
          label: "Username",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },

      async authorize(credentials) {
        const email = credentials?.email;
        const username = credentials?.username;
        const password = credentials?.password;

        if (
          email === "admin@gmail.com" &&
          username === "admin" &&
          password === "1234"
        ) {
          return {
            id: "1",
            name: "Admin",
            email: "admin@gmail.com",
            role: "admin",
          };
        }

        if (
          email === "student@gmail.com" &&
          username === "student" &&
          password === "1234"
        ) {
          return {
            id: "2",
            name: "Student",
            email: "student@gmail.com",
            role: "student",
          };
        }

        return null;
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }

      return token;
    },

    async session({ session, token }) {
      session.user.role = token.role as string;

      return session;
    },
  },

  pages: {
    signIn: "/",
  },
});