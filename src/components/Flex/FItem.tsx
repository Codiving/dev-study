import { shouldForwardProp } from "@/src/utils/emotion";
import styled from "@emotion/styled";

interface Props {
  bgColor?: React.CSSProperties["backgroundColor"];
  padding?: React.CSSProperties["padding"];
  border?: React.CSSProperties["border"];
  margin?: React.CSSProperties["margin"];
}

const FItem = styled("div", {
  shouldForwardProp: shouldForwardProp([
    "bgColor",
    "padding",
    "border",
    "margin"
  ])
})<Props>(({ bgColor, padding, border, margin }) => ({
  backgroundColor: bgColor,
  padding,
  border,
  margin
}));

export default FItem;
