import { useQuery } from "@tanstack/react-query";

type WeatherData = {
  name: string;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
  };
  weather: {
    description: string;
    icon: string;
    id: number;
    main: string;
  }[];
  wind: {
    deg: number;
    gust: number;
    speed: number;
  };
};

export const useWeather = (city: string | null) => {
  const query = useQuery<WeatherData>([city], async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6967cc85728d1a5a59fa0fdd6086595e`,
    );
    return await response.json();
  });

  return query;
};
