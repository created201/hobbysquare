import GetStartedButton from "@/(landing)/buttons/GetStartedButton"
import dynamic from "next/dynamic"
const PrimaryLayout = dynamic(() => import("@/(general)/layouts/PrimaryLayout"))

const IndexPage = () => {
    return (
        // Index Page Content
        <div className="h-screen flex flex-col justify-center items-center">
            <section className="px-8 2xl:px-0 max-w-cutoff mx-auto w-full flex flex-col items-center">
                <article className="flex flex-col items-center gap-y-4">
                    <h3 className="text-center font-bold p-4 text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[7rem]">
                        Never Alone
                    </h3>
                    <GetStartedButton user="jin lee" />
                </article>
            </section>
        </div>
    )
}

IndexPage.getLayout = (page) => {
    return <PrimaryLayout>{page}</PrimaryLayout>
}

export default IndexPage
