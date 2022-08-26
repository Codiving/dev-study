import { shouldForwardProp } from "@/src/utils/emotion";
import styled from "@emotion/styled";
import React, { memo } from "react";

interface Props {
  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];
  flex?: React.CSSProperties["flex"];
  //   label
  label?: string;
}

const FlexItem = styled("div", {
  shouldForwardProp: shouldForwardProp(["width", "height", "flex"])
})(({ width, height, flex, label }: Props) => ({
  width,
  height,
  flex,
  label
}));

export default memo(FlexItem);
