import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Resume from "./pages/Resume";
import QuinnAI from "./pages/QuinnAI";
import AboutQuinnAI from "./pages/blogs/About-QuinnAI";
import Blog from "./pages/Blog";
import "./index.css";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import TagManager from "react-gtm-module";
import FirstBlog from "./pages/blogs/FirstBlog";

const tagManagerArgs = {
  gtmId: "G-BR72D9JR60",
};
TagManager.initialize(tagManagerArgs);

function AppRoutes() {
  return (
    <div>
      <div class="flex-container" id="outer" />
      <div class="flex-container" id="outer">
        <div class="flex-container" id="inner-1"></div>

        <div class="flex-container" id="inner-2">
          <div class="flex-container" id="nav_bar">
            <br />
            <NavBar></NavBar>
          </div>

          <div class="flex-container" id="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/project" element={<Project />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/quinn-ai" element={<QuinnAI />} />
            </Routes>

            <Footer />
          </div>
        </div>

        <div class="flex-container" id="inner-1" />
      </div>
      <div class="flex-container" id="outer" />
    </div>
  );
}

function BlogRoutes() {
  return (
    <>
      <div class="flex-container" id="outer" />
      <div class="flex-container" id="outer">
        <div class="flex-container" id="inner-1"></div>

        <div class="flex-container" id="inner-2">
          <div class="flex-container" id="nav_bar">
            <br />
            <NavBar></NavBar>
          </div>

          <div class="flex-container" id="content">
            <Routes>
              <Route path="/quinn-ai" element={<AboutQuinnAI />} />
              <Route path="/firstblog" element={<FirstBlog />} />
              <Route path="/" element={<Blog />} />
            </Routes>
            <Footer />
          </div>
        </div>

        <div class="flex-container" id="inner-1" />
      </div>
      <div class="flex-container" id="outer" />
    </>
  );
}

function App() {
  window.dataLayer.push({
    event: "pageview",
  });
  return (
    <div className="App">
      <meta charset="UTF-8"></meta>
      <link rel="stylesheet" href="static/source.css" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto+Mono"
      />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"
      />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"
      />
      <Routes>
        <Route path="/*" element={<AppRoutes />} />
        <Route path="/blog/*" element={<BlogRoutes />} />
      </Routes>
    </div>
  );
}

export default App;
