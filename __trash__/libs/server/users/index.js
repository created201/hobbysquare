import { Query } from "../../share"
import { query } from "../query"

class Users extends Query {
    constructor(query) {
        super(query)
        this.name = "users"
    }

    async create(_id, data) {
        const query = this.query(this.name)

        await query.insertOne({
            _id,
            data,
            metadata: {
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
                lasyLoggedInAt: new Date().toISOString(),
            },
        })

        return _id
    }
    async getOne(_id) {
        const query = this.query(this.name)

        const user = await query.findOne({ _id })

        return user ? user : null
    }
    async getAll() {}
    async update(_id, data) {
        const query = this.query(this.name)

        const user = await this.getOne(_id)
        await query.updateOne(
            { _id },
            {
                $set: {
                    data,
                    metadata: {
                        ...user.metadata,
                        updatedAt: new Date().toISOString(),
                    },
                },
            }
        )

        return
    }
    async remove() {}
}

const serverusers = new Users(query)

export { serverusers }
