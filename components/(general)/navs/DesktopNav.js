import dynamic from "next/dynamic"

const GetStartedButton = dynamic(() =>
    import("@/(general)/buttons/GetStartedButton")
)

const DesktopNav = () => {
    return (
        <nav className="lg:flex hidden items-center gap-x-4">
            <GetStartedButton />
        </nav>
    )
}

export default DesktopNav
