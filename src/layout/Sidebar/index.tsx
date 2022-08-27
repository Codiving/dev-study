import { SIDEBAR_WIDTH } from "@/src/theme/size";
import styled from "@emotion/styled";

interface Props {
  open: boolean;
  onClose: () => void;
}

const SidebarItem = styled("div")<{ open: boolean }>(({ open }) => ({
  position: "fixed",
  top: 0,
  left: open ? 0 : -SIDEBAR_WIDTH,
  width: SIDEBAR_WIDTH,
  height: "100vh",
  background: "white",
  zIndex: 1,
  transition: "0.25s"
}));

const SidebarBg = styled("div")<{ open: boolean }>(({ open }) => ({
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  position: "fixed",
  background: "rgba(0, 0, 0, 0.7)",
  opacity: open ? 1 : 0,
  visibility: open ? "visible" : "hidden",
  transition: "0.2s"
}));

const Sidebar = (props: Props) => {
  const { open, onClose } = props;

  return (
    <>
      <SidebarItem open={open}></SidebarItem>
      <SidebarBg open={open} onClick={onClose} />
    </>
  );
};

export default Sidebar;
