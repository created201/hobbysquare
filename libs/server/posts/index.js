import { Query } from "../../share"
import { query } from "../query"

class Posts extends Query {
    constructor(query) {
        super(query)
    }

    async create() {}
    async getOne() {}
    async getAll() {}
    async update() {}
    async remove() {}

    async sendEmail() {}
}

const serverposts = new Posts(query())

export { serverposts }
