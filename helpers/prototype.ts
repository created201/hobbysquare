import { __classnames__ } from "./classnames"
import { __dates__ } from "./dates"
import { __getRoutes__ } from "./routes"
import { __PlaceHolders__ } from "./placeholders"
import { __Data__ } from "./data"

class __Helper__ {
    public static classnames: typeof __classnames__
    public static dates: typeof __dates__
    public static alertButtonNotAvailable: typeof __PlaceHolders__.alertButtonNotAvailable
    public static getCategories: typeof __Data__.getCategories
    public static getSkillLevels: typeof __Data__.getSkillLevels
    public static getPlaceholderImage: typeof __Data__.getPlaceholderImage
    public static getMockFeeds: typeof __Data__.getMockFeeds
    public static getRoutes: typeof __getRoutes__
}

__Helper__.classnames = __classnames__
__Helper__.getRoutes = __getRoutes__
__Helper__.dates = __dates__
__Helper__.alertButtonNotAvailable = __PlaceHolders__.alertButtonNotAvailable
__Helper__.getCategories = __Data__.getCategories
__Helper__.getSkillLevels = __Data__.getSkillLevels
__Helper__.getPlaceholderImage = __Data__.getPlaceholderImage
__Helper__.getMockFeeds = __Data__.getMockFeeds
__Helper__.getRoutes = __getRoutes__

export { __Helper__ }
