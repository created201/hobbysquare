/* eslint-disable react/prop-types */
import "../styles/tailwind.css"
import { AnimatePresence } from "framer-motion"

const App = (props) => {
    const { Component, pageProps, router } = props
    const getLayout = Component.getLayout || ((_page) => _page)
    return (
        <AnimatePresence
            mode="wait"
            initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}
        >
            {getLayout(<Component {...pageProps} key={router.asPath} />)}
        </AnimatePresence>
    )
}

export default App
