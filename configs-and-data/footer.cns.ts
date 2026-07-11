import { dataMenu } from "@/data/menu.data";

export interface IFooterData {
    label: string;
    links: {
        label: string;
        link: string;
    }[]
}

const data: IFooterData[] = [
    {
        label: "Меню",
        links: [...dataMenu]
    },
    {
        label: "Контакты",
        links: [
            {
                label: "solidnexus@yandex.ru",
                link: "solidnexus@yandex.ru",
            },
            {
                label: "Вконтакте",
                link: "https://vk.com/im/convo/-237371792?entrypoint=community_page&tab=all",
            },
            {
                label: "Телеграм",
                link: "https://t.me/solid_nexus?direct",
            },
        ]
    },
    {
        label: "Прочее",
        links: [
            {
                label: "Политика конфиденциальности",
                link: "/pages/privacy",
            },
            {
                label: "Сотрудничество",
                link: "https://vk.com/nexsol_company",
            },
            {
                label: "Сообщить об ошибке",
                link: "https://vk.com/nexsol_company",
            },
        ]
    },
    {
        label: "Работа",
        links: [
            {
                label: "Solid Nexus Core",
                link: "https://nexsol-crm-version-2.vercel.app/"
            }
        ]
    }
]

export { data as footerData }