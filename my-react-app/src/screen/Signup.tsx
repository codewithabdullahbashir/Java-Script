import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
// @ts-ignore
import { auth, db } from "../config/Firebase";

import Logo from "../assets/Logo.png";
import SignupImg from "../assets/SignupImg.png";
import Facebook from "../assets/Facebook.png";
import Google from "../assets/Google.png";
import Apple from "../assets/Apple.png";

const Signup = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [privacy, setPrivacy] = useState(false);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!privacy) {
      setError("Please accept the Terms and Privacy Policies.");
      return;
    }

    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      await setDoc(doc(db, "users", result.user.uid), {
        firstName,
        lastName,
        email,
      });

      navigate("/Home");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <header className="mx-auto flex h-16 max-w-6xl items-center justify-end px-6">
        <img src={Logo} alt="Logo" className="h-7 w-auto object-contain" />
      </header>

      <main className="mx-auto flex max-w-6xl items-center justify-center px-6 py-4">
        <div className="grid w-full max-w-5xl grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div className="flex justify-start">
            <img
              src={SignupImg}
              alt="Sign up illustration"
              className="w-full max-w-md object-contain"
            />
          </div>
          <div className="w-full max-w-md">
            <form onSubmit={handleSignUp}>
              <h1
                className="text-[40px] font-semibold text-slate-900"
                style={{ fontFamily: "Helvetica" }}
              >
                Sign up
              </h1>
              <p
                className="mt-1 text-[16px] text-gray-500"
                style={{ fontFamily: "Sora" }}
              >
                Let's get you all set up so you can access your personal
                account.
              </p>

              {error && (
                <div className="mt-3 rounded border border-red-400 bg-red-100 px-3 py-2 text-sm text-red-700">
                  {error}
                </div>
              )}

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div>
                  <label
                    className="mb-1 block text-[14px] text-gray-600"
                    style={{ fontFamily: "Helvetica" }}
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                    className="h-9.75 w-full rounded-sm border border-black px-2 text-[16px] outline-none focus:border-indigo-500"
                    style={{ fontFamily: "Sora" }}
                  />
                </div>
                <div>
                  <label
                    className="mb-1 block text-[14px] text-gray-600"
                    style={{ fontFamily: "Helvetica" }}
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                    className="h-9.75 w-full rounded-sm border border-black px-2 text-[16px] outline-none focus:border-indigo-500"
                    style={{ fontFamily: "Sora" }}
                  />
                </div>
              </div>

              <div className="mt-2 grid grid-cols-2 gap-2">
                <div>
                  <label
                    className="mb-1 block text-[14px] text-gray-600"
                    style={{ fontFamily: "Helvetica" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@gmail.com"
                    className="h-9.75 w-full rounded-sm border border-black px-2 text-[16px] outline-none focus:border-indigo-500"
                    style={{ fontFamily: "Sora" }}
                  />
                </div>

                <div>
                  <label
                    className="mb-1 block text-[14px] text-gray-600"
                    style={{ fontFamily: "Helvetica" }}
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+92 3000000000"
                    className="h-9.75 w-full rounded-sm border border-black px-2 text-[16px] outline-none focus:border-indigo-500"
                    style={{ fontFamily: "Sora" }}
                  />
                </div>
              </div>

              <div className="mt-2">
                <label
                  className="mb-1 block text-[14px] text-gray-600"
                  style={{ fontFamily: "Helvetica" }}
                >
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="h-9.75 w-full rounded-sm border border-black px-2 text-[16px] outline-none focus:border-indigo-500"
                  style={{ fontFamily: "Helvetica" }}
                />
              </div>

              <div className="mt-2">
                <label
                  className="mb-1 block text-[14px] text-gray-600"
                  style={{ fontFamily: "Helvetica" }}
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="h-9.75 w-full rounded-sm border border-black px-2 text-[16px] outline-none focus:border-indigo-500"
                  style={{ fontFamily: "Sora" }}
                />
              </div>

              <div className="mt-3 flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={privacy}
                  onChange={(e) => setPrivacy(e.target.checked)}
                  className="h-4.5 w-4.5 accent-indigo-500"
                />
                <p
                  className="text-[14px] text-gray-600"
                  style={{ fontFamily: "Sora" }}
                >
                  I agree to all the{" "}
                  <span className="text-[#FF8682]">Terms</span> and{" "}
                  <span className="text-[#FF8682]">Privacy Policies</span>
                </p>
              </div>

              <button
                type="submit"
                className="mt-4 h-8 w-full rounded-sm bg-indigo-500 text-[14px] font-medium text-white transition hover:bg-indigo-600"
                style={{ fontFamily: "Sora" }}
              >
                Create account
              </button>

              <div className="my-4 flex items-center gap-2">
                <div className="h-px flex-1 bg-gray-200" />
                <span className="text-[14px] text-gray-400" style={{ fontFamily: "Helvetica" }}>
                  Or Sign up with
                </span>
                <div className="h-px flex-1 bg-gray-200" />
              </div>

              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  className="flex h-12.5 items-center justify-center rounded-sm border"
                >
                  <img src={Facebook} alt="Facebook" />
                </button>
                <button
                  type="button"
                  className="flex h-12.5 items-center justify-center rounded-sm border"
                >
                  <img src={Google} alt="Google" />
                </button>
                <button
                  type="button"
                  className="flex h-12.5 items-center justify-center rounded-sm border"
                >
                  <img src={Apple} alt="Apple" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Signup;
