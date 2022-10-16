import type { Dispatch, SetStateAction } from "react";

export type ComboBoxProps = {
    value: string | null;
    setValue: Dispatch<SetStateAction<ComboBoxProps["value"]>>;
    options: string[];
};