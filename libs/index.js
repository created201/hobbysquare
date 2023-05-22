import {
    baseUri,
    database,
    nextAuthProviders,
    nextAuthSecret,
    nodeMailer,
} from "./env"

class Env {
    constructor() {
        this.uri = baseUri
        this.database = database
        this.nextauth = {
            secret: nextAuthSecret,
            providers: nextAuthProviders,
        }
        this.nodemailer = nodeMailer
    }
}

const env = new Env()

export { env }
