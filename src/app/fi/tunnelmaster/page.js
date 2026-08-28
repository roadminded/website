import TunnelMasterPage from "@/components/pages/TunnelMasterPage";
import fi from "@/locales/fi.json";

export const metadata = {
    title: "Tunnelimestari",
    description: fi.tunnelmaster.metadata.description,
};

export default function TunnelMasterFi() {
    return (
        <TunnelMasterPage
            content={fi.tunnelmaster}
            localePrefix="/fi"
        />
    );
}