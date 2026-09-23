/* import LoginLogo from "../assets/LoginLogo.png";
import EyeOn from "../assets/EyeOn.png";
import EyeOff from "../assets/EyeOff.png";
import Skip from "../assets/Skip.png"
import Facebook from "../assets/Facebook.png";
import Googel from '../assets/Google.png'
import Support from "../assets/Support.png";
import { useState } from "react";

const LogInPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="grid min-h-screen grid-cols-2 ">
      <section className="flex flex-col justify-center px-6 py-12 sm:px-12 md:px-20 bg-white">
        <div className="mb-4">
          <img src={LoginLogo} alt="Login Logo" className="h-8 w-auto" />
        </div>

        <div className="max-w-md w-full mt-14 mx-auto space-y-6">
          <div>
            <h1 className="text-4xl font-bold text-[#171923]">Sign In</h1>
            <p className="mt-10 text-sm text-[#718096]">
              Don't have an account?{" "}
              <a
                href="#signup"
                className="text-[#1C4532] underline font-medium"
              >
                Create now
              </a>
            </p>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-4">
              <label
                htmlFor="email"
                className="text-[16px] font-medium text-[#718096]"
                style={{ fontFamily: "Helvetica" }}
              >
                E-mail
              </label>
              <input
                id="email"
                type="email"
                placeholder="example@gmail.com"
                className="w-full h-12 px-4 border border-[#CBD5E0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1C4532]"
                style={{ fontFamily: "Sora" }}
              />
            </div>

            <div className="flex flex-col gap-4 mt-5">
              <label
                htmlFor="password"
                className="text-sm font-medium text-[#718096]"
                style={{ fontFamily: "Helvetica" }}
              >
                Password
              </label>
              <div className="relative w-full">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full h-12 pl-4 pr-14 border border-[#CBD5E0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1C4532]"
                  style={{ fontFamily: "Sora" }}
                />
                <button
                  onClick={() => setShowPassword((prev) => !prev)} // Changed from onChange
                  type="button"
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 focus:outline-none flex items-center justify-center"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <img
                      src={EyeOff}
                      alt="Hide Password"
                      className="w-5 h-5 opacity-70 hover:opacity-100 transition-opacity"
                    />
                  ) : (
                    <img
                      src={EyeOn}
                      alt="Show Password"
                      className="w-5 h-5 opacity-70 hover:opacity-100 transition-opacity"
                    />
                  )}
                </button>
              </div>
            </div>

            <div className="text-start">
              <a
                href="#forgot"
                className="text-sm font-medium text-[#1C4532] underline underline-offset-3"
                style={{ fontFamily: "Sora" }}
              >
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full h-12 mt-4 bg-[#1C4532] text-white font-semibold rounded-2xl hover:bg-[#143325] transition-colors cursor-pointer"
            >
              Sign in
            </button>

            <div className="my-7.5 flex items-center gap-3">
              <div className="h-px flex-1 bg-[#CBD5E0]" />
              <span className="text-xs text-[#313131]">Or</span>
              <div className="h-px flex-1 bg-[#CBD5E0]" />
            </div>

            <div className="">
              <button
                type="button"
                className="w-full h-12 flex items-center justify-center border border-[#CBD5E0] rounded-2xl text-[#67728A] font-medium hover:bg-gray-50 transition-colors"
              >
                <img src={Googel} alt="" className="relative -left-32" />
                Continue with Google
              </button>
              <button
                type="button"
                className="w-full mt-10 h-12 flex items-center justify-center border border-[#CBD5E0] rounded-2xl text-[#67728A] font-medium hover:bg-gray-50 transition-colors"
              >
                <img src={Facebook} alt="" className="relative -left-30" />
                Continue with Facebook
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="text-center justify-center h-full w-full bg-[#1C4532]">
        <div className="flex text-center justify-center gap-2 ">
          <img src={Support} alt="Support" />
          <p className="text-[#F7FAFC] text-[20px] font-medium">Support</p>
        </div>
        <div className="h-131.25 w-154.5 text-center justify-center">
          <div />
          <div className="bg-white">
            <h1>Reach Finacial goals faster</h1>
            <p>
              Use your Venus card around the world with no hidden fees. Hold,
              transfer and spend money.
            </p>
            <button>Learn more</button>
          </div>
          <div className="">
            <h3 className="text-white">Introducing new features</h3>
            <p>
              Analyzing previous trends ensures that businesses always make the
              right decision. And as the scale of the decision and it’s impact
              magnifies...
            </p>
          </div>
        </div>
        <img src={Skip} alt="Skip" />
      </section>
    </div>
  );
};

export default LogInPage;
 */

