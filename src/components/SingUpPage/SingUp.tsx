import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { BsFacebook, BsGoogle } from "react-icons/bs";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "react-toastify/dist/ReactToastify.css";
import BackgroundLogin from "../../element/BackgroundLogin";
import { auth } from "../firebase/firebase.config";

import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { IsLogin } from "../ReduxTK/slices/IsLoginSlice";

const SingUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullname] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (email.length == 0 || password.length == 0) {
      toast.error("password or email not exist");
    }
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        setLoading(false);
        toast.success("Registration Successful");
        dispatch(
          IsLogin({
            value: false,
          })
        );
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
        dispatch(
          IsLogin({
            value: true,
          })
        );
        setLoading(false);
      });
  };

  return (
    <>
      {loading ? (
        <div
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span className="loader"></span>
        </div>
      ) : (
        <>
          <section className="wrapper">
            <div className="content">
              <header>
                <h1>Sing up your account 👋</h1>
                <h4>
                  Let’s Enter your data to continue use healthy 24 services
                </h4>
              </header>
              {loading && <h1>loading</h1>}
              <section className="login">
                <form action="" className="login-form" onSubmit={handleSubmit}>
                  <div className="input-group">
                    <label htmlFor="FullName">fullname</label>
                    <input
                      placeholder="Enter Your Name Here "
                      id="fullName"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullname(e.target.value)}
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input
                      placeholder="Enter Your email  Here"
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter Your Password Here"
                    />
                  </div>
                  <div className="checkbox">
                    <div>
                      <label htmlFor="remember" className="">
                        <input
                          type="checkbox"
                          id="remember"
                          className="w-4 h-4 border-slate-200 focus:bg-green-600"
                        />
                        by sign up to healthy 24 you agree all
                        <span> term </span>and <span> condition </span>
                      </label>
                    </div>
                  </div>
                  <div className="input-group">
                    <button type="submit">Sign Up</button>
                  </div>
                </form>
                <h1 className="or">or</h1>
                <div className="social-login">
                  <button>
                    <BsGoogle
                      style={{
                        color: "black",
                        fontSize: "24px",
                        padding: "0 8px",
                      }}
                    />
                    <span>Sign in with google</span>
                  </button>
                  <button>
                    <BsFacebook
                      style={{
                        color: "black",
                        fontSize: "24px",
                        padding: "0 8px",
                      }}
                    />
                    <span>Sign in with facebook</span>
                  </button>
                </div>
              </section>
              <footer>
                <div onClick={() => navigate("/")} title="Forgot Password">
                  You Already have account ? <span> Sign in</span>
                </div>
              </footer>
            </div>
            <BackgroundLogin />
          </section>
        </>
      )}
    </>
  );
};

export default SingUp;
