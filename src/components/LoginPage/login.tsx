import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { BsFacebook, BsGoogle } from "react-icons/bs";

import BackgroundLogin from "../../element/BackgroundLogin";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../ReduxTK/slices/UsersSlice";
import { AppDispatch } from "../ReduxTK/store";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../firebase/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { IsLogin } from "../ReduxTK/slices/IsLoginSlice";
type FormValues = {
  email: string;
  password: string;
};
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (email.length == 0 || password.length == 0) {
      toast.error("password or email not exist");
    }
    setLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(
          IsLogin({
            value: true,
          })
        );
        setLoading(true);
        toast.success("login Successful...");
        navigate("/dashboard");
        // ...
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
        dispatch(
          IsLogin({
            value: false,
          })
        );
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
        <section className="wrapper">
          <div className="content">
            <header>
              <h1>welcome to healthy 24 👌</h1>
              <h4>Enter your account to use healthy 24 service</h4>
            </header>
            <section className="login">
              <form action="" className="login-form" onSubmit={handleSubmit}>
                <div className="input-group">
                  <label htmlFor="email">Email</label>
                  <input
                    placeholder="Enter email address"
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </div>
                <div className="input-group">
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
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
                      Remember me
                    </label>
                  </div>
                  <div>
                    <a onClick={() => navigate("/forgetpassword")}>
                      forgot Password
                    </a>
                  </div>
                </div>
                <div className="input-group">
                  <button type="submit">Login</button>
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
              <div onClick={() => navigate("/singup")} title="Forgot Password">
                You don’thave account ? <span> Sign up</span>
              </div>
            </footer>
          </div>
          <BackgroundLogin />
        </section>
      )}
    </>
  );
};

export default Login;
