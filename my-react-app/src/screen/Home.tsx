import MyLogo from "../assets/MyLogo.png";
import My from "../assets/My.png";
import Card4 from "../assets/Card4.png";
import Card1 from "../assets/Card1.png";
import Card2 from "../assets/Card2.png";
import Card3 from "../assets/Card3.png";
import Ellipse from "../assets/Ellipse.png";
import Main from "../assets/Main.png";
import Gradient from "../assets/Gradient.png";
import Arrow from "../assets/Arrow.png";
import Ovel from "../assets/Ovel.png";
import Facebook from "../assets/Facebook.png";

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-[#1A0B2E] font-Helvetica text-white">
      {/* NAV */}
      <nav className="border-b border-cyan-500/30">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
          <img src={MyLogo} alt="Logo" className="h-6 w-6" />

          <div className="flex gap-24 text-xs">
            <a href="#" className="font-bold hover:text-purple-400">
              Home
            </a>
            <a href="#" className="font-bold hover:text-purple-400">
              About
            </a>
            <a href="#" className="font-bold hover:text-purple-400">
              Lab
            </a>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-5xl px-6">
        {/* HERO */}
        <section className="relative mt-30">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:justify-between">
            {/* Avatar with glow */}
            <div className="relative flex h-64 w-64 shrink-0 items-center justify-center">
              <img
                src={Ellipse}
                alt=""
                className="absolute inset-0 h-full w-full object-contain inline"
              />
              <img
                src={Gradient}
                alt=""
                className="absolute inset-0 h-full w-full object-contain"
              />
              <img
                src={My}
                alt="Portrait of Abdullah"
                className="relative z-10 h-40 w-40 object-contain"
              />
            </div>

            {/* Intro copy */}
            <div className="relative flex-1 text-center sm:text-left">
              <p className="relative mb-3  text-xs">
                <img
                  src={Arrow}
                  alt=""
                  className="absolute -left-25 -top-15 h-47.82px w-78.34px "
                />
                Hello! I Am <span className="text-purple-500">Abdullah</span>
              </p>

              <p className="text-xs">A Designer who</p>

              <h1 className="mt-1 text-3xl leading-9 sm:text-4xl">
                Judges a book
                <br />
                by its
                <span className="relative inline-block px-2 text-purple-500">
                  <img
                    src={Ovel}
                    alt=""
                    className="absolute inset-0 z-0 h-full w-full "
                  />
                  <span className="relative z-10">cover</span>
                </span>
                ...
              </h1>

              <p className="mt-2 text-[11px] text-gray-400">
                Because if the cover does not impress you what else can?
              </p>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-medium">I'm a Software Engineer.</h2>

            <p className="mt-2 text-sm">
              Currently, I'm a Software Engineer at{" "}
              <img
                src={Facebook}
                alt="Facebook"
                className="mx-1 inline-block h-3 w-4 align-middle object-contain"
              />
              Facebook
            </p>

            <p className="mt-10 max-w-xl text-sm leading-6 text-gray-300">
              A self-taught UI/UX designer, functioning in the industry for 3+
              years now. I make meaningful and delightful digital products that
              create an equilibrium between user needs and business goals.
            </p>
          </div>
        </section>

        {/* WORK EXPERIENCE */}
        <section className="mt-20">
          <h2 className="mb-8 text-2xl font-bold">Work Experience</h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex min-h-47.5 items-center gap-6 rounded-[25px] border-t-4 border-[#4F228D] bg-[#1D0B3B] p-8">
              <img
                src={Card1}
                alt="CIB Mobile"
                className="h-20 w-20 shrink-0 object-contain"
              />
              <div>
                <h4 className="text-xl font-light">CIB on the Mobile</h4>
                <p className="mt-1 flex items-start gap-2 text-xs text-gray-400">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-400" />
                  Take your client onboard seamlessly by our amazing tool of
                  digital onboard process.
                </p>
                <button className="mt-5 rounded-xl border border-[#693B93] bg-[#2C1250] px-6 py-2 text-xs font-bold hover:bg-purple-600">
                  LEARN MORE
                </button>
              </div>
            </div>

            <div className="flex min-h-47.5 items-center gap-6 rounded-[25px] border-t-4 border-[#4F228D] bg-[#1D0B3B] p-8">
              <img
                src={Card2}
                alt="CIB Web"
                className="h-20 w-20 shrink-0 object-contain"
              />
              <div>
                <h4 className="text-xl font-light">CIB on the Mobile</h4>
                <p className="mt-1 flex items-start gap-2 text-xs text-gray-400">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-400" />
                  Take your client onboard seamlessly by our amazing tool of
                  digital onboard process.
                </p>
                <button className="mt-5 rounded-xl border border-[#693B93] bg-[#2C1250] px-6 py-2 text-xs font-bold hover:bg-purple-600">
                  LEARN MORE
                </button>
              </div>
            </div>

            <div className="flex min-h-47.5 items-center gap-6 rounded-[25px] border-t-4 border-[#4F228D] bg-[#1D0B3B] p-8">
              <img
                src={Card3}
                alt="Mobile Project"
                className="h-20 w-20 shrink-0 object-contain"
              />
              <div>
                <h4 className="text-xl font-light">CIB on the Mobile</h4>
                <p className="mt-1 flex items-start gap-2 text-xs text-gray-400">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-400" />
                  Take your client onboard seamlessly by our amazing tool of
                  digital onboard process.
                </p>
                <button className="mt-5 rounded-xl border border-[#693B93] bg-[#2C1250] px-6 py-2 text-xs font-bold hover:bg-purple-600">
                  LEARN MORE
                </button>
              </div>
            </div>

            <div className="flex min-h-47.5 items-center gap-6 rounded-[25px] border-t-4 border-[#4F228D] bg-[#1D0B3B] p-8">
              <img
                src={Card4}
                alt="Web Project"
                className="h-20 w-20 shrink-0 object-contain"
              />
              <div>
                <h4 className="text-xl font-light">CIB on the Mobile</h4>
                <p className="mt-1 flex items-start gap-2 text-xs text-gray-400">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-400" />
                  Take your client onboard seamlessly by our amazing tool of
                  digital onboard process.
                </p>
                <button className="mt-5 rounded-xl border border-[#693B93] bg-[#2C1250] px-6 py-2 text-xs font-bold hover:bg-purple-600">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* LOOKING FOR A TEAM */}
        <section className="relative mt-32 flex flex-col items-center overflow-hidden pb-10 text-center">
          <img src={Main} alt="Main" />
        </section>
      </main>
    </div>
  );
};

export default Home;
