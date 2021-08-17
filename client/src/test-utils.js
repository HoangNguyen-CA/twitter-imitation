import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { theme1 } from './theme/default';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import authReducer, { initialState } from './store/slices/authSlice';

import mockUser from './mocks/mockUser';

const authState = {
  auth: {
    ...initialState,
    isAuth: true,
    user: mockUser,
    token: 'Bearer token',
  },
};

const customRender = (ui, { isAuth, route = '/', ...options } = {}) => {
  let preloadedState = {};
  if (isAuth) preloadedState = authState;

  const store = configureStore({
    reducer: { auth: authReducer },
    preloadedState,
  });

  const AllTheProviders = ({ children }) => {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <ThemeProvider theme={theme1}>{children}</ThemeProvider>
        </Provider>
      </BrowserRouter>
    );
  };

  window.history.pushState({}, 'Test Screen', route);
  render(ui, { wrapper: AllTheProviders, ...options });
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
