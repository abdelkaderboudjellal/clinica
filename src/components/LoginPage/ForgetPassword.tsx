import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { Users } from "../../types/types";

import BackgroundLogin from "../../element/BackgroundLogin";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../ReduxTK/store";
import { fetchUsers } from "../ReduxTK/slices/UsersSlice";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { toast } from "react-toastify";
type FormValues = {
  email: string;
  password: string;
};

const ForgetPassword = () => {
  const navigate = useNavigate();

  const [messageAll, setMessageAll] = useState(false);
  const [email, setEmail] = useState("");
  const users: Users[] = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Check your Email for a reset link");
        setMessageAll(true);
      })
      .catch((error) => {
        setMessageAll(false);
        toast.error(error.message);
      });
  };

  return (
    <div>
      <section className="wrapper">
        {!messageAll && (
          <div className="content-forget">
            <header>
              <h1>Forget Password 🔒</h1>
              <h4>Enter your email to recover password</h4>
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
                  />
                </div>

                <div className="input-group">
                  <button type="submit">Sing in</button>
                </div>
              </form>
            </section>
          </div>
        )}
        {messageAll && (
          <div className="content-forget">
            <header>
              <h1>OTP Verification 📧</h1>
              <h4>
                Our team already sent you an email in your inbox
                <span> {email} </span>to Access back your account
              </h4>
            </header>
            <section className="login">
              <form action="" className="login-form" onSubmit={handleSubmit}>
                <div className="input-code">
                  <input id="cod" />
                  <input id="cod" />
                  <input id="cod" />
                  <input id="cod" />
                  <input id="cod" />
                  <input id="cod" />
                </div>

                <div className="input-group">
                  <button type="submit">Continue</button>
                </div>
              </form>
            </section>
            <footer>
              <div
                /* onClick={() => location.reload()}  */ title="Forgot Password"
              >
                *didn’t receive verificatin code ? <span>Resend</span>
              </div>
            </footer>
          </div>
        )}
        <BackgroundLogin />
      </section>
    </div>
  );
};

export default ForgetPassword;
