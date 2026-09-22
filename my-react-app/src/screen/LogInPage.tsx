import LoginLogo from "../assets/LoginLogo.png"

const LogInPage = () => {
  return (
    <div className="grid grid-cols-2 h-screen w-full">
      <section className="h-full w-full bg-white">
        <div className="flex text-center  ">
          <img src={LoginLogo} alt="Login Logo" className="h-8 w-31" />
        </div>
      </section>
      <section className="h-full w-full bg-[#1C4532]"></section>
    </div>
  );
};

export default LogInPage;
