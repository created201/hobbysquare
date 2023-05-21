import { AiOutlineMail } from "react-icons/ai"

const Modal = ({ show, onClose, onSendConfirm }) => {
    return (
        <>
            {show && (
                <>
                    <aside className="h-screen fixed w-full left-0 top-0 z-40 bg-theme-dark/10 backdrop-blur-md" />
                    <section className="flex flex-col justify-center fixed left-1/2 top-1/2 -translate-y-1/2 transform -translate-x-1/2  z-50 p-8 border-solid border bg-theme-white rounded-md shadow-xl shadow-theme-dark/25 text-center w-[85%] max-w-md mx-auto">
                        <div className="flex flex-col items-center">
                            <AiOutlineMail className="w-[8rem] h-[8rem]" />
                            <p className="font-bold text-3xl px-2 mb-1">
                                Confirm
                            </p>
                            <p className="font-medium mb-2">
                                Are you sure you want to send email?
                            </p>
                        </div>
                        <div className="flex flex-col gap-y-4 justify-center gap-x-8 max-x-[8rem] mt-4">
                            <button
                                onClick={onSendConfirm}
                                className="rounded-full px-6 py-2.5 font-medium text-lg text-[#ffffff] bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 ring-2 ring-transparent transition-all duration-[0.65s] ease-in-out lg:hover:ring-blue-500 lg:hover:from-transparent lg:hover:via-transparent lg:hover:to-transparent lg:hover:text-blue-500"
                            >
                                Send Email
                            </button>
                            <button
                                onClick={onClose}
                                className="rounded-full px-6 py-2.5 font-medium text-lg text-[#ffffff] bg-gradient-to-r from-orange-500 via-pink-500 to-amber-500 ring-2 ring-transparent transition-all duration-[0.65s] ease-in-out lg:hover:ring-pink-500 lg:hover:from-transparent lg:hover:via-transparent lg:hover:to-transparent lg:hover:text-pink-500"
                            >
                                No, Thanks
                            </button>
                        </div>
                    </section>
                </>
            )}
        </>
    )
}

export default Modal
