import React from './Login';
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithRedirect, getRedirectResult, onAuthStateChanged } from "firebase/auth";


const Login = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const handleLogin = () => {
        signInWithRedirect(auth, provider).then((res)=>{
            console.log("User logged in successfully...");
            getLoginResult();
        });
    }

    const getLoginResult = () => {
        getRedirectResult(auth)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access Google APIs.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;

            // The signed-in user info.
            const user = result.user;
            console.log("User : ", user);
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log("Somethign went wrong!", errorMessage);
            // ...
        });
    } 


    return (
        <>
            <h3>Login</h3>
            <hr />
            <button onClick={handleLogin}>Login With GOOGLE</button>
        </>
    )
}
export default Login;