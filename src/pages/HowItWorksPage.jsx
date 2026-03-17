import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const flow = [
  {
    title: 'Capture',
    description: 'The mobile camera provides a continuous visual stream for scene analysis.',
  },
  {
    title: 'Detect',
    description: 'A trained model recognizes objects and nearby people in real-time.',
  },
  {
    title: 'Guide',
    description: 'GabAI speaks concise, contextual prompts so users can move with confidence.',
  },
]

function HowItWorksPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f1f4f6]">
      <Navbar />

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <section className="rounded-[2rem] bg-gradient-to-r from-[#6fc2cd] via-[#8dcfe0] to-[#b5dce8] px-6 py-10 text-[#26384a] shadow-[0_10px_25px_rgba(26,47,62,0.16)] sm:px-10 sm:py-12">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#355067]">How It Works</p>
          <h1 className="font-coolvetica mt-3 text-[clamp(2.1rem,7vw,3.8rem)] leading-[1.04] text-[#243448]">From camera input to spoken support in seconds.</h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#314a63] sm:text-lg">
            The system is intentionally simple: capture the scene, run local AI detection, then present audible results that help users decide where to move next.
          </p>
        </section>

        <section className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          {flow.map((item, index) => (
            <article key={item.title} className="rounded-3xl bg-white px-6 py-7 shadow-[0_10px_22px_rgba(39,54,77,0.08)]">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#648ab4]">Phase {index + 1}</p>
              <h2 className="mt-2 text-2xl font-bold text-[#2a3952]">{item.title}</h2>
              <p className="mt-3 text-[#4d5c70]">{item.description}</p>
            </article>
          ))}
        </section>

        <section className="mt-8 rounded-3xl bg-white px-6 py-7 shadow-[0_10px_22px_rgba(39,54,77,0.08)] sm:px-8">
          <h2 className="text-2xl font-bold text-[#2a3952]">Privacy by Default</h2>
          <p className="mt-3 max-w-3xl text-[#4d5c70]">
            Core processing is designed for on-device operation, minimizing data exposure and preserving user trust while still providing useful guidance.
          </p>
        </section>

        <section className="mt-10 flex flex-wrap gap-3">
          <Link
            to="/about"
            className="rounded-full border-2 border-[#5f7fbe] px-6 py-3 font-semibold text-[#4f6fae] transition-transform hover:-translate-y-0.5"
          >
            About
          </Link>
          <Link
            to="/demo"
            className="rounded-full bg-[#5f7fbe] px-6 py-3 font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            Demo
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default HowItWorksPage
