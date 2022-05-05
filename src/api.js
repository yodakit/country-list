export function getCountryData() {
  const url = new URL("https://restcountries.com/v3.1/all");
  return fetch(url).then((r) => r.json());
}