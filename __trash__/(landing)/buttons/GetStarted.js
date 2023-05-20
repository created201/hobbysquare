const { useRouter } = require("next/router")

const GetStarted = () => {
    const router = useRouter()

    function onGetStarted() {
        router.push("/login")
    }

    return (
        <button
            onClick={onGetStarted}
            className="w-full sm:max-w-sm mx-auto block px-6 py-3 rounded-md border text-lg transition-all font-medium bg-slate-500/5 border-slate-500/25 text-slate-500 lg:hover:text-slate-50 lg:hover:bg-slate-500 lg:hover:border-slate-500"
        >
            Get Started Now
        </button>
    )
}

export default GetStarted
