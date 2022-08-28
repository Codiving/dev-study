import { FlexTimeline } from "@/src/pageLayout/FlexPageLayout";
import { Flex } from "@/src/ui";
import TimelineContents from "./TimelineContents";
import TimelineTitle from "./TimelineTitle";

interface Props {
  inner?: FlexTimeline[];
  title?: string;
}

const Timeline = (props: Props) => {
  const { inner = [], title } = props;

  return (
    <Flex direction="column">
      <TimelineTitle title={title} />
      <TimelineContents>
        {inner.map(({ title, children: inner }) => {
          return <Timeline key={title} title={title} inner={inner} />;
        })}
      </TimelineContents>
    </Flex>
  );
};

export default Timeline;
