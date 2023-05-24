import type {
    BaseUriConfigOption,
    DatabaseConfigOption,
    NextAuthGoogleProviderOption,
    NodeMailerProviderOption,
} from "types-config"
import dotenv from "dotenv"

dotenv.config()

// NEXT AUTH SECRET
export const nextAuthSecret = process.env.NEXTAUTH_SECRET ?? ""
// NEXT AUTH PROVIDERS' IDS & SECRETS
export const nextAuthProviders: NextAuthGoogleProviderOption = {
    google: {
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
}
// NODEMAILER USER && PASS
export const nodeMailer: NodeMailerProviderOption = {
    nodemailer: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS,
    },
}
// DATABASE
export const database: DatabaseConfigOption = {
    database: {
        uri: process.env.DATABASE_URI,
        name: process.env.DATABASE_NAME,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
    },
}
// APPLICATION BASE URI
export const baseUri: BaseUriConfigOption = {
    baseUri: {
        development: process.env.DEVELOPMENT_URI,
        production: process.env.PRODUCTION_URI,
    },
}
