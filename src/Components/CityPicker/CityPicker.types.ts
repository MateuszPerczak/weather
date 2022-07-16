import type { Dispatch, SetStateAction } from "react";

type CityPickerProps = {
  city: string;
  setCity: Dispatch<SetStateAction<string>>;
  setPicker: (picker: boolean) => void;
};

export default CityPickerProps;
