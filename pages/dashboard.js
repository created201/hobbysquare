import dynamic from "next/dynamic"
const PrimaryLayout = dynamic(() => import("@/(general)/layouts/PrimaryLayout"))

const DashboardPage = () => {
    return (
        // DashboardPage
        <div className="h-screen flex flex-col justify-center items-center">
            <section className="px-8 2xl:px-0 max-w-cutoff mx-auto w-full">
                DashboardPage
            </section>
        </div>
    )
}

DashboardPage.getLayout = (page) => {
    return <PrimaryLayout>{page}</PrimaryLayout>
}

export default DashboardPage
