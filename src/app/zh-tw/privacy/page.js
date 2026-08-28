import PrivacyPage from "@/components/pages/PrivacyPage";
import zhTw from "@/locales/zh-tw.json";

export const metadata = {
    title: "隱私權",
    description: zhTw.privacyPage.metadata.description,
};

export default function PrivacyZhTw() {
    return <PrivacyPage content={zhTw.privacyPage} />;
}