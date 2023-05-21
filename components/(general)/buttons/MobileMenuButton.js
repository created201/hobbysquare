import { FiMenu } from "react-icons/fi"
import { AiOutlineClose } from "react-icons/ai"

const MobileMenuButton = ({ onClick, show }) => {
    return (
        <button className="flex items-center justify-center" onClick={onClick}>
            {show ? <AiOutlineClose size={26} /> : <FiMenu size={26} />}
        </button>
    )
}

export default MobileMenuButton
