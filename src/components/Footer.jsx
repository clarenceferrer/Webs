function Footer({
  brandName = 'GabAI',
  copyrightText = '© 2026 GabAI. Empowering vision through accessible AI technology.',
}) {
  return (
    <footer className="snap-start relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-[#4a3798] via-[#6076b5] to-[#85c4de] px-4 pb-10 pt-16 sm:px-6 sm:pb-12 sm:pt-20 md:px-8 md:pb-14 md:pt-24">
      <svg
        viewBox="0 0 800 150"
        aria-hidden="true"
        className="pointer-events-none absolute right-[-180px] top-3 hidden h-auto w-[780px] opacity-60 md:block lg:right-[-110px]"
      >
        <path
          d="M20 58 C 84 8, 149 8, 212 58 C 274 108, 339 108, 402 58 C 464 8, 529 8, 592 58 C 654 108, 719 108, 782 58"
          fill="none"
          stroke="#c9d2f0"
          strokeWidth="12"
          strokeLinecap="round"
        />
      </svg>

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center justify-center">
        <div className="mt-8 flex items-center justify-center gap-3 sm:gap-5 md:mt-10 md:gap-7">
          <svg
            viewBox="0 0 220 130"
            aria-hidden="true"
            className="h-auto w-[120px] sm:w-[150px] md:w-[180px]"
          >
            <path d="M10 65 C 46 25, 78 12, 110 12 C 142 12, 174 25, 210 65 C 174 105, 142 118, 110 118 C 78 118, 46 105, 10 65z" fill="#dbe4f3" />
            <circle cx="110" cy="65" r="40" fill="#6faec4" />
            <circle cx="110" cy="65" r="25" fill="#455074" />
            <circle cx="83" cy="41" r="12" fill="#dbe4f3" />
          </svg>

          <h2 className="font-coolvetica text-[clamp(3.1rem,11vw,7.4rem)] leading-none tracking-[0.01em] text-[#dbe4f3]">
            {brandName}
          </h2>
        </div>

        <p className="mt-14 text-center text-lg text-[#e3e9f5] sm:mt-16 sm:text-xl md:mt-20 md:text-[2rem]">
          {copyrightText}
        </p>
      </div>
    </footer>
  )
}

export default Footer
