import { useEffect } from "react";

function Resume() {
  useEffect(() => {
    document.title = "Vicky's Resume 🎏";
  }, []);

  return (
    <div>
      <p>Here is my Resume! 😉</p>
      <hr class="dashed" />

      <iframe
        src="https://drive.google.com/file/d/1cJ_4TBoFpBt8WCURPCUhOHLmQ6NETRyM/preview"
        title="Vicky's Resume"
        width="640"
        height="825"
        allow="autoplay"
      ></iframe>

      <a
        href="/Resume_Vicky_Zhao.pdf"
        download="Resume_Vicky_Zhao.pdf"
        class="clickable"
      >
        download
      </a>
    </div>
  );
}

export default Resume;
