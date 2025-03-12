import { HomeContent } from "@/components/home/home-content"
import { TermsContent } from "@/components/terms-of-service/terms-content"
import { Metadata } from "next"
import { getTranslations } from "next-intl/server"

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata.termsofservice")

  return {
    title: t("title")
  }
}

export default function HomePage() {
  return <TermsContent />
}