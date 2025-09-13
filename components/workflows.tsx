import Image from "next/image";
import WorflowImg01 from "@/public/images/workflow-01.png";
import WorflowImg02 from "@/public/images/workflow-02.png";
import WorflowImg03 from "@/public/images/workflow-03.png";
import Spotlight from "@/components/spotlight";

export default function Workflows() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                AI Professor Finder
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Match with the right research mentors
            </h2>
            <p className="text-lg text-indigo-200/65">
              Upload your resume and research interests — our AI extracts your strengths and finds professors whose work aligns with your goals. Then, send tailored outreach that stands out.
            </p>
          </div>

          {/* Row 1: text left, box right */}
          <Spotlight className="group mx-auto grid max-w-3xl items-center gap-8 lg:max-w-none lg:grid-cols-2">
            {/* Text */}
            <div className="lg:order-1">
              <div className="mb-3">
                <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                  <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                    Built-in Tools
                  </span>
                </span>
              </div>
              <p className="text-indigo-200/65">
                Streamline the product development flow with a content platform
                that's aligned across specs and insights.
              </p>
            </div>
            {/* Glowing box */}
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px lg:order-2 before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
              href="#0"
            >
              <div className="relative z-20 overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                <Image
                  className="block w-full"
                  src={WorflowImg01}
                  width={560}
                  height={360}
                  alt="Workflow 01"
                />
              </div>
            </a>
          </Spotlight>

          {/* Row 2: box left, text right */}
          <Spotlight className="group mx-auto mt-10 grid max-w-3xl items-center gap-8 lg:max-w-none lg:grid-cols-2">
            {/* Glowing box */}
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
              href="#0"
            >
              <div className="relative z-20 overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                <Image
                  className="block w-full"
                  src={WorflowImg02}
                  width={560}
                  height={360}
                  alt="Workflow 02"
                />
              </div>
            </a>
            {/* Text */}
            <div>
              <div className="mb-3">
                <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                  <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                    Scale Instantly
                  </span>
                </span>
              </div>
              <p className="text-indigo-200/65">
                Streamline the product development flow with a content platform
                that's aligned across specs and insights.
              </p>
            </div>
          </Spotlight>

          {/* Row 3: text left, box right */}
          <Spotlight className="group mx-auto mt-10 grid max-w-3xl items-center gap-8 lg:max-w-none lg:grid-cols-2">
            {/* Text */}
            <div className="lg:order-1">
              <div className="mb-3">
                <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                  <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                    Tailored Flows
                  </span>
                </span>
              </div>
              <p className="text-indigo-200/65">
                Streamline the product development flow with a content platform
                that's aligned across specs and insights.
              </p>
            </div>
            {/* Glowing box */}
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px lg:order-2 before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
              href="#0"
            >
              <div className="relative z-20 overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                <Image
                  className="block w-full"
                  src={WorflowImg03}
                  width={560}
                  height={360}
                  alt="Workflow 03"
                />
              </div>
            </a>
          </Spotlight>
        </div>
      </div>
    </section>
  );
}
