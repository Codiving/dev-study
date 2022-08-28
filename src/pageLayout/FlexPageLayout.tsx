import { Timeline } from "@/src/components";
import { useRouter } from "next/router";
import { HEADER_HEIGHT } from "../theme/size";
import { Flex, FlexItem } from "../ui";

export interface FlexTimeline {
  title: string;
  children?: FlexTimeline[];
}

const FLEX_TIMELINE: FlexTimeline[] = [
  {
    title: "Introduction"
  },
  {
    title: "flex-container (부모)",
    children: [
      { title: "flex-direction" },
      { title: "justify-content" },
      { title: "align-items" },
      { title: "flex-wrap" },
      { title: "align-content" },
      { title: "gap" }
    ]
  },
  {
    title: "flex-item (자식)",
    children: [
      { title: "flex-basis" },
      { title: "flex-grow" },
      { title: "flex-shrink" },
      { title: "flex" },
      { title: "order" },
      { title: "align-self" }
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
        {FLEX_TIMELINE.map(({ title, children: inner }) => {
          return <Timeline key={title} title={title} inner={inner} />;
        })}
      </FlexItem>
      <FlexItem padding={16} flex={1}>
        {routerTitle}
      </FlexItem>
    </Flex>
  );
};

export default FlexPageLayout;
