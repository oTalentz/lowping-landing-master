import { getTranslations } from "next-intl/server"
import NavBar from "../nav-bar"
import HeaderHome from "./header-home/header-home"
import ChoseGameHome from "./chosegame-home/chosegame-home"
import Support from "./support"
import FAQ from "./faq-home/faq-home"
import Footer from "../footer"

export async function HomeContent() {
    const t = await getTranslations("home_content")

    return (
        <>
            <NavBar />
            <HeaderHome/>
            <ChoseGameHome/>
            <FAQ/>
            <Support/>
            <Footer/>
        </>
    )
}

