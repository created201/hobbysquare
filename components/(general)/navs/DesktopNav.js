import dynamic from "next/dynamic"
import UserProfile from "../images/UserProfile"
import Link from "next/link"
import { classnames } from "@/helpers"
import { useSession } from "next-auth/react"

const NavButton = dynamic(() => import("@/(general)/buttons/NavButton"))

const DesktopNav = ({ routeNames, routes, currentRoute }) => {
    const { data } = useSession()
    return (
        <nav className="lg:flex hidden items-center gap-x-4 w-full">
            <ul className="flex items-center gap-x-4">
                {routeNames.map((routeName, idx) => (
                    <Link
                        href={routes[routeName].href}
                        key={idx}
                        className={classnames(
                            "capitalize font-medium transition-smooth ",
                            currentRoute
                                ? "text-theme-dark lg:hover:opacity-60"
                                : "text-theme-gray/75 lg:hover:opacity-60"
                        )}
                    >
                        {routeName}
                    </Link>
                ))}
                {!data && (
                    <Link
                        href={"/login"}
                        className={classnames(
                            "capitalize font-medium transition-smooth ",
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
