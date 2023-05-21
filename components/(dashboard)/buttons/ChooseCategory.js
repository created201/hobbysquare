import { classnames } from "@/helpers"
import { DiNetbeans } from "react-icons/di"
const ChooseCategory = ({ category, onSelect, isSelected }) => {
    return (
        <button
            onClick={onSelect}
            className={classnames(
                "lg:rounded-md lg:border lg:px-8 lg:py-3 capitalize font-medium transition-all lg:hover:opacity-60 flex flex-col gap-y-1 lg:justify-between items-center lg:flex-row lg:gap-y-0 lg:gap-x-2",
                isSelected
                    ? "lg:border-theme-dark lg:text-theme-white lg:bg-theme-dark"
                    : "lg:border-theme-dark/25 lg:text-theme-dark lg:bg-theme-dark/5"
            )}
        >
            <DiNetbeans size={22} />
            {category}
        </button>
    )
}

export default ChooseCategory
