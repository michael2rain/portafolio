import formatDistanceStrict from 'date-fns/formatDistanceStrict/index.js';
import format from 'date-fns/format/index.js';
import es from "date-fns/locale/es/index.js";

export const dateFormatDistance = (fecha: string) => {
    const fechaBase = new Date(fecha);
    const result = formatDistanceStrict(new Date(), fechaBase, { locale: es });
    return `Hace ${result}`;
};

export const dateFormat = (fecha: string, formatType: string) => {
    const fechaBase = new Date(fecha);
    const result = format(fechaBase, formatType, { locale: es })
    return result;
};

export const readingTime = (content: string) => {
    const wpm = 225;
    const words = content.trim().split(/\s+/).length;
    const time = Math.ceil(words / wpm);
    return `${time} min de lectura`;
};