import { BsInstagram, BsGithub, BsTwitter } from "react-icons/bs"

const FooterLayout = () => {
    return (
        <footer className="w-full relative z-10 bg-theme-gray text-theme-white border-t border-theme-gray/5">
            <section className="flex flex-col gap-y-8 lg:gap-y-12 px-8 2xl:px-0 py-8 lg:py-24 lg:items-center w-full max-w-cutoff mx-auto">
                <div className="w-full flex flex-col lg:items-center gap-y-6 pb-8 lg:pb-0 border-b border-theme-dark/25 lg:border-none">
                    <div className="flex items-center gap-x-4 relative">
                        <h4 className="text-xl lg:text-2xl font-medium">
                            <string className="text-3xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-amber-400">
                                HobbySquare
                            </string>
                        </h4>
                        <ul className="">
                            <span className="relative top-2 w-[25px] h-[25px] p-0.5 bg-gradient-to-r from-orange-500 via-amber-500 to-pink-500 flex justify-center items-center transform rotate-45">
                                <span className="w-full h-full bg-theme-gray" />
                            </span>

                            <span className="relative w-[15px] h-[15px] p-0.5 bg-gradient-to-r from-orange-500 via-amber-500 to-pink-500 flex justify-center items-center transform rotate-45">
                                <span className="w-full h-full bg-theme-gray" />
                            </span>
                        </ul>
                    </div>
                    <div className="flex flex-col lg:items-center gap-y-2 text-theme-white/75 text-base lg:text-lg">
                        <p>News</p>
                        <p>Purpose</p>
                        <p>Investment</p>
                    </div>
                </div>
                <div className="w-full flex flex-col lg:items-center gap-y-6">
                    <div className="flex flex-col gap-y-1 items-start">
                        <h4 className="text-xl lg:text-2xl font-medium">
                            <span>Resources</span>
                        </h4>
                    </div>
                    <div className="flex flex-col lg:items-center gap-y-2 text-theme-white/75 text-base lg:text-lg">
                        <p>Jin Lee: 530-111-222</p>
                        <p>Jaehong Park: 530-111-222</p>
                        <p>Haneul Choi: 530-111-222</p>
                    </div>
                </div>
                <div className="w-full flex flex-col lg:items-center gap-y-6 justify-center lg:justify-start">
                    <div className="flex flex-col gap-y-1">
                        <h4 className="w-max text-xl lg:text-2xl font-medium">
                            <span>Connect With Us</span>
                        </h4>
                    </div>
                    <div className="flex gap-x-4 text-theme-white/75 text-base lg:text-lg ">
                        <a
                            className="transition-all ease-in-out trasnform lg:hover:scale-125"
                            href="#"
                        >
                            <BsInstagram size={22} />
                        </a>
                        <a
                            className="transition-all ease-in-out trasnform lg:hover:scale-125"
                            href="#"
                        >
                            <BsGithub size={22} />
                        </a>
                        <a
                            className="transition-all ease-in-out trasnform lg:hover:scale-125"
                            href="#"
                        >
                            <BsTwitter size={22} />
                        </a>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default FooterLayout
