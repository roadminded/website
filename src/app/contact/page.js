import ContactPage from "@/components/pages/ContactPage";
import en from "@/locales/en.json";

export const metadata = {
    title: "Contact",
    description: en.contactPage.metadata.description,
};

export default function Contact() {
    return <ContactPage content={en.contactPage} />;
}