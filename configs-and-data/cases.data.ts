import { ICases } from "@/types/cases.type";

export const casesData: ICases[] = [
  {
    _id: "1",
    title: "Интернет-магазин мебели",
    description: "Разработали интернет-магазин с фильтрацией, корзиной и интеграцией с CRM. Настроили рекламную кампанию в Яндекс.Директ.",
    banner: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800",
    link: "https://example.com/case/furniture-store",
    additionalInfo: [
      { label: "Срок разработки", value: "21 день" },
      { label: "Увеличение продаж", value: "+340%" },
      { label: "ROI рекламы", value: "185%" },
      { label: "Технологии", value: "Next.js, Node.js, MongoDB" }
    ]
  },
  {
    _id: "2",
    title: "Медицинский центр",
    description: "Сайт с записью к врачам онлайн, интеграция с 1С, личный кабинет пациента. Настроили SEO и контекстную рекламу.",
    banner: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800",
    link: "https://example.com/case/medical-center",
    additionalInfo: [
      { label: "Срок разработки", value: "35 дней" },
      { label: "Записей в месяц", value: "+520" },
      { label: "Рост трафика", value: "+280%" },
      { label: "Технологии", value: "React, Laravel, MySQL" }
    ]
  },
  {
    _id: "3",
    title: "Кейтеринговая компания",
    description: "Сайт-визитка с галереей блюд, калькулятором стоимости банкета и формой заявки.",
    banner: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800",
    link: "https://example.com/case/catering",
    additionalInfo: [
      { label: "Срок разработки", value: "12 дней" },
      { label: "Заявок в неделю", value: "+45" },
      { label: "Конверсия", value: "8.2%" },
      { label: "Технологии", value: "Next.js, Framer Motion" }
    ]
  },
  {
    _id: "4",
    title: "Стоматологическая клиника",
    description: "Многостраничный сайт с карточками услуг, ценами, онлайн-записью и отзывами. Интеграция с Telegram-ботом.",
    banner: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800",
    link: "https://example.com/case/dental-clinic",
    additionalInfo: [
      { label: "Срок разработки", value: "28 дней" },
      { label: "Новых пациентов", value: "+180" },
      { label: "Окупаемость", value: "2 месяца" },
      { label: "Технологии", value: "WordPress, PHP, JS" }
    ]
  },
  {
    _id: "5",
    title: "Строительная компания",
    description: "Корпоративный сайт с портфолио объектов, калькулятором сметы и формой обратной связи.",
    banner: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800",
    link: "https://example.com/case/construction",
    additionalInfo: [
      { label: "Срок разработки", value: "18 дней" },
      { label: "Заявок в месяц", value: "+95" },
      { label: "Средний чек", value: "+35%" },
      { label: "Технологии", value: "Vue.js, Django, PostgreSQL" }
    ]
  },
  {
    _id: "6",
    title: "Фитнес-клуб",
    description: "Лендинг с анимациями, формой записи на пробное занятие и интеграцией с amoCRM.",
    banner: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800",
    link: "https://example.com/case/fitness-club",
    additionalInfo: [
      { label: "Срок разработки", value: "9 дней" },
      { label: "Записей на тренировки", value: "+230" },
      { label: "Конверсия", value: "12.5%" },
      { label: "Технологии", value: "Next.js, SCSS, MongoDB" }
    ]
  }
];