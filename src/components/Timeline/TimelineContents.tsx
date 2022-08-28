import { Flex, FlexItem } from "@/src/ui";

interface Props {
  children?: React.ReactNode;
}

const TimelineContents = (props: Props) => {
  const { children } = props;

  return (
    <FlexItem flex={1}>
      <Flex>
        <FlexItem>
          <Flex fullHeight width={14} justifyContent="center">
            <FlexItem style={{ width: 2, background: "black" }}></FlexItem>
          </Flex>
        </FlexItem>
        <FlexItem>{children}</FlexItem>
      </Flex>
    </FlexItem>
  );
};

export default TimelineContents;
