import { getTranslations } from "next-intl/server"
import NavBar from "../nav-bar"
import Footer from "../footer"
import PrivacyPolicy from "./privacy-policy"

export async function PrivacyContent() {
    const t = await getTranslations("home_content")

    return (
        <>
            <NavBar />
            <PrivacyPolicy/>
            <Footer/>
        </>
    )
}

