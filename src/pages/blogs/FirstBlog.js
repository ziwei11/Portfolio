import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

function FirstBlog() {
  useEffect(() => {
    document.title = "my first blog 🌏";
  }, []);

  return (
    <div>
      <Helmet>
        <meta name="description" content="my first blog" />
      </Helmet>
      <div class="flex-container" id="blog_header_card">
        <h1 id="blog_header">my first blog</h1>
      </div>
      <p>This is my first blog on the internet! huzzah!</p>
      <hr class="dashed" />
      <img
        src="/images/cerberus/cerberus1.jpg"
        alt="cerberus1"
        width="450"
        height="auto"
      />
      <br />
      <img
        src="/images/cerberus/cerberus2.jpg"
        alt="cerberus2"
        width="450"
        height="auto"
      />
      <br />
      <img
        src="/images/jennie/jennie1.jpg"
        alt="jennie1"
        width="450"
        height="auto"
      />
      <br />
      <img
        src="/images/jennie/jennie2.jpg"
        alt="jennie2"
        width="450"
        height="auto"
      />
      <br />
      <img
        src="/images/jennie/jennie3.jpg"
        alt="jennie3"
        width="450"
        height="auto"
      />
      <br />
      <img
        src="/images/winter/winter1.jpg"
        alt="winter1"
        width="450"
        height="auto"
      />
      <br />
      <img
        src="/images/winter/winter2.jpg"
        alt="winter2"
        width="450"
        height="auto"
      />
      <br />
      <img
        src="/images/winter/winter3.jpg"
        alt="winter3"
        width="450"
        height="auto"
      />
      <br />
      <img
        src="/images/winter/winter4.jpg"
        alt="winter4"
        width="450"
        height="auto"
      />
      <br />
      <NavLink to="/blog" class="clickable">
        <u>Back</u>
      </NavLink>{" "}
    </div>
  );
}

export default FirstBlog;
