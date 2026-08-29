import PrivacyPage from "@/components/pages/PrivacyPage";
import fi from "@/locales/fi.json";

export const metadata = {
    title: "Tietosuoja",
    description: fi.privacyPage.metadata.description,
    alternates: {
        canonical: "https://roadminded.com/fi/privacy",
        languages: {
            en: "https://roadminded.com/privacy",
            fi: "https://roadminded.com/fi/privacy",
            "zh-TW": "https://roadminded.com/zh-tw/privacy",
        },
    },
};

export default function PrivacyFi() {
    return <PrivacyPage content={fi.privacyPage} />;
}