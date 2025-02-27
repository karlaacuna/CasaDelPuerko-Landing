import BannerHome from "../components/bannerHome";
import Footer from "../components/footer";
import { CatalogPage } from "./catalogPage";

export default function HomePage() {
    return (
        <>
            <BannerHome/>
            <CatalogPage/>
            <Footer/>
        </>
    );
}