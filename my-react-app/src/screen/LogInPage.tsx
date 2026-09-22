import LoginLogo from "../assets/LoginLogo.png";

const LogInPage = () => {
  return (
    <div className="grid grid-cols-2 h-screen w-full">
      <section className="h-full w-full bg-white">
        <form>
          <div className="flex text-center  ">
            <img src={LoginLogo} alt="Login Logo" className="h-8 w-31" />
          </div>
          <div>
            <h1 className="text-[48px] text-[#171923] font-bold">Sign In</h1>
            <p className="text-[18px] text-[#718096] ">
              Don't have an account ?{" "}
              <span className="text-[#1C4532] underline">Create Now</span>
            </p>
          </div>
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="email"
              placeholder="example@gmail.com"
              className="w-102 h-13.75 border rounded-md px-3 py-2"
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="password" className="text-[#718096] text-[16px]">
              E-mail
            </label>
            <input
              id="password"
              type="password"
              placeholder="@#*%%!&"
              className="w-102 h-13.75 border rounded-md px-3 py-2"
            />
          </div>
          <div className="mt-3.5 h-[24px] w-[502px]">
            <p className="underline underline-offset-5 text-[#1C4532] text-[16px] font-medium">
              Forgot Password?
            </p>
          </div>
          <button className="h-13.25 w-102  mt-20 bg-[#1C4532] border rounded-[20px]">
            Sign in
          </button>
          <div className="mt-15 flex items-center gap-2">
            <div className="h-[0.5px] flex-1 bg-[#313131]" />
            <span
              className="text-[14px] font-normal text-[#313131]"
              style={{ fontFamily: "Helvetica" }}
            >
              Or
            </span>
            <div className="h-[0.5px] flex-1 bg-[#313131]" />
          </div>
        </form>
      </section>
      <section className="h-full w-full bg-[#1C4532]"></section>
    </div>
  );
};

export default LogInPage;
