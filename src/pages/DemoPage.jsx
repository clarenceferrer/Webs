import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const demoSteps = [
  'Open the camera and let GabAI scan your surroundings.',
  'Detected objects and people are announced through clear voice prompts.',
  'Use repeat and quick-help actions whenever you need confirmation.',
]

function DemoPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#eef2f4]">
      <Navbar />

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <section className="rounded-[2rem] bg-gradient-to-r from-[#5d8bbf] via-[#6ea8cb] to-[#7ec8d0] px-6 py-10 text-white shadow-[0_10px_25px_rgba(24,43,67,0.2)] sm:px-10 sm:py-12">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/85">Demo Page</p>
          <h1 className="font-coolvetica mt-3 text-[clamp(2.1rem,7vw,3.8rem)] leading-[1.04]">See the experience in action.</h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/95 sm:text-lg">
            This demo flow highlights how GabAI identifies nearby objects, surfaces context in real-time, and guides users with low-friction voice prompts.
          </p>
        </section>

        <section className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          {demoSteps.map((step, index) => (
            <article key={step} className="rounded-3xl bg-white px-6 py-7 shadow-[0_10px_22px_rgba(39,54,77,0.08)]">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#5d8bbf]">Step {index + 1}</p>
              <p className="mt-3 text-[#49586c]">{step}</p>
            </article>
          ))}
        </section>

        <section className="mt-8 rounded-3xl bg-white px-6 py-7 shadow-[0_10px_22px_rgba(39,54,77,0.08)] sm:px-8">
          <h2 className="text-2xl font-bold text-[#2a3952]">Demo Notes</h2>
          <p className="mt-3 max-w-3xl text-[#4d5c70]">
            Replace this section with an embedded preview video or live prototype once you have final demo assets. The layout is already responsive for mobile and desktop.
          </p>
        </section>

        <section className="mt-10 flex flex-wrap gap-3">
          <Link
            to="/about"
            className="rounded-full border-2 border-[#5f7fbe] px-6 py-3 font-semibold text-[#4f6fae] transition-transform hover:-translate-y-0.5"
          >
            About GabAI
          </Link>
          <Link
            to="/how-it-works"
            className="rounded-full bg-[#5f7fbe] px-6 py-3 font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            How It Works
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default DemoPage
