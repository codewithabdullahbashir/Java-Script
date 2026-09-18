import Logo from "../assets/Logo.png";
import SignupImg from "../assets/SignupImg.png";

const Signup = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <header className="mx-auto flex h-16 max-w-7xl items-center justify-end px-6">
        <img src={Logo} alt="App Logo" className="h-8 w-auto object-contain" />
      </header>
      <main className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-8 md:grid-cols-2">
        <div className="flex justify-strat">
          <img
            src={SignupImg}
            alt="Sign up illustration"
            className="h-auto max-h-150 w-full max-w-md object-contain"
          />
        </div>
      </main>
    </div>
  );
};

export default Signup;
