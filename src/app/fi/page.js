import HomePage from "@/components/pages/HomePage";
import fi from "@/locales/fi.json";

export const metadata = {
    title: "RoadMinded Systems",
    description: fi.home.metadata.description,
    alternates: {
        canonical: "https://roadminded.com/fi",
        languages: {
            en: "https://roadminded.com/",
            fi: "https://roadminded.com/fi",
            "zh-TW": "https://roadminded.com/zh-tw",
        },
    },
};

export default function HomeFi() {
    return (
        <HomePage
            content={fi.home}
            localePrefix="/fi"
        />
    );
}