import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import handPhoneImage from '../assets/images/HandPhone.png'
import yoloLogo from '../assets/images/yolo-logo-2.png'
import roboflowLogo from '../assets/images/roboflow2.png'
import phoneImage from '../assets/images/phone.png'

const features = [
  {
    title: 'Object Detection',
    description: 'Identify everyday objects with real-time bounding boxes for safer navigation.',
    iconColor: '#5fa3a2',
    icon: (
      <svg viewBox="0 0 24 24" className="h-12 w-12 sm:h-14 sm:w-14" aria-hidden="true">
        <path d="M5 5h4v2H7v2H5V5zm10 0h4v4h-2V7h-2V5zM5 15h2v2h2v2H5v-4zm12 2h-2v2h4v-4h-2v2zM8 8h8v8H8V8zm2 2v4h4v-4h-4z" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'People Detection',
    description: 'Detect human presence for safer movement in crowded or unfamiliar spaces.',
    iconColor: '#f59e0b',
    icon: (
      <svg viewBox="0 0 24 24" className="h-12 w-12 sm:h-14 sm:w-14" aria-hidden="true">
        <path d="M12 3a4 4 0 100 8 4 4 0 000-8zm0 10c-4.4 0-8 2.2-8 5v3h16v-3c0-2.8-3.6-5-8-5z" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Voice Guidance',
    description: 'Hear clear audio descriptions of your surroundings in real time.',
    iconColor: '#b24a4c',
    icon: (
      <svg viewBox="0 0 24 24" className="h-12 w-12 sm:h-14 sm:w-14" aria-hidden="true">
        <path d="M12 14a3 3 0 003-3V7a3 3 0 10-6 0v4a3 3 0 003 3zm5-3a1 1 0 112 0 7 7 0 01-6 6.92V21h3a1 1 0 110 2H8a1 1 0 110-2h3v-3.08A7 7 0 015 11a1 1 0 112 0 5 5 0 0010 0z" fill="currentColor" />
      </svg>
    ),
  },
]

const privacyHighlights = [
  {
    title: 'On-Device Processing',
    description: 'Your camera stays private',
    icon: (
      <svg viewBox="0 0 24 24" className="h-10 w-10 sm:h-11 sm:w-11" aria-hidden="true">
        <path
          d="M9 2h6a2 2 0 012 2v16a2 2 0 01-2 2H9a2 2 0 01-2-2V4a2 2 0 012-2zm0 3v14h6V5H9zm3 12.2a1 1 0 110 2 1 1 0 010-2z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: 'No Log In Required',
    description: 'Use instantly without accounts',
    isFeatured: true,
    icon: (
      <svg viewBox="0 0 24 24" className="h-12 w-12 sm:h-14 sm:w-14" aria-hidden="true">
        <path
          d="M8 7V5a4 4 0 118 0v2h1a2 2 0 012 2v9a2 2 0 01-2 2H7a2 2 0 01-2-2V9a2 2 0 012-2h1zm2 0h4V5a2 2 0 10-4 0v2zm2 9a2 2 0 100-4 2 2 0 000 4z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: 'No Data Storage',
    description: 'Nothing is saved or collected',
    icon: (
      <svg viewBox="0 0 24 24" className="h-10 w-10 sm:h-11 sm:w-11" aria-hidden="true">
        <path
          d="M12 3a9 9 0 100 18 9 9 0 000-18zm0 2a7 7 0 014.78 12.11L6.89 7.22A6.97 6.97 0 0112 5zm-4.78 1.89l9.89 9.89A7 7 0 017.22 6.89z"
          fill="currentColor"
        />
      </svg>
    ),
  },
]

function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f1f1f3]">
      <Navbar />

      <section className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 px-4 pb-0 pt-8 sm:gap-5 sm:px-6 sm:pt-6 md:pb-0 lg:min-h-[calc(100vh-64px)] lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-8 lg:px-8 lg:pt-6">
        <div className="w-full md:pr-0">
          <h1 className="font-coolvetica block overflow-visible bg-gradient-to-r from-[#65bcc6] to-[#5268a8] bg-clip-text pb-3 text-[clamp(2.2rem,9.4vw,4.4rem)] leading-[1.03] tracking-tight text-transparent sm:text-[3.9rem] md:text-[4.25rem] lg:text-[5.1rem]">
            Empowering Vision
            <br />
            <span>through AI</span>
          </h1>

          <p className="mt-4 max-w-[640px] text-base leading-[1.45] text-[#363943] sm:text-[1.45rem] sm:leading-[1.3] md:mt-5 md:text-[1.75rem] md:leading-[1.24] lg:text-[2.05rem] lg:leading-[1.2]">
            A privacy-first mobile application that helps visually impaired individuals navigate their world through real-time object and people detection with voice guidance
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <button className="w-full rounded-full bg-gradient-to-r from-[#65bcc6] to-[#6f8cc6] px-6 py-2.5 text-base font-bold text-white transition-transform hover:-translate-y-0.5 sm:w-auto sm:text-base md:text-lg lg:text-2xl">
              Connect Device
            </button>
            <button className="w-full rounded-full border-2 border-[#6f8cc6] bg-transparent px-6 py-2.5 text-base font-bold text-[#5e79b5] transition-transform hover:-translate-y-0.5 sm:w-auto sm:text-base md:text-lg lg:text-2xl">
              Watch Demo
            </button>
          </div>
        </div>

        <div className="-mb-1 flex items-end justify-center sm:mb-0 lg:h-full lg:self-end lg:justify-end">
          <img
            src={handPhoneImage}
            alt="Person holding a phone"
            className="h-auto w-full max-w-[340px] object-contain object-bottom sm:max-w-[380px] md:max-w-[420px] lg:max-w-[650px]"
          />
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-b from-[#78c8d8] via-[#8ecede] to-[#d9e1e7] px-4 py-12 sm:px-6 sm:py-14 md:px-8 md:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="font-coolvetica text-center text-[clamp(2rem,7vw,3.75rem)] font-bold tracking-[0.02em] text-white">Who we serve</h2>
          <p className="mx-auto mt-4 max-w-5xl text-center text-base leading-[1.4] text-white sm:text-lg md:text-[clamp(1.4rem,3.2vw,2.5rem)] md:leading-[1.18]">
            Designed with accessibility and independence in mind for those who need it most
          </p>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 md:gap-6 lg:mt-14 lg:grid-cols-2">
            <article className="rounded-[1.5rem] bg-[#f0f0f1] px-5 py-6 text-center shadow-[0_6px_14px_rgba(0,0,0,0.14)] sm:px-7 sm:py-7 md:px-9 md:py-9">
              <h3 className="text-[clamp(1.35rem,4.4vw,2.2rem)] font-bold leading-tight text-[#33343f]">Visually Impaired</h3>
              <p className="mx-auto mt-4 max-w-[34ch] text-base leading-[1.35] text-[#5f616b] sm:text-lg md:text-[clamp(1.1rem,2.1vw,1.45rem)] md:leading-[1.28]">
                Navigate environments independently with real-time audio descriptions of objects and people around you.
              </p>
            </article>

            <article className="rounded-[1.5rem] bg-[#f0f0f1] px-5 py-6 text-center shadow-[0_6px_14px_rgba(0,0,0,0.14)] sm:px-7 sm:py-7 md:px-9 md:py-9">
              <h3 className="text-[clamp(1.35rem,4.4vw,2.2rem)] font-bold leading-tight text-[#33343f]">Caregivers</h3>
              <p className="mx-auto mt-4 max-w-[34ch] text-base leading-[1.35] text-[#5f616b] sm:text-lg md:text-[clamp(1.1rem,2.1vw,1.45rem)] md:leading-[1.28]">
                Support your loved ones with a reliable assistive tool that enhances their daily independence and safety.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(to_top,_#78c8d8_0%,_#8ecede_1%,_#d9e1e7_7%,_#d9e1e7_100%)] px-4 py-12 sm:px-6 sm:py-14 md:px-8 md:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-6xl">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8">
            <img src={yoloLogo} alt="YOLOv8 logo" className="h-auto w-[clamp(8rem,30vw,13rem)] max-w-full object-contain" />
            <img src={roboflowLogo} alt="Roboflow logo" className="h-auto w-[clamp(8rem,30vw,13rem)] max-w-full object-contain" />
          </div>

          <h2 className="font-coolvetica mt-8 text-center text-[clamp(1.75rem,6vw,3rem)] font-bold leading-tight tracking-[0.02em] text-[#2f3340] sm:mt-10">Core Features</h2>
          <p className="mx-auto mt-3 max-w-3xl text-center text-sm leading-relaxed text-[#59606d] sm:text-base md:text-lg">
            Powerful AI technology made simple and accessible.
          </p>

          <div className="mt-8 mb-12 grid grid-cols-1 items-center gap-8 sm:mt-9 sm:mb-14 md:mt-10 md:mb-16 md:grid-cols-[0.95fr_1.05fr] md:gap-6 lg:gap-10">
            <div className="flex justify-center md:justify-center">
              <img
                src={phoneImage}
                alt="GabAI app preview on phone"
                className="h-auto w-full max-w-[260px] object-contain drop-shadow-[0_16px_24px_rgba(0,0,0,0.25)] sm:max-w-[300px] md:max-w-[340px] lg:max-w-[380px]"
              />
            </div>

            <div className="space-y-8 sm:space-y-10 md:space-y-12">
              {features.map((feature) => (
                <article key={feature.title} className="flex items-start gap-4 py-1 sm:gap-5">
                  <div className="mt-0.5 shrink-0" style={{ color: feature.iconColor }}>{feature.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold leading-tight text-[#22242c] sm:text-3xl lg:text-4xl">{feature.title}</h3>
                    <p className="mt-1 text-base leading-relaxed text-[#505662] sm:text-lg lg:text-xl">{feature.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#ececef] px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20">
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="font-coolvetica text-center text-[clamp(2rem,6vw,3.5rem)] font-bold leading-tight tracking-[0.02em] text-[#443092]">Privacy First Design</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-lg leading-relaxed text-[#443092] sm:text-xl">
            Your privacy and security are our top priorities
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-3 md:items-center md:gap-5 lg:gap-7">
            {privacyHighlights.map((item) => (
              <article
                key={item.title}
                className={`rounded-[2rem] bg-gradient-to-b from-[#81c8e2] to-[#d7e7ef] px-6 py-10 text-center sm:px-8 ${
                  item.isFeatured
                    ? 'md:-translate-y-2 md:min-h-[380px] md:px-10 md:py-12'
                    : 'md:min-h-[330px] md:px-7 md:py-9 md:scale-[0.94]'
                }`}
              >
                <div className="mx-auto flex w-fit items-center justify-center text-[#49358f]">{item.icon}</div>
                <h3
                  className={`mt-5 font-bold leading-tight text-white ${
                    item.isFeatured ? 'text-[clamp(2rem,3.2vw,2.9rem)]' : 'text-[clamp(1.7rem,2.3vw,2.2rem)]'
                  }`}
                >
                  {item.title}
                </h3>
                <p className="mx-auto mt-4 max-w-[18ch] text-[clamp(1.2rem,2vw,2rem)] font-medium leading-snug text-[#443092]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default HomePage
