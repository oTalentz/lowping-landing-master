import { HomeContent } from "@/components/home/home-content"
import { Metadata } from "next"
import { getTranslations } from "next-intl/server"

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata.home_page")

  return {
    title: t("title")
  }
}

export default function HomePage() {
  return <HomeContent />
}