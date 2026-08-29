import ContactPage from "@/components/pages/ContactPage";
import en from "@/locales/en.json";

export const metadata = {
    title: "Contact",
    description: en.contactPage.metadata.description,
    alternates: {
        canonical: "https://roadminded.com/contact",
        languages: {
            en: "https://roadminded.com/contact",
            fi: "https://roadminded.com/fi/contact",
            "zh-TW": "https://roadminded.com/zh-tw/contact",
        },
    },
};

export default function Contact() {
    return <ContactPage content={en.contactPage} />;
}