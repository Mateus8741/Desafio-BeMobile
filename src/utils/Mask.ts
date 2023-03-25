export function phoneMask(phone: string) {
  const phoneMasked = phone.replace(
    /(\d{2})(\d{2})(\d{5})(\d{4})/,
    "+$1 $2 $3-$4"
  );
  return phoneMasked;
}

export function dateMask(date: string) {
  const [year, month, day] = date.split("T")[0].split("-");
  return `${day}/${month}/${year}`;
}
