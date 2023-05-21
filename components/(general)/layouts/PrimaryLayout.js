import FooterLayout from "./FooterLayout"
import MetaLayout from "./MetaLayout"
import { motion } from "framer-motion"
const PrimaryLayout = ({ children }) => {
    return (
        <>
            <MetaLayout />
            <motion.div
                initial={{ x: 0, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 0, opacity: 0 }}
                transition={{
                    type: "just",
                    stiffness: 260,
                    damping: 20,
                }}
            >
                {children}
            </motion.div>
            <FooterLayout />
        </>
    )
}

export default PrimaryLayout
