import TunnelMasterPage from "@/components/pages/TunnelMasterPage";
import en from "@/locales/en.json";

export const metadata = {
    title: "TunnelMaster",
    description: en.tunnelmaster.metadata.description,
};

export default function TunnelMaster() {
    return <TunnelMasterPage content={en.tunnelmaster} />;
}