import dynamic from "next/dynamic"

const PrimaryLayout = dynamic(() => import("@/(general)/layouts/PrimaryLayout"))
const GetStartedButton = dynamic(() =>
    import("@/(landing)/buttons/GetStartedButton")
)
const MainText = dynamic(() => import("@/(landing)/texts/MainText"))

const IndexPage = () => {
    return (
        // Index Page Content
        <div className="h-screen flex flex-col justify-center items-center">
            <section className="px-8 2xl:px-0 max-w-cutoff mx-auto w-full flex flex-col items-center">
                <article className="flex flex-col items-center gap-y-6">
                    <MainText />
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
