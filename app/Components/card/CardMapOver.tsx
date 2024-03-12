import React from "react";

import LabelCard from "./LabelCard";
import management from "../../../public/images/management.png";
import psychosocial from "../../../public/images/psychosocial.png";
import spiritual from "../../../public/images/collaboration.png";
import pain from "../../../public/images/pain.png";
import communications from "../../../public/images/communications.png";
import inpatient from "../../../public/images/inpatient.png";

const data = [
  {
    icon: management,
    title: "Medical Management",
    bullet1: "Expert management of complex medical issues.",
    bullet2: "Personalized treatment plans to address individual needs.",
  },
  {
    icon: psychosocial,
    title: "Psychosocial Support",
    bullet1: "Compassionate care for emotional and social concerns.",
    bullet2: "Therapeutic interventions to enhance overall well-being.",
  },
  {
    icon: spiritual,
    title: "Spiritual Care",
    bullet1: "Holistic support to address spiritual pain.",
    bullet2: "Tailored approaches to respect individual beliefs.",
  },
  {
    icon: pain,
    title: "Pain Management",
    bullet1: "Dedicated focus on alleviating physical pain and discomfort.",
    bullet2: "Multi-disciplinary strategies for optimal pain relief.",
  },
  {
    icon: communications,
    title: "Communication Facilitation",
    bullet1: "Closing the loop of confusion in treatment options",
    bullet2: "Ensuring clear understanding among patients, families, and medical teams",
  },
  {
    icon: inpatient,
    title: "Inpatient and Outpatient Services",
    bullet1: "Providing support both within the hospital and outPatient.",
    bullet2: "Collaborating with PCP teams for better outcomes in the hospital.",
  },
];

const CardMapOver = () => {
  return (
    <>
      {data.map((item, index) => (
        <div key={index} className="flex ">
          <LabelCard
            icon={item.icon}
            title={item.title}
            bullet1={item.bullet1}
            bullet2={item.bullet2}
          ></LabelCard>
        </div>
      ))}
    </>
  );
};

export default CardMapOver;
