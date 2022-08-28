import styled from "@emotion/styled";

const MB = styled("div")<{ size?: number }>(({ size = 2 }) => ({
  marginBottom: size * 10
}));

export default MB;
