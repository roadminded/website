import ContactPage from "@/components/pages/ContactPage";
import zhTw from "@/locales/zh-tw.json";

export const metadata = {
    title: "聯絡我們",
    description: zhTw.contactPage.metadata.description,
};

export default function ContactZhTw() {
    return <ContactPage content={zhTw.contactPage} />;
}