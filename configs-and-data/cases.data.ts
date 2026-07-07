import { ICases } from "@/types/cases.type";

export const casesData: ICases[] = [
  {
    _id: "1",
    title: "Программа для управления сайтом и продажами",
    description: "Разработали систему для управления сайтом и продажами",
    banner: "/images/presentations/cm-cms-presentation.png",
    additionalInfo: [
      { label: "Срок разработки", value: "28 дней" },
      { label: "Окупаемость", value: "2 месяца" },
      { label: "Технологии", value: "Next.js, nodejs, mongoDB, asp.net core" }
    ]
  },
  {
    _id: "2",
    title: "Монопородный питомник мейн-кунов",
    description: "Разработали корпоративный сайт с cms системой, подключили аналитику, вывели сайт в топы по позиции в выдаче",
    banner: "/images/presentations/large-minion-presentation.png",
    link: "https://large-minion.vercel.app/",
    additionalInfo: [
      { label: "Срок разработки", value: "14 дней" },
      { label: "Увеличение продаж", value: "+120%" },
      { label: "Технологии сайта", value: "Next.js, MongoDB, nodejs" }
    ]
  },
  {
    _id: "3",
    title: "Наградные розетки",
    description: "Разработали интернет магазин с cms + crm системами, вывели сайт в топы, настроили рекламу, провели полный цикл SMM, привели новых клиентов",
    banner: "/images/presentations/rossets-presentation.png",
    link: "https://test-rossets.vercel.app/",
    additionalInfo: [
      { label: "Срок работы", value: "15 дней" },
      { label: "Рост трафика", value: "+280%" },
      { label: "Технологии сайта", value: "Next.js, MongoDb, asp.net core" }
    ]
  },
  {
    _id: "4",
    title: "Внутренняя система для управления бизнесом",
    description: "Разработали cms&crm систему для управления бизнесом и сайтом",
    banner: "/images/presentations/rs-cms-presentation.png",
    additionalInfo: [
      { label: "Срок разработки", value: "8 дней" },
      { label: "Технологии", value: "Next.js, MongoDB" }
    ]
  },
];