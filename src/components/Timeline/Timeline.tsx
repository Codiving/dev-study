import { Flex } from "@/src/ui";
import TimelineContents from "./TimelineContents";
import TimelineTitle from "./TimelineTitle";

export interface TimelineProps {
  title: string;
  inner?: TimelineProps[];
  isPage?: boolean;
}

const Timeline = (props: TimelineProps) => {
  const { inner = [], title, isPage } = props;

  return (
    <Flex direction="column">
      <TimelineTitle title={title} isPage={isPage} />
      <TimelineContents>
        {inner.map(({ title, inner, isPage }) => {
          return (
            <Timeline key={title} title={title} inner={inner} isPage={isPage} />
          );
        })}
      </TimelineContents>
    </Flex>
  );
};

export default Timeline;
