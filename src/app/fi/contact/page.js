import ContactPage from "@/components/pages/ContactPage";
import fi from "@/locales/fi.json";

export const metadata = {
    title: "Yhteystiedot",
    description: fi.contactPage.metadata.description,
};

export default function ContactFi() {
    return <ContactPage content={fi.contactPage} />;
}