import dynamic from "next/dynamic"
import { alertButtonNotAvailable } from "@/helpers"
import { BsGoogle, BsGithub, BsTwitter } from "react-icons/bs"
import { getSession, signIn } from "next-auth/react"
import { useState } from "react"

const PrimaryLayout = dynamic(() => import("@/(general)/layouts/PrimaryLayout"))
const Loading = dynamic(() => import("@/(general)/customs/Loading"))
const SquareSpinner = dynamic(() => import("@/(general)/customs/SquareSpinner"))

const LoginPage = () => {
    const [showLoading, setShowLoading] = useState(0)

    async function onLogin(provider) {
        setShowLoading(1)

        setTimeout(async () => {
            setShowLoading(2)
            await signIn(provider)
        }, 2500)
    }

    return (
        <>
            <div className="h-screen flex flex-col justify-center items-center w-full bg-theme-white">
                <section className="px-8 2xl:px-0 max-w-cutoff mx-auto w-full">
                    <Loading
                        show={showLoading > 0}
                        message={
                            showLoading === 1
                                ? "Logging you in now."
                                : "Sending you to dashbaord."
                        }
                        change={showLoading === 2}
                    />
                    {showLoading === 0 && (
                        <div className="flex flex-col h-full max-h-md w-full max-w-md mx-auto bg-theme-white gap-y-6">
                            <div className="flex flex-col items-center gap-y-2">
                                <SquareSpinner />
                                <h4 className="font-medium text-center text-lg lg:text-2xl">
                                    Find Perfect Hobby Mate Now
                                </h4>
                            </div>
                            {/* <div>
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
                            <button
                                onClick={alertButtonNotAvailable}
                                className="rounded-full px-8 py-3 font-medium text-lg text-[#ffffff] bg-gradient-to-r from-orange-500 via-pink-500 to-amber-500 ring-2 ring-transparent transition-all duration-[0.65s] ease-in-out lg:hover:ring-pink-500 lg:hover:from-transparent lg:hover:via-transparent lg:hover:to-transparent lg:hover:text-pink-500"
                            >
                                Login
                            </button> */}

                            <p className="mb-2 text-sm text-center text-theme-gray font-light italic">
                                Currently Available Login Options
                            </p>

                            <div className="flex flex-col justify-center gap-y-4">
                                <button
                                    onClick={() => {
                                        onLogin("google")
                                    }}
                                    className="flex justify-center items-center gap-x-3 rounded-full px-8 py-3 lg:py-4 font-medium text-base text-theme-white bg-blue-500  transition-smooth lg:hover:opacity-60 lg:hover:text-theme-white"
                                >
                                    <BsGoogle size={22} />
                                    Sign in With Google
                                </button>

                                <button
                                    onClick={alertButtonNotAvailable}
                                    className="flex justify-center items-center gap-x-3 rounded-full px-8 py-3 lg:py-4 font-medium text-base text-theme-white bg-[#333] to-amber-500  transition-smooth lg:hover:opacity-60 lg:hover:text-theme-white"
                                >
                                    <BsGithub size={22} />
                                    Sign in With Github
                                </button>

                                <button
                                    onClick={alertButtonNotAvailable}
                                    className="flex justify-center items-center gap-x-3 rounded-full px-8 py-3 lg:py-4 font-medium text-base text-theme-white bg-sky-500  transition-smooth lg:hover:opacity-60 lg:hover:text-theme-white"
                                >
                                    <BsTwitter size={22} />
                                    Sign in With Twitter
                                </button>
                            </div>
                        </div>
                    )}
                </section>
            </div>
        </>
    )
}

LoginPage.getLayout = (page) => {
    return <PrimaryLayout>{page}</PrimaryLayout>
}

export const getServerSideProps = async (context) => {
    const session = await getSession(context)

    if (session) {
        return {
            redirect: {
                destination: "/dashboard",
                permenant: false,
            },
        }
    }

    return {
        props: {},
    }
}

export default LoginPage
