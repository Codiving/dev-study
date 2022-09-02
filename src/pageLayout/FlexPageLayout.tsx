import { Timeline } from "@/src/components";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { TimelineProps } from "../components/Timeline/Timeline";
import { HEADER_HEIGHT } from "../theme/size";
import { Flex, FlexItem } from "../ui";
import FlexFlexDirection from "./FlexFlexDirection";
import FlexIntroduction from "./FlexIntroduction";
import FlexJustifyContent from "./FlexJustifyContent";
import FlexQuiz1 from "./FlexQuiz1";

type T = {
  isPage?: boolean;
};

const FLEX_TIMELINE: TimelineProps<T>[] = [
  {
    title: "Introduction",
    data: {
      isPage: true
    }
  },
  {
    title: "flex-container (부모)",
    inner: [
      {
        title: "flex-direction",
        data: {
          isPage: true
        }
      },
      {
        title: "justify-content",
        data: {
          isPage: true
        }
      },
      {
        title: "align-items",
        data: {
          isPage: true
        }
      },
      {
        title: "Quiz-1",
        data: {
          isPage: true
        }
      },
      {
        title: "flex-wrap",
        data: {
          isPage: true
        }
      },
      {
        title: "align-content",
        data: {
          isPage: true
        }
      },
      {
        title: "gap",
        data: {
          isPage: true
        }
      }
    ]
  },
  {
    title: "flex-item (자식)",
    inner: [
      {
        title: "flex-basis",
        data: {
          isPage: true
        }
      },
      {
        title: "flex-grow",
        data: {
          isPage: true
        }
      },
      {
        title: "flex-shrink",
        data: {
          isPage: true
        }
      },
      {
        title: "flex",
        data: {
          isPage: true
        }
      },
      {
        title: "order",
        data: {
          isPage: true
        }
      },
      {
        title: "align-self",
        data: {
          isPage: true
        }
      }
    ]
  }
];

type Components = {
  [key in string]: React.ReactNode;
};

const FlexPageLayout = () => {
  const router = useRouter();

  const { title: routerTitle } = router.query as {
    title: string;
  };

  const components: Components = useMemo(
    () => ({
      introduction: <FlexIntroduction />,
      "flex-direction": <FlexFlexDirection />,
      "justify-content": <FlexJustifyContent />,
      "quiz-1": <FlexQuiz1 />
    }),
    []
  );

  return (
    <Flex>
      <FlexItem
        width={250}
        style={{
          boxShadow: "0 2px 10px rgb(0 0 0 / 12%)",
          overflowY: "scroll",
          height: `calc(100vh - ${HEADER_HEIGHT}px)`,
          maxHeight: `calc(100vh - ${HEADER_HEIGHT}px)`,
          padding: "20px 12px"
        }}
      >
        {FLEX_TIMELINE.map(item => {
          return <Timeline key={item.title} {...item} />;
        })}
      </FlexItem>
      <FlexItem
        style={{
          height: `calc(100vh - ${HEADER_HEIGHT}px)`,
          maxHeight: `calc(100vh - ${HEADER_HEIGHT}px)`,
          overflowY: "scroll"
        }}
        padding={"40px 60px"}
        flex={1}
      >
        {/* TODO: 여기서 routerTitle로 컴포넌트 분기 */}
        {/* {routerTitle} */}
        {components[routerTitle]}
      </FlexItem>
    </Flex>
  );
};

export default FlexPageLayout;
