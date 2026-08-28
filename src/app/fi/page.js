import HomePage from "@/components/pages/HomePage";
import fi from "@/locales/fi.json";

export const metadata = {
    title: "RoadMinded Systems",
    description: fi.home.metadata.description,
};

export default function HomeFi() {
    return (
        <HomePage
            content={fi.home}
            localePrefix="/fi"
        />
    );
}