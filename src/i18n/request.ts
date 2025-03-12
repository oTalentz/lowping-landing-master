import { getCookie } from '@/lib/cookies'
import { api } from '@/services/api'
import { getRequestConfig, GetRequestConfigParams } from 'next-intl/server'

const supportedLocales = process.env.NEXT_PUBLIC_AVAILABLE_LOCALES!!.split(',')

export default getRequestConfig(async (req: GetRequestConfigParams) => {
    let locale = await getCookie("i18n@locale") ||
        (await req.requestLocale) ||
        (process.env.NEXT_PUBLIC_DEFAULT_LOCALE as string)

    if (!supportedLocales.includes(locale)) {
        locale = process.env.NEXT_PUBLIC_DEFAULT_LOCALE as string
    }

    const response = await api.get(`/api/translation?lang=${locale}`)

    return {
        locale,
        messages: response.data
    }
})