import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledAnimatedBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
`;

export const AnimatedSun = styled(FontAwesomeIcon)`
  position: absolute;
  left: -30rem;
  top: -30rem;
  font-size: 60rem;
  color: #00000033;
  line-height: 0;
  z-index: -1;
  animation: rotate 20s infinite linear both;
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default StyledAnimatedBackground;
