import { useState } from "react";
import { Flex, FlexItem } from "../ui";
import MB from "../ui/MB";
import { FlexMiniTitle, FlexTitle, FlexTypography } from "./ui";

const FLEX_DIRECTION: React.CSSProperties["flexDirection"][] = [
  "row",
  "row-reverse",
  "column",
  "column-reverse"
];

const FlexQuiz1 = () => {
  const [direction, setDirection] =
    useState<React.CSSProperties["flexDirection"]>("row");

  return (
    <>
      <FlexTitle># Quiz 1</FlexTitle>
      <MB size={1} />
      <FlexTypography>
        flex-direction, justify-content, align-items 속성을 알아보았습니다.
      </FlexTypography>
      <FlexTypography>
        위 속성을 이용하여 만들 수 있는 레이아웃 또는 컴포넌트를 실습해봅시다.
      </FlexTypography>

      <MB size={4} />
      <FlexMiniTitle>1. 아래 결과 레이아웃을 만들어봅시다.</FlexMiniTitle>
      <Flex>
        <FlexItem>왼쪽 위 아이템</FlexItem>
        <FlexItem>오른쪽 위 아이템</FlexItem>
        <FlexItem>왼쪽 아래 아이템</FlexItem>
        <FlexItem>오른쪽 아래 아이템</FlexItem>
      </Flex>
    </>
  );
};

export default FlexQuiz1;
