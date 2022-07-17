import type { Dispatch, SetStateAction } from "react";

type CityPickerProps = {
  city: string;
  setCity: Dispatch<SetStateAction<string>>;
  setPicker: Dispatch<SetStateAction<boolean>>;
};

export default CityPickerProps;
