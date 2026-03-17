import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f1f1f3]">
      <Navbar />

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <section className="rounded-[2rem] bg-gradient-to-br from-[#69bfd0] via-[#7ec8d0] to-[#9cd9df] px-6 py-10 text-white shadow-[0_10px_25px_rgba(28,52,68,0.18)] sm:px-10 sm:py-12">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/85">About GabAI</p>
          <h1 className="font-coolvetica mt-3 text-[clamp(2.2rem,7vw,4rem)] leading-[1.04]">
            Built for independent movement and confidence.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/95 sm:text-lg">
            GabAI is an accessibility-focused mobile experience that helps visually impaired users understand what is around them through real-time computer vision and spoken guidance.
          </p>
        </section>

        <section className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <article className="rounded-3xl bg-white px-6 py-7 shadow-[0_10px_22px_rgba(39,54,77,0.08)]">
            <h2 className="text-xl font-bold text-[#2e3d56]">Mission</h2>
            <p className="mt-3 text-[#566274]">
              Reduce everyday barriers by making navigation information immediate, audible, and private.
            </p>
          </article>

          <article className="rounded-3xl bg-white px-6 py-7 shadow-[0_10px_22px_rgba(39,54,77,0.08)]">
            <h2 className="text-xl font-bold text-[#2e3d56]">Approach</h2>
            <p className="mt-3 text-[#566274]">
              We combine lightweight on-device AI models with an interface that is simple, high contrast, and voice-first.
            </p>
          </article>

          <article className="rounded-3xl bg-white px-6 py-7 shadow-[0_10px_22px_rgba(39,54,77,0.08)]">
            <h2 className="text-xl font-bold text-[#2e3d56]">Values</h2>
            <p className="mt-3 text-[#566274]">
              Accessibility, dignity, and trust guide each design and engineering decision we make.
            </p>
          </article>
        </section>

        <section className="mt-10 flex flex-wrap gap-3">
          <Link
            to="/demo"
            className="rounded-full bg-[#5f7fbe] px-6 py-3 font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            View Demo
          </Link>
          <Link
            to="/how-it-works"
            className="rounded-full border-2 border-[#5f7fbe] px-6 py-3 font-semibold text-[#4f6fae] transition-transform hover:-translate-y-0.5"
          >
            Learn How It Works
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default AboutPage
