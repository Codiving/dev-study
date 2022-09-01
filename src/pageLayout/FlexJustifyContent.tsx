import React, { useState } from "react";
import { FContainer, FItem } from "../components/Flex";
import { Flex, FlexItem } from "../ui";
import MB from "../ui/MB";
import { FlexDescription, FlexTitle, FlexTypography } from "./ui";

const FLEX_JUSTIFYCONTENT: React.CSSProperties["justifyContent"][] = [
  "flex-start",
  "flex-end",
  "center",
  "space-between",
  "space-around",
  "space-evenly"
];

const FlexJustifyContent = () => {
  const [justifyContent, setJustifyContent] =
    useState<React.CSSProperties["justifyContent"]>("flex-start");

  return (
    <>
      <FlexTitle># justify-content</FlexTitle>

      <MB size={1} />
      <FlexTypography>
        justify-content는 flex-item을 flex-direction 방향(이하, 주축)으로
        정렬하는 방법입니다.
      </FlexTypography>

      <MB size={4} />
      <FlexTypography>속성 값은 아래와 같습니다.</FlexTypography>
      <FlexTypography>
        flex-start : flex-item을 왼쪽으로 정렬 (기본 값)
      </FlexTypography>
      <FlexTypography> flex-end: flex-item을 오른쪽으로 정렬</FlexTypography>
      <FlexTypography> center: flex-item을 가운데로 정렬</FlexTypography>
      <FlexTypography>
        space-between: flex-item을 동일한 간격으로 정렬
      </FlexTypography>
      <FlexTypography>
        space-around: flex-item을 양옆 동일한 간격으로 정렬
      </FlexTypography>
      <FlexTypography>
        space-evenly: flex-item을 왼쪽, 오른쪽 모두 동일한 간격으로 정렬
      </FlexTypography>

      <MB size={4} />
      <FlexTypography>
        여기서 많이 사용되는 속성 값은 flex-start, center, space-between 입니다.
      </FlexTypography>
      <FlexTypography>
        space-between, space-around, space-evenly의 설명을 잘 적지 못 한 것
        같습니다.
      </FlexTypography>
      <FlexTypography>
        그러나 아래 실습을 통해 확인해보면 쉽게 이해 가능하실 것입니다.{" "}
      </FlexTypography>

      <MB size={2} />
      <FContainer
        justifyContent={justifyContent}
        bgColor={"#4c2602"}
        padding={8}
      >
        <FItem margin={4} padding={8} bgColor="#f5ece1">
          남산 위에 저
        </FItem>
        <FItem margin={4} padding={8} bgColor="#f5d9b7">
          소나무 철갑을 두른 듯
        </FItem>
        <FItem margin={4} padding={8} bgColor="#f6d0ac">
          바람
        </FItem>
        <FItem margin={4} padding={8} bgColor="#e8c49a">
          서리 불변함은
        </FItem>
        <FItem margin={4} padding={8} bgColor="#eaad74">
          우리 기상일세
        </FItem>
        <FItem margin={4} padding={8} bgColor="#e49245">
          무궁화 삼천리 화려강산
        </FItem>
      </FContainer>

      <MB size={1} />
      <Flex alignItems={"center"} spacing={10}>
        {FLEX_JUSTIFYCONTENT.map(justifyContent => {
          return (
            <FlexItem key={justifyContent}>
              <input
                type="radio"
                id={justifyContent}
                name={"justifyContent"}
                value={justifyContent}
                onClick={() => {
                  setJustifyContent(justifyContent);
                }}
              />
              <label htmlFor={justifyContent}>{justifyContent}</label>
            </FlexItem>
          );
        })}
      </Flex>

      <MB size={2} />
      <FlexDescription>* 보충 설명</FlexDescription>
      <FlexDescription>
        justfiy-content를 사용하면 width에 flex-item을 정렬할 수 있습니다.
      </FlexDescription>
      <FlexDescription>
        해당 속성도 많이 사용되는 속성이므로 꼭 이해하고 넘어가는 것이
        중요합니다.
      </FlexDescription>
    </>
  );
};

export default FlexJustifyContent;
