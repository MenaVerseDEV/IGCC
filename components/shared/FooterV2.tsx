'use client'

import footerData from '@/data/footer.json'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/logo.png'
import Lplogo from '@/public/LP Logo.png'

const FooterV2 = () => {
  return (
    <footer className="relative w-full overflow-hidden">
      {/* Circular Blur Background Elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 z-20 hidden h-96 w-96 animate-pulse rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 blur-3xl md:block"></div>
        <div className="absolute -right-20 -top-20 z-20 hidden h-64 w-64 animate-pulse rounded-full bg-gradient-to-bl from-primary/30 to-primary/40 blur-2xl delay-1000 md:block"></div>
        <div className="delay-2000 absolute -left-20 top-1/2 z-20 h-48 w-48 animate-pulse rounded-full bg-gradient-to-tr from-pink-500/20 to-primary/30 blur-2xl"></div>
        <div className="delay-3000 absolute -bottom-40 -right-40 z-20 h-80 w-80 animate-pulse rounded-full bg-gradient-to-tl from-primary/20 to-secondary/40 blur-3xl"></div>
        <div className="delay-1500 absolute -bottom-24 left-1/2 z-20 h-56 w-56 -translate-x-1/2 transform animate-pulse rounded-full bg-gradient-to-t from-purple-500/20 to-primary/30 blur-2xl"></div>
      </div>

      <div className="relative z-10 border-t bg-primary/20 py-4 dark:bg-dark">
        <div className="container">
          <div className="relative z-10 flex flex-col flex-wrap justify-center gap-y-10 pt-10 sm:flex-row sm:justify-between sm:gap-y-16 md:pt-20">
            {/* About Conference Section */}
            <div className="pr-8 max-lg:basis-full">
              <Link href="/" className="relative z-10 py-3">
                <Image
                  className="inline-block max-h-[60px] w-auto"
                  src={logo}
                  alt="logo"
                  width={136}
                  height={68}
                  priority
                />
              </Link>
              <p className="mb-5 md:max-w-[360px]">
                We are honored to welcome you to the International Genitourinary Cancer Congress (IGCC), where top
                global experts share advancements in GU oncology.
              </p>
            </div>

            {/* Dynamic Footer Links */}
            {footerData.map((section, index) => (
              <div key={`Id_${index}`}>
                <h5 className="mb-4 text-2xl font-[500] leading-[1.1]">{section.title}</h5>
                <ul>
                  {section.links.map(({ href, label, soon }) => (
                    <li key={href} className="md:mb-1">
                      {soon ? (
                        <span className="block cursor-not-allowed font-normal leading-9 tracking-[0.36px] text-gray-400 md:text-lg">
                          {label}
                          <span className="ml-2 text-sm text-gray-500">(Soon)</span>
                        </span>
                      ) : (
                        <Link
                          href={href}
                          className="block font-normal leading-9 tracking-[0.36px] transition-colors duration-300 hover:text-primary md:text-lg">
                          {label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Conference Venue */}
            <div>
              <h5 className="mb-4 text-2xl font-[500] leading-[1.1]">Conference Venue</h5>
              <p className="mb-3">Hilton Hotel, Jeddah, KSA</p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54271.53585475277!2d39.23919439315795!3d21.551771932813303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d0051de8b687%3A0x7bf666234fa6229!2sThe%20Hotel%20Galleria%20Jeddah%2C%20Curio%20Collection%20by%20Hilton!5e1!3m2!1sar!2seg!4v1753959698140!5m2!1sar!2seg"
                width="300"
                height="200"
                loading="lazy"
                allowFullScreen
                style={{ border: 0 }}
                title="Conference Venue Location"
              />
            </div>
          </div>

          {/* Enhanced Organizing Company Section */}
          <div className="mt-12 border-t pt-6">
            <div className="mb-6 flex flex-col items-center justify-center gap-2 md:flex-row">
              <Link
                href="https://livepresentation.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="group transition-transform duration-300 hover:scale-105"
                aria-label="Visit Live Presentation website">
                <Image
                  src={Lplogo}
                  alt="Live Presentation - Event Organizing Company"
                  width={150}
                  height={75}
                  className="max-h-[60px] w-auto transition-opacity duration-300 group-hover:opacity-80"
                  priority
                />
              </Link>
              <div className="text-center md:text-left">
                <p className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-300 md:text-base">
                  Organized by Live Presentation
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  For inquiries, please contact:{' '}
                  <Link
                    href="https://livepresentation.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-primary transition-colors duration-300 hover:text-primary/80 hover:underline">
                    livepresentation.net
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterV2
