import ServicesPage from "@/components/pages/ServicesPage";
import fi from "@/locales/fi.json";

export const metadata = {
    title: "Palvelut",
    description: fi.servicesPage.metadata.description,
};

export default function ServicesFi() {
    return (
        <ServicesPage
            content={fi.servicesPage}
            localePrefix="/fi"
        />
    );
}