import { alertButtonNotAvailable } from "@/helpers"

const GetStartedButton = ({ user }) => {
    return (
        <>
            <button
                onClick={
                    user ? alertButtonNotAvailable : alertButtonNotAvailable
                }
                className="shadow-[0_1px_8px_0_rgba(99,99,99,0.2)] px-4 py-1.5 rounded-full text-black hover:bg-gray-100 w-40"
            >
                Get Started
            </button>
        </>
    )
}

export default GetStartedButton
