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

      <MB size={2} />
      <FContainer direction={direction} bgColor={"#4c2602"} padding={8}>
        <FItem margin={4} padding={8} bgColor="#f5ece1">
          동해물과
        </FItem>
        <FItem margin={4} padding={8} bgColor="#f5d9b7">
          백두산이 마르고
        </FItem>
        <FItem margin={4} padding={8} bgColor="#f6d0ac">
          닳도록
        </FItem>
        <FItem margin={4} padding={8} bgColor="#e8c49a">
          하느님이 보우하사 우리나라
        </FItem>
        <FItem margin={4} padding={8} bgColor="#eaad74">
          만세
        </FItem>
        <FItem margin={4} padding={8} bgColor="#e49245">
          무궁화 삼천리
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
      <FlexDescription>* 보충 설명</FlexDescription>
      <FlexDescription>
        flex에서 flex-direction 속성만으로는 엄청난 것을 할 수 있지는 않습니다.
      </FlexDescription>
      <FlexDescription>
        그러나 가장 기본이 되는 속성이고 많이 사용되기 때문에 꼭 이해하고
        넘어가시길 바랍니다.
      </FlexDescription>
    </>
  );
};

export default FlexFlexDirection;
