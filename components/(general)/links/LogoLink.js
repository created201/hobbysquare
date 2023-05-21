const { default: Link } = require("next/link")

const LogoLink = () => {
    return (
        <h1>
            <Link href={"/"} className="flex items-center gap-x-2">
                <span className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-amber-500 ">
                    Hobby
                </span>
                <ul className="block relative">
                    <span className="absolute top-0 left-0 z-20 w-[20px] h-[20px] p-0.5 bg-gradient-to-r from-orange-500 via-amber-500 to-pink-500 flex justify-center items-center animate-spin">
                        <span className="w-full h-full bg-theme-white" />
                    </span>
                    <span className="absolute top-1 left-1 z-10 w-[17.5px] h-[17.5px] p-0.5 bg-gradient-to-r from-orange-500 via-amber-500 to-pink-500 flex justify-center items-center animate-spin">
                        <span className="w-full h-full bg-theme-white" />
                    </span>
                    <span className="absolute top-2 left-2 z-10 w-[15px] h-[15px] p-0.5 bg-gradient-to-r from-orange-500 via-amber-500 to-pink-500 flex justify-center items-center animate-spin">
                        <span className="w-full h-full bg-theme-white" />
                    </span>
                </ul>
            </Link>
        </h1>
    )
}

export default LogoLink
