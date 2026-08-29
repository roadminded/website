import ServicesPage from "@/components/pages/ServicesPage";
import zhTw from "@/locales/zh-tw.json";

export const metadata = {
    title: "服務",
    description: zhTw.servicesPage.metadata.description,
    alternates: {
        canonical: "https://roadminded.com/zh-tw/services",
        languages: {
            en: "https://roadminded.com/services",
            fi: "https://roadminded.com/fi/services",
            "zh-TW": "https://roadminded.com/zh-tw/services",
        },
    },
};

export default function ServicesZhTw() {
    return (
        <ServicesPage
            content={zhTw.servicesPage}
            localePrefix="/zh-tw"
        />
    );
}