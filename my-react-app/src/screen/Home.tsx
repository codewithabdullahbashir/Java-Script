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

const Home = () => {
  return (
    <div className="min-h-screen w-auto bg-[#0b0218] font-sans text-white overflow-x-hidden">
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

      <main className="mx-auto max-w-5xl px-6">
        <section className="relative mt-12 sm:mt-20">
          <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-start">
            <div className="relative flex h-56 w-56 shrink-0 items-center justify-center sm:h-64 sm:w-64">
              <img
                src={Ellipse}
                alt=""
                className="absolute inset-0 h-full w-full object-contain"
              />
              <img
                src={Gradient}
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
                className="absolute -top-6 left-1/2 -translate-x-1/2 sm:-left-10 sm:translate-x-0 h-16 w-auto"
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
                  <img
                    src={Ovel}
                    alt=""
                    className="absolute inset-0 -z-10 h-full w-full object-fill"
                  />
                  <span>cover</span>
                </span>
                ...
              </h1>

              <p className="mt-2 text-xs text-gray-300">
                Because if the cover does not impress you what else can?
              </p>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-medium sm:text-3xl">
              I'm a Software Engineer.
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

            <p className="mt-6 max-w-xl text-sm leading-relaxed text-gray-300">
              A self-taught UI/UX designer, functioning in the industry for 3+
              years now. I make meaningful and delightful digital products that
              create an equilibrium between user needs and business goals.
            </p>
          </div>
        </section>

        <section className="mt-20">
          <h2 className="mb-8 text-2xl font-bold">Work Experience</h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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

        <section className="relative mt-20 flex flex-col items-center overflow-hidden pb-10 text-center">
          <img src={Main} alt="Main" className="h-auto max-w-full" />
        </section>

        <section className="relative mt-10">
          <div className="pointer-events-none absolute -right-10 top-1/2 h-72 w-96 -translate-y-1/2 rounded-full bg-purple-700/20 blur-[100px]" />

          <div className="relative grid grid-cols-1 items-center gap-0 md:grid-cols-12">
            <div className="z-20 md:col-span-7">
              <p className="mb-2 text-xs font-bold text-purple-400">
                Featured Project
              </p>
              <h2 className="mb-6 text-3xl font-bold text-white">
                Example Project
              </h2>

              <div className="rounded-2xl  bg-linear-to-r from-[#41346e]/98 via-[#41346e]/90 to-[#e8ddf1]/85 p-6 backdrop-blur-lg shadow-2xl md:-mr-10">
                <p className="text-[18px] leading-relaxed text-white">
                  A web app for visualizing personalized Spotify data. View your
                  <br />
                  top artists, top tracks, recently played tracks, and detailed
                  audio <br />
                  information about each track. Create and save new playlists{" "}
                  <br />
                  of recommended tracks based on your existing playlists and
                  more.
                </p>
              </div>

              <div className="mt-5 flex gap-3 text-xl text-white">
                <div className="mt-5 flex gap-2 text-xl text-white">
                  <span aria-hidden>❋</span>
                  <span aria-hidden>❋</span>
                </div>
              </div>
            </div>
            <div className="relative mt-8 md:col-span-5 md:mt-0">
              <div className="relative -left-1 bg-linear-to-br h-full w-full rounded-2xl bg-[#311158] p-2">
                <img
                  src={S1}
                  alt="Example Project preview"
                  className="relative w-full rounded-xl border object-cover border-[#693B93]/40 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="relative mt-10">
          <div className="pointer-events-none absolute -right-10 top-1/2 h-72 w-96 -translate-y-1/2 rounded-full bg-purple-700/20 blur-[100px]" />

          <div className="relative grid grid-cols-1 items-center gap-0 md:grid-cols-12">
            <div className="relative mt-8 md:col-span-5 md:mt-0">
              <div className="relative -left-1 bg-linear-to-br h-full w-full rounded-2xl bg-[#311158] p-2">
                <img
                  src={S1}
                  alt="Example Project preview"
                  className="relative w-full rounded-xl border object-cover border-[#693B93]/40 shadow-2xl"
                />
              </div>
            </div>
            <div className="z-20 md:col-span-7">
              <p className="mb-2 text-xs font-bold text-purple-400">
                Featured Project
              </p>
              <h2 className="mb-6 text-3xl font-bold text-white">
                Example Project
              </h2>

              <div className="rounded-2xl  bg-linear-to-r from-[#41346e]/98 via-[#41346e]/90 to-[#e8ddf1]/85 p-6 backdrop-blur-lg shadow-2xl md:-mr-10">
                <p className="text-[18px] leading-relaxed text-white">
                  A web app for visualizing personalized Spotify data. View your
                  <br />
                  top artists, top tracks, recently played tracks, and detailed
                  audio <br />
                  information about each track. Create and save new playlists{" "}
                  <br />
                  of recommended tracks based on your existing playlists and
                  more.
                </p>
              </div>

              <div className="mt-5 flex gap-3 text-xl text-white">
                <div className="mt-5 flex gap-2 text-xl text-white">
                  <span aria-hidden>❋</span>
                  <span aria-hidden>❋</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-32 pb-24">
          <h1 className="text-2xl font-bold">Contact</h1>

          <p className="mt-6 max-w-xl text-sm leading-6 text-gray-300">
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

          <div className="mt-6 flex gap-4 text-xs font-bold">
            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-600 hover:border-purple-400 hover:text-purple-400"
            >
              IG
            </a>
            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-600 hover:border-purple-400 hover:text-purple-400"
            >
              Dr
            </a>
            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-600 hover:border-purple-400 hover:text-purple-400"
            >
              G
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
