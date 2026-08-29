import ContactPage from "@/components/pages/ContactPage";
import fi from "@/locales/fi.json";

export const metadata = {
    title: "Yhteystiedot",
    description: fi.contactPage.metadata.description,
    alternates: {
        canonical: "https://roadminded.com/fi/contact",
        languages: {
            en: "https://roadminded.com/contact",
            fi: "https://roadminded.com/fi/contact",
            "zh-TW": "https://roadminded.com/zh-tw/contact",
            "x-default": "https://roadminded.com/contact",
        },
    },
};

export default function ContactFi() {
    return <ContactPage content={fi.contactPage} />;
}