const { default: Link } = require("next/link")

const LogoLink = () => {
    return (
        <h1>
            <Link href={"/"}>HobbySquare</Link>
        </h1>
    )
}

export default LogoLink
