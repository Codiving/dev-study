import { Flex } from "@/src/ui";
import TimelineContents from "./TimelineContents";
import TimelineTitle from "./TimelineTitle";

export interface TimelineProps<T> {
  title: string;
  inner?: TimelineProps<T>[];
  data?: T;
}

const Timeline = <T extends any>(props: TimelineProps<T>) => {
  const { inner = [], title } = props;

  return (
    <Flex direction="column">
      <TimelineTitle title={title} />
      <TimelineContents>
        {inner.map(({ title, inner, data }) => {
          return (
            <Timeline key={title} title={title} inner={inner} data={data} />
          );
        })}
      </TimelineContents>
    </Flex>
  );
};

export default Timeline;
