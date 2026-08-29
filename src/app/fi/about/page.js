import AboutPage from "@/components/pages/AboutPage";
import fi from "@/locales/fi.json";

export const metadata = {
    title: "Meistä",
    description: fi.aboutPage.metadata.description,
    alternates: {
        canonical: "https://roadminded.com/fi/about",
        languages: {
            en: "https://roadminded.com/about",
            fi: "https://roadminded.com/fi/about",
            "zh-TW": "https://roadminded.com/zh-tw/about",
            "x-default": "https://roadminded.com/about",
        },
    },
};

export default function AboutFi() {
    return (
        <AboutPage
            content={fi.aboutPage}
            localePrefix="/fi"
        />
    );
}