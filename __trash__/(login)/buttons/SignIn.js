import { classnames } from "@/helpers"
import { FiArrowRight } from "react-icons/fi"

const SignIn = ({ provider = "google", onSignIn = null }) => {
    return (
        <button
            onClick={onSignIn}
            className={classnames(
                "w-full capitalize border rounded-md px-6 py-4 flex justify-between items-center gap-x-2 text-lg transition-all lg:hover:bg-slate-900 text-slate-800 lg:hover:text-white"
            )}
        >
            <span className="flex justify-start items-center gap-x-4 col-span-9">
                <small className="font-light text-sm px-3 py-1.5 rounded-full bg-slate-700 text-slate-50">
                    Start with
                </small>
                <span>{provider}</span>
            </span>
            <span className="col-span-3">
                <FiArrowRight size={22} />
            </span>
        </button>
    )
}

export default SignIn
