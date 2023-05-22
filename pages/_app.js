/* eslint-disable react/prop-types */
import "../styles/tailwind.css"
import { AnimatePresence } from "framer-motion"
import { SessionProvider } from "next-auth/react"

const App = (props) => {
    const { Component, pageProps } = props
    const getLayout = Component.getLayout || ((_page) => _page)
    return (
        <AnimatePresence
            mode="wait"
            initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}
        >
            <SessionProvider session={pageProps.session}>
                {getLayout(<Component {...pageProps} />)}
            </SessionProvider>
        </AnimatePresence>
    )
}

export default App
