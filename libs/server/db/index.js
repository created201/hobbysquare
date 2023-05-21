import { isDbClientAvailable, isEnvDevelopment } from "./check"
import {
    createClient,
    createClientConnection,
    defineClientPromise,
} from "./connect"

const URI = process.env.NEXT_MONGODB_URI ?? false

let client
let clientPromise

if (!URI) {
    throw new Error("Processing Mongo URI from environment failed.")
}

if (isEnvDevelopment()) {
    if (!isDbClientAvailable()) {
        client = createClient(URI)
        createClientConnection(client)
    }
    clientPromise = defineClientPromise()
} else {
    client = createClient(URI)
    clientPromise = client.connect()
}

export { client, clientPromise }
