import TunnelMasterPage from "@/components/pages/TunnelMasterPage";
import fi from "@/locales/fi.json";

export const metadata = {
    title: "Tunnelimestari",
    description: fi.tunnelmaster.metadata.description,
    alternates: {
        canonical: "https://roadminded.com/fi/tunnelmaster",
        languages: {
            en: "https://roadminded.com/tunnelmaster",
            fi: "https://roadminded.com/fi/tunnelmaster",
            "zh-TW": "https://roadminded.com/zh-tw/tunnelmaster",
        },
    },
};

export default function TunnelMasterFi() {
    return (
        <TunnelMasterPage
            content={fi.tunnelmaster}
            localePrefix="/fi"
        />
    );
}