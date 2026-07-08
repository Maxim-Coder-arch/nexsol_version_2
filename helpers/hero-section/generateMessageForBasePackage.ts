import { IPriceWithPackages } from "@/types/global/servicePackage.type";

const generateMessageForBasePackage = (servicePackage: IPriceWithPackages) => {
    return `
Здравствуйте! Меня заинтересовал пакет "${servicePackage.title}".

Услуги в пакете:
${servicePackage.services.map(s => `- ${s}`).join('\n')}

Цена: ${servicePackage.price} (скидка ${servicePackage.discount}%)

Пожалуйста, свяжитесь со мной для обсуждения деталей.`;
}

export default generateMessageForBasePackage;