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
        <header className="w-full fixed top-0 left-0 z-40 bg-theme-white/95 text-theme-dark">
            <section className="relative w-full mx-auto px-4 py-4 2xl:px-8 flex justify-between items-center">
                <LogoLink />
                <div className="flex">
                    <MobileNav onClick={handleNavButtonClick} show={navShow} />
                    <DesktopNav />
                </div>

                {/* Mobile Version Navigation */}
                <div
                    className={classnames(
                        "xl:hidden absolute left-0 z-40 transform bg-white transition-all duration-[0.75s] ease-in-out  h-screen w-full flex flex-col justify-center items-center",
                        navShow
                            ? "-top-0 -translate-y-0"
                            : "-top-full -translate-y-full"
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
