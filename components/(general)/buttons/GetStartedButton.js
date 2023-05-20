import { alertButtonNotAvailable } from "@/helpers"

const GetStartedButton = ({ user }) => {
    return (
        <button onClick={alertButtonNotAvailable}>
            {user ? "My Dashbaord" : "Sign In"}
        </button>
    )
}

export default GetStartedButton
