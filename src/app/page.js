import HomePage from "@/components/pages/HomePage";
import en from "@/locales/en.json";

export const metadata = {
  description: en.home.metadata.description,
  alternates: {
    canonical: "https://roadminded.com/",
    languages: {
      en: "https://roadminded.com/",
      fi: "https://roadminded.com/fi",
      "zh-TW": "https://roadminded.com/zh-tw",
    },
  },
};

export default function Home() {
  return <HomePage content={en.home} />;
}