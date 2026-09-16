import type { AboutSection } from "@/.utils/types";

export const ABOUT_HEADLINE =
  "An award-winning author on U.S. foreign policy in the Middle East.";

export const ABOUT_SECTIONS: AboutSection[] = [
  {
    paragraphs: [
      "Trita Parsi is an award-winning author and the 2010 recipient of the Grawemeyer Award for Ideas Improving World Order. He is the co-founder and Executive Vice President of the Quincy Institute for Responsible Statecraft and an expert on US-Iranian relations, Iranian foreign policy, and the geopolitics of the Middle East. He was named by Washingtonian magazine as one of the 25 most influential voices on foreign policy in Washington, DC in both 2021 and 2022, and preeminent public intellectual Noam Chomsky calls Parsi “one of the most distinguished scholars on Iran.”",
    ],
  },
  {
    heading: "Books",
    paragraphs: [
      "Parsi is the author of Treacherous Alliance: The Secret Dealings of Iran, Israel and the United States (Yale University Press, 2007), for which he conducted more than 130 interviews with senior Israeli, Iranian, and American decision-makers. Treacherous Alliance is the silver medal winner of the 2008 Arthur Ross Book Award from the Council on Foreign Relations.",
      "His second book, A Single Roll of the Dice: Obama’s Diplomacy with Iran (Yale University Press), was released in early 2012 and was selected by Foreign Affairs as the Best Book of 2012 on the Middle East.",
      "His latest book, Losing an Enemy: Obama, Iran and the Triumph of Diplomacy (Yale University Press, 2017), reveals the behind-the-scenes story of the historic nuclear deal with Iran.",
    ],
  },
  {
    heading: "Background",
    paragraphs: [
      "Parsi was born in Iran but moved with his family at the age of four to Sweden in order to escape political repression. His father was an outspoken academic who was jailed by the Shah and then by the Ayatollah. He moved to the United States as an adult and studied foreign policy at Johns Hopkins School of Advanced International Studies, where he received his Ph.D.",
    ],
  },
  {
    heading: "NIAC",
    paragraphs: [
      "He founded the National Iranian American Council (NIAC) to provide a non-partisan, non-profit organization through which Iranian-Americans could participate in American civic life. NIAC is a vocal proponent of dialogue and engagement between the United States and Iran, which Parsi has consistently argued would enhance our national security by helping to stabilize the Middle East and bolster the moderates in Iran.",
    ],
  },
  {
    heading: "Policy work",
    paragraphs: [
      "Parsi has followed Middle East politics through work in the field and extensive experience on Capitol Hill and at the United Nations. He is frequently consulted by Western and Asian governments on foreign policy matters. He has worked for the Swedish Permanent Mission to the UN, where he served in the Security Council, handling the affairs of Afghanistan, Iraq, Tajikistan, and Western Sahara, and in the General Assembly’s Third Committee, addressing human rights in Iran, Afghanistan, Myanmar, and Iraq.",
    ],
  },
  {
    heading: "Scholarship",
    paragraphs: [
      "Parsi studied for his doctoral thesis on Israeli-Iranian relations under Professor Francis Fukuyama at Johns Hopkins University School of Advanced International Studies. In addition to his Ph.D., he holds a Master’s Degree in International Relations from Uppsala University and a Master’s Degree in Economics from the Stockholm School of Economics. He has served as an adjunct professor of International Relations at Johns Hopkins University SAIS, George Washington University, and Georgetown University, as well as an adjunct scholar at the Middle East Institute and a Policy Fellow at the Woodrow Wilson International Center for Scholars in Washington, DC.",
    ],
  },
  {
    heading: "Languages and media",
    paragraphs: [
      "He is fluent in Persian/Farsi, English, and Swedish. Parsi’s articles on Middle East affairs have been published in the Washington Post, Wall Street Journal, New York Times, Los Angeles Times, Financial Times, Jane’s Intelligence Review, the Nation, The American Conservative, the Jerusalem Post, The Forward, and others. He is a frequent guest on CNN, PBS NewsHour, NPR, the BBC, and Al Jazeera.",
    ],
  },
];

export const ABOUT_COPY = ABOUT_SECTIONS.flatMap((section) => section.paragraphs).join(
  "\n\n",
);
