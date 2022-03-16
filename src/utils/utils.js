export function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function formatDate(date) {
  return (date.getDate().toString().length === 2 ? date.getDate() : '0'+date.getDate())  + "." + (date.getMonth()+1) + "." + date.getFullYear()
}
