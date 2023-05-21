import { BsInstagram, BsGithub, BsTwitter } from "react-icons/bs"

const FooterLayout = () => {
    return (
        <footer className="w-full flex p-4 xl:p-10 justify-center bg-theme-gray text-white">
            <section className="flex flex-col justify-between xl:grid xl:grid-cols-3 w-full xl:w-7/12">
                {/* About */}
                <div className="w-full p-4">
                    <h4 className="text-lg font-bold">About</h4>
                    <div className="text-theme-white/75 mt-3 text-sm">
                        <p>News</p>
                        <p>Purpose</p>
                        <p>Investment</p>
                    </div>
                </div>

                <hr className="xl:hidden w-11/12 my-1 mx-auto text-theme-white/75" />

                {/* Contact */}
                <div className="w-full p-4">
                    <h4 className="text-lg font-bold">Contacts</h4>
                    <div className="text-theme-white/75 mt-3 text-sm">
                        <p>Jin Lee: 530-111-222</p>
                        <p>Jaehong Park: 530-111-222</p>
                        <p>Haneul Choi: 530-111-222</p>
                    </div>
                </div>

                <hr className="xl:hidden w-11/12 my-1 mx-auto text-gray-500" />

                {/* Social Media */}
                <div className="w-full p-4 flex flex-col gap-y-5 ">
                    <h4 className="text-lg font-bold">Our Socials</h4>
                    <div className="flex items-center justify-start gap-x-4 text-2xl text-theme-white">
                        <a
                            className="transition-all ease-in-out trasnform lg:hover:scale-125"
                            href="#"
                        >
                            <BsInstagram className="rounded-full bg-gray" />
                        </a>
                        <a
                            className="transition-all ease-in-out trasnform lg:hover:scale-125"
                            href="#"
                        >
                            <BsGithub className="rounded-full bg-gray" />
                        </a>
                        <a
                            className="transition-all ease-in-out trasnform lg:hover:scale-125"
                            href="#"
                        >
                            <BsTwitter className="rounded-full bg-gray" />
                        </a>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default FooterLayout
