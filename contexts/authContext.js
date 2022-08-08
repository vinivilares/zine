import { signInWithEmailAndPassword, signOut, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import { createContext, useState } from "react";
import { auth } from "../firebase/config";

const AuthContext = createContext()

export function AuthContextProvider({ children }) {
    const [user, setUser] = useState()
    const router = useRouter()

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    })

    function login(email, password) {
        signInWithEmailAndPassword(auth, email, password)
            .then(credentials => {
                setUser(credentials.user)
                router.push('/')
            })
    }

    function signup(email, password) {
        createUserWithEmailAndPassword(auth, email, password)
            .then(credentials => {
                router.push('/')
            })
    }

    function logout() {
        signOut(auth)
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, signup }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext