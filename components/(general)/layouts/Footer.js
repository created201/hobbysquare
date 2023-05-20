import { classnames } from "@/helpers"

const Footer = ({ show = true }) => {
    return (
        show && (
            <footer
                className={classnames(
                    "w-full",

                    show && "block",
                    !show && "hidden"
                )}
            >
                <section className="flex justify-between items-center gap-x-4 lg:gap-x-6 max-w-cutoff mx-auto px-8 2xl:px-0 py-4">
                    <p>This is Footer</p>
                </section>
            </footer>
        )
    )
}
export default Footer
