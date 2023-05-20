import dynamic from "next/dynamic"


const PrimaryLayout = dynamic(() => import("@/(general)/layouts/PrimaryLayout"))

const PostDetailPage = (props) => {
    return (
        //PostDetail page
        <div className="h-screen flex flex-col justify-center items-center">
        <section className="px-8 2xl:px-0 max-w-cutoff mx-auto w-full">
            idpage {props.id}
        </section>
    </div>
    )
}
export const getServerSideProps = async (context) => {

    const query = context.query

    const id = query.id
    return {props: {id}}
}

PostDetailPage.getLayout = (page) => {
    return <PrimaryLayout>{page}</PrimaryLayout>
}

export default PostDetailPage