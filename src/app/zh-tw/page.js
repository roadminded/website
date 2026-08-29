import HomePage from "@/components/pages/HomePage";
import zhTw from "@/locales/zh-tw.json";

export const metadata = {
    title: "RoadMinded Systems",
    description: zhTw.home.metadata.description,
    alternates: {
        canonical: "https://roadminded.com/zh-tw",
        languages: {
            en: "https://roadminded.com/",
            fi: "https://roadminded.com/fi",
            "zh-TW": "https://roadminded.com/zh-tw",
            "x-default": "https://roadminded.com/",
        },
    },
};

export default function HomeZhTw() {
    return (
        <HomePage
            content={zhTw.home}
            localePrefix="/zh-tw"
        />
    );
}