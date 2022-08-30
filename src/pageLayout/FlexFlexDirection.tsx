import { useState } from "react";
import { FContainer, FItem } from "../components/Flex";
import { Flex, FlexItem } from "../ui";
import MB from "../ui/MB";
import { FlexDescription, FlexTitle, FlexTypography } from "./ui";

const FLEX_DIRECTION: React.CSSProperties["flexDirection"][] = [
  "row",
  "row-reverse",
  "column",
  "column-reverse"
];

const FlexFlexDirection = () => {
  const [direction, setDirection] =
    useState<React.CSSProperties["flexDirection"]>("row");

  return (
    <>
      <FlexTitle># flex-direction</FlexTitle>
      <MB size={1} />
      <FlexTypography>
        flex-direction은 flex item의 정렬하는 방향을 의미합니다.
      </FlexTypography>
      <MB size={4} />
      <FlexTypography>속성 값은 아래와 같습니다.</FlexTypography>
      <FlexTypography>`row`: 왼쪽에서 오른쪽으로 정렬 (기본 값)</FlexTypography>
      <FlexTypography>`row-reverse`: 오른쪽에서 왼쪽으로 정렬</FlexTypography>
      <FlexTypography>`column`: 위쪽에서 아래쪽으로 정렬</FlexTypography>
      <FlexTypography>
        `column-reverse`: 아래쪽에서 위쪽으로 정렬
      </FlexTypography>
      <MB size={4} />
      <FlexTypography>
        여기서 많이 사용되는 속성 값은 row, column 입니다.
      </FlexTypography>
      <FlexTypography>실습을 통해 알아보겠습니다.</FlexTypography>

      <FContainer direction={direction} bgColor={"#4c2602"} padding={8}>
        <FItem margin={4} padding={8} bgColor="#f5ece1">
          AAAAA
        </FItem>
        <FItem margin={4} padding={8} bgColor="#f5d9b7">
          BBBBBBBBBBB
        </FItem>
        <FItem margin={4} padding={8} bgColor="#f6d0ac">
          CCC
        </FItem>
        <FItem margin={4} padding={8} bgColor="#e8c49a">
          DDDDDDDD
        </FItem>
        <FItem margin={4} padding={8} bgColor="#eaad74">
          EEEEEEEEEEEEEEEEEEEE
        </FItem>
        <FItem margin={4} padding={8} bgColor="#e49245">
          FFFFF
        </FItem>
      </FContainer>

      <MB size={1} />
      <Flex alignItems={"center"} spacing={10}>
        {FLEX_DIRECTION.map(direction => {
          return (
            <FlexItem key={direction}>
              <input
                type="radio"
                id={direction}
                name={"flexDirection"}
                value={direction}
                onClick={() => {
                  setDirection(direction);
                }}
              />
              <label htmlFor={direction}>{direction}</label>
            </FlexItem>
          );
        })}
      </Flex>

      <MB size={2} />
      <FlexTypography>
        위 실습 결과를 보면 row 방향일 때는 크기에 맞게 width가 설정되는 것을
        확인할 수 있습니다.
      </FlexTypography>
      <FlexTypography>
        그러나 column 방향인 경우는 width가 100% 되는 것을 확인할 수 있습니다.
      </FlexTypography>

      <MB size={2} />
      <FlexDescription>
        * 미리 학습해보자면 flex-item에 설정된 기본 값 때문에 그렇습니다.
      </FlexDescription>
      <FlexDescription>
        해당 내용은 뒷 부분에서 학습할 수 있습니다.
      </FlexDescription>
    </>
  );
};

export default FlexFlexDirection;
