import Image from "next/image";
import logo from "../../public/ronin.png";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between p-16">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="w-max">
          <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-xl font-bold">
            Geek_Social
          </h1>
        </div>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sponsored By{" "}
            <Image
              key={1}
              src={logo}
              alt="Ronin Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <section className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <div className="py-8 px-4 mx-auto max-w-5xl  lg:py-16">
          <div className="items-center mb-8 lg:mb-24 lg:gap-12 lg:grid-cols-12">
            <div className="col-span-6 text-center sm:mb-6 lg:text-left lg:mb-0">
              <h1 className="mb-4 text-4xl text-center font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl xl:text-6xl dark:text-white">
                Find your community
              </h1>
              <p className=" max-w-3xl mb-6 font-light text-center text-gray-500 lg:mx-0 xl:mb-8 md:text-lg xl:text-xl dark:text-gray-400">
                A meeting of the Geek Minds of Nashville and Middle Tennessee.
                It’s a chance to get together, relax, and find out what’s going
                on in the world away from your desk.
              </p>
              <form action="#" className="flex">
                <div className="justify-center items-center mx-auto mb-3 space-y-4 sm:flex lg:justify-start sm:space-y-0 sm:space-x-4">
                  <div className="relative">
                    <label className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Email address
                    </label>
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                      </svg>
                    </div>
                    <input
                      className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:w-80 xl:w-96 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Enter your email"
                      type="email"
                      id="email"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto justify-center  bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Sign up
                    <svg
                      className="ml-2 -mr-1 w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Two simple rules
            </h2>
          </div>

          <div className="max-w-3xl p-5 mx-auto mt-8 space-y-5 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <div className="pb-5 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Rule 1
              </h3>
              <p className="mt-1 text-base font-normal text-gray-500 dark:text-gray-400">
                Be a Geek about something. It takes all kinds of Geeks to make
                things happen. You don’t have to be a software or hardware
                engineer to be Geek. Just be vocal about your area of interest
                and bring your enthusiasm.
              </p>
            </div>

            <div className="pb-5 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Rule 2
              </h3>
              <p className="mt-1 text-base font-normal text-gray-500 dark:text-gray-400">
                No recruiters, please. Recruiters are a vital part of the Geek
                ecosystem and they bring a very valuable service to the party,
                but the Geek Social is all about the people who make the
                technology work. This has helped make the Geek Social what it is
                today and we appreciate all our recruiter friends for
                understanding.
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            Made with love by your mom ❤️
          </span>
        </div>
      </footer>
    </main>
  );
}
