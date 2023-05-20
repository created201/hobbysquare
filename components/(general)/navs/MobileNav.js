import dynamic from "next/dynamic"

const MobileMenuButton = dynamic(() =>
    import("@/(general)/buttons/MobileMenuButton")
)

const MobileNav = () => {
    return (
        <nav className="flex lg:hidden items-center gap-x-2">
            <MobileMenuButton />
        </nav>
    )
}

export default MobileNav
