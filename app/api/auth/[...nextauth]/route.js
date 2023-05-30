import { connect } from 'mongoose';
import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import { signIn } from 'next-auth/react';

import { connectToDB } from '@utils/database';

const heandler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  
  async session({ session }) {

  },
  async signIn({ profile }) {
    try {
      await connectToDB();
      // check a user is already in the database
      // if not create a new user
      // if yes, update the user
      // return true to sign in
      return true;
    } catch (error) {
      console.log(error);
    }
  },
});

export { heandler as GET, heandler as POST}
