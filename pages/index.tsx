import { getSession } from "next-auth/react"
import dynamic from "next/dynamic"
import Image from "next/image"
import LandingBackground from "public/hobbysquare_landing.png"

const PrimaryLayout = dynamic(() => import("@/(general)/layouts/PrimaryLayout"))
const GetStartedButton = dynamic(
    () => import("@/(landing)/buttons/GetStartedButton")
)
const MainText = dynamic(() => import("@/(landing)/texts/MainText"))
const HeaderLayout = dynamic(() => import("@/(general)/layouts/HeaderLayout"))

const IndexPage = ({ user }) => {
    return (
        <>
            <HeaderLayout user={user ? { data: user } : null} />
            <div className="fixed top-0 z-0 left-0 overflow-hidden h-screen flex flex-col justify-end">
                <Image
                    src={LandingBackground}
                    className="w-max block h-max lg:w-screen lg:h-screen animate-pulse"
                    alt="Hobbysquare Landing Background"
                />
            </div>
            <div className="relative z-10 bg-theme-white/5 h-screen flex flex-col justify-center items-center">
                <section className="px-8 2xl:px-0 max-w-cutoff mx-auto w-full flex flex-col items-center">
                    <article className="flex flex-col items-center gap-y-6">
                        <MainText />
                        <GetStartedButton />
                    </article>
                </section>
            </div>
        </>
    )
}

IndexPage.getLayout = (page) => {
    return <PrimaryLayout>{page}</PrimaryLayout>
}

export const getServerSideProps = async (context) => {
    const session = await getSession(context)

    return {
        props: { user: session ? session.user : null },
    }
}

export default IndexPage
