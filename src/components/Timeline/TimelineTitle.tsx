import { Flex, FlexItem } from "@/src/ui";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

interface Props {
  title?: string;
}

const TimelineTitleText = styled("p")(() => ({
  cursor: "pointer",
  "&:hover": {
    color: "lightgray"
  }
}));

const TimelineTitle = (props: Props) => {
  const { title } = props;
  const router = useRouter();

  return (
    <FlexItem>
      <Flex alignItems={"center"} padding="12px 0" spacing={8}>
        <div style={{ width: 14, height: 14 }}>◦</div>
        <TimelineTitleText
          onClick={() => {
            router.push(`/css/flex/${title}`);
          }}
        >
          {title}
        </TimelineTitleText>
      </Flex>
    </FlexItem>
  );
};

export default TimelineTitle;
