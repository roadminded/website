import PrivacyPage from "@/components/pages/PrivacyPage";
import en from "@/locales/en.json";

export const metadata = {
  title: "Privacy",
  description: en.privacyPage.metadata.description,
  alternates: {
    canonical: "https://roadminded.com/privacy",
    languages: {
      en: "https://roadminded.com/privacy",
      fi: "https://roadminded.com/fi/privacy",
      "zh-TW": "https://roadminded.com/zh-tw/privacy",
      "x-default": "https://roadminded.com/privacy",
    },
  },
};

export default function Privacy() {
  return <PrivacyPage content={en.privacyPage} />;
}