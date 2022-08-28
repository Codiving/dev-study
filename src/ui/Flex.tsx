import styled from "@emotion/styled";
import React, { memo } from "react";
import { shouldForwardProp } from "../utils/emotion";

const getSpacing = (
  spacing: number,
  crossSpacing: number,
  direction: React.CSSProperties["flexDirection"]
) => {
  const [dir, crossDir] = direction?.includes("column")
    ? ["marginTop", "marginLeft"]
    : ["marginLeft", "marginTop"];

  return {
    [dir]: -spacing,
    [crossDir]: -crossSpacing,
    "& > *": {
      [dir]: spacing,
      [crossDir]: crossSpacing
    }
  };
};

interface Props {
  // flex
  display?: "flex" | "inline-flex";
  direction?: React.CSSProperties["flexDirection"];
  justifyContent?: React.CSSProperties["justifyContent"];
  alignItems?: React.CSSProperties["alignItems"];
  wrap?: React.CSSProperties["flexWrap"];
  spacing?: number;
  crossSpacing?: number;
  // width
  width?: React.CSSProperties["width"];
  fullWidth?: boolean;
  // height
  height?: React.CSSProperties["height"];
  fullHeight?: boolean;
  // background
  bgColor?: React.CSSProperties["backgroundColor"];
  // paddig
  padding?: React.CSSProperties["padding"];
  // label
  label?: string;
}

const Flex = styled("div", {
  shouldForwardProp: shouldForwardProp([
    "display",
    "direction",
    "justifyContent",
    "alignItems",
    "wrap",
    "spacing",
    "crossSpacing",
    "width",
    "fullWidth",
    "height",
    "fullHeight",
    "bgColor",
    "padding"
  ])
})<Props>(
  ({
    display = "flex",
    direction = "row",
    justifyContent,
    alignItems,
    wrap,
    spacing = 0,
    crossSpacing = 0,
    width,
    fullWidth,
    height,
    fullHeight,
    bgColor,
    padding,
    label
  }) => ({
    display: display,
    flexDirection: direction,
    justifyContent: justifyContent,
    alignItems: alignItems,
    flexWrap: wrap,
    width: fullWidth ? "100%" : width,
    height: fullHeight ? "100%" : height,
    backgroundColor: bgColor,
    padding,
    ...getSpacing(spacing, crossSpacing, direction),
    label
  })
);

export default memo(Flex);
