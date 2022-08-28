import { Flex, FlexItem } from "@/src/ui";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { TimelineGeneric } from "./Timeline";

interface Props<T> {
  title?: string;
  data?: T;
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

const TimelineTitle = <T extends TimelineGeneric>(props: Props<T>) => {
  const { title = "", data } = props;
  const router = useRouter();

  const { title: routerTitle } = router.query as {
    title: string;
  };

  return (
    <FlexItem>
      <Flex alignItems={"center"} padding="12px 0" spacing={8}>
        <div style={{ width: 14, height: 14 }}>◦</div>
        <TimelineTitleText
          isPage={data?.isPage ?? false}
          isSelected={routerTitle === title}
          onClick={() => {
            if (data?.isPage) {
              router.push(`/css/flex/${title.toLocaleLowerCase()}`);
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
