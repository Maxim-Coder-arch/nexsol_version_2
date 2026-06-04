import { dataMenu } from "@/data/menu.data";

const data = [
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
                type: "mailto:"
            },
            {
                label: "Вконтакте",
                link: "https://vk.com/im/convo/-237371792?entrypoint=community_page&tab=all",
                type: ""
            },
            {
                label: "Телеграм",
                link: "https://t.me/solid_nexus?direct",
                type: ""
            },
        ]
    },
    {
        label: "Прочее",
        links: [
            {
                label: "Политика конфиденциальности",
                link: "/",
                type: ""
            },
            {
                label: "Сотрудничество",
                link: "https://vk.com/nexsol_company",
                type: ""
            },
            {
                label: "Сообщить об ошибке",
                link: "https://vk.com/nexsol_company",
                type: ""
            },
        ]
    }
]

export { data as footerData }