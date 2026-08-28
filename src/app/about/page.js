import AboutPage from "@/components/pages/AboutPage";
import en from "@/locales/en.json";

export const metadata = {
    title: "About",
    description: en.aboutPage.metadata.description,
};

export default function About() {
    return <AboutPage content={en.aboutPage} />;
}