import dynamic from "next/dynamic"
const SignIn = dynamic(() => import("../buttons/SignIn"))

const Login = () => {
    function signIn(provider) {
        alert(`Signing you in with ${provider}`)
    }

    const signInOptions = [
        {
            provider: "google",
            signIn: () => signIn("google"),
        },
        {
            provider: "github",
            signIn: () => signIn("github"),
        },
        {
            provider: "facebook",
            signIn: () => signIn("facebook"),
        },
    ]
    return (
        <div className="w-full max-w-md mx-auto flex flex-col gap-y-4">
            {signInOptions.map((signInOption, idx) => (
                <SignIn
                    key={idx}
                    provider={signInOption.provider}
                    onSignIn={signInOption.signIn}
                />
            ))}
        </div>
    )
}

export default Login
