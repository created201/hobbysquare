import { AiOutlineMail } from "react-icons/ai"

const Modal = ({ show, handleClick }) => {
    return (
        <>
            {show && (
                <section className="flex flex-col justify-center fixed left-1/2 transform -translate-x-1/2 -translate-y-1/3 lg:-translate-y-1/4 z-40 py-10 border-solid border-2 bg-theme-white rounded-md text-center w-10/12 lg:w-7/12 lg:h-1/2">
                    <div className="flex flex-col items-center">
                        <AiOutlineMail className="w-[8rem] h-[8rem]" />
                        <p className="font-bold text-3xl p-2 mb-5">Confirm</p>
                        <p className="p-2">
                            Are you Sure You Want to Send Email?
                        </p>
                    </div>
                    <div className="flex justify-center gap-x-8 max-x-[8rem] p-2 mt-2">
                        <button className="rounded-full px-6 py-2.5 font-medium text-lg text-[#ffffff] bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 ring-2 ring-transparent transition-all duration-[0.65s] ease-in-out lg:hover:ring-blue-500 lg:hover:from-transparent lg:hover:via-transparent lg:hover:to-transparent lg:hover:text-blue-500">
                            Send Email
                        </button>
                        <button
                            className="rounded-full px-6 py-2.5 font-medium text-lg text-[#ffffff] bg-gradient-to-r from-orange-500 via-pink-500 to-amber-500 ring-2 ring-transparent transition-all duration-[0.65s] ease-in-out lg:hover:ring-pink-500 lg:hover:from-transparent lg:hover:via-transparent lg:hover:to-transparent lg:hover:text-pink-500"
                            onClick={handleClick}
                        >
                            No, Thanks
                        </button>
                    </div>
                </section>
            )}
        </>
    )
}

export default Modal
