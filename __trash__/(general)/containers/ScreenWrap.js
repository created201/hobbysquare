const ScreenWrap = ({ children }) => {
    return (
        <section className="w-full max-w-cutoff mx-auto px-8 2xl:px-0 py-8">
            {children}
        </section>
    )
}

export default ScreenWrap
