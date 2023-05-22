import { classnames } from "@/helpers"

const Loading = ({ show, message, change }) => {
    return (
        show && (
            <article className="flex flex-col gap-y-4 lg:gap-y-6 items-center">
                <ul
                    className={classnames(
                        "animate-bounce flex justify-center items-center relative transition-all ease-in-out",
                        change ? "gap-x-3 lg:gap-x-4" : "gap-x-1.5 lg:gap-x-2.5"
                    )}
                >
                    <span
                        className={classnames(
                            "w-[12.5px] lg:w-[20px] h-[12.5px] lg:h-[20px] block relative transition-all duration-[0.15s] ease-in-out bg-orange-300 rounded-full transform",
                            change
                                ? "translate-x-3 lg:translate-x-6"
                                : "translate-x-0"
                        )}
                    />
                    <span
                        className={classnames(
                            "w-[12.5px] lg:w-[20px] h-[12.5px] lg:h-[20px] block relative transition-all duration-[0.15s] ease-in-out bg-orange-500 rounded-full transform",
                            change
                                ? "-translate-y-3 lg:-translate-y-6"
                                : "-translate-y-0"
                        )}
                    />
                    <span
                        className={classnames(
                            "w-[12.5px] lg:w-[20px] h-[12.5px] lg:h-[20px] block relative transition-all duration-[0.15s] ease-in-out bg-orange-700 rounded-full transform",
                            change
                                ? "-translate-x-3 lg:-translate-x-6"
                                : "-translate-x-0"
                        )}
                    />
                </ul>
                <p
                    className={classnames(
                        "font-medium text-center transition-all transform duration-[0.25s] ease-in-out text-base lg:text-lg 2xl:text-xl",
                        change
                            ? "scale-110 text-theme-gray"
                            : "text-theme-gray/60 animate-pulse"
                    )}
                >
                    {message}
                </p>
            </article>
        )
    )
}

export default Loading
