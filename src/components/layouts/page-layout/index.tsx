import React, { ReactNode, useState } from "react";
import { PageLayoutStyled } from "./styles";
import { ThemeProvider } from "styled-components";
import theme from "lib/styles/theme";
import GlobalStyles from "lib/styles/globalStyles";
import NavHeader from "components/molecules/nav-header";

function PageLayout({ children }: { children: ReactNode }) {
  const [isDark, setTheme] = useState(true);
  const changeTheme = () => {
    localStorage.setItem("isDark", JSON.stringify(isDark));
    setTheme(!isDark);
  };
  return (
    <ThemeProvider
      theme={
        isDark
          ? { ...theme.darkTheme, isDark }
          : { ...theme.lightTheme, isDark }
      }
    >
      <GlobalStyles />

      <PageLayoutStyled>
        <NavHeader onClick={changeTheme} toggle={isDark} />
        {children}
      </PageLayoutStyled>
    </ThemeProvider>
  );
}

export default PageLayout;
