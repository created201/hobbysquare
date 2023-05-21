import { serverusers } from "./server/users"
import { serverposts } from "./server/posts"
import { clientusers } from "./client/users"
import { clientposts } from "./client/posts"

class __$__ {
    constructor(server, client) {
        this.server = server
        this.client = client
    }
}

const $ = new __$__(
    // server controllers
    {
        users: serverusers,
        posts: serverposts,
    },
    // client controllers
    {
        users: clientusers,
        posts: clientposts,
    }
)

export { $ }
