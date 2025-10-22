export interface AgendaItem {
  time: string
  title: string
  speaker?: string
  speakerImage?: string
  moderator?: string
  moderatorImage?: string
  type?: 'session' | 'break' | 'activity' | 'sponser'
}

interface SessionBlock {
  title: string
  activityTitle?: {
    time: string
    title: string
    speaker: string
    speakerImage?: string
  }
  items: AgendaItem[]
}

export interface DaySchedule {
  day: string
  date: string
  sessions: SessionBlock[]
}

export const agendaData: DaySchedule[] = [
  {
    day: 'Day 1',
    date: 'Thursday, 20 November 2025 – Evening Session',

    sessions: [
      {
        title: 'Session 1: Penile Cancer',
        activityTitle: {
          time: '05:30 pm',
          title: 'Welcome and Opening Remarks',
          speaker: 'Prof. Mubarak Al Mansour',
          speakerImage: '/images/speakers/Prof.MubarakAlMansour.png',
        },
        items: [
          {
            time: '05:40 – 05:55 pm',
            title: 'Multidisciplinary Management and Centralization of Penile Cancer',
            speaker: 'Prof. Asif Muneer',
            speakerImage: '/images/speakers/Prof.AsifMuneer.jpg',
          },
          {
            time: '05:55 – 06:10 pm',
            title: 'Contemporary Management of Penile Cancer',
            speaker: 'Prof. Asif Muneer',
            speakerImage: '/images/speakers/Prof.AsifMuneer.jpg',
          },
          {
            time: '06:10 – 06:25 pm',
            title: 'Q&A and Panel Discussion',
            type: 'activity',
          },
        ],
      },
      {
        title: 'Session 2: Testicular Cancer',
        items: [
          {
            time: '06:25 – 06:40 pm',
            title: 'Management of Markers Negative Stage IIA',
            speaker: 'Prof. Christian Kollmannsberger',
            speakerImage: '/images/speakers/Prof.ChristianKollmannsberger.jpg',
          },
          {
            time: '06:40 – 06:55 pm',
            title: 'Post-Chemotherapy Resection of Residual Disease in Metastatic Nonseminoma: When and Extent',
            speaker: 'Prof. Torgrim Tandstad',
            speakerImage: '/images/speakers/Prof.TorgrimTandstad.jpg',
          },
          {
            time: '06:55 – 07:10 pm',
            title: 'Pitfalls in the Management of Testis Cancer',
            speaker: 'Prof. Christian Kollmannsberger',
            speakerImage: '/images/speakers/Prof.ChristianKollmannsberger.jpg',
          },
          {
            time: '07:10 – 07:25 pm',
            title: 'Satellite Symposium - Eisai',
            speaker: 'Dr. Fahad Almugbel',
            speakerImage: '/images/sponsors/eisai.svg',
            type: 'sponser',
          },
          {
            time: '07:25 – 07:40 pm',
            title: 'Prayer & Coffee Break',
            type: 'break',
          },
          {
            time: '07:40 – 07:55 pm',
            title: 'Controversies and Potential Biomarkers in Stage I GCT',
            speaker: 'Prof. Torgrim Tandstad',
            speakerImage: '/images/speakers/Prof.TorgrimTandstad.jpg',
          },
          {
            time: '07:55 – 08:10 pm',
            title: 'Q&A and Panel Discussion',
            type: 'activity',
          },
        ],
      },
      {
        title: 'Session 3: Adrenocortical Carcinoma',
        items: [
          {
            time: '08:10 – 08:25 pm',
            title: 'Management of Localized Adrenocortical Carcinoma',
            speaker: 'Prof. Massimo Terzolo',
            speakerImage: '/images/speakers/Prof.MassimoTerzolo.jpg',
          },
          {
            time: '08:25 – 08:40 pm',
            title: 'Management of Metastatic Adrenocortical Carcinoma',
            speaker: 'Prof. Massimo Terzolo',
            speakerImage: '/images/speakers/Prof.MassimoTerzolo.jpg',
          },
          {
            time: '08:40 – 08:55 pm',
            title: 'Q&A and Panel Discussion',
            type: 'activity',
          },
          {
            time: '08:55 pm',
            title: 'Session Summary and Closing Dinner',
            speaker: 'Prof. Mubarak Al Mansour',
            speakerImage: '/images/speakers/Prof.MubarakAlMansour.png',
          },
        ],
      },
    ],
  },
  {
    day: 'Day 2',
    date: 'Friday, 21 November 2025 – Morning Session',
    sessions: [
      {
        title: 'Session 4: Renal Cell Carcinoma',
        activityTitle: {
          time: '09:00 – 09:10 am',
          title: 'Welcome Address & Program Introduction',
          speaker: 'Prof. Mubarak Al Mansour',
          speakerImage: '/images/speakers/Prof.MubarakAlMansour.png',
        },
        items: [
          {
            time: '09:10 – 09:25 am',
            title: 'Oligometastases / Oligoprogression: Role of Local Treatment Intensification',
            speaker: 'Prof. Cristina Suarez',
            speakerImage: '/images/speakers/Prof.CristinaSuarez.jpg',
          },
          {
            time: '09:25 – 09:40 am',
            title: 'Novel Targets in RCC: What is on the horizon?',
            speaker: 'Prof. Camilo Porta',
            speakerImage: '/images/speakers/Dr.CamilloPorta.jpg',
          },
          {
            time: '09:40 – 09:55 am',
            title: 'Adjuvant RCC',
            speaker: 'Prof. James Larkin',
            speakerImage: '/images/speakers/Prof. James Larkin.jpg',
          },
          {
            time: '09:55 – 10:15 am',
            title: 'Satellite Symposium - MSD',
            type: 'sponser',
            speakerImage: '/images/sponsors/msd-oncology.png',
          },
          {
            time: '10:15 – 10:30 am',
            title: 'Functional Imaging in RCC: When, What, and How?',
            speaker: 'Prof. Camilo Porta',
            speakerImage: '/images/speakers/Dr.CamilloPorta.jpg',
          },
          {
            time: '10:30 – 10:45 am',
            title: 'O / IO and IO / TKI: Toxicity Management',
            speaker: 'Prof. James Larkin',
            speakerImage: '/images/speakers/Prof. James Larkin.jpg',
          },
          {
            time: '10:45 – 11:00 am',
            title: 'Satellite Symposium - BMS',
            speakerImage: '/images/sponsors/bristol-myers-squibb.jpg',
            type: 'sponser',
          },
          {
            time: '11:00 – 11:15 am',
            title: 'Biomarkers: Is Anything Useful on the Horizon?',
            speaker: 'Prof. Cristina Suarez',
            speakerImage: '/images/speakers/Prof.CristinaSuarez.jpg',
          },
          {
            time: '11:15 – 11:30 am',
            title: 'Cytoreductive Nephrectomy: Upfront, Delayed, Or Not at All?',
            speaker: 'Prof. Axel Bex',
            speakerImage: '/images/speakers/Prof.AlexBex.jpg',
          },
          {
            time: '11:30 – 11:45 am',
            title: 'Q&A and Panel Discussion',
            type: 'activity',
          },
          {
            time: '11:45 – 02:00 pm',
            title: 'Prayer and Lunch Break',
            type: 'break',
          },
        ],
      },
      {
        title: 'Session 5: Urothelial Cancer',
        activityTitle: {
          time: '02:00 – 02:10 pm',
          title: 'Session Opening and Introduction',
          speaker: 'Prof. Mubarak Al Mansour',
          speakerImage: '/images/speakers/Prof.MubarakAlMansour.png',
        },
        items: [
          {
            time: '02:10 – 02:25 pm',
            title:
              'The Role of Ctdna and Urinary DNA as A Biomarker for Bladder Cancer: Detection, Impact, Potential in Management',
            speaker: 'Prof. Thomas Powles',
            speakerImage: '/images/speakers/Prof.ThomasPowles.jpg',
          },
          {
            time: '02:25 - 02:40 pm',
            title:
              'Optimal Therapy for Localized Node-Positive Disease Does Lymph Node-Directed Therapy (Dissection or Rt) Make A Difference?',
            speaker: 'Prof. Axel Bex',
            speakerImage: '/images/speakers/Prof.AlexBex.jpg',
          },
          {
            time: '02:40 – 03:10 pm',
            title: 'Satellite Symposium – Astellas',
            speaker: 'Prof. Alejo Rodriguez',
            speakerImage: '/images/sponsors/astellas.png',
            moderator: 'Dr Emad Tashkandi',
            type: 'sponser',
          },
          {
            time: '03:10 – 03:25 pm',
            title: "Management of Novel Toxicities: ADC's and FGFR Inhibitors",
            speaker: 'Prof. Ignacio Duran',
            speakerImage: '/images/speakers/Prof.IgnacioDuran.jpg',
          },
          {
            time: '03:25 – 03:40 pm',
            title: 'Q&A and Panel Discussion',
            type: 'activity',
          },
          {
            time: '03:40 - 03:55 pm',
            title: 'Prayer & Coffee Break',
            type: 'break',
          },
          {
            time: '03:55 – 04:10 pm',
            title: 'State of the Art in Organ Preservation of the Bladder',
            speaker: 'Prof. Syed Hussain',
            speakerImage: '/images/speakers/Prof. Syed Hussain.jpg',
          },
          {
            time: '04:10 – 04:25 pm',
            title: 'Satellite Symposium - Merck',
            speakerImage: '/images/sponsors/MERCK.jpg',
            type: 'sponser',
          },
          {
            time: '04:25 – 04:40 pm',
            title: 'Antibody-Drug Conjugates: ADCs, Novel Targets and Combinations',
            speaker: 'Prof. Thomas Powles',
            speakerImage: '/images/speakers/Prof.ThomasPowles.jpg',
          },
          {
            time: '04:40 - 04:55 pm',
            title: 'Expanding the Horizon in Non-Muscle Invasive Bladder Cancer',
            speaker: 'Prof. Maria De Santis',
            speakerImage: '/images/speakers/Prof.MariaDeSantis.jpg',
          },
          {
            time: '04:55 – 05:10 pm',
            title: 'Management of Upper Tract Urothelial Cancer',
            speaker: 'Prof. Ignacio Duran',
            speakerImage: '/images/speakers/Prof.IgnacioDuran.jpg',
          },
          {
            time: '05:10 – 05:25 pm',
            title: 'Satellite Symposium - Amgen',
            speakerImage: '/images/sponsors/AMGEN.jpg',
            type: 'sponser',
          },
          {
            time: '05:25 – 05:40 pm',
            title: 'Appropriate Peri-Operative Systemic Treatment of Bladder Cancers',
            speaker: 'Prof. Maria De Santis',
            speakerImage: '/images/speakers/Prof.MariaDeSantis.jpg',
          },
          {
            time: '05:40 – 05:55 pm',
            title: 'Can Findings from Neoadjuvant/Adjuvant Trials be Generalized',
            speaker: 'Prof. Syed Hussain',
            speakerImage: '/images/speakers/Prof. Syed Hussain.jpg',
          },
          {
            time: '05:55 – 6:10 pm',
            title: 'Q&A and Panel Discussion',
            type: 'activity',
          },
          {
            time: '06:10 pm',
            title: 'Session Wrap-up and Closing',
            speaker: 'Prof. Mubarak Al Mansour',
            speakerImage: '/images/speakers/Prof.MubarakAlMansour.png',
          },
        ],
      },
    ],
  },

  {
    day: 'Day 3',
    date: 'Saturday, 22 November 2025 – Morning Session',
    sessions: [
      {
        title: 'Session 6: Prostate Cancer (Part 1)',
        activityTitle: {
          time: '09:00 – 09:10 am',
          title: 'Welcome Address & Program Introduction',
          speaker: 'Prof. Mubarak Al Mansour',
          speakerImage: '/images/speakers/Prof.MubarakAlMansour.png',
        },
        items: [
          {
            time: '09:10 – 09:25 am',
            title: 'Biomarker-based Treatment of Metastatic Castration Sensitive Prostate Cancer',
            speaker: 'Prof. Gerhardt Attard',
            speakerImage: '/images/speakers/Prof.GerhardtAttard.jpg',
          },
          {
            time: '09:25 – 09:45 am',
            title: 'Satellite Symposium – Bayer',
            speaker: 'Prof. Gerhardt Attard',
            speakerImage: '/images/sponsors/bayer.png',
            type: 'sponser',
          },
          {
            time: '09:45 – 10:00 am',
            title: 'Diagnosis and Management of Neuroendocrine/Small Cell Prostate Cancer',
            speaker: 'Prof. Gerhardt Attard',
            speakerImage: '/images/speakers/Prof.GerhardtAttard.jpg',
          },
          {
            time: '10:00 – 10:15 am',
            title: 'Q&A and Panel Discussion',
            type: 'activity',
          },
          {
            time: '10:15 – 10:30 am',
            title: 'PARP inhibitor in metastatic prostate cancer: Has the indication changed?',
            speaker: 'Prof. David Olmos',
            speakerImage: '/images/speakers/Prof.DavidOlmos.jpg',
          },
          {
            time: '10:30 – 11:00 am',
            title: 'Satellite Symposium - Novartis',
            speakerImage: '/images/sponsors/novartis.png',
            type: 'sponser',
          },
          {
            time: '11:00 – 11:15 am',
            title: 'Managing mCSPC Now and in the Future',
            speaker: 'Prof. David Olmos',
            speakerImage: '/images/speakers/Prof.DavidOlmos.jpg',
          },
          {
            time: '11:15 – 11:35 am',
            title: 'Satellite Symposium - AstraZeneca',
            speakerImage: '/images/sponsors/astrazeneca.png',
            type: 'sponser',
          },
          {
            time: '11:35 – 11:50 pm',
            title: 'Q&A and Panel Discussion',
            type: 'activity',
          },
          {
            time: '11:50 – 01:45 pm',
            title: 'Prayer and Lunch Break',
            type: 'break',
          },
        ],
      },
      {
        title: 'Session 7: Prostate Cancer (Part 2)',
        activityTitle: {
          time: '01:45 – 01:55 pm',
          title: 'Session Opening and Introduction',
          speaker: 'Prof. Mubarak Al Mansour',
          speakerImage: '/images/speakers/Prof.MubarakAlMansour.png',
        },
        items: [
          {
            time: '01:55 – 02:10 pm',
            title: 'Response Assessment in Radioligand Therapy: What and When',
            speaker: 'Prof. Matthias Eiber',
            speakerImage: '/images/speakers/Prof.MatthiasEiber.jpg',
          },
          {
            time: '02:10 – 02:25 pm',
            title:
              'Genomic Testing and Personalized Therapy in Prostate Cancerr: Are We There Yet? What is Relevant Beyond BRCA 1/2?',
            speaker: 'Prof. Maha Hussain',
            speakerImage: '/images/speakers/Dr.MahaHussain.jpg',
          },
          {
            time: '02:25 - 02:40 pm',
            title: 'Q&A and Panel Discussion',
            type: 'activity',
          },
          {
            time: '02:40 – 03:00 pm',
            title: 'Satellite Symposium – Johnson & Johnson',
            type: 'sponser',
            speaker: 'Prof. David Olmos',
            speakerImage: '/images/sponsors//johnson-and-johnson.jpg',
            moderator: 'Prof. Mohammed Aseafa',
          },
          {
            time: '03:00 – 03:15 pm',
            title: 'Optimizing Patient Selection for Radioligand Therapy in Advanced Stages',
            speaker: 'Prof. Matthias Eiber',
            speakerImage: '/images/speakers/Prof.MatthiasEiber.jpg',
          },
          {
            time: '03:15 - 03:30 pm',
            title: 'Novel Biomarkers in Development in Prostate Cancer',
            speaker: 'Prof. Maha Hussain',
            speakerImage: '/images/speakers/Dr.MahaHussain.jpg',
          },
          {
            time: '03:30 - 03:45 pm',
            title: 'Q&A and Panel Discussion',
            type: 'activity',
          },
          {
            time: '03:45 pm',
            title: 'Session Summary and Concluding Remarks',
            speaker: 'Prof. Mubarak Al Mansour',
            speakerImage: '/images/speakers/Prof.MubarakAlMansour.png',
          },
        ],
      },
    ],
  },
]
