import { useEffect } from "react";
import { NavLink } from "react-router-dom";

function Blog() {
  useEffect(() => {
    document.title = "Vicky's Blog 🎏";
  }, []);

  return (
    <div>
      <p>Collections of all blogs</p>
      <hr class="dashed"></hr>

      {/* <h3>
        <NavLink to="/blog/quinn-ai" class="clickable">
          <u>quinn ai</u>
        </NavLink>{" "}
      </h3> */}
      <h3>
        <NavLink to="/blog/firstblog" class="clickable">
          <u>my first blog</u>
        </NavLink>{" "}
      </h3>
    </div>
  );
}

export default Blog;
