import ServicesPage from "@/components/pages/ServicesPage";
import en from "@/locales/en.json";

export const metadata = {
  title: "Services",
  description: en.servicesPage.metadata.description,
};

export default function Services() {
  return <ServicesPage content={en.servicesPage} />;
}