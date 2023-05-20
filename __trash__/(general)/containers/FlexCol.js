import { classnames } from "helpers/classnames"

const FlexCol = ({ children, align = "center", gap = "gap-4" }) => {
    return (
        <article
            className={classnames(
                /** default className */
                "flex flex-col w-full",

                /** variable align className */
                align === "center" && "items-center",
                align === "start" && "items-start",
                align === "end" && "items-end",

                /** variable gap className */
                gap
            )}
        >
            {children}
        </article>
    )
}

export default FlexCol
