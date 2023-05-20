const ScreenBox = ({ children }) => {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center">
            {children}
        </div>
    )
}

export default ScreenBox
