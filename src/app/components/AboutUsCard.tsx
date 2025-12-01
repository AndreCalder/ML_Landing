"use client";

import { GraduationCap, PlusIcon, Undo2 } from "lucide-react";
import Image from "next/image";
import React from "react";

function AboutUsCard({
  img,
  name,
  role,
  description,
  academicInfo,
}: {
  img: string;
  name: string;
  role: string;
  description: string;
  academicInfo: any;
}) {
  const [isFlipped, setIsFlipped] = React.useState<boolean>(false);

  const handleFlip = () => setIsFlipped(!isFlipped);
  return (
    <div
      className={`min-w-64 sm:min-w-96 w-fit flip-card h-full ${
        isFlipped && "flipped"
      }`}
    >
      <div className="flip-card-inner w-full h-full flex items-center">
        <div className="flip-card-front flex flex-col justify-center items-center rounded-[20px] bg-white pt-10 px-5 shadow-md border-b-4 border-ml_orange">
          <Image
            src={img}
            className="rounded-full object-cover w-64 h-64"
            width={250}
            height={250}
            alt={name}
          />
          <br />
          <p className="text-base font-bold text-center">{name}</p>
          <p className="text-sm text-gray-400 text-center font-light my-2">
            {role}
          </p>
          <p className="text-sm font-light text-justify text-wrap">
            {description}
          </p>
          <p
            className="text-ml_orange text-sm flex items-center justify-center my-4 cursor-pointer"
            onClick={() => handleFlip()}
          >
            <PlusIcon className="mr-2" size={16} />
            Conocer historial academico
          </p>
        </div>
        <div className="flip-card-back flex flex-col justify-center items-center rounded-[20px] bg-white pt-10 px-5 shadow-md border-b-4 border-ml_orange">
          <p className="text-white text-center bg-ml_blue absolute top-0 left-0 right-0 py-1 rounded-tr-[20px] rounded-tl-[20px]">
            {name}
          </p>
          <GraduationCap className="" size={16} />
          {academicInfo.sections.map((section: any, index: number) => (
            <div key={index} className="px-4 py-2 w-full">
              <p className="text-sm sm:text-base font-bold text-left">
                {section.title}
              </p>
              <ul className="list-disc text-xs sm:text-sm font-light text-justify text-wrap">
                {section.sublist.map((item: any, index: number) => (
                  <li key={index}>
                    {item.text}
                    {item.sublist && (
                      <ul className="list-disc text-xs sm:text-sm font-light text-justify text-wrap ml-4">
                        {item.sublist.map((subitem: any, index: number) => (
                          <li key={index}>{subitem.text}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <p
            className="text-ml_orange text-sm flex items-center justify-center my-4 cursor-pointer"
            onClick={() => handleFlip()}
          >
            <Undo2 className="mr-2" size={16} />
            Volver
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUsCard;
