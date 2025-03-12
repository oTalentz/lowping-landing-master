"use client"

import { useTranslations } from "use-intl"

export function HomeContentClient() {
    const t = useTranslations("home_content")

    return (
        <>
            <span>Client content:</span>
            
            <h1>{t("title")}</h1>
            <p>{t("content")}</p>
        </>
    )
}