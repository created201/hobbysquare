import { classnames } from "@/helpers"
import Link from "next/link"

const MobileNavToggle = ({ show }) => {
    return (
        <div
            className={classnames(
                "xl:hidden absolute top-0 z-40 transform bg-white transition-smooth h-screen w-[85%] flex flex-col justify-center items-center",
                show
                    ? "-right-0 -right-y-0 shadow-xl"
                    : "-right-full -right-y-full"
            )}
        >
            <Link href="/">Home</Link>
            <Link href="/">Login</Link>
            <Link href="/">Create Post</Link>
            <Link href="/">My Profile</Link>
        </div>
    )
}

export default MobileNavToggle
