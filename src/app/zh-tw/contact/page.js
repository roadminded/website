import ContactPage from "@/components/pages/ContactPage";
import zhTw from "@/locales/zh-tw.json";

export const metadata = {
    title: "聯絡我們",
    description: zhTw.contactPage.metadata.description,
    alternates: {
        canonical: "https://roadminded.com/zh-tw/contact",
        languages: {
            en: "https://roadminded.com/contact",
            fi: "https://roadminded.com/fi/contact",
            "zh-TW": "https://roadminded.com/zh-tw/contact",
            "x-default": "https://roadminded.com/contact",
        },
    },
};

export default function ContactZhTw() {
    return <ContactPage content={zhTw.contactPage} />;
}