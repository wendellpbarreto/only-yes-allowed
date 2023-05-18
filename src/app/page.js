"use client";

import { useState } from "react";
import ReactPlayer from "react-player";

export default function Home() {
  const [showVideo, setShowVideo] = useState();

  const jump = () => {
    var btn = document.getElementById("nao");
    btn.style.position = "relative";
    btn.style.top = Math.floor(Math.random() * 200) + "px";
    btn.style.left = Math.floor(Math.random() * 200) + "px";
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"></div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        {showVideo ? (
          <ReactPlayer
            url="https://www.youtube.com/watch?v=fij-P08TmQc"
            playing
          />
        ) : (
          <div className="z-10 flex flex-col	items-center	">
            <span className="text-white text-4xl font-medium mb-8 text-center block">
              Cuzinho hoje?
            </span>
            <div className="flex items-center	justify-items-center">
              <button
                onClick={() => setShowVideo(true)}
                className="rounded-md bg-indigo-500 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 mx-3"
              >
                Sim
              </button>
              <button
                id="nao"
                onMouseOver={jump}
                className="rounded-md bg-indigo-500 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 mx-3"
              >
                Não
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
    </main>
  );
}
