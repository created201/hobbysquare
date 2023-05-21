import dynamic from "next/dynamic"
import UserProfile from "../images/UserProfile"
import Link from "next/link"
import { classnames } from "@/helpers"
import { useRouter } from "next/router"

const NavButton = dynamic(() => import("@/(general)/buttons/NavButton"))

const DesktopNav = ({ routeNames, routes, currentRoute, user }) => {
    const router = useRouter()

    return (
        <nav className="lg:flex hidden items-center gap-x-4 w-full">
            <ul className="flex items-center gap-x-4">
                {routeNames.map(
                    (routeName, idx) =>
                        routes[routeName].href !== router.pathname && (
                            <Link
                                href={routes[routeName].href}
                                key={idx}
                                className={classnames(
                                    "capitalize transition-smooth ",
                                    currentRoute
                                        ? "text-theme-dark lg:hover:opacity-60"
                                        : "text-theme-gray/75 lg:hover:opacity-60"
                                )}
                            >
                                {routeName}
                            </Link>
                        )
                )}
                {!user && (
                    <Link
                        href={"/login"}
                        className={classnames(
                            "capitalize transition-smooth ",
                            currentRoute
                                ? "text-theme-dark lg:hover:opacity-60"
                                : "text-theme-gray/75 lg:hover:opacity-60"
                        )}
                    >
                        Login
                    </Link>
                )}
            </ul>
            <UserProfile />
            <NavButton user="jin lee" />
        </nav>
    )
}

export default DesktopNav
