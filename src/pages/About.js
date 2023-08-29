import { useEffect } from "react";

function About() {
  useEffect(() => {
    document.title = "Vicky's Life 🎏";
  }, []);

  return (
    <div>
      <p>
        <nobr>
          ✰⋆｡:ﾟ･*☽:ﾟ･⋆｡✰⋆｡:ﾟ･*☽:ﾟ･⋆｡✰⋆｡:ﾟ･*☽:ﾟ･⋆｡✰⋆｡:ﾟ･*☽:ﾟ･⋆｡✰⋆｡:ﾟ･*☽:ﾟ･⋆｡✰⋆｡:ﾟ･
        </nobr>
      </p>

      <p>
        Howdy there! I'm a concoction of curiosity and enthusiasm 🐣, always
        ready to dive into the ocean of interests that life has to offer.
        <br />
        <br />I like tech, art, animal, music, movie, K-pop, travel, fashion,
        trying new things. My existence in so many things really helped shape me
        that i am today, and the one I will be tomorrow!
        <br />
        <br />
        If you go on a trip, please bring me a fridge magnet 😘!
      </p>

      <p>
        <h3 class="bold">currently</h3>
      </p>
      <p>
        I'm a 2nd year computer engineering master student at{" "}
        <a
          href="https://www.ubc.ca/"
          target="_blank"
          rel="noreferrer"
          class="clickable"
        >
          University of British Columbia
        </a>
        💫.
        <br />
        <br />
        I'm interested in socially impactful tech, software development,
        blockchain/Web3, broadly ML/AI applications, LinaBell from Disney, and
        attractive artwork, such as painting 🖼, ceramics 🍶, and jewelry 💍.
        <br />
        <br />
        <div class="box">
          Currently I'm looking for 2024 new grad SDE positions! Please contact
          me by email{" "}
          <a href="mailto:zhaovicky1117@gmail.com" class="clickable">
            zhaovicky1117@gmail.com
          </a>
          , and let's talk about why I would be a good fit for your team!
        </div>
      </p>

      <p>
        <h3 class="bold">previously</h3>
      </p>

      <ul>
        <li>
          Graduated from{" "}
          <a
            href="https://www.ualberta.ca/index.html"
            class="clickable"
            target="_blank"
            rel="noreferrer"
          >
            University of Alberta
          </a>{" "}
          in Spring 2022, and got Bachelor degree in Computing Science! 🎉
        </li>

        <li>Indulged many ideas (see /project)</li>

        <li>
          Finished three internships, one related to full stack software
          development, two related to ML/AI
        </li>

        <li>
          Joined some cool clubs/communities:
          <br />
          <a
            href="https://www.orientalceramicsociety.org.uk"
            class="clickable"
            target="_blank"
            rel="noreferrer"
          >
            The Oriental Ceramic Society
          </a>
          <br />
          <a
            href="https://www.egbc.ca"
            class="clickable"
            rel="noreferrer"
            target="_blank"
          >
            Engineers and Geoscientists BC
          </a>
          <br />
          University of Alberta RoboMaster Club
        </li>
      </ul>
      <img src="/images/me.jpg" alt="it's me!" width="250" height="auto" />
    </div>
  );
}

export default About;
