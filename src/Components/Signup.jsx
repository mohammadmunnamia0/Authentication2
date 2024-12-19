import { getAuth, signOut } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import app from "../Firebase/firebase.config";

const Signup = () => {
  const auth = getAuth(app);

  const [user, SetUser] = useState();
  const provider = new GoogleAuthProvider();

  const HandleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const LogeUser = result.user;
        console.log(LogeUser);
        SetUser(LogeUser);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const HandleSignOut = () => {
    signOut(auth)
      .then(() => {
        SetUser(null);
        console.log("SignOut Successful");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      {user ? (
        <>
           <button onClick={HandleSignOut}>Sig Out</button>
        <div>
        <h3> Name : {user.displayName}</h3>
        <h3> Email: {user.email} </h3>
      </div>
      </>
      ) : (
        <button onClick={HandleGoogleSignIn}>Signup With Google</button>
      )}

      {/* 
      {user && (
         <button onClick={HandleSignOut}>Sig Out</button>
        <div>
        <h3> Name :</h3>
        <h3> Email: </h3>
      </div>
      )} */}
    </div>
  );
};

export default Signup;
