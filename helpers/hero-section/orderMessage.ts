const generateMessage = (servicesList: string, totalPrice: number) => {
    return `
Здравствуйте! Хочу заказать индивидуальный пакет услуг:

${servicesList}

Общая стоимость: ${totalPrice.toLocaleString('ru-RU')} ₽

Пожалуйста, свяжитесь со мной для обсуждения деталей.`;
}

export default generateMessage;
