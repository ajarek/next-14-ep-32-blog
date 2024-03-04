import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GitHub from 'next-auth/providers/github'
import { User } from '@/lib/models'
import connectToDb from '@/lib/connectToDb'
import { redirect } from 'next/dist/server/api-utils'
export const {
  auth,
  handlers: { GET, POST },
} = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: 'Credential',
      credentials: {
        username: { type: 'text', required: true },
        password: { type: 'password', required: true },
      },
      async authorize(credentials: any) {
        await connectToDb()
        try {
          const user = await User.findOne({ password: credentials.password })
          if (user) {
            return user
          }
          
        } catch (err: any) {
          throw new Error(err)
        }
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
})
