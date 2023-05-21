import { alertButtonNotAvailable } from "@/helpers"

const GetStartedButton = ({ user }) => {
    return (
        <>
            <button
                onClick={
                    user ? alertButtonNotAvailable : alertButtonNotAvailable
                }
                className="shadow-[0_1px_8px_0_rgba(99,99,99,0.2)] px-8 py-3 lg:px-10 lg:py-4 w-[75%] max-w-[375px] rounded-full bg-theme-gray text-theme-white  border border-transparent lg:hover:border-theme-gray lg:hover:bg-theme-white lg:hover:text-theme-gray font-medium text-xl lg:text-2xl"
            >
                Get Started
            </button>
        </>
    )
}

export default GetStartedButton
