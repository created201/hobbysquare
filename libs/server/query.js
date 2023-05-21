/** connect to database */
import { clientPromise } from "."

async function query(doc) {
    const client = await clientPromise
    const databaseBaseQuery = client
        .db(process.env.NEXT_MONGODB_DB)
        .collection(doc)

    return databaseBaseQuery
}

export { query }
