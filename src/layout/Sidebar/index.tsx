import { SIDEBAR_SINGLE_ITEM_HEIGHT, SIDEBAR_WIDTH } from "@/src/theme/size";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
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

const InnerContainer = styled("div")<{ open: boolean; size: number }>(
  ({ open, size }) => ({
    maxHeight: open ? SIDEBAR_SINGLE_ITEM_HEIGHT * size : 0,
    transition: "0.3s",
    overflow: "hidden"
  })
);

const Inner = styled("div")<{ selected: boolean }>(({ selected }) => ({
  padding: "20px 0 20px 40px",
  background: selected ? "gray" : "blue"
}));

const Sidebar = (props: Props) => {
  const { open, onClose } = props;

  const router = useRouter();

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
              <InnerContainer open={isSelected} size={children.length}>
                {children.map(item => {
                  const { title: innerTitle, path: innerPath } = item;

                  const fullPath = `/${upperPath}/${innerPath}`;

                  return (
                    <Inner
                      selected={selectedItem === fullPath}
                      onClick={() => {
                        if (router.pathname !== fullPath) router.push(fullPath);

                        if (fullPath) {
                          if (selectedItem === fullPath) {
                            return;
                          } else {
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
