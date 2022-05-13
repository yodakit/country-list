export function getCountriesData() {
  const url = new URL("https://restcountries.com/v3.1/all");
  return fetch(url).then((r) => r.json());
}
export function getCountryDataFromName(name) {
  const url = new URL(`https://restcountries.com/v3.1/name/${name}`);
  return fetch(url).then((r) => r.json());
}
export function getCountryDataFromCode(code) {
  const url = new URL(`https://restcountries.com/v3.1/alpha/${code}`);
  return fetch(url).then((r) => r.json());
}