import { env } from "@/libs"
import NextAuth, { type NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const nextAuthConfigOptions: NextAuthOptions = {
    // NEXTAUTH PROVIDERS OPTIONS
    providers: [GoogleProvider(env.nextauth.providers.google)],
    // NEXTAUTH SESSION STRATEGY
    session: { strategy: "jwt" },
    // CUSTOM CALLBACK OPTIONS [jwt, session, signIn]
    callbacks: {
        async jwt(params) {
            if (params.account && params.user) {
                params.token.id = params.user.id
            }
            return params.token
        },
        async session(params) {
            params.session.user._id = params.token.id
            return params.session
        },
        async signIn(_params) {
            console.log("---params---\n", _params)
            return true
        },
    },
    // NEXTAUTH DEBUG SESSION IFF ENV -> DEVELOPMENT
    debug: process.env.NODE_ENV === "development",
    // NEXTAUTH SECRET KEY
    secret: env.nextauth.secret as string,
}

export default NextAuth(nextAuthConfigOptions)
