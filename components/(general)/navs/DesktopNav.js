import dynamic from "next/dynamic"
import UserProfile from "../images/UserProfile"

const NavButton = dynamic(() => import("@/(general)/buttons/NavButton"))

const DesktopNav = () => {
    return (
        <nav className="lg:flex hidden items-center gap-x-4">
            <UserProfile src="" />
            <NavButton user="jin lee" />
        </nav>
    )
}

export default DesktopNav
