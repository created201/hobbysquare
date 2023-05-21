import dynamic from "next/dynamic"

import { BsFacebook, BsGoogle, BsGithub } from "react-icons/bs"

const PrimaryLayout = dynamic(() => import("@/(general)/layouts/PrimaryLayout"))

const LoginPage = () => {
    function handleSubmit(event) {
        event.preventDefault()
        window.alert("Login Form Submitted")
    }

    return (
        // LoginPage Content
        <div className="h-screen flex flex-col justify-center items-center w-full bg-gradient-to-r from-orange-500 via-pink-500 to-amber-500">
            <section className="px-8 2xl:px-0 max-w-cutoff mx-auto w-full">
                {/*box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */}
                <form
                    className="flex flex-col border-solid border-2 rounded-md h-full max-h-md w-full max-w-md mx-auto px-8 py-10 bg-theme-white gap-y-6 shadow-[0_2px_8px_0_rgba(99,99,99,0.2)]"
                    onSubmit={handleSubmit}
                >
                    <h4 className="font-bold text-2xl mb-2">Login</h4>
                    <div>
                        <input
                            type="text"
                            placeholder="Enter Your ID"
                            className="border-none focus:outline-0 w-full"
                        />
                        <div className="h-[1.5px] w-full bg-gradient-to-r from-orange-500 via-pink-500 to-amber-500"></div>
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Enter Your Password"
                            className="border-none focus:outline-0 w-full"
                        />
                        <div className="h-[1.5px] w-full bg-gradient-to-r from-orange-500 via-pink-500 to-amber-500"></div>
                    </div>
                    <button className="rounded-full px-6 py-2.5 font-medium text-lg text-[#ffffff] bg-gradient-to-r from-orange-500 via-pink-500 to-amber-500 ring-2 ring-transparent transition-all duration-[0.65s] ease-in-out lg:hover:ring-pink-500 lg:hover:from-transparent lg:hover:via-transparent lg:hover:to-transparent lg:hover:text-pink-500">
                        Login
                    </button>

                    <p className="text-sm text-center text-theme-gray">
                        Or Connect With Social Media
                    </p>

                    <div className="flex flex-col justify-center gap-y-2">
                        <button className="flex justify-center items-center gap-x-3 rounded-full px-6 py-1 font-medium text-lg text-[#ffffff] bg-[#1DA1F2] ring-2 ring-transparent transition-all duration-[0.65s] ease-in-out lg:hover:ring-pink-500 lg:hover:from-transparent lg:hover:via-transparent lg:hover:to-transparent lg:hover:text-pink-500">
                            <BsGoogle className="w-5 h-5" />
                            Sign in With Google
                        </button>

                        <button className="flex justify-center items-center gap-x-3 rounded-full px-6 py-1 font-medium text-lg text-[#ffffff] bg-[#333] to-amber-500 ring-2 ring-transparent transition-all duration-[0.65s] ease-in-out lg:hover:ring-pink-500 lg:hover:from-transparent lg:hover:via-transparent lg:hover:to-transparent lg:hover:text-pink-500">
                            <BsGithub className="w-5 h-5" />
                            Sign in With Github
                        </button>

                        <button className="flex justify-center items-center gap-x-3 rounded-full px-6 py-1 font-medium text-lg text-[#ffffff] bg-[#4267B2] ring-2 ring-transparent transition-all duration-[0.65s] ease-in-out lg:hover:ring-pink-500 lg:hover:from-transparent lg:hover:via-transparent lg:hover:to-transparent lg:hover:text-pink-500">
                            <BsFacebook className="w-5 h-5" />
                            Sign in With Twitter
                        </button>
                    </div>
                </form>
            </section>
        </div>
    )
}

LoginPage.getLayout = (page) => {
    return <PrimaryLayout>{page}</PrimaryLayout>
}

export default LoginPage
