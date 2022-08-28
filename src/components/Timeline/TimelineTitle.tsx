import { Flex, FlexItem } from "@/src/ui";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

interface Props {
  title?: string;
  isPage?: boolean;
}

const TimelineTitleText = styled("p")<{ isPage: boolean; isSelected: boolean }>(
  ({ isPage, isSelected }) => ({
    cursor: isPage ? "pointer" : undefined,
    fontWeight: isSelected ? "bold" : undefined,
    "&:hover": {
      color: isPage ? "lightgray" : undefined
    }
  })
);

const TimelineTitle = (props: Props) => {
  const { title, isPage = false } = props;
  const router = useRouter();

  const { title: routerTitle } = router.query as {
    title: string;
  };

  return (
    <FlexItem>
      <Flex alignItems={"center"} padding="12px 0" spacing={8}>
        <div style={{ width: 14, height: 14 }}>◦</div>
        <TimelineTitleText
          isPage={isPage}
          isSelected={routerTitle === title}
          onClick={() => {
            if (isPage) {
              router.push(`/css/flex/${title}`);
            }
          }}
        >
          {title}
        </TimelineTitleText>
      </Flex>
    </FlexItem>
  );
};

export default TimelineTitle;
