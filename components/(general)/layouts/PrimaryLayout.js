import FooterLayout from "./FooterLayout"
import HeaderLayout from "./HeaderLayout"

const PrimaryLayout = ({ children }) => {
    return (
        <>
            {/* Meta Tag */}
            <HeaderLayout />
            {children}
            <FooterLayout />
        </>
    )
}

export default PrimaryLayout
