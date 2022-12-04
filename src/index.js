import Store from './Redux/Store'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={Store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);
