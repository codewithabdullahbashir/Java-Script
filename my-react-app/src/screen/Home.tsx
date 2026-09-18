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
import S1 from "../assets/S1.png";
import S2 from "../assets/S2.png";
import Vector3 from "../assets/Vector3.png";
import Vector2 from "../assets/Vector 2.png";
import Vector1 from "../assets/Vector1.png";

const Home = () => {
  return (
    <div className="min-h-screen w-auto overflow-x-hidden bg-[#0b0218] font-sans text-white">
      <nav className="bg-[#1A0B2E]">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <img src={MyLogo} alt="Logo" className="h-6 w-6 object-contain" />

          <div className="flex gap-8 text-xs sm:gap-16">
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

      <main className="mx-auto max-w-3xl px-6">
        <section className="relative mt-12 sm:mt-20">
          <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-center">
            <div
              className="relative flex h-56 w-56 shrink-0 items-center justify-center overflow-hidden rounded-full bg-cover bg-center bg-no-repeat sm:h-64 sm:w-64"
              style={{ backgroundImage: `url(${Gradient})` }}
            >
              <img
                src={Ellipse}
                alt=""
                className="absolute inset-0 h-full w-full object-contain"
              />

              <img
                src={My}
                alt="Portrait of Abdullah"
                className="relative h-36 w-36 object-contain sm:h-40 sm:w-40"
              />
            </div>

            <div className="relative flex-1 text-center sm:text-left">
              <img
                src={Arrow}
                alt=""
                className="absolute -top-10 left-1/2 h-40 w-auto -translate-x-1/2 sm:-left-35 sm:translate-x-0"
              />

              <p className="relative mb-2 text-xs sm:mb-4">
                Hello! I Am <span className="text-purple-500">Abdullah</span>
              </p>

              <p className="text-xs">A Designer who</p>

              <h1 className="mt-1 text-3xl font-normal leading-tight sm:text-4xl">
                Judges a book
                <br />
                by its{" "}
                <span className="relative inline-block px-1 text-purple-500">
                  <span>cover</span>
                  <img
                    src={Ovel}
                    alt=""
                    className="absolute inset-0 h-full w-full"
                  />
                </span>
                ...
              </h1>

              <p className="mt-2 text-xs text-gray-300">
                Because if the cover does not impress you what else can?
              </p>
            </div>
          </div>

          <div className="mt-16 text-center sm:text-left">
            <h2 className="text-2xl font-medium sm:text-3xl">
              I'm a Software Engineer.|
            </h2>

            <p className="mt-2 flex items-center justify-center text-sm sm:justify-start">
              <span>Currently, I'm a Software Engineer at</span>

              <img
                src={Facebook}
                alt="Facebook"
                className="mx-2 h-4 w-4 object-contain"
              />

              <span>Facebook</span>
            </p>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-gray-300 sm:mx-0">
              A self-taught UI/UX designer, functioning in the industry for 3+
              years now. I make meaningful and delightful digital products that
              create an equilibrium between user needs and business goals.
            </p>
          </div>
        </section>

        <section className="relative mx-auto mt-20 max-w-195">
          <h2 className="relative z-10 mb-8 text-center text-2xl font-bold sm:text-left">
            Work Experience
          </h2>

          <img
            src={Gradient}
            alt=""
            className="pointer-events-none absolute left-1/2 top-1/2 z-0 w-162.5 -translate-x-1/2 -translate-y-1/2 opacity-80"
          />

          <div className="relative z-10 grid grid-cols-1 gap-2 md:grid-cols-2">
            <Cards
              alt="Card1"
              imageLink={Card1}
              text1="Take your client onboard seamlessly by our amazing"
              text2="tool of digital onboard process."
              text3="LEARN MORE"
              title="CIB on the Mobile"
            />

            <Cards
              alt="Card2"
              imageLink={Card2}
              text1="Take your client onboard seamlessly by our amazing"
              text2="tool of digital onboard process."
              text3="LEARN MORE"
              title="CIB on the Mobile"
            />

            <Cards
              alt="Card3"
              imageLink={Card3}
              text1="Take your client onboard seamlessly by our amazing"
              text2="tool of digital onboard process."
              text3="LEARN MORE"
              title="CIB on the Mobile"
            />

            <Cards
              alt="Card4"
              imageLink={Card4}
              text1="Take your client onboard seamlessly by our amazing"
              text2="tool of digital onboard process."
              text3="LEARN MORE"
              title="CIB on the Mobile"
            />
          </div>
        </section>

        <section className="relative mt-30 flex flex-col items-center overflow-hidden pb-10 text-center">
          <img
            src={Main}
            alt="Main"
            className="h-auto w-full max-w-145 object-contain"
          />
        </section>

        <section className="relative mx-auto mt-10 w-full max-w-184">
          <div
            className="pointer-events-none absolute -right-10 top-1/2 z-0 h-112.5 w-175 -translate-y-1/2 bg-center bg-no-repeat blur-5xl"
            style={{ backgroundImage: `url(${Gradient})` }}
          />
          <div
            className="pointer-events-none absolute -right-10 left-50 top-1/2 z-0 h-112.5 w-175 -translate-y-1/2 bg-center bg-no-repeat blur-5xl"
            style={{ backgroundImage: `url(${Gradient})` }}
          />

          <div className="relative flex flex-col gap-6 md:block md:min-h-53.5">
            <div className="relative z-20 pt-4">
              <p className="mb-1 text-xs font-bold text-purple-400">
                Featured Project
              </p>

              <h2 className="mb-5 text-[22px] font-bold leading-tight text-[#c9c9ee]">
                Example Project
              </h2>

              <div className="relative z-30 min-h-26.25 w-full max-w-105 rounded-xl bg-linear-to-r from-[#24183d]/95 via-[#4a3b70]/95 to-[#e7dff0]/90 p-5 shadow-2xl backdrop-blur-lg">
                <p className="text-[12px] leading-[1.45] text-[#CCD6F6]">
                  A web app for visualizing personalized Spotify data. View your
                  top artists, top tracks, recently played tracks, and detailed
                  audio information about each track. Create and save new
                  playlists of recommended tracks based on your existing
                  playlists and more.
                </p>
              </div>

              <div className="mt-5 flex gap-3 text-xl text-white">
                <span aria-hidden>❋</span>
                <span aria-hidden>❋</span>
              </div>
            </div>

            <div className="relative z-10 h-53.5 w-full rounded-md bg-[#310235] p-2 sm:w-91.5 md:absolute md:right-0 md:top-0">
              <img
                src={S1}
                alt="Example Project preview"
                className="h-full w-full rounded object-cover"
              />
            </div>
          </div>
        </section>

        <section className="relative mx-auto mt-10 w-full max-w-184 px-4 sm:px-0">
          <div
            className="pointer-events-none absolute -left-20 top-1/2 z-0 h-112.5 w-175 -translate-y-1/2 bg-center bg-no-repeat blur-5xl"
            style={{ backgroundImage: `url(${Gradient})` }}
          />
          <div
            className="pointer-events-none absolute -right-20 top-1/2 z-0 h-112.5 w-175 -translate-y-1/2 bg-center bg-no-repeat blur-5xl"
            style={{ backgroundImage: `url(${Gradient})` }}
          />

          <div className="relative min-h-53.5">
            <div className="relative z-20 mx-auto w-full max-w-110 text-center md:ml-auto md:mr-0 md:mt-4 md:text-right">
              <p className="mb-1 text-xs font-bold text-purple-400">
                Featured Project
              </p>

              <h2 className="mb-5 text-[22px] font-bold leading-tight text-[#c9c9ee]">
                Example Project
              </h2>

              <div className="relative z-30 h-auto min-h-26.25 w-full max-w-105 rounded-xl bg-linear-to-r from-[#e7dff0]/95 via-[#4a3b70]/95 to-[#24183d]/90 p-5 text-left shadow-2xl backdrop-blur-lg md:ml-auto">
                <p className="text-[12px] leading-[1.45] text-[#CCD6F6]">
                  A web app for visualizing personalized Spotify data. View your
                  top artists, top tracks, recently played tracks, and detailed
                  audio information about each track. Create and save new
                  playlists of recommended tracks based on your existing
                  playlists and more.
                </p>
              </div>

              <div className="mt-5 flex justify-center gap-3 text-xl text-white md:justify-end">
                <span aria-hidden>❋</span>
                <span aria-hidden>❋</span>
              </div>
            </div>

            <div className="relative z-10 mx-auto mt-6 h-53.5 w-full max-w-91.5 rounded-md bg-[#310235] md:absolute md:left-0 md:top-0 md:mx-0 md:mt-0">
              <img
                src={S2}
                alt="Example Project preview"
                className="absolute left-0 top-5 h-47.5 w-[94%] rounded-md object-cover sm:h-51 sm:w-88"
              />
            </div>
          </div>
        </section>
        <section className="mt-32 pb-24 text-center sm:text-left">
          <h1 className="text-2xl font-bold">Contact</h1>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-6 text-gray-300 sm:mx-0">
            I'm currently looking to join a cross-functional team that values
            improving people's lives through accessible design. or have a
            project in mind? Let's connect.
          </p>

          <a
            href="mailto:ibrhaimmemon930@gmail.com"
            className="mt-6 inline-block text-sm text-gray-200 hover:text-purple-400"
          >
            ibrhaimmemon930@gmail.com
          </a>

          <div className="mt-6 flex justify-center gap-4 text-xs font-bold sm:justify-start">
            <a href="#" className="flex h-9 w-9 items-center justify-center ">
              <img src={Vector1} alt="" />
            </a>

            <a href="#" className="flex h-9 w-9 items-center justify-center ">
              <img src={Vector2} alt="" />
            </a>

            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-full  "
            >
              <img src={Vector3} alt="" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;

