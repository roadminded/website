import HomePage from "@/components/pages/HomePage";
import zhTw from "@/locales/zh-tw.json";

export const metadata = {
    title: "RoadMinded Systems",
    description: zhTw.home.metadata.description,
};

export default function HomeZhTw() {
    return (
        <HomePage
            content={zhTw.home}
            localePrefix="/zh-tw"
        />
    );
}