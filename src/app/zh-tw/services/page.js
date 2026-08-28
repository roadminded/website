import ServicesPage from "@/components/pages/ServicesPage";
import zhTw from "@/locales/zh-tw.json";

export const metadata = {
    title: "服務",
    description: zhTw.servicesPage.metadata.description,
};

export default function ServicesZhTw() {
    return (
        <ServicesPage
            content={zhTw.servicesPage}
            localePrefix="/zh-tw"
        />
    );
}