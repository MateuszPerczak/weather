import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FC, PropsWithChildren } from "react";
import { useState } from "react";
import StyledComboBox, { StyledComboBoxList } from "./ComboBox.styles";
import { faCompass } from "@fortawesome/free-regular-svg-icons";
import { AnimatePresence } from "framer-motion";

const ComboBox: FC<PropsWithChildren> = ({ children }): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen((wasOpen) => !wasOpen);
  };

  return (
    <StyledComboBox onClick={toggleIsOpen}>
      <span>Select location</span>
      <FontAwesomeIcon icon={faCompass} />
      <AnimatePresence mode="wait">
        {isOpen && (
          <StyledComboBoxList
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 200 }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: "spring", mass: 0.3, stiffness: 150 }}
          >
            {children}
          </StyledComboBoxList>
        )}
      </AnimatePresence>
    </StyledComboBox>
  );
};

export default ComboBox;
