import TunnelMasterPage from "@/components/pages/TunnelMasterPage";
import en from "@/locales/en.json";

export const metadata = {
    title: "TunnelMaster",
    description: en.tunnelmaster.metadata.description,
    alternates: {
        canonical: "https://roadminded.com/tunnelmaster",
        languages: {
            en: "https://roadminded.com/tunnelmaster",
            fi: "https://roadminded.com/fi/tunnelmaster",
            "zh-TW": "https://roadminded.com/zh-tw/tunnelmaster",
            "x-default": "https://roadminded.com/tunnelmaster",
        },
    },
};

export default function TunnelMaster() {
    return <TunnelMasterPage content={en.tunnelmaster} />;
}