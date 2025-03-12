import { getTranslations } from "next-intl/server"
import NavBar from "../nav-bar"
import Footer from "../footer"
import TermsOfService from "./terms-of-service"

export async function TermsContent() {
    const t = await getTranslations("home_content")

    return (
        <>
            <NavBar />
            <TermsOfService/>
            <Footer/>
        </>
    )
}

