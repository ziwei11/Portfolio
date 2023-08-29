import { useEffect } from "react";
import { NavLink } from "react-router-dom";

function Project() {
  useEffect(() => {
    document.title = "Vicky's Projects 🎏";
  }, []);

  return (
    <div>
      <p>
        Some projects, find the rest on my{" "}
        <a
          href="https://github.com/ziwei11"
          class="clickable"
          target="_blank"
          rel="noreferrer"
        >
          github
        </a>{" "}
        🪐
      </p>
      <hr class="dashed" />
      {/* <p>
        <NavLink to="/quinn-ai" class="clickable">
          <u>
            <b>quinn ai</b>
          </u>
        </NavLink>{" "}
        <br />
        talk to an ai version of me (try it out)!
      </p> */}

      <p>
        <u>
          <b>twilio integration</b>
        </u>{" "}
        <br />
        sms/voice automatic notification service for workforce travel hotel
        booking
      </p>

      <p>
        <a
          href="https://github.com/ziwei11/EECE571T_Project"
          class="clickable"
          target="_blank"
          rel="noreferrer"
        >
          <b>social media sentiment analysis using lstm</b>
        </a>{" "}
        <br />
        investigate the potential of machine learning for social media sentiment
        extraction and analysis
      </p>

      <p>
        <NavLink to="/" class="clickable">
          <u>
            <b>personal website</b>
          </u>
        </NavLink>{" "}
        <br />
        what you are looking right now :)
      </p>

      <p>
        <a
          href="https://github.com/ziwei11/EECE571G_Project"
          class="clickable"
          target="_blank"
          rel="noreferrer"
        >
          <b>arcade swap</b>
        </a>{" "}
        <br />
        future web3 defi user experience
      </p>

      <p>
        <a
          href="https://github.com/ziwei11/571F"
          class="clickable"
          target="_blank"
          rel="noreferrer"
        >
          <b>an integrated system for processing text in images</b>
        </a>{" "}
        <br />
        text recognition, detection, and classification
      </p>

      <p>
        <a
          href="https://github.com/ziwei11/CPEN502_Project-Backpropagation_Learning"
          class="clickable"
          target="_blank"
          rel="noreferrer"
        >
          <b>robot tank training</b>
        </a>{" "}
        <br />
        train robot tank to win by implementing Rainforcement learning
      </p>

      <p>
        <a
          href="https://github.com/ziwei11/CMPUT466-Machine-Learning"
          class="clickable"
          target="_blank"
          rel="noreferrer"
        >
          <b>iris classification</b>
        </a>{" "}
        <br />
        classify iris flowers using different machine learning algorithms
      </p>

      <p>
        <a
          href="https://github.com/ziwei11/CMPUT291-Database-Management"
          class="clickable"
          target="_blank"
          rel="noreferrer"
        >
          <b> q&a forum</b>
        </a>{" "}
        <br />a forum where you can log in, post questions, answer questions,
        vote, and search
      </p>

      <p>
        <a
          href="https://github.com/ziwei11/CMPUT301-Mobile-Library"
          class="clickable"
          target="_blank"
          rel="noreferrer"
        >
          <b>mobile library</b>
        </a>{" "}
        <br />
        an android online book library app
      </p>
    </div>
  );
}

export default Project;
