import React from "react";

import Card from "./Card";
import heartcare from '../../../public/images/heartcare.png'
import plant from '../../../public/images/plant.png'
import collaboration from '../../../public/images/collaboration.png'
import support from '../../../public/images/support.png'
import home from '../../../public/images/home.png'


const data = [
  {
      icon : heartcare,
      title : "Physician-Led Wound Care",
      body : "Our team of dedicated physicians provides comprehensive wound care services, addressing even the most complex cases to promote healing and enhance quality of life."
  },
  {
      icon: collaboration,
      title : "Collaboration with PCP Teams ",
      body : "We work hand-in-hand with your primary care physician (PCP) team to optimize your wound care environment, including dietary supplements and lifestyle recommendations, ensuring the best possible outcomes."
  },
  {
      icon: support,
      title : "Supportive Services",
    body : "From discharge planning to case management, our team coordinates with healthcare professionals and family members to deliver personalized, holistic care that meets your unique needs."
  },
  {
      icon: home,
      title : "Guidance for Families",
      body : "Our team supports and educates families, empowering them to contribute to the healing process effectively."
  },
  {
      icon: plant,
      title : "Nutritional Optimization",
      body : "We idealize supplements and diets to enhance your overall health, maximizing the potential for recovery."
  }
]


const CardMapOver = () => {


  return <>
    {data.map((item, index) => (
      <div key={index} className="flex ">
            <Card icon={item.icon} title={item.title} body={item.body}></Card>
      </div>
    ))}
  </>;
};

export default CardMapOver;
