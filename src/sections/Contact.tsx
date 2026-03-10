"use client";
/* eslint-disable react/no-unescaped-entities */

import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

export const ContactSection = () => {
  return (
    <div className="py-16 pt-14 lg:py-24 lg:pt-20 relative z-20 isolate">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let's create something amazing together
              </h2>
              <p className="text-sm md:text-base mt-2 ">
                I&apos;m always open to exciting projects, collaborations, or
                just a friendly chat about tech and innovation. Whether you have
                a question, an idea, or an opportunity, I&apos;d love to hear
                from you.
              </p>
            </div>
            <div className="w-full max-w-md">
              <form
                action="mailto:kumar.rishu0509@gmail.com"
                method="POST"
                encType="text/plain"
                className="flex flex-col gap-4 mt-8 text-left pointer-events-auto"
              >
                <label className="text-sm font-medium">
                  Your Email
                  <input
                    type="email"
                    required
                    name="email"
                    className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-gray-900 focus:outline-none pointer-events-auto"
                    placeholder="you@example.com"
                  />
                </label>
                <label className="text-sm font-medium">
                  Your Message
                  <textarea
                    required
                    name="message"
                    className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-gray-900 focus:outline-none pointer-events-auto"
                    rows={4}
                    placeholder="Tell me about your project or idea..."
                  />
                </label>
                <button
                  type="submit"
                  className="text-white bg-gray-900 inline-flex items-center justify-center px-6 h-12 rounded-xl gap-2 w-full md:w-max border border-gray-900 pointer-events-auto"
                >
                  <span className="font-semibold">Send Message</span>
                  <ArrowUpRightIcon className="size-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
