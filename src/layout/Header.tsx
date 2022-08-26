import { HEADER_HEIGHT } from "@/src/theme/size";
import { HEADER_BG_COLOR } from "@/src/theme/color";
import { Flex, FlexItem } from "@/src/ui";

interface Props {
  onClick: () => void;
}

const Header = (props: Props) => {
  const { onClick } = props;

  return (
    <Flex
      onClick={onClick}
      bgColor={HEADER_BG_COLOR}
      height={HEADER_HEIGHT}
      padding={"8px 16px"}
      alignItems={"center"}
      as="header"
    >
      <FlexItem>
        <span style={{ color: "white" }}>=</span>
      </FlexItem>
    </Flex>
  );
};

export default Header;
