import { alertButtonNotAvailable } from "@/helpers"
import { AiOutlineFundView } from "react-icons/ai"

const NavButton = ({ user }) => {
    return (
        <>
            <button
                onClick={alertButtonNotAvailable}
                className="transition-smooth font-medium flex items-center gap-x-2 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-amber-500"
            >
                {user ? (
                    <>
                        <span>DashBoard</span>
                        <AiOutlineFundView
                            size={26}
                            className="text-amber-500"
                        />
                    </>
                ) : (
                    "Sign In"
                )}
            </button>
        </>
    )
}

export default NavButton
