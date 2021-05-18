import React from "react";
import { IntlProvider } from "react-intl";

export const wrapRootElement = ({ element }) => (
  <>
    <IntlProvider locale={navigator.language}>{element}</IntlProvider>
  </>
);
