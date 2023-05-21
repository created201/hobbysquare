import { getRoutes } from "@/helpers"
import dynamic from "next/dynamic"
import { useRouter } from "next/router"
import { useState } from "react"
const LogoLink = dynamic(() => import("@/(general)/links/LogoLink"))
const MobileNav = dynamic(() => import("@/(general)/navs/MobileNav"))
const MobileNavToggle = dynamic(() =>
    import("@/(general)/navs/MobileNavToggle")
)
const DesktopNav = dynamic(() => import("@/(general)/navs/DesktopNav"))

const HeaderLayout = () => {
    const router = useRouter()

    const { keys, routes } = getRoutes()

    const [showMobileNav, setShowMobileNav] = useState(false)

    function getCurrentRoute() {
        return Object.values(routes).find(
            (route) => route.href === router.pathname
        )
    }

    function onToggleNav() {
        setShowMobileNav(!showMobileNav)
    }

    return (
        <header className="w-full fixed top-0 left-0 z-40 bg-theme-white/90 backdrop-blur-sm text-theme-dark">
            <section className="relative w-full mx-auto px-4 py-4 2xl:px-8 flex justify-between items-center">
                <LogoLink />
                <div className="flex">
                    <MobileNav onClick={onToggleNav} show={showMobileNav} />
                    <MobileNavToggle show={showMobileNav} />
                    <DesktopNav
                        routeNames={keys}
                        routes={routes}
                        currentRoute={getCurrentRoute()}
                    />
                </div>
            </section>
        </header>
    )
}

export default HeaderLayout
