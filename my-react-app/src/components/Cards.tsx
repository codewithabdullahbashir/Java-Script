import type React from "react";

interface Card {
  imageLink: string;
  title: string;
  alt: string;
  text1: string;
  text2: string;
  text3: string;
}

const Cards : React.FC<Card> = (props) => {
  return (
    <div className="Card relative mx-auto h-32.5 w-120 overflow-hidden rounded-s-sm  border-t-3 border-[#4F228D] bg-[#16052D] ">
      <div className="absolute -left-10 -top-12 h-37.5 w-37.5 rounded-full bg-[#1e0544] opacity-50 blur-[45px]" />

      <div className="absolute left-8.75 top-6.75 h-20 w-21.25">
              <img className="Card-image" src={props.imageLink} alt={ props.alt} />
      </div>

      <div className="absolute left-34 top-7.75">
        <div className="absolute -left-10 -top-6 h-20.5 w-20.5 rounded-full bg-[#6d17e4] opacity-100 blur-[45px]" />
        <h1 className="Card-title whitespace-nowrap text-[18px] font-bold leading-5.5 tracking-[-0.4px] card">
          {props.title}
        </h1>

        <p className=" Card-text mt-0.5 w-43.75 text-[5.5px] leading-2 text-white/90">
          {props.text1}
          <br />
          {props.text2}
        </p>

        <button className="Card-text mt-2 h-6 w-20 rounded-md border border-[#6F319D] text-[6px] font-medium text-white">
          {props.text3}
        </button>
      </div>
    </div>
  );
}

export default Cards