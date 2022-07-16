import type { Dispatch, SetStateAction } from "react";
import type { City } from "../../Cities/cities";

type CityPickerProps = {
  city: City | null;
  setCity: Dispatch<SetStateAction<City | null>>;
  setPicker: (picker: boolean) => void;
};

export default CityPickerProps;
