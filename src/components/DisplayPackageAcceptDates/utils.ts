export function formatDate(baseDate: string): string{

    const newDate = new Date(baseDate);

    const year = newDate.getFullYear();
    const month = newDate.getMonth();
    const day = newDate.getDay();

    return `${day < 10 ? `0${day}` : day }-${month}-${year}`;

}



