import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
const handler = NextAuth({
  providers: [
    CredentialsProvider({
   
      name: 'Email Password',

      credentials: {
        username: { label: "Username", type: "text", placeholder: "atharva" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {

        const user = {
          name:"atharva",
          id:1,
          username: credentials?.username,
        }
        if (
          credentials?.username === "atharva" &&
          credentials?.password === "password"
        ) {
          return user;
        }
 
        return null
      }
    })
  ]
})

export { handler as GET, handler as POST }