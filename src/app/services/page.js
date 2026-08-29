import ServicesPage from "@/components/pages/ServicesPage";
import en from "@/locales/en.json";

export const metadata = {
  title: "Services",
  description: en.servicesPage.metadata.description,
  alternates: {
    canonical: "https://roadminded.com/services",
    languages: {
      en: "https://roadminded.com/services",
      fi: "https://roadminded.com/fi/services",
      "zh-TW": "https://roadminded.com/zh-tw/services",
    },
  },
};

export default function Services() {
  return <ServicesPage content={en.servicesPage} />;
}