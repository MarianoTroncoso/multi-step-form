import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { BrowserRouter } from 'react-router-dom';
import useFormContextValue from './context/formContext/useFormContextValue';
import FormContext from './context/formContext';
import { GlobalStyle } from './GlobalStyle';

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const formContextValue = useFormContextValue();

  return (
    <>
      <GlobalStyle />
      <FormContext.Provider value={formContextValue}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </FormContext.Provider>
    </>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Wrapper>
      <App />
    </Wrapper>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
