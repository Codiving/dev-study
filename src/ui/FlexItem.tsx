import { shouldForwardProp } from "@/src/utils/emotion";
import styled from "@emotion/styled";
import React, { memo } from "react";

interface Props {
  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];
  flex?: React.CSSProperties["flex"];
  // paddig
  padding?: React.CSSProperties["padding"];
  //   label
  label?: string;
}

const FlexItem = styled("div", {
  shouldForwardProp: shouldForwardProp(["width", "height", "flex", "padding"])
})(({ width, height, flex, padding, label }: Props) => ({
  width,
  height,
  flex,
  padding,
  label
}));

export default memo(FlexItem);
