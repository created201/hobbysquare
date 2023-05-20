import Meta from "./Meta"

const Layout = (_props) => {
    return (
        <>
            <Meta />
            {_props.children}
        </>
    )
}
export default Layout
