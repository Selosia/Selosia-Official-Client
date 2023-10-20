
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/Firebase.init";
const auth = getAuth(app)




export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

useEffect(() => {
    const body = document.body;
    body.className = theme;
    localStorage.setItem("theme", theme);
}, [theme]);



//!/* --------------------------- Language change --------------------------- */

const [language, setLanguage] = useState("english"); // Default language is English

const toggleLanguage = () => {
  setLanguage(language === 'english' ? 'bangla' : 'english');
};


  //* For Filter data
    const [filteredData, setFilteredData] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);


    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);



    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();




//* User create 

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }




//* Update profile

const updateUser = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoURL,
    });
};




//* User sign in 

const userSingIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
}




//* Google sign in 

const googleSignIn = () =>{
    setLoading(true);
    return signInWithPopup(auth , googleProvider)
}




//* Facebook sign in 

const facebookSignIn = () =>{
    return signInWithPopup(auth , facebookProvider)
}



//* logOut

const logOut = () => {
    setLoading(true);
    localStorage.removeItem('accessToken')
    return signOut(auth);
};


useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

        setUser(currentUser);
        setLoading(false);
    });

    return () => unsubscribe();
}, []);



    const authInfo = {
        createUser,
        updateUser,
        userSingIn,
        googleSignIn,
        facebookSignIn,
        loading,
        user,
        logOut,
        theme, 
        setTheme,
        filteredData, setFilteredData,
        hasSearched, setHasSearched,
        language, toggleLanguage,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

