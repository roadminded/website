import PrivacyPage from "@/components/pages/PrivacyPage";
import zhTw from "@/locales/zh-tw.json";

export const metadata = {
    title: "隱私權",
    description: zhTw.privacyPage.metadata.description,
    alternates: {
        canonical: "https://roadminded.com/zh-tw/privacy",
        languages: {
            en: "https://roadminded.com/privacy",
            fi: "https://roadminded.com/fi/privacy",
            "zh-TW": "https://roadminded.com/zh-tw/privacy",
        },
    },
};

export default function PrivacyZhTw() {
    return <PrivacyPage content={zhTw.privacyPage} />;
}