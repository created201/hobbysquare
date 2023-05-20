import { classnames } from "@/helpers"

const Header = ({ show = true, variant = "static" | "fixed" }) => {
    return (
        show && (
            <header
                className={classnames(
                    "w-full",
                    variant === "static" && "",
                    variant === "fixed" && "z-40 fixed top-0 left-0",

                    show && "block",
                    !show && "hidden"
                )}
            >
                <section className="flex justify-between items-center gap-x-4 lg:gap-x-6 max-w-cutoff mx-auto px-8 2xl:px-0 py-4">
                    <p>This is Header</p>
                </section>
            </header>
        )
    )
}
export default Header
