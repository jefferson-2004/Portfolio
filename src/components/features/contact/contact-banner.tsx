import { Section } from "@/components/common/section";
import { Button } from "@/components/ui/button";

const socials = [
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Facebook", href: "#" },
];

const inputClassName =
  "w-full h-12 rounded-xl border border-zinc-800 bg-black px-4 text-base text-zinc-100 placeholder:text-zinc-600 outline-none focus:border-zinc-400 focus:ring-2 focus:ring-zinc-400/20 transition-colors";

export function ContactPageBannerSection() {
  return (
    <Section className="py-16 md:py-24">
      <div className="w-full max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
            Contact Me
          </p>

          <h1 className="mt-3 text-5xl sm:text-6xl font-extrabold text-zinc-50">
            Let's Work Together
          </h1>

          <p className="mt-4 text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto">
            Have a project, idea, or opportunity? Feel free to get in touch
            with me.
          </p>
        </div>

        {/* Two Columns */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">

          {/* Info Panel */}
          <div className="lg:col-span-2 rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 sm:p-8">
            <h2 className="text-3xl font-bold text-zinc-50">
              Get In Touch
            </h2>

            <p className="mt-3 text-lg text-zinc-400 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to work together.
            </p>

            {/* Email */}
            <div className="mt-8 rounded-2xl border border-zinc-800 bg-black p-4">
              <p className="text-xs uppercase tracking-wider text-zinc-500">
                Email
              </p>

              <a
                href="mailto:jefferon.ando@gmail.com"
                className="mt-1 block text-base font-medium text-zinc-100 hover:text-zinc-50 transition-colors break-all"
              >
                jefferon.ando@gmail.com
              </a>
            </div>

            {/* Location */}
            <div className="mt-4 rounded-2xl border border-zinc-800 bg-black p-4">
              <p className="text-xs uppercase tracking-wider text-zinc-500">
                Location
              </p>

              <p className="mt-1 text-base font-medium text-zinc-100">
                Philippines
              </p>
            </div>

            {/* Social */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-wider text-zinc-500">
                Follow Me
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-zinc-800 bg-black px-4 py-2 text-base font-medium text-zinc-300 hover:border-zinc-500 hover:text-zinc-50 transition-colors"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form Panel */}
          <div className="lg:col-span-3 rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 sm:p-8">
            <form className="space-y-5">

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-base font-medium text-zinc-300 mb-2"
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className={inputClassName}
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-base font-medium text-zinc-300 mb-2"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className={inputClassName}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-base font-medium text-zinc-300 mb-2"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows={6}
                  placeholder="Write your message..."
                  className="w-full rounded-xl border border-zinc-800 bg-black p-4 text-base text-zinc-100 placeholder:text-zinc-600 outline-none resize-none focus:border-zinc-400 focus:ring-2 focus:ring-zinc-400/20 transition-colors"
                />
              </div>

              <Button type="submit" className="w-full h-12 text-base">
                Send Message
              </Button>

            </form>
          </div>

        </div>

      </div>
    </Section>
  );
}
