import dynamic from "next/dynamic"

const NavButton = dynamic(() => import("@/(general)/buttons/NavButton"))

const DesktopNav = () => {
    return (
        <nav className="lg:flex hidden items-center gap-x-4">
            <NavButton user="jin lee" />
        </nav>
    )
}

export default DesktopNav
