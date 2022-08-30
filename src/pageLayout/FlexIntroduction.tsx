import MB from "../ui/MB";
import { FlexTitle, FlexTypography } from "./ui";

const FlexIntroduction = () => {
  return (
    <>
      <FlexTitle># flex</FlexTitle>
      <MB size={1} />

      <FlexTypography>
        해당 flex 프로젝트는 flex froggy 사이트의 영감을 받아 아이디어를 얻어
        진행하였습니다.
      </FlexTypography>
      <FlexTypography>
        추가로 신입 프론트엔드 개발자들 중 CSS에 약한 분들에게 도움이 되고자
        진행하였습니다.
      </FlexTypography>

      <MB size={4} />

      <FlexTypography>
        개인적으로 flex froggy에서는 개념만 테스트 할 수 있는 느낌이라 아쉬운
        점이 있었습니다.
      </FlexTypography>
      <FlexTypography>
        이점을 보완하고자 실전에서 구현해야 할 수도 있는 레이아웃을 테스트 할 수
        있도록 실습 테스트도 추가하였습니다.
      </FlexTypography>

      <MB size={4} />

      <FlexTypography>
        코드 및 설명은 주관적인 생각이 많이 들어가있으므로 감안해서 봐주시면
        감사하겠습니다.
      </FlexTypography>

      <MB size={4} />

      <FlexTypography>
        부모와 자식에 할당할 수 있는 속성 리스트는 아래와 같습니다.
      </FlexTypography>

      <MB size={2} />

      <FlexTypography>- flex-container (부모)</FlexTypography>
      <div style={{ paddingLeft: 10 }}>
        <FlexTypography>flex-direction</FlexTypography>
        <FlexTypography>justify-content </FlexTypography>
        <FlexTypography>align-items </FlexTypography>
        <FlexTypography>flex-wrap</FlexTypography>
        <FlexTypography>align-content</FlexTypography>
        <FlexTypography>gap</FlexTypography>
      </div>

      <MB size={4} />

      <FlexTypography>- flex-item (자식)</FlexTypography>
      <div style={{ paddingLeft: 10 }}>
        <FlexTypography>flex-basis</FlexTypography>
        <FlexTypography>flex-grow </FlexTypography>
        <FlexTypography>flex-shrink </FlexTypography>
        <FlexTypography>flex</FlexTypography>
        <FlexTypography>order</FlexTypography>
        <FlexTypography>align-self</FlexTypography>
      </div>

      <MB size={4} />

      <FlexTypography>
        각 속성에 대해 자세히 알아보도록 하겠습니다.
      </FlexTypography>
    </>
  );
};

export default FlexIntroduction;
