const Title = ({ title }) => {
    return (
        <h2>
            <span className="inline-flex flex-col items-center gap-y-6 lg:gap-y-8">
                <span className="font-bold text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl">
                    {title}
                </span>
                <span className="inline-flex items-center justify-center gap-x-4">
                    <span className="inline-block w-1 h-1 rounded-full bg-theme-main animate-ping" />
                    <span className="inline-block w-3 h-3 rounded-full bg-theme-sup animate-ping" />
                    <span className="inline-block w-2 h-2 rounded-full bg-theme-sub animate-ping" />
                </span>
            </span>
        </h2>
    )
}

export default Title
