export type City = {
  name: string;
  latitude: number;
  longitude: number;
};

const cities: City[] = [
  { name: "Bydgoszcz", latitude: 53.123482, longitude: 18.008438 },
  { name: "Chełm", latitude: 51.143124, longitude: 23.471199 },
  { name: "Elblag", latitude: 54.156059, longitude: 19.40449 },
  { name: "Gdańsk", latitude: 54.372158, longitude: 18.638306 },
  { name: "Katowice", latitude: 50.270908, longitude: 19.039993 },
  { name: "Kołobrzeg", latitude: 54.175919, longitude: 15.583267 },
  { name: "Kraków", latitude: 50.049683, longitude: 19.944544 },
  { name: "Lublin", latitude: 51.246452, longitude: 22.568445 },
  { name: "Łódź", latitude: 51.759445, longitude: 19.457216 },
  { name: "Olsztyn", latitude: 53.770226, longitude: 20.490189 },
  { name: "Opole", latitude: 50.671062, longitude: 17.926126 },
  { name: "Poznań", latitude: 52.406376, longitude: 16.925167 },
  { name: "Poznań", latitude: 52.409538, longitude: 16.931992 },
  { name: "Rybnik", latitude: 50.096798, longitude: 18.542936 },
  { name: "Rzeszow", latitude: 50.041187, longitude: 21.999121 },
  { name: "Sosnowiec", latitude: 50.286263, longitude: 19.104078 },
  { name: "Starogard", latitude: 53.966187, longitude: 18.531017 },
  { name: "Szczecin", latitude: 53.428543, longitude: 14.552812 },
  { name: "Tarnowskie Góry", latitude: 50.435947, longitude: 18.846025 },
  { name: "Tarnów", latitude: 50.0121, longitude: 20.985842 },
  { name: "Toruń", latitude: 53.01379, longitude: 18.598444 },
  { name: "Tychy", latitude: 50.124981, longitude: 19.009438 },
  { name: "Warszawa", latitude: 52.237049, longitude: 21.017532 },
  { name: "Wrocław", latitude: 51.107883, longitude: 17.038538 },
  { name: "Zielona góra", latitude: 51.935619, longitude: 15.506186 },
];

export default cities;
