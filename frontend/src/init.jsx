import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import i18next from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';

import { io } from 'socket.io-client';
import resources from './locales/index.js';
import store from './slices/index.js';
import AuthProvider from './providers/AuthProvider.jsx';
import ApiProvider from './providers/ApiProvider.jsx';
import App from './components/App.jsx';
import 'react-toastify/dist/ReactToastify.css';
import { actions as messagesActions } from './slices/messagesSlice.js';
import { actions as channelsActions } from './slices/channelsSlice';
import FilterProvider from './providers/FilterProvider.jsx';

const SocketEventsHandler = () => {
  useEffect(() => {
    const socket = io();
    socket.on('newMessage', (payload) => {
      store.dispatch(messagesActions.addMessage(payload));
    });

    socket.on('newChannel', (payload) => {
      store.dispatch(channelsActions.addChannel(payload));
    });

    socket.on('removeChannel', (payload) => {
      store.dispatch(channelsActions.removeChannel(payload.id));
    });

    socket.on('renameChannel', (payload) => {
      store.dispatch(
        channelsActions.renameChannel({
          id: payload.id,
          changes: { name: payload.name },
        }),
      );
    });

    return () => {
      socket.disconnect(); // Отключаем сокет при размонтировании
    };
  }, []);

  return null;
};

const i18n = i18next.createInstance().use(initReactI18next);

const init = async () => {
  await i18n.init({
    resources,
    lng: 'ru',
    fallbackLng: 'ru',
  });

  return (
    <Provider store={store}>
      <AuthProvider>
        <FilterProvider>
          <I18nextProvider i18n={i18n}>
            <SocketEventsHandler />
            <ApiProvider>
              <App />
            </ApiProvider>
          </I18nextProvider>
        </FilterProvider>
      </AuthProvider>
    </Provider>
  );
};

export default init;
