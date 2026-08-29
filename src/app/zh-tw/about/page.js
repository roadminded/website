import AboutPage from "@/components/pages/AboutPage";
import zhTw from "@/locales/zh-tw.json";

export const metadata = {
    title: "關於我們",
    description: zhTw.aboutPage.metadata.description,
    alternates: {
        canonical: "https://roadminded.com/zh-tw/about",
        languages: {
            en: "https://roadminded.com/about",
            fi: "https://roadminded.com/fi/about",
            "zh-TW": "https://roadminded.com/zh-tw/about",
            "x-default": "https://roadminded.com/about",
        },
    },
};

export default function AboutZhTw() {
    return (
        <AboutPage
            content={zhTw.aboutPage}
            localePrefix="/zh-tw"
        />
    );
}