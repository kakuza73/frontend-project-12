import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import NavBar from './components/NavBar.jsx';
import path from './nav/routes.js';
import PrivateRout from './components/PrivateRout';
import ChatPage from './components/pages/ChatPage.jsx';
import LoginPage from './components/pages/LoginPage/index.jsx';
import SignupPage from './components/pages/SignupPage/index.jsx';
import ErrorPage from './components/pages/ErrorPage.jsx';
import Modal from './components/modals/index.jsx';

const App = () => (
  <>
    <div className="d-flex flex-column h-100">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path={path.pages.root}
            element={(
              <PrivateRout>
                <ChatPage />
              </PrivateRout>
            )}
          />
          <Route path={path.pages.login} element={<LoginPage />} />
          <Route path={path.pages.signup} element={<SignupPage />} />
          <Route path={path.pages.other} element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
      <Modal />
    </div>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  </>
);

export default App;
