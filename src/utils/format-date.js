export default function formatDate(date) {
    const dateParts = date.split("-");
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
}