import { shouldForwardProp } from "@/src/utils/emotion";
import styled from "@emotion/styled";

interface Props {
  // width
  width?: React.CSSProperties["width"];
  minWidth?: React.CSSProperties["minWidth"];
  maxWidth?: React.CSSProperties["maxWidth"];
  fullWidth?: boolean;
  //   height
  height?: React.CSSProperties["height"];
  minHeight?: React.CSSProperties["minHeight"];
  maxHeight?: React.CSSProperties["maxHeight"];
  fullHeight?: boolean;
  //   padding
  padding: React.CSSProperties["padding"];
  pl: React.CSSProperties["paddingLeft"];
  pr: React.CSSProperties["paddingRight"];
  pt: React.CSSProperties["paddingTop"];
  pb: React.CSSProperties["paddingBottom"];
  //   margin
  margin: React.CSSProperties["margin"];
  ml: React.CSSProperties["marginLeft"];
  mr: React.CSSProperties["marginRight"];
  mt: React.CSSProperties["marginTop"];
  mb: React.CSSProperties["marginBottom"];
  //   border
  border: React.CSSProperties["border"];
  bl: React.CSSProperties["borderLeft"];
  br: React.CSSProperties["borderRight"];
  bt: React.CSSProperties["borderTop"];
  bb: React.CSSProperties["borderBottom"];
  radius: React.CSSProperties["borderRadius"];
  //   label
  label?: string;
}

const Box = styled("div", {
  shouldForwardProp: shouldForwardProp([
    "width",
    "minWidth",
    "maxWidth",
    "fullWidth",
    "height",
    "minHeight",
    "maxHeight",
    "fullHeight",
    "padding",
    "pl",
    "pr",
    "pt",
    "pb",
    "margin",
    "ml",
    "mr",
    "mt",
    "mb",
    "border",
    "bl",
    "br",
    "bt",
    "bb",
    "radius"
  ])
})<Props>(
  ({
    width,
    minWidth,
    maxWidth,
    fullWidth,
    height,
    minHeight,
    maxHeight,
    fullHeight,
    padding,
    pl,
    pr,
    pt,
    pb,
    margin,
    ml,
    mr,
    mt,
    mb,
    border,
    bl,
    br,
    bt,
    bb,
    radius,
    label
  }) => ({
    width: fullWidth ? "100%" : width,
    minWidth,
    maxWidth,
    height: fullHeight ? "100%" : height,
    minHeight,
    maxHeight,
    padding,
    pl,
    pr,
    pt,
    pb,
    margin,
    ml,
    mr,
    mt,
    mb,
    border,
    bl,
    br,
    bt,
    bb,
    borderRadius: radius,
    label
  })
);

export default Box;
