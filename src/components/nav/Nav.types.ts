import type { Dispatch, SetStateAction } from "react";

export type NavProps = {
    selectedCity: string;
    setSelectedCity: Dispatch<SetStateAction<NavProps["selectedCity"]>>;
};