import { NextAuthGoogleProviderOption } from "types-config"
import {
    baseUri,
    database,
    nextAuthProviders,
    nextAuthSecret,
    nodeMailer,
} from "./env"

interface IEnv {
    baseUri: Record<string, string>
    database: Record<string, string>
    nextauth: Record<string, string | Record<string, Record<string, string>>>
    nodemailer: Record<string, string>
}

class Env implements IEnv {
    public baseUri: typeof baseUri.baseUri
    public database: typeof database.database
    public nextauth: {
        secret: typeof nextAuthSecret
        providers: typeof nextAuthProviders
    }
    public nodemailer: typeof nodeMailer.nodemailer

    constructor() {
        this.baseUri = baseUri.baseUri
        this.database = database.database
        this.nextauth = {
            secret: nextAuthSecret,
            providers: nextAuthProviders,
        }
        this.nodemailer = nodeMailer.nodemailer
    }
}

const env = new Env()

export { env }
