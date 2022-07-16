import type { FC } from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CityPicker from "../Components/CityPicker/CityPicker";
import CityWeather from "../Components/CityWeather/CityWeather";
import type { City } from "../Cities/cities";

const Home: FC = (): JSX.Element => {
  const [city, setCity] = useState<City | null>(null);
  const [picker, setPicker] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, scale: "0%" }}
      animate={{ opacity: 1, scale: "100%" }}
    >
      <AnimatePresence initial={false}>
        {picker && (
          <CityPicker city={city} setCity={setCity} setPicker={setPicker} />
        )}
        {!picker && city && <CityWeather city={city} />}
      </AnimatePresence>
    </motion.div>
  );
};

export default Home;
