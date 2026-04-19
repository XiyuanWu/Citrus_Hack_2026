import LandingHeader from "../../../components/LandingHeader";
import placeholderImage from "../../../assets/landing/Background_Latino_Page.jpg";

function HispanicOrLatinoPage() {
  return (
    <main className="min-h-screen w-full bg-white">
      <LandingHeader />

      <section className="mx-auto w-full max-w-6xl px-6 py-14 md:px-10">
        <div className="relative overflow-hidden rounded-4xl bg-gray-900 min-h-[500px] flex items-center shadow-2xl">
          
          <img
            src={placeholderImage}
            alt="UCR Campus"
            className="absolute inset-0 h-full w-full object-cover z-0"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10"></div>

          <div className="relative z-20 flex flex-col justify-center px-8 py-12 md:px-16 md:py-20">
            <h1 className="font-display text-6xl md:text-7xl font-bold tracking-tight text-white">
              SOMOS UCR
            </h1>
            
            <p className="mt-2 font-display text-lg md:text-xl font-extrabold tracking-[0.18em] text-[#ECC24D] uppercase">
              Latino Community Belonging Map
            </p>

            <div className="mt-6 space-y-4">
              <p className="font-display text-[15px] font-bold tracking-[0.1em] text-[#ECC24D]">
                Celebrating Culture. Building Community. Supporting Success.
              </p>
              
              <p className="max-w-xl font-sans text-sm md:text-base leading-relaxed text-gray-200">
                This map highlights spaces, programs, businesses, and organizations that support
                and celebrate Latinx students, faculty, staff, and the greater Riverside community.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/"
                className="inline-flex items-center justify-center rounded-full bg-[#0f2f69] px-7 py-3 font-display text-base font-bold text-white transition-all hover:bg-[#1a4185] hover:scale-105"
              >
                Back to Home
              </a>
              <a
                href="#resources"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md px-7 py-3 font-display text-base font-bold text-white transition-all hover:bg-white/20 hover:scale-105"
              >
                Jump to Resources
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="resources"
        className="mx-auto w-full max-w-6xl px-6 pb-20 md:px-10"
      >
        <div className="rounded-3xl border border-[#d3def0] bg-white p-8 shadow-sm">
          <h2 className="font-display text-3xl font-bold text-[#0f2f69]">
            Resources
          </h2>
          <p className="mt-4 font-sans text-lg leading-relaxed text-[#314a74]">
            Explore the local organizations, student hubs, and cultural centers 
            that foster a deep sense of connection and belonging within the UCR community.
          </p>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          </div>
        </div>
      </section>
    </main>
  );
}

export default HispanicOrLatinoPage;