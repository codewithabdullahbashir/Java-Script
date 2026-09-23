import LoginLogo from "../assets/LoginLogo.png";
import OpenEye from "../assets/OpenEye.png";
import EyeOff from "../assets/EyeOff.png";
import LoginEllipse from "../assets/LoginEllipse.png";

import Small_Earnings from "../assets/Small_Earnings.png";
import Facebook from "../assets/Facebook.png";
import Googel from "../assets/Google.png";
import Support from "../assets/Support.png";
import Illustration from "../assets/Illustration.png";
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
        <div className="absolute left-28 top-20 flex gap-3.25">
          <img src={Support} alt="Support" className="h-[22.5px] w-[25px]" />

          <p className="text-[20px] font-medium text-[#F7FAFC]">Support</p>
        </div>

        <div className="absolute left-70 top-70 -translate-x-1/2">
          <div className="relative h-[433.66px] w-[456.74px]">
            <img
              src={LoginEllipse}
              alt="BG"
              className="absolute left-15 top-45 h-[433.66px] w-[466.4px]"
            />

            <div className="absolute ml-17 left-1.25  top-37 h-85 w-[470px] rounded-sm bg-[#F7FAFC] p-4">
              <h2 className=" mt-10 w-62.5  text-[34px] font-bold leading-[37px] text-[#1C4532]">
                Reach financial
                <br />
                goals faster
              </h2>
              <p className="mt-5 w-[250px]  text-[16px] leading-[28px] text-[#718096]">
                Use your Venus card around the world with no hidden fees. Hold,
                transfer and spend money.
              </p>
              <button className="mt-6.5 rounded-[70px] bg-[#1C4532] h-11.5 w-40 px-[13px] py-[5px] text-[14px] text-[#F7FAFC]">
                Learn more
              </button>
              <div className="relative -top-80 left-58.5">
                <img src={Illustration} alt="" />
              </div>
              
              <div className="relative -top-80 left-42">
                <img src={Small_Earnings} alt="" />
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default LogInPage;