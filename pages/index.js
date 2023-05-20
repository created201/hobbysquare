import dynamic from "next/dynamic"
const PrimaryLayout = dynamic(() => import("@/(general)/layouts/PrimaryLayout"))

const IndexPage = () => {
    return (
        // Index Page Content
        <></>
    )
}

IndexPage.getLayout = (page) => {
    return <PrimaryLayout>{page}</PrimaryLayout>
}

export default IndexPage
