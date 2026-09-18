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
              <h1 className="text-2xl font-semibold text-slate-900">Sign up</h1>

              <p className="mt-1 text-[9px] text-gray-500">
                Let's get you all set up so you can access your personal
                account.
              </p>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Signup;
