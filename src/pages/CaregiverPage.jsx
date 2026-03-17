import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const caregiverBenefits = [
  {
    title: 'Peace of Mind',
    description: 'Know your loved one has immediate voice support while navigating daily spaces.',
  },
  {
    title: 'Easy Onboarding',
    description: 'Simple setup flow helps caregivers get started quickly without complex training.',
  },
  {
    title: 'Privacy Respect',
    description: 'On-device-first processing protects sensitive visual context and personal routines.',
  },
]

function CaregiverPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f0f4f6]">
      <Navbar />

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <section className="rounded-[2rem] bg-gradient-to-r from-[#5f7fbe] via-[#6ea8cb] to-[#84d0d5] px-6 py-10 text-white shadow-[0_10px_25px_rgba(22,40,64,0.2)] sm:px-10 sm:py-12">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/90">Caregiver Access</p>
          <h1 className="font-coolvetica mt-3 text-[clamp(2.1rem,7vw,3.9rem)] leading-[1.05]">
            Support independence with confidence.
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/95 sm:text-lg">
            This page is designed for caregivers who want visibility into how GabAI supports safe movement, daily confidence, and accessible routines.
          </p>
        </section>

        <section className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {caregiverBenefits.map((item) => (
            <article key={item.title} className="rounded-3xl bg-white px-6 py-7 shadow-[0_10px_22px_rgba(39,54,77,0.08)]">
              <h2 className="text-xl font-bold text-[#2a3952]">{item.title}</h2>
              <p className="mt-3 text-[#4d5c70]">{item.description}</p>
            </article>
          ))}
        </section>

        <section className="mt-8 rounded-3xl bg-white px-6 py-7 shadow-[0_10px_22px_rgba(39,54,77,0.08)] sm:px-8">
          <h2 className="text-2xl font-bold text-[#2a3952]">How Caregivers Can Use GabAI</h2>
          <p className="mt-3 max-w-3xl text-[#4d5c70]">
            Start with the Demo page to review key interactions, then walk through How It Works for a clear overview of the AI pipeline and privacy model.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
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
              How It Works
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default CaregiverPage
