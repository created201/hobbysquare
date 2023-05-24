import dynamic from "next/dynamic"

const UserProfile = dynamic(() => import("@/(general)/images/UserProfile"))
const MobileMenuButton = dynamic(
    () => import("@/(general)/buttons/MobileMenuButton")
)

const MobileNav = ({ onClick, show, user }) => {
    return (
        <nav className="fixed top-2 right-4 flex lg:hidden items-center gap-x-2 z-50 transition-smooth">
            <UserProfile user={user} />
            <MobileMenuButton onClick={onClick} show={show} />
        </nav>
    )
}

export default MobileNav
