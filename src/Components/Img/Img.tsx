import styled from "@emotion/styled";
import type ImgComponent from "./Img.types";

const Img: ImgComponent = styled.img`
  max-width: 150px;
  user-select: none;
  pointer-events: none;
`;

export default Img;
