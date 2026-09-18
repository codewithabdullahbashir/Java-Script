import Logo from "../assets/Logo.png";
import SignupImg from "../assets/SignupImg.png";

const Signup = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <header className="mx-auto flex h-16 max-w-6xl items-center justify-end px-6">
        <img src={Logo} alt="Your Logo" className="h-7 w-auto object-contain" />
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
            <form>
              <h1 className="text-[40px] font-semibold text-slate-900">
                Sign up
              </h1>
              <p className="mt-1 text-[16px] text-gray-500">
                Let's get you all set up so you can access your personal
                account.
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div>
                  <label className="mb-1 block text-[14px] text-gray-600">
                    First Name
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="h-9.75 w-full rounded-sm border border-gray-300 px-2 text-[16px] outline-none focus:border-indigo-500"
                    />
                  </label>
                </div>
                <div>
                  <label className="mb-1 block text-[14px] text-gray-600">
                    Last Name
                    <input
                      type=""
                      placeholder="Last Name"
                      className="h-9.75 w-full rounded-sm border border-gray-300 px-2 text-[16px] outline-none focus:border-indigo-500"
                    />
                  </label>
                </div>
              </div>
              <div className="mt-2 grid grid-cols-2 gap-2">
                <div>
                  <label className="mb-1 block text-[14px] text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="@gmail.com"
                    className="h-9.75 w-full rounded-sm border border-gray-300 px-2 text-[16px] outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-[14px] text-gray-600">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+92 3000000000"
                    className="h-9.75 w-full rounded-sm border border-gray-300 px-2 text-[16px] outline-none focus:border-indigo-500"
                  />
                </div>
              </div>
              <div className="mt-2">
                <label className="mb-1 block text-[14px] text-gray-600">
                  Password
                </label>

                <div className="relative">
                  <input
                    type="password"
                    placeholder="**4******************f"
                    className="h-9.75 w-full rounded-sm border border-gray-300 px-2 pr-8 text-[16px] outline-none focus:border-indigo-500"
                  />
                </div>
              </div>
              <div className="mt-2">
                <label className="mb-1 block text-[14px] text-gray-600">
                  Confirm Password
                </label>

                <div className="relative">
                  <input
                    type="password"
                    placeholder="**4******************f"
                    className="h-9.75 w-full rounded-sm border border-gray-300 px-2 pr-8 text-[16px] outline-none focus:border-indigo-500"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Signup;
