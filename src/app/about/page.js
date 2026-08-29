import AboutPage from "@/components/pages/AboutPage";
import en from "@/locales/en.json";

export const metadata = {
    title: "About",
    description: en.aboutPage.metadata.description,
    alternates: {
        canonical: "https://roadminded.com/about",
        languages: {
            en: "https://roadminded.com/about",
            fi: "https://roadminded.com/fi/about",
            "zh-TW": "https://roadminded.com/zh-tw/about",
            "x-default": "https://roadminded.com/about",
        },
    },
};

export default function About() {
    return <AboutPage content={en.aboutPage} />;
}