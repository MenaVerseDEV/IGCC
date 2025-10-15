export interface SponsorsProps {
  sponserCategory: {
    title: string
    subtitle?: string
    image: string
  }
  cards: {
    name: string
    logo: string
    link: string
    description?: string
  }[]
}

export const SPONSORS: SponsorsProps[] = [
  {
    sponserCategory: {
      title: 'Platinum Sponsors',
      subtitle: 'Leading innovation in healthcare',
      image: '/images/sponsors/Platinum Sponsers.png',
    },
    cards: [
      {
        name: 'Novartis',
        logo: '/images/sponsors/novartis.png',
        link: 'https://www.novartis.com',
        description: 'Global leader in innovative medicines and solutions.',
      },
      {
        name: 'Astellas',
        logo: '/images/sponsors/astellas.png',
        link: 'https://www.astellas.com',
        description: 'Advancing innovative science to improve patient lives.',
      },
    ],
  },
  {
    sponserCategory: {
      title: 'Diamond Sponsors',
      subtitle: 'Committed to better care worldwide',
      image: '/images/sponsors/Diamond Sponsers.png',
    },
    cards: [
      {
        name: 'MSD Oncology',
        logo: '/images/sponsors/msd-oncology.png',
        link: 'https://www.msd.com',
        description: 'Committed to discovering breakthrough cancer therapies worldwide.',
      },
    ],
  },
  {
    sponserCategory: {
      title: 'Gold Sponsors',
      subtitle: 'Committed to better care worldwide',
      image: '/images/sponsors/Golden Sponsers.png',
    },
    cards: [
      {
        name: 'AstraZeneca',
        logo: '/images/sponsors/astrazeneca.png',
        link: 'https://www.astrazeneca.com',
        description: 'Global biopharmaceutical company focused on prescription medicines.',
      },
      {
        name: 'Johnson & Johnson',
        logo: '/images/sponsors/johnson-and-johnson.jpg',
        link: 'https://www.jnj.com',
        description: 'Innovating across pharmaceuticals, medical devices, and consumer health.',
      },
    ],
  },
  {
    sponserCategory: {
      title: 'Silver Sponsors',
      subtitle: 'Supporting advancements in healthcare',
      image: '/images/sponsors/Silver Sponsers.png',
    },
    cards: [
      {
        name: 'Bayer',
        logo: '/images/sponsors/bayer.png',
        link: 'https://www.bayer.com',
        description: 'Science for a better life with focus on health and nutrition.',
      },
      {
        name: 'Bristol Myers Squibb',
        logo: '/images/sponsors/bristol-myers-squibb.png',
        link: 'https://www.bms.com/',
        description:
          'A global biopharmaceutical company dedicated to discovering, developing, and delivering innovative medicines for serious diseases.',
      },

      {
        name: 'MERCK',
        logo: '/images/sponsors/MERCK.jpg',
        link: 'https://www.merckgroup.com/en',
        description:
          'A leading science and technology company driving innovation in healthcare, life science, and performance materials.',
      },
    ],
  },
  {
    sponserCategory: {
      title: 'Bronze Sponsors',
      subtitle: 'Leading innovation in healthcare',
      image: '/images/sponsors/Bronze Sponsers.png',
    },
    cards: [
      {
        name: 'Eisai',
        logo: '/images/sponsors/eisai.svg',
        link: 'https://www.eisai.com/',
        description:
          'Eisai is a global pharmaceutical company focused on human health care (hhc) and innovation in oncology, neurology, and rare diseases.',
      },
      {
        name: 'AMGEN',
        logo: '/images/sponsors/AMGEN.jpg',
        link: 'https://www.amgen.com/',
        description:
          'One of the world’s leading biotechnology companies pioneering human therapeutics that address serious illnesses and unmet medical needs.',
      },
      {
        name: 'IPSEN',
        logo: '/images/sponsors/ipsen.png',
        link: 'https://www.ipsen.com/',
        description:
          'A global biopharmaceutical group focused on transformative medicines in oncology, neuroscience, and rare diseases.',
      },
    ],
  },
]
