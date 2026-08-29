import TunnelMasterPage from "@/components/pages/TunnelMasterPage";
import zhTw from "@/locales/zh-tw.json";

export const metadata = {
    title: "TunnelMaster",
    description: zhTw.tunnelmaster.metadata.description,
    alternates: {
        canonical: "https://roadminded.com/zh-tw/tunnelmaster",
        languages: {
            en: "https://roadminded.com/tunnelmaster",
            fi: "https://roadminded.com/fi/tunnelmaster",
            "zh-TW": "https://roadminded.com/zh-tw/tunnelmaster",
        },
    },
};

export default function TunnelMasterZhTw() {
    return (
        <TunnelMasterPage
            content={zhTw.tunnelmaster}
            localePrefix="/zh-tw"
        />
    );
}