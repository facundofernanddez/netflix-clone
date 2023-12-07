"use client";

import { InfoIcon, PlayCircle } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import PlayVideoModal from "./PlayVideoModal";

interface MovieButtonsProps {
  overview: string;
  youtubeUrl: string;
  id: number;
  age: number;
  title: string;
  releaseDate: number;
  duration: number;
}

export default function MovieButtons({
  duration,
  id,
  overview,
  releaseDate,
  title,
  youtubeUrl,
  age,
}: MovieButtonsProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="text-lg font-medium"
      >
        <PlayCircle className="mr-2 h-6 w-6" /> Play
      </Button>
      <Button
        onClick={() => setOpen(true)}
        className="text-lg font-medium bg-white/40 hover:bg-white/30 text-white"
      >
        <InfoIcon className="mr-2 h-6 w-6" /> Learn More
      </Button>

      <PlayVideoModal
        state={open}
        changeState={setOpen}
        age={age}
        duration={duration}
        key={id}
        overview={overview}
        release={releaseDate}
        title={title}
        youtubeUrl={youtubeUrl}
      />
    </>
  );
}
