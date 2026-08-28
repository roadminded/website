import TunnelMasterPage from "@/components/pages/TunnelMasterPage";
import zhTw from "@/locales/zh-tw.json";

export const metadata = {
    title: "TunnelMaster",
    description: zhTw.tunnelmaster.metadata.description,
};

export default function TunnelMasterZhTw() {
    return (
        <TunnelMasterPage
            content={zhTw.tunnelmaster}
            localePrefix="/zh-tw"
        />
    );
}