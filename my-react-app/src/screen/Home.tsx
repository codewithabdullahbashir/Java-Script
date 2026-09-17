import MyLogo from "../assets/MyLogo.png";
import My from "../assets/My.png";
import Card4 from "../assets/Card4.png";
import Card1 from "../assets/Card1.png";
import Card2 from "../assets/Card2.png";
import Card3 from "../assets/Card3.png"; 
import Ellipse from "../assets/Ellipse.png";
import Main from "../assets/Main.png"; 
import Gradient from "../assets/Gradient.png";

const Home = () => {
  return (
    <div className="min-h-screen min-w-screen bg-[#1A0B2E] font-Helvetica text-white">
      {/* Navbar */}
      <nav className="border-b border-cyan-500">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
          <img src={MyLogo} alt="Logo" className="h-6 w-6" />

          <div className="flex gap-24 text-xs">
            <a
              href="#"
              className='font-["Helvetica"] font-bold hover:text-purple-400'
            >
              Home
            </a>

            <a
              href="#"
              className='font-["Helvetica"] font-bold hover:text-purple-400'
            >
              About
            </a>

            <a
              href="#"
              className='font-["Helvetica"] font-bold hover:text-purple-400'
            >
              Lab
            </a>
          </div>
        </div>
      </nav>
      {/* <div className="relative m-8">
        <img
          src={Ellipse}
          alt="White Shade"
          className="absolute -top-5  w-64 h-64  rounded-lg shadow-md"
        />

        <img
          src={My}
          alt="My Image"
          className="relative left-20 top-15 w-20 h-20  "
        />
      </div> */}

      {/* Main */}
      <main className="mx-auto max-w-5xl">
        {/* Hero Section */}
        <section className="relative mt-16">
          <div className="relative flex items-start justify-start">
            {/* Profile Image */}
            <div className="h-40 w-35 items-start justify-start">
              <img
                src={Ellipse}
                alt="White Shade"
                className="absolute -top-5  w-64 h-64   items-center justify-center"
              />
              <img
                src={Gradient}
                alt="Purple Shade"
                className="absolute -top-5   w-70 h-70  rounded-lg shadow-md"
              />

              <img
                src={My}
                alt="My Image"
                className="relative left-15 top-7 w-full h-full  "
              />
            </div>

            {/* Hero Text */}
            <div className="relative ml-30">
              <p className="mb-3 text-xs">
                Hello! I Am <span className="text-purple-500">Abdullah</span>
              </p>

              <p className="text-xs">A Designer who</p>

              <h1 className="text-3xl leading-8">
                Judges a book
                <br />
                by its <span className="text-purple-600">cover...</span>
              </h1>

              <p className="mt-1 text-[7px]">
                Because if the cover does not impress you what else can?
              </p>
            </div>
          </div>

          {/* Introduction */}
          <div className="mt-16">
            <h2 className="text-3xl font-medium">I'm a Software Engineer.</h2>

            <p className="mt-1 text-sm">
              Currently, I'm a Software Engineer at{" "}
              <span className="text-blue-500">● Facebook</span>
            </p>

            <p className="mt-10 max-w-xl text-sm leading-6 text-gray-200">
              A self-taught UI/UX designer, functioning in the industry for 3+
              years now. I make meaningful and delightful digital products that
              create an equilibrium between user needs and business goals.
            </p>
          </div>
        </section>

        {/* Work Experience */}
        <section className="mt-20">
          <h2 className="mb-13 text-2xl font-bold">Work Experience</h2>

          {/* Cards */}
          <div className="grid grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="flex h-[192.68px] w-[570] items-center rounded-[25px] border-t-4 border-[#4F228D] bg-[#1D0B3B] p-8">
              <div className="flex w-1/2 ">
                <img
                  src={Card1}
                  alt="CIB Mobile"
                  className="h-10px w-121.99px "
                />
              </div>

              <div className="w-1/1">
                <h4 className="text-[20px] font-helvetica font-thin">
                  CIB on the Mobile
                </h4>

                <p className="text-[6px] font-bold text-gray-300 h-3 w-40 ">
                  Take your client onboard seamlessly by our amazing tool of
                  digital onboard process.
                </p>

                <button className="bg-[#2C1250] mt-5 rounded-xl border border-[#693B93] px-6 py-2 text-xs font-bold hover:bg-purple-600">
                  LEARN MORE
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex h-[192.68px] w-[570] items-center rounded-[25px] border-t-4 border-[#4F228D] bg-[#1D0B3B] px-8">
              <div className="flex w-1/2 ">
                <img
                  src={Card2}
                  alt="CIB Web"
                  className="h-32 w-32 object-contain"
                />
              </div>

              <div className="w-1/1">
                <h4 className="text-[20px] font-helvetica font-thin">
                  CIB on the Mobile
                </h4>

                <p className="text-[6px] font-bold text-gray-300 h-3 w-40 ">
                  Take your client onboard seamlessly by our amazing tool of
                  digital onboard process.
                </p>

                <button className="bg-[#2C1250] mt-5 rounded-xl border border-[#693B93] px-6 py-2 text-xs font-bold hover:bg-purple-600">
                  LEARN MORE
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex h-[192.68px] w-[570]  items-center rounded-[25px] border-t-4 border-[#4F228D] bg-[#1D0B3B] px-8">
              <div className="flex w-1/2 ">
                <img
                  src={Card3}
                  alt="Mobile Project"
                  className="h-32 w-32 object-contain"
                />
              </div>

              <div className="w-1/1">
                <h4 className="text-[20px] font-helvetica font-thin">
                  CIB on the Mobile
                </h4>

                <p className="text-[6px] font-bold text-gray-300 h-3 w-40 ">
                  Take your client onboard seamlessly by our amazing tool of
                  digital onboard process.
                </p>

                <button className="bg-[#2C1250] mt-5 rounded-xl border border-[#693B93] px-6 py-2 text-xs font-bold hover:bg-purple-600">
                  LEARN MORE
                </button>
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex h-[192.68px] w-[570] items-center rounded-[25px] border-t-4 border-[#4F228D] bg-[#1D0B3B] px-8">
              <div className="flex w-1/2 ">
                <img
                  src={Card4}
                  alt="Web Project"
                  className="h-32 w-32 object-contain"
                />
              </div>

              <div className="w-1/1">
                <h4 className="text-[20px] font-helvetica font-thin">
                  CIB on the Mobile
                </h4>

                <p className="text-[6px] font-bold text-gray-300 h-3 w-40 ">
                  Take your client onboard seamlessly by our amazing tool of
                  digital onboard process.
                </p>

                <button className="bg-[#2C1250] mt-5 rounded-xl border border-[#693B93] px-6 py-2 text-xs font-bold hover:bg-purple-600">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        </section>
        <div className="mt-50">
          <img src={Main} alt="Main" />
        </div>
        <section>
          <div className="flex">
            <div className=""></div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
