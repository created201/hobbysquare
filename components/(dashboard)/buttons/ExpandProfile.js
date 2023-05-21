import { classnames } from "@/helpers"
import { FiArrowLeft, FiArrowRight } from "react-icons/fi"
const ExpandProfile = ({ onExpand, expand }) => {
    return (
        <button
            onClick={onExpand}
            className={classnames(
                "border rounded-full p-2 text-lg block transition-all hover:text-theme-white",
                expand
                    ? "bg-red-500/5 border-red-500/25 text-red-500 hover:bg-red-500"
                    : "bg-blue-500/5 border-blue-500/25 text-blue-500 hover:bg-blue-500"
            )}
        >
            {expand ? <FiArrowRight /> : <FiArrowLeft />}
        </button>
    )
}

export default ExpandProfile
