import { classnames } from "@/helpers"
import Link from "next/link"
import { FiArrowRight } from "react-icons/fi"

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
            <section className="p-8 w-full flex flex-col gap-y-4">
                <Link
                    href="/"
                    className="w-full flex items-center justify-between gap-x-4 font0medium"
                >
                    <span>Home</span>
                    <FiArrowRight />
                </Link>
                <Link
                    href="/login"
                    className="w-full flex items-center justify-between gap-x-4 font0medium"
                >
                    <span>Login</span>
                    <FiArrowRight />
                </Link>
                <Link
                    href="/dashboard"
                    className="w-full flex items-center justify-between gap-x-4 font0medium"
                >
                    <span>Dashboard</span>
                    <FiArrowRight />
                </Link>
                <Link
                    href="/posts/create"
                    className="w-full flex items-center justify-between gap-x-4 font0medium"
                >
                    <span>Create A Post</span>
                    <FiArrowRight />
                </Link>
            </section>
        </div>
    )
}

export default MobileNavToggle
