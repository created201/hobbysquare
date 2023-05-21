import { alertButtonNotAvailable } from "@/helpers"

const NavButton = ({ user }) => {
    return (
        <>
            <button
                onClick={alertButtonNotAvailable}
                className="shadow-[0_1px_8px_0_rgba(99,99,99,0.2)] px-6 py-2.5 rounded-full bg-theme-gray text-theme-white  border border-transparent lg:hover:border-theme-gray lg:hover:bg-theme-white lg:hover:text-theme-gray font-medium"
            >
                {user ? "My Dashboard" : "Sign In"}
            </button>
        </>
    )
}

export default NavButton
