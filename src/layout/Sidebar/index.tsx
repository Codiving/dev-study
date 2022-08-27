import { SIDEBAR_WIDTH } from "@/src/theme/size";
import styled from "@emotion/styled";
import { useState } from "react";
import { routes } from "./routes";

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

const Container = styled("div")(() => ({
  background: "red"
}));

const InnerContainer = styled("div")<{ open: boolean }>(({ open }) => ({
  height: open ? 120 : 0,
  maxHeight: "100%",
  transition: "0.3s",
  overflow: "hidden"
}));

const Inner = styled("div")<{ open: boolean; selected: boolean }>(
  ({ open, selected }) => ({
    height: open ? 60 : 0,
    transition: "0.3s",
    padding: "20px 0 20px 40px",
    background: selected ? "gray" : "blue",
    overflow: "hidden"
  })
);

const Sidebar = (props: Props) => {
  const { open, onClose } = props;

  const [selectedTab, setSelectedTab] = useState<string[]>([]);
  const [selectedItem, setSelectedItem] = useState("");

  return (
    <>
      <SidebarItem open={open}>
        {routes.map(route => {
          const { title: upperTitle, path: upperPath, children } = route;
          const isSelected = selectedTab.includes(upperPath);

          return (
            <Container key={upperPath}>
              <p
                onClick={() => {
                  if (isSelected) {
                    const newSelectedTab = selectedTab.filter(
                      path => path !== upperPath
                    );
                    setSelectedTab(newSelectedTab);
                  } else {
                    setSelectedTab(prev => [...prev, upperPath]);
                  }
                }}
                style={{ padding: 20 }}
              >
                {upperTitle}
              </p>
              <InnerContainer open={isSelected}>
                {children.map(item => {
                  const { title: innerTitle, path: innerPath } = item;

                  const fullPath = `${upperPath}/${innerPath}`;

                  return (
                    <Inner
                      open={isSelected}
                      selected={selectedItem === fullPath}
                      onClick={() => {
                        if (fullPath) {
                          if (selectedItem === fullPath) {
                            console.log(111, selectedItem);
                            return;
                          } else {
                            console.log(222);
                            setSelectedItem(fullPath);
                          }
                        } else {
                          setSelectedItem("");
                        }
                      }}
                      key={fullPath}
                    >
                      {innerTitle}
                    </Inner>
                  );
                })}
              </InnerContainer>
            </Container>
          );
        })}
      </SidebarItem>
      <SidebarBg open={open} onClick={onClose} />
    </>
  );
};

export default Sidebar;
