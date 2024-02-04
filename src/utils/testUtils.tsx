import { ThemeProvider } from "styled-components";
import theme from "../styles/theme/theme";
import GlobalStyle from "../styles/GlobalStyle/GlobalStyle";
import { Provider } from "react-redux";
import { PropsWithChildren } from "react";
import { PreloadedState } from "@reduxjs/toolkit";
import { RootState, setupStore, store } from "../store";
import { render } from "@testing-library/react";

export const renderWithProviders = (
  ui: React.ReactElement,
  preloadedState?: PreloadedState<RootState>,
) => {
  const testStore = preloadedState ? setupStore(preloadedState) : store;

  const Wrapper = ({ children }: PropsWithChildren): React.ReactElement => {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Provider store={testStore}>{children}</Provider>
      </ThemeProvider>
    );
  };

  render(ui, { wrapper: Wrapper });
};
