import React, { ReactNode, useState } from "react";
import { AnimatedBackground, PageLayoutStyled } from "./styles";
import { ThemeProvider } from "styled-components";
import theme from "lib/styles/theme";
import GlobalStyles from "lib/styles/globalStyles";
import NavHeader from "components/molecules/nav-header";
import CanvasBanner from "components/molecules/canvas-banner";

function PageLayout({ children }: { children: ReactNode }) {
  const [isDark, setTheme] = useState(true);
  const changeTheme = () => {
    localStorage.setItem("isDark", JSON.stringify(isDark));
    setTheme(!isDark);
  };
  const queries = theme.queries;
  return (
    <ThemeProvider
      theme={
        /* isDark
          ? { ...theme.darkTheme, isDark }
          : { ...theme.lightTheme, isDark } */
        { ...theme.darkTheme, isDark:false, queries }
      }
    >
      <GlobalStyles />

      <PageLayoutStyled>
        <AnimatedBackground>
          <CanvasBanner />
        </AnimatedBackground>

        <NavHeader onClick={changeTheme} toggle={isDark} />
        {children}
      </PageLayoutStyled>
    </ThemeProvider>
  );
}

export default PageLayout;
