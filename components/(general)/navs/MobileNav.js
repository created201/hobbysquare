import dynamic from "next/dynamic"

const UserProfile = dynamic(() => import("@/(general)/images/UserProfile"))
const MobileMenuButton = dynamic(() =>
    import("@/(general)/buttons/MobileMenuButton")
)

const MobileNav = ({ onClick, show }) => {
    return (
        <nav className="fixed top-4 right-4 flex lg:hidden items-center gap-x-2 z-50">
            <UserProfile src="" />
            <MobileMenuButton onClick={onClick} show={show} />
        </nav>
    )
}

export default MobileNav
