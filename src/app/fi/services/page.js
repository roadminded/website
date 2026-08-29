import ServicesPage from "@/components/pages/ServicesPage";
import fi from "@/locales/fi.json";

export const metadata = {
    title: "Palvelut",
    description: fi.servicesPage.metadata.description,
    alternates: {
        canonical: "https://roadminded.com/fi/services",
        languages: {
            en: "https://roadminded.com/services",
            fi: "https://roadminded.com/fi/services",
            "zh-TW": "https://roadminded.com/zh-tw/services",
            "x-default": "https://roadminded.com/services",
        },
    },
};

export default function ServicesFi() {
    return (
        <ServicesPage
            content={fi.servicesPage}
            localePrefix="/fi"
        />
    );
}