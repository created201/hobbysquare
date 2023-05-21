import { MongoClient } from "mongodb"

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}

function createClient(uri) {
    return new MongoClient(uri, options)
}

function createClientConnection(clientInstance) {
    global._mongoClientPromise = clientInstance.connect()
}

function defineClientPromise() {
    return global._mongoClientPromise
}

export { createClient, createClientConnection, defineClientPromise }
