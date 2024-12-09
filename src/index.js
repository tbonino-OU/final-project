import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { store } from './store/store';
import { Provider } from 'react-redux';
import TableofContents from './pages/TableofContents';
import RootLayout from './layouts/RootLayout';
import User from './pages/User';
import Error from './pages/Error';

const router = createBrowserRouter(
  // handle site navigation from here
  createRoutesFromElements((
    <Route path='/' element={<RootLayout />}>
      <Route path='/' element={<App />} ></Route>
      <Route path='/tableofcontents' element={<TableofContents />}></Route>
      <Route path='/user' element={<User />}></Route>
      <Route path='*' element={<Error/>}></Route>
    </Route>
  ))
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      {/* give our app access to the store for react redux */}
      <Provider store={store}>
        {/* app exists in this router wrapper so site navigation can be handled from this file */}
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
)