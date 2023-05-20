import dynamic from "next/dynamic"

const LogoLink = dynamic(() => import("@/(general)/links/LogoLink"))
const MobileNav = dynamic(() => import("@/(general)/navs/MobileNav"))
const DesktopNav = dynamic(() => import("@/(general)/navs/DesktopNav"))

const HeaderLayout = () => {
    return (
        <header className="w-full fixed top-0 left-0 z-40 bg-theme-white/95 text-theme-dark">
            <section className="w-full max-w-cutoff mx-auto px-4 py-4 2xl:px-0 flex justify-between items-center">
                <LogoLink />
                <MobileNav />
                <DesktopNav />
                {/* 
                                <nav className="flex justify-between p-2">
                    <Image
                        src="/logo.png"
                        width={100}
                        height={100}
                        alt="Logo"
                    />
                    <div className="flex gap-x-1">
                        <button>DashBoord</button>
                        <button>Sign In</button>
                    </div>
                </nav>
                 */}
            </section>
        </header>
    )
}

export default HeaderLayout
