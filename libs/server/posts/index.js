import { Query } from "../../share"
import { query } from "../query"

class Posts extends Query {
    constructor(query) {
        super(query)
        this.name = "posts"
    }

    async create(_id, data) {
        const query = this.query(this.name)
        console.log(query, data)
    }
    async getOne() {}
    async getAll() {}
    async update() {}
    async remove() {}

    async sendEmail() {}
}

const serverposts = new Posts(query)

export { serverposts }
