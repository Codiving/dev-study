import { Timeline } from "@/src/components";
import { useRouter } from "next/router";
import { TimelineProps } from "../components/Timeline/Timeline";
import { HEADER_HEIGHT } from "../theme/size";
import { Flex, FlexItem } from "../ui";

const FLEX_TIMELINE: TimelineProps[] = [
  {
    title: "Introduction",
    isPage: true
  },
  {
    title: "flex-container (부모)",
    inner: [
      { title: "flex-direction", isPage: true },
      { title: "justify-content", isPage: true },
      { title: "align-items", isPage: true },
      { title: "flex-wrap", isPage: true },
      { title: "align-content", isPage: true },
      { title: "gap", isPage: true }
    ]
  },
  {
    title: "flex-item (자식)",
    inner: [
      { title: "flex-basis", isPage: true },
      { title: "flex-grow", isPage: true },
      { title: "flex-shrink", isPage: true },
      { title: "flex", isPage: true },
      { title: "order", isPage: true },
      { title: "align-self", isPage: true }
    ]
  }
];

const FlexPageLayout = () => {
  const router = useRouter();

  const { title: routerTitle } = router.query as {
    title: string;
  };

  return (
    <Flex>
      <FlexItem
        width={250}
        style={{
          boxShadow: "0 2px 10px rgb(0 0 0 / 12%)",
          overflowY: "scroll",
          maxHeight: `calc(100vh - ${HEADER_HEIGHT}px)`
        }}
      >
        {FLEX_TIMELINE.map(item => {
          return <Timeline key={item.title} {...item} />;
        })}
      </FlexItem>
      <FlexItem padding={16} flex={1}>
        {routerTitle}
      </FlexItem>
    </Flex>
  );
};

export default FlexPageLayout;
