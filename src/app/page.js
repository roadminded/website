import HomePage from "@/components/pages/HomePage";
import en from "@/locales/en.json";

export const metadata = {
  description: en.home.metadata.description,
};

export default function Home() {
  return <HomePage content={en.home} />;
}