import LoginLogo from "../assets/LoginLogo.png";
import OpenEye from "../assets/OpenEye.png";
import EyeOff from "../assets/EyeOff.png";
import Skip from "../assets/Skip.png";
import Facebook from "../assets/Facebook.png";
import Googel from "../assets/Google.png";
import Support from "../assets/Support.png";
import { useState } from "react";

const LogInPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="grid min-h-screen grid-cols-2 bg-white">
      <section className="relative flex min-h-screen flex-col bg-white px-3.75 py-8.5">
        <div className="mx-auto mt-7.75 w-full max-w-90.5">
          <div>
            <img
              src={LoginLogo}
              alt="Login Logo"
              className="mb-20  h-8 w-32 text-center justify-center"
            />
          </div>
          <div>
            <h1
              className="text-[48px] font-bold leading-[100%] text-[#171923]"
              style={{ fontFamily: "Helvetica" }}
            >
              Sign In
            </h1>

            <p
              className="mt-9 text-[18px] leading-[150%] text-[#718096]"
              style={{ fontFamily: "Helvetica" }}
            >
              Don't have an account?{" "}
              <a
                href="#signup"
                className="font-medium text-[#1C4532] underline"
              >
                Create now
              </a>
            </p>
          </div>

          <form className="mt-6">
            <div>
              <label
                htmlFor="email"
                className="mb-3.25 block text-[16px] font-medium leading-5 text-[#718096]"
                style={{ fontFamily: "Helvetica" }}
              >
                E-mail
              </label>

              <input
                id="email"
                type="email"
                placeholder="example@gmail.com"
                className="w-full h-14 rounded-xl pl-2.5 pr-6.25 border bg-[#F7FAFC] border-[#CBD5E0] text-[#4A5568] text-[16px] outline-none focus:ring-1 focus:ring-[#CBD5E0]"
                style={{ fontFamily: "Sora" }}
              />
            </div>

            <div className="mt-8.25">
              <label
                htmlFor="password"
                className="mb-4 block text-[16px] leading-2.25 text-[#718096]"
                style={{ fontFamily: "Helvetica" }}
              >
                Password
              </label>

              <div className="relative w-full">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="#$%&@"
                  className="w-full h-14  rounded-xl border border-[#CBD5E0] pl-2.5 pr-6.25 text-[#4A5568] text-[16px] outline-none focus:ring-1 focus:ring-[#1C4532]"
                  style={{ fontFamily: "Sora" }}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-1.25 top-1/2 flex -translate-y-1/2 items-center justify-center"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  <img
                    src={showPassword ? EyeOff : OpenEye}
                    alt=""
                    className="h-3.75 w-5"
                  />
                </button>
              </div>
            </div>

            <div className="mt-3.75">
              <a
                href="#forgot"
                className="text-[16px] font-medium text-[#1C4532] underline underline-offset-3"
                style={{ fontFamily: "Sora" }}
              >
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="mt-17 h-14 w-full rounded-[7px] bg-[#1C4532] text-[20px] text-[#F7FAFC] font-medium  transition-colors hover:bg-[#143325]"
            >
              Sign in
            </button>

            <div className="my-14 flex items-center gap-4">
              <div className="h-px flex-1 bg-[#CBD5E0]" />

              <span className="text-[12px] font-medium text-[#718096]">OR</span>

              <div className="h-px flex-1 bg-[#CBD5E0]" />
            </div>

            <div>
              <button
                type="button"
                className="relative flex h-15 w-full items-center justify-center rounded-[20px] border border-[#CBD5E0] text-[18px] font-medium text-[#67728A] transition-colors hover:bg-gray-50"
              >
                <img src={Googel} alt="" className="absolute left-3 h-8 w-8" />
                Continue with Google
              </button>

              <button
                type="button"
                className="relative mt-11 flex h-15 w-full items-center justify-center rounded-[20px] border border-[#CBD5E0] text-[18px] font-medium text-[#67728A] transition-colors hover:bg-gray-50"
              >
                <img
                  src={Facebook}
                  alt=""
                  className="absolute left-3 h-8 w-8"
                />
                Continue with Facebook
              </button>
            </div>
          </form>
        </div>
      </section>
{/* ---------------------------------------------------------------------------------------------------------------------- */}
      <section className="relative min-h-screen overflow-hidden bg-[#1C4532]">
        <div className="absolute left-28 top-20 flex  gap-3.25">
          <img src={Support} alt="Support" className="h-[22.5px] w-[25px]" />

          <p className="text-[20px] font-medium text-[#F7FAFC]">Support</p>
        </div>

        
      </section>
    </div>
  );
};

export default LogInPage;