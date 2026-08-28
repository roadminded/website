import PrivacyPage from "@/components/pages/PrivacyPage";
import en from "@/locales/en.json";

export const metadata = {
  title: "Privacy",
  description: en.privacyPage.metadata.description,
};

export default function Privacy() {
  return <PrivacyPage content={en.privacyPage} />;
}