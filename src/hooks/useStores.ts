import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { useIntl } from "react-intl";

const useStores = () => {
  const useTheme = useContext(ThemeContext);
  const intl = useIntl();
  return { useTheme, intl };
};

export default useStores;
