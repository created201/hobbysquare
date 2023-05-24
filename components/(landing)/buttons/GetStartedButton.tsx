import { useRouter } from "next/router"

const GetStartedButton = () => {
    const router = useRouter()

    function onGetStarted() {
        router.push("/login")
    }

    return (
        <>
            <button
                onClick={
                    // user ? alertButtonNotAvailable : alertButtonNotAvailable
                    onGetStarted
                }
                className="shadow-xl px-8 py-3 lg:px-10 lg:py-4 w-[75%] max-w-[375px] rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-amber-500 ring-2 ring-transparent lg:hover:ring-pink-500 lg:hover:from-transparent lg:hover:via-transparent lg:hover:to-transparent lg:hover:text-pink-500 text-theme-white font-medium text-xl lg:text-2xl transition-smooth"
            >
                Get Started
            </button>
        </>
    )
}

export default GetStartedButton
