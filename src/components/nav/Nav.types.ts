import type { Dispatch, SetStateAction } from "react";

export type NavProps = {
    selectedCity: string | null;
    setSelectedCity: Dispatch<SetStateAction<NavProps["selectedCity"]>>;
};