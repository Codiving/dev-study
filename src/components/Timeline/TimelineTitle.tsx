import { Flex, FlexItem } from "@/src/ui";

interface Props {
  title?: string;
}

const TimelineTitle = (props: Props) => {
  const { title } = props;

  return (
    <FlexItem>
      <Flex alignItems={"center"} padding="8px 0" spacing={8}>
        <div style={{ width: 14, height: 14 }}>◦</div>
        <div>{title}</div>
      </Flex>
    </FlexItem>
  );
};

export default TimelineTitle;
