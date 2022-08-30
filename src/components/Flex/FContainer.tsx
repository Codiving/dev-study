import { shouldForwardProp } from "@/src/utils/emotion";
import styled from "@emotion/styled";
import React from "react";

interface Props {
  direction?: React.CSSProperties["flexDirection"];
  justifyContent?: React.CSSProperties["justifyContent"];
  alignItems?: React.CSSProperties["alignItems"];
  flexWrap?: React.CSSProperties["flexWrap"];
  bgColor?: React.CSSProperties["backgroundColor"];
  padding?: React.CSSProperties["padding"];
}

const FContainer = styled("div", {
  shouldForwardProp: shouldForwardProp([
    "direction",
    "justifyContent",
    "alignItems",
    "flexWrap",
    "bgColor",
    "padding"
  ])
})<Props>(
  ({ direction, justifyContent, alignItems, flexWrap, bgColor, padding }) => ({
    display: "flex",
    flexDirection: direction,
    justifyContent,
    alignItems,
    flexWrap,
    backgroundColor: bgColor,
    padding
  })
);

export default FContainer;
