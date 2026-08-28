import PrivacyPage from "@/components/pages/PrivacyPage";
import fi from "@/locales/fi.json";

export const metadata = {
    title: "Tietosuoja",
    description: fi.privacyPage.metadata.description,
};

export default function PrivacyFi() {
    return <PrivacyPage content={fi.privacyPage} />;
}