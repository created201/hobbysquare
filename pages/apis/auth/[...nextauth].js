/* eslint-disable no-undef */
import { $ } from "@/libs"
import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google"

/** @type{import("next-auth").NextAuthOptions} */
const nextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_AUTH_GOOGLE_CLIENT_ID,
            clientSecret: process.env.NEXT_AUTH_GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async jwt(params) {
            if (params.account) {
                params.token._id = params.user.id
            }

            return params.token
        },
        async signIn(params) {
            try {
                const user = await $.server.users.getOne(params.user.id)

                if (!user) {
                    await $.server.users.create()
                }
            } catch (error) {
                console.log("--- NEXTAUTH USER CALLBACK SIGNIN ERROR ---")
                console.error(error)

                return Promise.resolve(false)
            }

            return Promise.resolve(true)
        },
        async session(params) {
            try {
                const user = await $.server.users.getOne(params.token._id)
                params.session.user = user
            } catch (error) {
                console.log("--- NEXTAUTH USER CALLBACK SESSION ERROR ---")
                console.error(error)

                return Promise.resolve(false)
            }

            return Promise.resolve(params.session)
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
}

export default NextAuth(nextAuthOptions)
