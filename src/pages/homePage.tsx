import BannerHome from "../components/bannerHome";
import Footer from "../components/footer";
import { CatalogPage } from "./catalogPage";

export default function HomePage() {
    return (
        <>
            <BannerHome/>
            <h2>Somos una rica chicharronería dedicada a explotar el más suavecito y delicioso sabor a puerko en tu paladar.</h2>
            <CatalogPage/>
            <Footer/>
        </>
    );
}