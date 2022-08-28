import { Header, Sidebar } from "@/src/layout";
import GlobalStyle from "@/src/theme/GlobalStyle";
import type { AppProps } from "next/app";
import { useCallback, useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [open, setOpen] = useState(true);

  const onOpenSideBar = useCallback(() => setOpen(true), []);

  const onCloseSideBar = useCallback(() => setOpen(false), []);

  return (
    <>
      <Header onClick={onOpenSideBar} />
      <GlobalStyle />
      <div>
        <Component {...pageProps} />
      </div>
      <Sidebar open={open} onClose={onCloseSideBar} />
    </>
  );
}

export default MyApp;
