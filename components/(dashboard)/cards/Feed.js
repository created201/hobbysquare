import dynamic from "next/dynamic"
import { useState } from "react"

const UserProfile = dynamic(() => import("@/(general)/images/UserProfile"))
const Modal = dynamic(() => import("@/(dashboard)/modals/Modal"))

const Feed = ({ _id, data }) => {
    // _id, data: {title, description, when, where, what, skillLevel, category}
    const { title, description, when, where, what, skillLevel, category } = data

    const [modalShow, modalShowModal] = useState(false)

    function handleSendInterest() {
        modalShowModal(!modalShow)
    }

    // bg-gradient-to-r from-orange-500 via-pink-500 to-amber-500
    // box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    return (
        <>
            <div className="flex flex-col-reverse lg:grid grid-cols-6 relative border-solid border-2 gap-x-5 p-4 h-full w-ful rounded-md hover:shadow-[0_2px_8px_0_rgba(99,99,99,0.2)]">
                {/* Description */}
                <div className="col-span-3 sm:col-span-4 p-2">
                    <div className="flex flex-col gap-x-2 mb-3">
                        <p className="text-sm font-medium capitalize bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-amber-500">
                            {category}
                        </p>
                        <h3 className="font-bold text-2xl text-theme-dark">
                            {title}
                        </h3>
                    </div>
                    <p className="font-light text-theme-gray/75 mb-6">
                        {description}
                    </p>
                    <div className="my-[0.5rem] flex flex-col gap-y-2.5">
                        <p className="text-sm grid grid-cols-12 lg:flex flex-row items-start gap-x-4 lg:gap-x-2 lg:justify-start lg:items-start">
                            <strong className="col-span-3 w-full lg:w-[75px] flex items-center lg:flex-row justify-center px-2 py-1 rounded-full text-sm  bg-theme-dark text-theme-white font-light">
                                What
                            </strong>
                            <span className="col-span-9 text-base font-medium border-theme-gray">
                                {what}
                            </span>
                        </p>
                        <p className="text-sm grid grid-cols-12 lg:flex flex-row items-start gap-x-4 lg:gap-x-2 lg:justify-start lg:items-start">
                            <strong className="col-span-3 w-full lg:w-[75px] flex items-center lg:flex-row justify-center px-2 py-1 rounded-full text-sm  bg-theme-dark text-theme-white font-light">
                                When
                            </strong>
                            <span className="col-span-9 text-base font-medium border-theme-gray">
                                {when}
                            </span>
                        </p>
                        <p className="text-sm grid grid-cols-12 lg:flex flex-row items-start gap-x-4 lg:gap-x-2 lg:justify-start lg:items-start">
                            <strong className="col-span-3 w-full lg:w-[75px] flex items-center lg:flex-row justify-center px-2 py-1 rounded-full text-sm  bg-theme-dark text-theme-white font-light">
                                Where
                            </strong>
                            <span className="col-span-9 text-base font-medium border-theme-gray">
                                {where}
                            </span>
                        </p>
                    </div>
                </div>

                {/* Profile Section */}
                <div className="col-span-3 sm:col-span-2 p-2 flex flex-col justify-center">
                    {/* <h3 className="text-xl font-bold text-center mb-1">{_id}</h3> */}
                    <UserProfile width="max-w-[100px] mb-1" />
                    <div className="flex flex-col items-center mb-3">
                        <p className="text-center capitalize text-theme-gray/75">
                            {skillLevel}
                        </p>
                    </div>
                    <button
                        className="rounded-full px-6 py-2.5 font-medium text-lg text-[#ffffff] bg-gradient-to-r from-orange-500 via-pink-500 to-amber-500 ring-2 ring-transparent transition-all duration-[0.65s] ease-in-out lg:hover:ring-pink-500 lg:hover:from-transparent lg:hover:via-transparent lg:hover:to-transparent lg:hover:text-pink-500"
                        onClick={handleSendInterest}
                    >
                        Send Interest
                    </button>
                </div>
            </div>

            {/* Modal For Sending Interest (Email) */}
            <Modal show={modalShow} handleClick={handleSendInterest} />
        </>
    )
}

export default Feed
