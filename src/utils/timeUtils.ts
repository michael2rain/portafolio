import formatDistanceStrict from 'date-fns/formatDistanceStrict/index.js';
import es from "date-fns/locale/es/index.js";

export const dateFormat = (fecha: string) => {
    const fechaBase = new Date(fecha);
    const result = formatDistanceStrict(new Date(), fechaBase, { locale: es });
    return `Hace ${result}`;
};

export const readingTime = (content: string) => {
    const wpm = 225;
    const words = content.trim().split(/\s+/).length;
    const time = Math.ceil(words / wpm);
    return `${time} min de lectura`;
};