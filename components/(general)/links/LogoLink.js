import Link from "next/link"

const LogoLink = () => {
    return (
        <h1>
            <Link href={"/"} className="flex items-center gap-x-2 relative">
                <span className="relative font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-amber-500 ">
                    Hobby
                </span>
                <ul className="z-0 absolute -right-7">
                    <span className="relative top-1.5 w-[18px] h-[18px] p-0.5 bg-gradient-to-r from-orange-500 via-amber-500 to-pink-500 flex justify-center items-center transform rotate-45">
                        <span className="w-full h-full bg-theme-white" />
                    </span>

                    <span className="relative w-[11.15px] h-[11.15px] p-0.5 bg-gradient-to-r from-orange-500 via-amber-500 to-pink-500 flex justify-center items-center transform rotate-45">
                        <span className="w-full h-full bg-theme-white" />
                    </span>
                </ul>
            </Link>
        </h1>
    )
}

export default LogoLink
