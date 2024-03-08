import React from "react";
import smiley from "../../../public/images/Smiley.png"
import Card from "./Card";

const CardMapOver = () => {
  const text =
    "Lorem ipsum dolor sit amet consectetur. Vestibulum urna egestas id fringilla est feugiat urna magna pretium. Tempus donec tortor mattis in. Sit tellus et non pretium.";

  const data = [
    { image: smiley, text: text },
    { image: smiley, text: text },
    { image: smiley, text: text },
    { image: smiley, text: text },
    { image: smiley, text: text },
    { image: smiley, text: text },
  ];

  return <>
    {data.map((item, index) => (
      <div key={index} className="flex ">
            <Card image={item.image} Text={item.text}></Card>
      </div>
    ))}
  </>;
};

export default CardMapOver;
