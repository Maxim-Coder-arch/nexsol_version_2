import WebsiteIcon from "@/public/icons/website";
import AdvertisingIcon from "@/public/icons/advertising";
import PlanIcon from "@/public/icons/plan";
import AnalyticsIcon from "@/public/icons/analytics";
import PeopleIcon from "@/public/icons/people";
import { IAboutSectionItems } from "@/types/about/aboutSectionItems.type";

const data: IAboutSectionItems[] = [
  {
    label: "разработка сайта + базовая cms система",
    icon: <WebsiteIcon />
  },
  {
    label: "Настройка рекламы",
    icon: <AdvertisingIcon />
  },
  {
    label: "SMM с разработкой контент плана",
    icon: <PlanIcon />
  },
  {
    label: "Настройка аналитики + seo оптимизация сайта",
    icon: <AnalyticsIcon />
  },
  {
    label: "Лидогенерация",
    icon: <PeopleIcon />
  },
]

export { data as aboutDataIcons }