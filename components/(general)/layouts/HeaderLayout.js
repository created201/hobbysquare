import Image from "next/image"

const HeaderLayout = () => {
    return (
        <header>
            <nav className="flex justify-between p-2">
                <Image src="/logo.png" width={100} height={100} alt="Logo" />
                <div className="flex gap-x-1">
                    <button>DashBoord</button>
                    <button>Sign In</button>
                </div>
            </nav>
        </header>
    )
}

export default HeaderLayout
