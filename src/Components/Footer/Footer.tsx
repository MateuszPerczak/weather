import type { FC } from "react";
import StyledFooter from "./Footer.style";

import Link from "../Link/Link";

const Footer: FC = (): JSX.Element => {
  return (
    <StyledFooter>
      <span>Mateusz Perczak © 2022</span>
      <Link href="https://github.com/MateuszPerczak">Github</Link>
      <Link href="https://mateuszperczak.github.io/">Website</Link>
    </StyledFooter>
  );
};

export default Footer;
