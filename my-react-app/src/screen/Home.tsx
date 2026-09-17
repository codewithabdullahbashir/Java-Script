import MyLogo from "../assets/MyLogo.png";
import My from "../assets/My.png";
import Card1 from "../assets/Card1.png";
import Card4 from "../assets/Card4.png";
import Card2 from "../assets/Card2.png";
import Card3 from "../assets/Card3.png";
import Ellipse from "../assets/Ellipse.png";
import Main from "../assets/Main.png";
import Gradient from "../assets/Gradient.png";
import Arrow from "../assets/Arrow.png";
import Ovel from "../assets/Ovel.png";
import Facebook from "../assets/Facebook.png";
import Cards from "../components/Cards";

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-[#0b0218] font-Helvetica text-white">
      <nav className="bg-[#1A0B2E]">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <img src={MyLogo} alt="Logo" className="h-6 w-6 " />

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
        <section className="relative mt-20">
          <div className="flex flex-col items-start sm:flex-row sm:items-start sm:justify-start">
            <div className="relative flex h-64 w-50 shrink-0 items-center justify-center">
              <img
                src={Ellipse}
                alt=""
                className="absolute inset-0 h-400px w-400px object-contain inline"
              />
              <img
                src={Gradient}
                alt=""
                className="absolute inset-0 h-full w-full object-contain"
              />
              <img
                src={Gradient}
                alt=""
                className="absolute inset-0 h-80 w-100% object-contain  "
              />
              <img
                src={My}
                alt="Portrait of Abdullah"
                className="relative h-40 w-40 object-contain"
              />
            </div>
            <div className="relative flex-3 text-left sm:text-start">
              <img
                src={Arrow}
                alt=""
                className="absolute -left-22 -top-5 h-25 w-20px "
              />
              <p className="relative mb-15 mr-10  text-xs">
                Hello! I Am <span className="text-purple-500">Abdullah</span>
              </p>

              <p className="text-xs">A Designer who</p>

              <h5 className="mt-1 leading-12 sm:text-4xl">
                Judges a book
                <br />
                by its
                <span className="relative inline-block px-2 text-purple-500">
                  <img
                    src={Ovel}
                    alt=""
                    className="absolute left-1 - bottom-1 h-11 "
                  />{" "}
                  <span className="relative  sm:text-4xl"> cover</span>
                </span>
                ...
              </h5>

              <p className="mt-2 text-[11px] text-[#FFFFFF]">
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
        <section className="mt-20">
          <h2 className="mb-8 text-2xl font-bold">Work Experience</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 bg-[url(/assets/Gradient.png)] bg-cover bg-center h-screen w-full">
            <Cards
              alt="Card4"
              imageLink={Card1}
              text1="Take your client onboard seamlessly by our amazing"
              text2="tool of digital onboard process."
              text3="Learn More"
              title="CIB on the Mobile"
            />

            <Cards
              alt="Card4"
              imageLink={Card2}
              text1="Take your client onboard seamlessly by our amazing"
              text2="tool of digital onboard process."
              text3="Learn More"
              title="CIB on the Mobile"
            />

            <Cards
              alt="Card4"
              imageLink={Card3}
              text1="Take your client onboard seamlessly by our amazing"
              text2="tool of digital onboard process."
              text3="Learn More"
              title="CIB on the Mobile"
            />
            <Cards
              alt="Card4"
              imageLink={Card4}
              text1="Take your client onboard seamlessly by our amazing"
              text2="tool of digital onboard process."
              text3="Learn More"
              title="CIB on the Mobile"
            />
          </div>
        </section>
        <section className="relative mt-32 flex flex-col items-center overflow-hidden pb-10 text-center">
          <img src={Main} alt="Main" />
        </section>
      </main>
    </div>
  );
};

export default Home;
