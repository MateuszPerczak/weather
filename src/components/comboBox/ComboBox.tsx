import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FC } from "react";
import { useState } from "react";
import StyledComboBox, {
  StyledComboBoxItem,
  StyledComboBoxList,
} from "./ComboBox.styles";
import { faCompass } from "@fortawesome/free-regular-svg-icons";
import { AnimatePresence } from "framer-motion";
import type { ComboBoxProps } from "./ComboBox.types";

const ComboBox: FC<ComboBoxProps> = ({ value, setValue, options }): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen((wasOpen) => !wasOpen);
  };

  return (
    <StyledComboBox onClick={toggleIsOpen} layout="preserve-aspect">
      <span>{value ?? "Select city"}</span>
      <FontAwesomeIcon icon={faCompass} />
      <AnimatePresence mode="wait">
        {isOpen && (
          <StyledComboBoxList
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 200 }}
            exit={{ opacity: 0, height: 0 }}
          >
            {options.map((option, index) => (
              <StyledComboBoxItem
                key={`option-${index}`}
                onClick={() => setValue(option)}
              >
                {option}
              </StyledComboBoxItem>
            ))}
          </StyledComboBoxList>
        )}
      </AnimatePresence>
    </StyledComboBox>
  );
};

export default ComboBox;
