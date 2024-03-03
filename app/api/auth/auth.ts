import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GitHub from 'next-auth/providers/github'

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
        username: {type:'text', required: true },
        password: {type:'password', required: true },
      },
      async authorize(credentials) {
        const user ={id:'1',  username: 'admin', password: 'admin'}
        if (credentials.username === user.username && credentials.password === user.password) {
          return user;
        } else {
          return null;
        }
      }
    }),
  ],
  secret: process.env.AUTH_SECRET,
})
