import { __classnames__ } from "./classnames"
import { __dates__ } from "./dates"
import { __getRoutes__ } from "./routes"
import { __PlaceHolders__ } from "./placeholders"
import { __Data__ } from "./data"

class __Helper__ {
    constructor() {}
}

__Helper__.prototype.classnames = __classnames__
__Helper__.prototype.getRoutes = __getRoutes__
__Helper__.prototype.dates = __dates__
__Helper__.prototype.alertButtonNotAvailable =
    __PlaceHolders__.alertButtonNotAvailable
__Helper__.prototype.getCategories = __Data__.getCategories
__Helper__.prototype.getSkillLevels = __Data__.getSkillLevels
__Helper__.prototype.getPlaceholderImage = __Data__.getPlaceholderImage
__Helper__.prototype.getMockFeeds = __Data__.getMockFeeds

export { __Helper__ }
