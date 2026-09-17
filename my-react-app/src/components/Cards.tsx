import type React from "react";

interface CardProps {
  imageLink: string;
  title: string;
  alt: string;
  text1: string;
  text2: string;
  text3: string;
}

const Cards: React.FC<CardProps> = (props) => {
  return (
    <div className="relative flex w-full items-center gap-4 overflow-hidden rounded-md border-t-2 border-[#4F228D] bg-[#16052D] p-5">
      {/* Background Glow Overlay */}
      <div className="absolute -left-10 -top-12 h-32 w-32 rounded-full bg-[#1e0544] opacity-50 blur-2xl" />

      {/* Image Container */}
      <div className="relative flex h-16 w-16 shrink-0 items-center justify-center">
        <img
          className="h-full w-full object-contain"
          src={props.imageLink}
          alt={props.alt}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col justify-center">
        <div className="absolute -left-6 -top-6 -z-10 h-16 w-16 rounded-full bg-[#6d17e4] opacity-40 blur-xl" />

        <h3 className="text-base font-bold text-white tracking-tight">
          {props.title}
        </h3>

        <p className="mt-1 text-xs leading-relaxed text-white/90">
          {props.text1} {props.text2}
        </p>

        <button className="mt-3 w-max rounded-md border border-[#6F319D] px-3 py-1 text-[10px] font-semibold text-white transition-colors hover:bg-[#6F319D]">
          {props.text3}
        </button>
      </div>
    </div>
  );
};

export default Cards;
