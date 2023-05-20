/* eslint-disable react/prop-types */
import "../styles/tailwind.css"

const App = (props) => {
    const { Component, pageProps } = props
    const getLayout = Component.getLayout || ((_page) => _page)
    return getLayout(<Component {...pageProps} />)
}

export default App
