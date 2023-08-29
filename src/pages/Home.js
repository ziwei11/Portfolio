import { useState, useEffect } from "react";

const hobbies = [
  "taking photos for landscape or portrait",
  "travelling",
  "shopping a lot",
  "feeling depressed",
  "pretending to be busy",
  "walking on campus after dinner",
  "feeding chips to the seagulls",
  "eating spicy hotpot",
  "watching horror movies with friend on Saturday night",
  "cooking strawberry smoothie",
  "exploring more places, especially museums",
  "listening to my favorite songs",
  "getting more LinaBells",
  "trying to gain more knowledge on the internet",
  "trying to get on top of another mountain",
  "trading K-pop cards with others",
  "idolizing JennieKim/MinjeongKim (Winter)",
  "making plan for the weekends",
  "hanging out with friends",
  "still breaking code lol",
];

const linabells = [
  "Spring Flower 🌷",
  "Summer Bubble 🍧",
  "Autumn Love 🪐",
  "Warm Winter ☕️",
  "Baby Pajamas 🍼",
  "Easter 🐣",
  "Halloween 😈",
  "Christmas 🎄",
];

function useWordCycle(words) {
  const [currentWord, setCurrentWord] = useState(
    words[Math.floor(Math.random() * words.length)]
  );

  const changeItemHandler = () => {
    const currentIndex = words.indexOf(currentWord);
    const nextIndex = (currentIndex + 1) % words.length;
    setCurrentWord(words[nextIndex]);
  };

  return [currentWord, changeItemHandler];
}

function Home() {
  useEffect(() => {
    document.title = "Vicky's Home 🎏";
  }, []);

  const [currentHobby, changeHobbyHandler] = useWordCycle(hobbies);
  const [currentLinabell, changeLinabellHandler] = useWordCycle(linabells);

  return (
    <div>
      <h2>I'm Vicky!</h2>
      <p>Welcome to my personal space on the internet!</p>
      <p>
        I have a huge collection of LinaBell, and let me pick a{" "}
        <button
          class="clickable"
          id="linabells"
          onClick={changeLinabellHandler}
        >
          {currentLinabell}
        </button>{" "}
        LinaBell for you.
      </p>
      <p>
        I'm currently based in Vancouver, BC &#127754; where I study computer
        engineering. When I'm not studying or doing intern jobs, I'm sleeping,
        browsing TikTok/Xiaohongshu/Bilibili, and{" "}
        <button class="clickable" id="hobbies" onClick={changeHobbyHandler}>
          {currentHobby}
        </button>
        .
      </p>
      <p>
        Reach out anytime at{" "}
        <a href="mailto:zhaovicky1117@gmail.com" class="clickable">
          zhaovicky1117@gmail.com
        </a>{" "}
        or{" "}
        <a href="mailto:zzw1117@student.ubc.ca" class="clickable">
          zzw1117@student.ubc.ca
        </a>
        !
      </p>
      <div class="box">
        Currently I'm looking for 2024 new grad SDE positions! Please contact me
        by email{" "}
        <a href="mailto:zhaovicky1117@gmail.com" class="clickable">
          zhaovicky1117@gmail.com
        </a>{" "}
        if you (or your friends) are hiring! Thank you so much&#127801;!!{" "}
      </div>
    </div>
  );
}

export default Home;
