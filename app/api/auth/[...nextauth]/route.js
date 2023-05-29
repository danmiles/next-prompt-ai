import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import { signIn } from 'next-auth/react';

const heandler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: '',
      clientSecret: '',
    }),
  ],
  async session({ session }) {

  },
  async signIn({ profile }) {

  },
});

export { heandler as GET, heandler as POST}
