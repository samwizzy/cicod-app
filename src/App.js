import "@/config/axiosConfig";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import { Provider } from "react-redux";
import store from "./store";

const Home = React.lazy(() => import("./pages/Home"));
const Profile = React.lazy(() => import("./pages/Profile"));
const Repository = React.lazy(() => import("./pages/Repository"));

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <React.Suspense fallback={<div>loading...</div>}>
          <Layout>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="profile" element={<Profile />} />
                <Route path="repository" element={<Repository />} />
              </Routes>
            </BrowserRouter>
          </Layout>
        </React.Suspense>
      </Provider>
    </div>
  );
}

export default App;
