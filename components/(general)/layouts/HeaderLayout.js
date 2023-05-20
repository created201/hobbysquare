import dynamic from "next/dynamic"

const LogoLink = dynamic(() => import("@/(general)/links/LogoLink"))
const MobileNav = dynamic(() => import("@/(general)/navs/MobileNav"))
const DesktopNav = dynamic(() => import("@/(general)/navs/DesktopNav"))

const HeaderLayout = () => {
    return (
        <header className="w-full fixed top-0 left-0 z-40 bg-theme-white/95 text-theme-dark">
            <section className="w-full mx-auto px-4 py-4 2xl:px-8 flex justify-between items-center">
                <LogoLink />
                <MobileNav />
                <DesktopNav />
            </section>
        </header>
    )
}

export default HeaderLayout
