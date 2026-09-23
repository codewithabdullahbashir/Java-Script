import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "../config/Firebase";

import Logo from "../assets/Logo.png";
import SignupImg from "../assets/SignupImg.png";
import Facebook from "../assets/Facebook.png";
import Google from "../assets/Google.png";
import Apple from "../assets/Apple.png";
import InputField from "../components/InputField";
import { Eye, EyeOff, LucideEye, LucideEyeOff } from "lucide-react";

const Signup = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [privacy, setPrivacy] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
      setLoading(true);
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      await setDoc(doc(db, "users", result.user.uid), {
        firstName,
        lastName,
        phoneNumber,
        email,
      });

      navigate("/dashboard");
    } catch (err: any) {
      setError(
        err?.message || "Something went wrong while creating your account.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans ">
      <header className="mx-auto flex h-16 max-w-6xl items-center justify-end px-6">
        <img src={Logo} alt="Logo" className="h-7 w-auto object-contain" />
      </header>

      <main className="mx-auto flex max-w-7xl items-center justify-center px-25 py-2">
        <div className="grid w-full max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div className="flex justify-start">
            <img
              src={SignupImg}
              alt="Sign up illustration"
              className="w-full h-full max-w-md "
            />
          </div>
          <div className=" mt-10 w-full ">
            <form onSubmit={handleSignUp}>
              <h1
                className="text-[40px] font-semibold text-[#313131]"
                style={{ fontFamily: "Helvetica" }}
              >
                Sign up
              </h1>
              <p
                className="mt-6.5 text-[16px] font-normal text-[#313131]"
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

              <div className="mt-8 grid grid-cols-2 gap-3">
                <div>
                  <InputField
                    label="First Name"
                    name="Firest Name"
                    placeholder="Jhon"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div>
                  <InputField
                    placeholder="Tom"
                    label="Last Name"
                    name="Last Name"
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                    type="text"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <InputField
                    value={email}
                    label="E-Mail"
                    name="E-Mail"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    type="email"
                    placeholder="example123@gmail.com"
                  />
                </div>

                <div>
                  <InputField
                    value={phoneNumber}
                    label="Phone Number"
                    name="PhoneNumber"
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                    }}
                    type="tel"
                    placeholder="+92 3000000000"
                  />
                </div>
              </div>

              <div className="relative ">
                <InputField
                  label="Password"
                  name="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="***************"
                  type={showPassword ? "text" : "password"}
                  value={password}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-5.5 text-[#313131] hover:text-[#313131] cursor-cl"
                >
                  {showPassword ? (
                    <LucideEye size={15} />
                  ) : (
                    <LucideEyeOff size={15} />
                  )}
                </button>
              </div>

              <div className="relative">
                <InputField
                  label="Confirm Password"
                  name="confirm Password"
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                  placeholder="***************"
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                />

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-5 text-[#313131] hover:text-[#313131]"
                >
                  {showConfirmPassword ? (
                    <Eye size={15} />
                  ) : (
                    <EyeOff size={15} />
                  )}
                </button>
              </div>

              <div className="mt-3 flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={privacy}
                  onChange={(e) => setPrivacy(e.target.checked)}
                  className="h-6 w-6 font-medium  border-8 rounded-xs border-[#313131] "
                />
                <p
                  className="text-[14px] text-[#313131] font-medium"
                  style={{ fontFamily: "Sora" }}
                >
                  I agree to all the{" "}
                  <span
                    className="text-[#FF8682] text-[14px]"
                    style={{ fontFamily: "Sora" }}
                  >
                    Terms
                  </span>{" "}
                  and{" "}
                  <span
                    className="text-[#FF8682] text-[14px]"
                    style={{ fontFamily: "Sora" }}
                  >
                    Privacy Policies
                  </span>
                </p>
              </div>

              <button
                type="submit"
                className="mt-13 h-12 w-full rounded-sm bg-[#515DEF] hover:focus:border-l-amber-400 text-[14px] font-medium text-white cursor-pointer"
                style={{ fontFamily: "Sora" }}
              >
                {loading ? "Createing Account..." : "Create Account"}
              </button>
              <div className="h-2.5 w-full justify-center text-center mt-5">
                <p
                  className="text-[14px] text-[#313131] font-medium"
                  style={{ fontFamily: "Sora" }}
                >
                  Already have an account?{" "}
                  <span className="text-[#FF8682] text-[14px]">
                    <a href="/login">Login</a>
                  </span>
                </p>
              </div>

              <div className="mt-15 flex items-center gap-2">
                <div className="h-[0.5px] flex-1 bg-[#313131]" />
                <span
                  className="text-[14px] font-normal text-[#313131]"
                  style={{ fontFamily: "Helvetica" }}
                >
                  Or Sign up with
                </span>
                <div className="h-[0.5px] flex-1 bg-[#313131]" />
              </div>

              <div className="grid grid-cols-3 gap-2 mt-13">
                <button
                  type="button"
                  className="flex h-14 items-center justify-center rounded-sm border border-[#515DEF]"
                >
                  <img src={Facebook} alt="Facebook" />
                </button>
                <button
                  type="button"
                  className="flex h-14 items-center justify-center rounded-sm border border-[#515DEF]"
                >
                  <img src={Google} alt="Google" />
                </button>
                <button
                  type="button"
                  className="flex h-14 items-center justify-center rounded-sm border border-[#515DEF]"
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
