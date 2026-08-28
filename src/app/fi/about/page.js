import AboutPage from "@/components/pages/AboutPage";
import fi from "@/locales/fi.json";

export const metadata = {
    title: "Meistä",
    description: fi.aboutPage.metadata.description,
};

export default function AboutFi() {
    return (
        <AboutPage
            content={fi.aboutPage}
            localePrefix="/fi"
        />
    );
}