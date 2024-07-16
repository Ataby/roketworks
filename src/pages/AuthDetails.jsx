import React, { useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successfully");
      })
      .catch((err) => console.log("sign out error", err));
      window.location = "/login";
  };

  const goToLogin = () => {
    window.location = "/login";
  };
  return (
    <div>
      {authUser ? (
        <div className="flex justify-center items-center">
              <p className="h-2 text-xl">Signed In As <strong>{authUser.email}</strong></p>
          <button
            className="border-2 bg-red-500 p-2 m-3 rounded-md text-white"
            onClick={userSignOut}
          >
            Sign Out
          </button>
        </div>
      ) : (
        <>
          <button className="rounded-md p-3 mt-3 bg-green-500 text-white flex justify-center" onClick={goToLogin}>
            {" "}
            GO TO LOGIN PAGE
          </button>
          <p> INFO: Signed Out Right Now !</p>
        </>
      )}
    </div>
  );
};

export default AuthDetails;
