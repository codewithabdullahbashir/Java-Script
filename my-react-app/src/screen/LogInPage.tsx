import LoginLogo from "../assets/LoginLogo.png";
import OpenEye from "../assets/OpenEye.png";
import EyeOff from "../assets/EyeOff.png";
import LoginEllipse from "../assets/LoginEllipse.png";
import Small_Earnings from "../assets/Small_Earnings.png";
import Facebook from "../assets/Facebook.png";
import Skip from "../assets/Skip.png";
import Googel from "../assets/Google.png";
import Support from "../assets/Support.png";
import Illustration from "../assets/Illustration.png";
import { useState } from "react";

const LogInPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-white lg:grid lg:grid-cols-2">
      <section className="relative flex min-h-screen flex-col bg-white px-3.75 py-8.5">
        <div className="mx-auto mt-7.75 w-full max-w-90.5">
          <img src={LoginLogo} alt="Login Logo" className="mb-20 h-8 w-32" />

          <h1
            className="text-[48px] font-bold leading-[100%] text-[#171923]"
            style={{ fontFamily: "Helvetica" }}
          >
            Sign In
          </h1>

          <p
            className="mt-9 text-[18px] leading-[150%] text-[#718096]"
            style={{ fontFamily: "Sora" }}
          >
            Don't have an account?{" "}
            <a
              href="#signup"
              className="font-medium text-[#1C4532] underline"
              style={{ fontFamily: "Sora" }}
            >
              Create now
            </a>
          </p>

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
                className="h-14 w-full rounded-xl border border-[#CBD5E0] bg-[#F7FAFC] pl-2.5 pr-6.25 text-[16px] text-[#4A5568] outline-none focus:ring-1 focus:ring-[#CBD5E0]"
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
                  className="h-14 w-full rounded-xl border border-[#CBD5E0] pl-2.5 pr-6.25 text-[16px] text-[#4A5568] outline-none focus:ring-1 focus:ring-[#1C4532]"
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
              className="mt-17 h-14 w-full rounded-[20px] bg-[#1C4532] text-[20px] font-medium text-[#F7FAFC] transition-colors hover:bg-[#143325]"
              style={{ fontFamily: "Sora" }}
            >
              Sign in
            </button>

            <div className="my-14 flex items-center gap-4">
              <div className="h-px flex-1 bg-[#CBD5E0]" />

              <span className="text-[12px] font-medium text-[#718096]">OR</span>

              <div className="h-px flex-1 bg-[#CBD5E0]" />
            </div>

            <button
              type="button"
              className="relative flex h-15 w-full items-center justify-center rounded-[20px] border border-[#CBD5E0] text-[18px] font-medium text-[#67728A] transition-colors hover:bg-gray-50"
              style={{ fontFamily: "Sora" }}
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
                style={{ fontFamily: "Sora" }}
              />
              Continue with Facebook
            </button>
          </form>
        </div>
      </section>

      <section className="relative hidden min-h-screen overflow-hidden bg-[#1C4532] lg:block">
        <div className="absolute left-70.5 top-10 flex items-center gap-3.25">
          <img src={Support} alt="Support" className="h-[22.5px] w-6.25" />

          <p
            className="text-[20px] font-medium text-[#F7FAFC]"
            style={{ fontFamily: "Sora" }}
          >
            Support
          </p>
        </div>

        <div className="absolute left-1/2 top-40 -translate-x-1/2">
          <div className="relative h-107.5 w-162.5">
            <img
              src={LoginEllipse}
              alt="Background"
              className="absolute left-25 top-17.5 h-[433.66px] w-[466.4px]"
            />

            <div className="absolute left-30 top-13.75 h-85 w-117.5 rounded-sm bg-[#F7FAFC] p-4">
              <h2
                className="mt-10 w-62.5 text-[34px] font-bold leading-9.25 text-[#1C4532]"
                style={{ fontFamily: "Helvetica" }}
              >
                Reach financial
                <br />
                goals faster
              </h2>

              <p className="mt-5 w-62.5 text-[16px] leading-7 text-[#718096]">
                Use your Venus card around the world with no hidden fees. Hold,
                transfer and spend money.
              </p>

              <button
                className="mt-6.5 h-11.5 w-40 rounded-[70px] bg-[#1C4532] px-3.25 py-1.25 text-[14px] text-[#F7FAFC]"
                style={{ fontFamily: "Sora" }}
              >
                Learn more
              </button>

              <img
                src={Illustration}
                alt=""
                className="absolute -right-0.5 top-3.75"
              />

              <img
                src={Small_Earnings}
                alt=""
                className="absolute -right-px top-77.5 h-18"
              />
            </div>
          </div>

          <div className="mt-10 ml-30 w-117.5 text-center">
            <h1
              className="text-[40px] text-[#F7FAFC]"
              style={{ fontFamily: "Helvetica" }}
            >
              Introducing new features
            </h1>

            <p
              className="mt-10 text-[20px] leading-7.5 text-[#CFD9E0]"
              style={{ fontFamily: "Sora" }}
            >
              Analyzing previous trends ensures that businesses always make the
              right decision. And as the scale of the decision and it's impact
              magnifies...
            </p>
          </div>
          <div className="absolute left-29.5 top-185">
            <img src={Skip} alt="Skip" className="h-7.5 w-auto" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogInPage;
