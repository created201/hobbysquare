import { Query } from "../../share"
import { query } from "../query"

class Users extends Query {
    constructor(query) {
        super(query)
    }

    async create() {}
    async getOne() {}
    async getAll() {}
    async update() {}
    async remove() {}
}

const clientusers = new Users(query())

export { clientusers }
