const SquareSpinner = () => {
    return (
        <ul className="z-0 absolute -right-7">
            <span className="relative top-2 w-[20px] h-[20px] p-0.5 bg-gradient-to-r from-orange-500 via-amber-500 to-pink-500 flex justify-center items-center animate-spin">
                <span className="w-full h-full bg-theme-white" />
            </span>

            <span className="relative w-[12px] h-[12px] p-0.5 bg-gradient-to-r from-orange-500 via-amber-500 to-pink-500 flex justify-center items-center animate-spin">
                <span className="w-full h-full bg-theme-white" />
            </span>
        </ul>
    )
}

export default SquareSpinner
