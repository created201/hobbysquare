import dynamic from "next/dynamic"
import UserProfile from "../images/UserProfile"
import Link from "next/link"
import { classnames } from "@/helpers"
import { useRouter } from "next/router"
import { signOut } from "next-auth/react"

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
                {user && (
                    <button
                        onClick={signOut}
                        className={classnames(
                            "capitalize transition-smooth text-pink-500 hover:opacity-75"
                        )}
                    >
                        Sign out
                    </button>
                )}
            </ul>
            <UserProfile user={user} />
            <NavButton user="jin lee" />
        </nav>
    )
}

export default DesktopNav
