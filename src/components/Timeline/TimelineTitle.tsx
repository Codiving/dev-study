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

  const { title: routerTitle = "" } = router.query as {
    title: string;
  };

  const isPage = data?.isPage ?? false;

  const isSelected =
    routerTitle.toLocaleLowerCase() === title.toLocaleLowerCase();

  return (
    <FlexItem>
      <Flex alignItems={"center"} padding="12px 0" spacing={8}>
        <div style={{ width: 14, height: 14 }}>◦</div>
        <TimelineTitleText
          isPage={isPage}
          isSelected={isSelected}
          onClick={() => {
            if (isPage) {
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
