import { Flex } from "@/src/ui";
import TimelineContents from "./TimelineContents";
import TimelineTitle from "./TimelineTitle";

export interface TimelineProps<T> {
  title: string;
  inner?: TimelineProps<T>[];
  data?: T;
}

export type TimelineGeneric = { isPage?: boolean };

const Timeline = <T extends TimelineGeneric>(props: TimelineProps<T>) => {
  const { inner = [], title, data } = props;

  return (
    <Flex direction="column">
      <TimelineTitle title={title} data={data} />
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
