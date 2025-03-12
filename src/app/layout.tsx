import type { Metadata } from "next"
import { NextIntlClientProvider } from "next-intl"
import { getLocale, getMessages, getTranslations } from "next-intl/server"
import "./globals.css"

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata")

  return {
    title: {
      template: "%s | LowPing Hosting",
      default: "LowPing Hosting"
    },
    description: t("description"),
    metadataBase: new URL("https://lowping.host")
  }
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale()
  const messages = await getMessages({ locale })

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}