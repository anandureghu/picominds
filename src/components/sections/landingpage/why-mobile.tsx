const Title = () => (
  <div className="h-fit flex items-center justify-start sticky top-0 text-5xl">
    <div className="section-title">
      <h1 className="uppercase text-indigo-300 ">
        Why <br /> Choose
      </h1>
      <h1 className="text-indigo-50">PiCOMiNDS?</h1>
    </div>
  </div>
);

const WhyMobile: React.FC = () => {
  const reasons = [
    {
      title: "fast & focused",
      description:
        "We’re quick to understand, fast to deliver, and never compromise on quality.",
    },
    {
      title: "engineering-first",
      description:
        "Clean code, strong architecture, and developer empathy—built in.",
    },
    {
      title: "on-call support",
      description:
        "Need a fix or feature on the fly? We’re just a ping away—literally.",
    },
  ];

  return (
    <section className="w-full hidden max-md:block pb-[200px]">
      <div className="app-container flex flex-col min-h-screen">
        {/* Left - pinned title */}
        <aside className="min-w-[320px] min-h-[200px] mb-[100px]" id="title">
          <Title />
        </aside>

        {/* Right - scrolling slides */}
        <main className="h-fit w-full">
          <div className="flex flex-col gap-20 overflow-y-scroll items-center justify-center no-scrollbar h-full">
            {reasons.map((r, i) => (
              <div
                key={i}
                className="min-h-fit flex flex-col justify-center px-12"
              >
                <h3 className="text-6xl leading-tight font-serif text-indigo-400 lowercase">
                  {r.title}
                </h3>
                <p className="mt-6 text-3xl max-w-2xl">{r.description}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </section>
  );
};

export default WhyMobile;
