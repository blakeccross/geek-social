import Image from "next/image";
import logo from "../../public/ronin.png";

export default function Home(courier: any) {
  function createMarkup() {
    return { __html: "" };
  }

  return (
    <main className="flex flex-col min-h-screen items-center justify-between p-10">
      <div className="z-10 flex w-full max-w-5xl items-center justify-center  lg:justify-between font-mono text-sm lg:flex">
        <div className="flex lg:block justify-center">
          <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-xl font-bold">Geek_Social</h1>
        </div>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-zinc-800 dark:via-zinc-800 lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sponsored By <Image key={1} src={logo} alt="Ronin Logo" className="dark:invert" width={100} height={24} priority />
          </a>
        </div>
      </div>

      <section className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-100 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <div className="py-8 px-4 mx-auto max-w-5xl  lg:py-16">
          <div className="items-center mb-8 lg:mb-24 lg:gap-12 lg:grid-cols-12">
            <div className="col-span-6 text-center sm:mb-6 lg:text-left lg:mb-0">
              <h1 className="mb-4 text-6xl text-center font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl xl:text-6xl dark:text-white font-display">
                Find Your People_
              </h1>
              <p className={"max-w-4xl mb-6 text-center text-gray lg:mx-0 xl:mb-8 md:text-lg xl:text-xl dark:text-gray-400"}>
                Geek Social is a meeting of the Geek Minds of Nashville and Middle Tennessee. It&apos;s a chance to get together, relax, and find out
                what&apos;s going on in the world away from your desk.
                <br />
                <br />
                To get Geeky with us, join our email list and receive monthly alerts and reminders about upcoming Geek Social events.
              </p>
              <form
                action="https://consulting.us21.list-manage.com/subscribe/post?u=989e2815725fb20963dcdd3b7&amp;id=ea4275d64b&amp;f_id=00045ce1f0"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                target="_blank"
                className="flex justify-center items-center"
              >
                <div className="flex justify-center items-center">
                  {/* <div className="relative">
                    <label className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
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
                      name="EMAIL"
                      id="mce-EMAIL"
                      type="email"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="w-full sm:w-auto justify-center  bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    <h5>Sign up</h5>
                    <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button> */}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `<div id="mc_embed_shell" class="justify-center items-center mx-auto mb-3 space-y-4 sm:flex lg:justify-start sm:space-y-0 sm:space-x-4">
<form action="https://consulting.us21.list-manage.com/subscribe/post?u=989e2815725fb20963dcdd3b7&amp;id=ea4275d64b&amp;f_id=00045ce1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
<div class="mc-field-group"><input type="email" name="EMAIL" class="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:w-80 xl:w-96 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" id="mce-EMAIL" required="" value=""><span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span></div>
<div hidden=""><input type="hidden" name="tags" value="2827124"></div>
<div id="mce-responses" class="clear">
<div class="response" id="mce-error-response" style="display: none;"></div>
<div class="response" id="mce-success-response" style="display: none;"></div>
</div><div aria-hidden="true" style="position: absolute; left: -5000px;"><input type="text" name="b_989e2815725fb20963dcdd3b7_ea4275d64b" tabindex="-1" value=""></div><div class="clear"><input type="submit" name="subscribe" id="mc-embedded-subscribe" class="w-full sm:w-auto justify-center  bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" value="Subscribe"></div>
</form>
</div>
<script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script><script type="text/javascript">(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';fnames[6]='MMERGE6';ftypes[6]='text';}(jQuery));var $mcj = jQuery.noConflict(true);</script></div>`,
                    }}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-5xl py-8 lg:px-6 lg:py-24">
          <div className="text-center">
            <h2 className="text-5xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl dark:text-white">Two simple rules</h2>
          </div>

          <div className="p-5 mx-auto mt-8 space-y-5 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <div className="pb-5 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Rule 1</h3>
              <p className="mt-1 text-base font-normal text-gray-500 dark:text-gray-400">
                You must be a Geek about something. It takes all kinds of Geeks to make things happen. You don&apos;t have to be a software or
                hardware engineer to be Geek. The kind of Geek you are? Embrace it. Be vocal about your area of Geek interest and bring your
                enthusiasm. We&apos;re here for it.
              </p>
            </div>

            <div className="pb-5 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Rule 2</h3>
              <p className="mt-1 text-base font-normal text-gray-500 dark:text-gray-400">
                No recruiters, please. While we appreciate and love our recruiters, the Geek Social isn&apos;t about growing our careers. It&apos;s
                about growing our community, connection, friendship, and, well...Geeking out. This rule has helped make the Geek Social what it is
                today, and we appreciate all our recruiter friends for understanding.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-5xl  antialiased">
        <div className=" px-4 py-8 lg:px-6 sm:py-16 lg:py-24">
          <div className="flex flex-col gap-8 sm:gap-12 lg:gap-16 lg:flex-row lg:items-start">
            <div>
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">Meet A Geek_</h2>
              <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
                Julie spent many years obsessively playing the text-based role-playing game DragonRealms, and building scripts for her character to
                hunt rats and gain experience, was her first exposure to coding.
              </p>
              <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
                You&apos;ll interact with talented professionals, will be challenged to solve difficult problems and think in new and creative ways.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-lg group lg:w-2/3">
              <img
                className="object-cover w-full h-[320px] lg:h-auto scale-100 ease-in duration-300 group-hover:scale-125"
                src="https://media.licdn.com/dms/image/C5603AQGv1GMAQp7Bmw/profile-displayphoto-shrink_200_200/0/1654187947016?e=1696464000&v=beta&t=ACtYVtirKjee_Wb6c6xugfmmvoIVQ-ojRi8sTVo8zn4"
                alt=""
              />
              <div className="absolute inset-0 grid items-end justify-center p-4 bg-gradient-to-b from-transparent to-black/60">
                <div className="text-center">
                  <p className="text-xl font-bold text-white">Julie Simpson </p>
                  <p className="text-base font-medium text-gray-300">Marketing Manager; Ronin Consulting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-5xl  px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">Upcoming Events</h2>
            <p className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400 sm:text-xl">
              Some of us Geeks like to plan our social engagements well in advance.
            </p>
          </div>

          <div className="flex justify-center gap-4 mt-8 xl:gap-12">
            <div className="p-5 space-y-4 bg-white border border-gray-200 rounded-lg shadow-md lg:p-8 dark:bg-gray-800 dark:border-gray-700 max-w-xl">
              <img
                className="object-cover w-full rounded-lg shadow-lg"
                src="https://media-cdn.tripadvisor.com/media/photo-s/08/11/5d/9d/taproom-main-bar.jpg"
                alt=""
              />
              <div className="m-t-4">
                <span className="text-lg font-bold leading-tight text-gray-900 dark:text-white">August Geek Social </span>
              </div>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                <b>Date: </b>Wednesday, August 9th
                <br />
                <b>Time: </b>6 pm - 8 pm
              </p>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Geeky munchies provided by Rōnin Consulting Drink specials until 8 pm.
              </p>
              {/* <div className="flex flex-col gap-4 sm:flex-row md:flex-col lg:flex-row lg:items-center">
                <a
                  href="#"
                  title=""
                  className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  role="button"
                >
                  Donate now
                </a>

                <a
                  href="mailto:someone@example.com?subject=Join Me at Geek Social!&Message=Hey! You should join me at Geek Social! Check it out. GeekSocial.com"
                  title=""
                  className="px-5 py-2.5 text-sm justify-center font-medium text-gray-900 inline-flex items-center focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  role="button"
                >
                  <svg aria-hidden="true" className="w-5 h-5 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                  </svg>
                  Share this Event
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">Made with love by your mom ❤️</span>
        </div>
      </footer>
    </main>
  );
}
