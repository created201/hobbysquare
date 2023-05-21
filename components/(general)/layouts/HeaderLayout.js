import dynamic from "next/dynamic"
import Link from "next/link"
import { useState } from "react"
import { classnames } from "@/helpers"

const LogoLink = dynamic(() => import("@/(general)/links/LogoLink"))
const MobileNav = dynamic(() => import("@/(general)/navs/MobileNav"))
const DesktopNav = dynamic(() => import("@/(general)/navs/DesktopNav"))

const HeaderLayout = () => {
    const [navShow, setNavShow] = useState(false)

    function handleNavButtonClick() {
        setNavShow(!navShow)
    }

    return (
        <header className="w-full fixed top-0 left-0 z-40 bg-theme-white/90 backdrop-blur-sm text-theme-dark">
            <section className="relative w-full mx-auto px-4 py-4 2xl:px-8 flex justify-between items-center">
                <LogoLink />
                <div className="flex">
                    <MobileNav onClick={handleNavButtonClick} show={navShow} />
                    <DesktopNav />
                </div>

                {/* Mobile Version Navigation */}
                <div
                    className={classnames(
                        "xl:hidden absolute top-0 z-40 transform bg-white transition-smooth h-screen w-[85%] flex flex-col justify-center items-center",
                        navShow
                            ? "-right-0 -right-y-0 shadow-xl"
                            : "-right-full -right-y-full"
                    )}
                >
                    <Link href="/">Home</Link>
                    <Link href="/">Login</Link>
                    <Link href="/">Create Post</Link>
                    <Link href="/">My Profile</Link>
                </div>
            </section>
        </header>
    )
}

export default HeaderLayout
