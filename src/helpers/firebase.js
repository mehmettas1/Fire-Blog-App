






const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
  };
  


  export const logOut = () => {
    signOut(auth);
  };
  
  // https://console.firebase.google.com/
  // => Authentication => sign-in-method => enable Google
  // Google ile girişi enable yap
  // => Authentication => sign-in-method => Authorized domains => add domain
  // Projeyi deploy ettikten sonra google sign-in çalışması için domain listesine deploy linkini ekle
  export const signUpProvider = (navigate) => {
    //? Google ile giriş yapılması için kullanılan firebase metodu
    const provider = new GoogleAuthProvider();
    //? Açılır pencere ile giriş yapılması için kullanılan firebase metodu
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        navigate('/');
        toastSuccessNotify('Logged out successfully!');
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error);
      });
  };
  
  export const forgotPassword = (email) => {
    //? Email yoluyla şifre sıfırlama için kullanılan firebase metodu
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        toastWarnNotify('Please check your mail box!');
        // alert("Please check your mail box!");
      })
      .catch((err) => {
        toastErrorNotify(err.message);
        // alert(err.message);
        // ..
      });
  };
  