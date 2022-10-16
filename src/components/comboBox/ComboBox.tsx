import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FC } from "react";
import { useState } from "react";
import StyledComboBox, { StyledComboBoxList } from "./ComboBox.styles";
import { faCompass } from "@fortawesome/free-regular-svg-icons";
import { AnimatePresence } from "framer-motion";
import type { ComboBoxProps } from "./ComboBox.types";

const ComboBox: FC<ComboBoxProps> = ({ children, text }): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen((wasOpen) => !wasOpen);
  };

  return (
    <StyledComboBox onClick={toggleIsOpen} layout="preserve-aspect">
      <span>{text}</span>
      <FontAwesomeIcon icon={faCompass} />
      <AnimatePresence mode="wait">
        {isOpen && (
          <StyledComboBoxList
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 200 }}
            exit={{ opacity: 0, height: 0 }}
          >
            {children}
          </StyledComboBoxList>
        )}
      </AnimatePresence>
    </StyledComboBox>
  );
};

export default ComboBox;
