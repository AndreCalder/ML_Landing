"use client";

import React from "react";
import AboutUsCard from "../components/AboutUsCard";
import Image from "next/image";
import Contacto from "../components/Contacto";
import { MoveLeft, MoveRight } from "lucide-react";

function Nosotros() {
  const [currTeamMember, setCurrTeamMember] = React.useState<number>(0);
  const [currAlly, setCurrAlly] = React.useState<number>(0);

  const academicInfo = {
    Fer: {
      sections: [
        {
          title: "Licenciatura en Derecho",
          sublist: [
            {
              text: "Universidad Nacional Autónoma de México (UNAM)",
            },
            {
              text: "Graduado con mención honorífica",
            },
          ],
        },
        {
          title: "Maestría en Administración Pública",
          sublist: [
            {
              text: "Instituto Nacional de Administración Pública (INAP)",
            },
          ],
        },
        {
          title: "Experiencia profesional destacada:",
          sublist: [
            {
              text: "Suprema Corte de Justicia de la Nación (2014-2024):",
              sublist: [
                {
                  text: "Secretario Auxiliar de Estudio y Cuenta en la ponencia del Ministro Luis María Aguilar Morales",
                },
                {
                  text: "Asesor en la Secretaría General de la Presidencia",
                },
              ],
            },
            {
              text: "Consejo de la Judicatura Federal: Experiencia clave en gestión judicial.",
            },
          ],
        },
      ],
    },
    Mariza: {
      sections: [
        {
          title: "Licenciatura en Psicología",
          sublist: [
            {
              text: "Universidad de Monterrey",
            },
          ],
        },
        {
          title: "Maestría en Terapia Sistémica Familiar",
          sublist: [
            {
              text: "Centro de Estudios e Investigación sobre la Familia (IFAC)",
            },
          ],
        },
        {
          title: "Experiencia profesional destacada:",
          sublist: [
            {
              text: " Más de 8 años acompañando procesos terapéuticos en entornos vulnerables.",
            },
            {
              text: "Atención especializada en infancia, adolescencia y dinámica familiar.",
            },
            {
              text: "Psicóloga en centros penitenciarios, escuelas públicas y privadas, y clínicas en México y Chicago.",
            },
          ],
        },
        {
          title: "Áreas de especialización:",
          sublist: [
            {
              text: "Acompañamiento terapéutico en procesos de separación o conflicto familiar.",
            },
            {
              text: "Intervención emocional con enfoque en trauma infantil.",
            },
            {
              text: "Fortalecimiento del vínculo afectivo entre madres, padres, hijas e hijos.",
            },
          ],
        },
      ],
    },
    Raquel: {
      sections: [
        {
          title: "Licenciatura en Psicología",
          sublist: [
            {
              text: "Universidad de las Américas A.C.",
            },
          ],
        },
        {
          title: "Diplomado en Psicología Clínica y de la Salud",
          sublist: [
            {
              text: "Universidad Nacional Autónoma de México (UNAM) / Instituto Nacional de Psiquiatría “Ramón de la Fuente Muñiz”",
            },
          ],
        },
        {
          title: "Maestría en Psicoterapia Individual y de Pareja",
          sublist: [
            {
              text: "Instituto Mexicano de la Pareja",
            },
          ],
        },
        {
          title: "Experiencia profesional destacada:",
          sublist: [
            {
              text: "Más de 10 años de experiencia en psicoterapia clínica.",
            },
            {
              text: "Directora de Operaciones en Terapify, desarrollando procesos de atención psicológica en línea y capacitación de terapeutas.",
            },
          ],
        },
        {
          title: "Áreas de especialización:",
          sublist: [
            {
              text: "Psicoterapia individual y de pareja.",
            },
            {
              text: "Mindfulness y manejo del estrés.",
            },
            {
              text: "Atención emocional en contextos de ansiedad, depresión y trauma.",
            },
            {
              text: "Promoción del bienestar psicológico en entornos laborales y educativos.",
            },
          ],
        },
      ],
    },
    AnaPao: {
      sections: [
        {
          title: "Licenciatura en Administración Financiera",
          sublist: [
            {
              text: "Universidad Autónoma de Nuevo León",
            },
          ],
        },
        {
          title: "Certificación Internacional en Planeación Financiera",
          sublist: [
            {
              text: "Million Dollar Round Table (MDRT)",
            },
          ],
        },
        {
          title: "Experiencia profesional destacada:",
          sublist: [
            {
              text: "Más de 10 años en planificación y educación financiera personalizada.",
            },
            {
              text: "Fundadora de Mompreneur México, enfocada en empoderar mujeres en su independencia financiera.",
            },
            {
              text: "Miembro de la Million Dollar Round Table, reconocida internacionalmente.",
            },
          ],
        },
        {
          title: "Áreas de especialización:",
          sublist: [
            {
              text: "Desarrollo de estrategias financieras en ahorro, inversión y manejo de riesgos.",
            },
            {
              text: "Educación financiera a través de talleres y capacitaciones.",
            },
            {
              text: "Iniciativas para combatir la violencia económica y fomentar la equidad financiera.",
            },
          ],
        },
      ],
    },
  };

  const team = [
    <AboutUsCard
      img="/Fer.jpeg"
      name="Fernando Suárez Fernández"
      role="Fundador y Director General"
      description="Con más de 20 años en el Poder Judicial, ha ocupado roles clave en la Suprema Corte y el Consejo de la Judicatura. Su visión combina conocimiento jurídico con un enfoque centrado en el bienestar de las familias y el acceso humano a la justicia."
      academicInfo={academicInfo["Fer"]}
    />,
  ];

  const allies = [
    <AboutUsCard
      img="/MarizaBucio.jpeg"
      name="Mariza Bucio Aguilera"
      role="Psicóloga"
      description="Especialista en terapia sistémica familiar, brinda acompañamiento emocional a niñas, niños, adolescentes y familias, tanto en México como en Estados Unidos, con un enfoque centrado en la seguridad emocional y la reconstrucción del vínculo afectivo."
      academicInfo={academicInfo["Mariza"]}
    />,
    <AboutUsCard
      img="/RaquelYoma.jpeg"
      name="Raquel Yoma Duarte"
      role="Psicóloga"
      description="Especialista en psicoterapia individual y de pareja, con amplia experiencia en atención emocional a personas, adolescentes y familias. Combina su práctica clínica con la formación en mindfulness y el trabajo con instituciones públicas y privadas para promover el bienestar psicológico."
      academicInfo={academicInfo["Raquel"]}
    />,
    <AboutUsCard
      img="/AnaPao.png"
      name="Ana Paola Villegas"
      role="Asesora Financiera"
      description="Profesional en planificación financiera, ofrece estrategias personalizadas para mejorar tu estabilidad económica con conocimientos clave para afrontar cambios financieros."
      academicInfo={academicInfo["AnaPao"]}
    />,
  ];

  return (
    <div className="pt-12 min-h-svh h-fit w-full">
      <div className="w-full h-52 bg-left aboutUsCover grid grid-cols-12 sm:px-24">
        <div className="col-span-12 sm:col-span-4  flex items-center">
          <p className="text-ml_orange text-title_mobile sm:text-title font-extrabold">
            Sobre nosotros
          </p>
        </div>
      </div>
      <div className="w-full h-[80vh] md:h-[100vh] flex flex-col aboutUsOne">
        <div className="text-2xl sm:text-3xl text-ml_orange font-extrabold rounded-full w-full px-4 py-4 text-center">
          Conoce a nuestro equipo
        </div>
        <div className="w-full h-[60vh] md:h-[80vh] flex justify-center items-center gap-5 sm:hidden">
          {team.length > 1 && <MoveLeft className="cursor-pointer" size={16} />}
          {team[currTeamMember]}
          {team.length > 1 && (
            <MoveRight className="cursor-pointer" size={16} />
          )}
        </div>
        <div className="h-full w-full hidden justify-center items-center gap-5 sm:flex">
          <AboutUsCard
            img="/Fer.jpeg"
            name="Fernando Suárez Fernández"
            role="Fundador y Director General"
            description="Con más de 20 años en el Poder Judicial, ha ocupado roles clave en la Suprema Corte y el Consejo de la Judicatura. Su visión combina conocimiento jurídico con un enfoque centrado en el bienestar de las familias y el acceso humano a la justicia."
            academicInfo={academicInfo["Fer"]}
          />
        </div>
      </div>
      <div className="w-full h-[90vh] md:h-[100vh] aboutAllies py-6">
        <div className="text-2xl sm:text-3xl text-ml_blue font-extrabold rounded-full w-full px-4 py-4 text-center">
          Nuestros aliados
        </div>
        <div className="w-full h-[80vh] flex justify-center items-center gap-5 md:hidden">
          <MoveLeft
            onClick={() => {
              if (currAlly === 0) {
                setCurrAlly(allies.length - 1);
              } else {
                setCurrAlly(currAlly - 1);
              }
            }}
            className="cursor-pointer text-ml_blue"
            size={16}
          />
          {allies[currAlly]}
          <MoveRight
            onClick={() => {
              if (currAlly === allies.length - 1) {
                setCurrAlly(0);
              } else {
                setCurrAlly(currAlly + 1);
              }
            }}
            className="cursor-pointer text-ml_blue"
            size={16}
          />
        </div>
        <div className="h-full w-full hidden justify-center items-center gap-5 md:flex">
          <AboutUsCard
            img="/MarizaBucio.jpeg"
            name="Mariza Bucio Aguilera"
            role="Psicóloga"
            description="Especialista en terapia sistémica familiar, brinda acompañamiento emocional a niñas, niños, adolescentes y familias, tanto en México como en Estados Unidos, con un enfoque centrado en la seguridad emocional y la reconstrucción del vínculo afectivo."
            academicInfo={academicInfo["Mariza"]}
          />

          <AboutUsCard
            img="/RaquelYoma.jpeg"
            name="Raquel Yoma Duarte"
            role="Psicóloga"
            description="Especialista en psicoterapia individual y de pareja, con amplia experiencia en atención emocional a personas, adolescentes y familias. Combina su práctica clínica con la formación en mindfulness y el trabajo con instituciones públicas y privadas para promover el bienestar psicológico."
            academicInfo={academicInfo["Raquel"]}
          />
          <AboutUsCard
            img="/AnaPao.png"
            name="Ana Paola Villegas"
            role="Asesora Financiera"
            description="Profesional en planificación financiera, ofrece estrategias personalizadas para mejorar tu estabilidad económica con conocimientos clave para afrontar cambios financieros."
            academicInfo={academicInfo["AnaPao"]}
          />
        </div>
      </div>
      <div className="min-h-[32rem] grid grid-cols-12 py-6 px-5 sm:px-24 gap-4 ourHistory">
        <div className="col-span-12 md:col-span-7 flex flex-col justify-center ">
          <p className="text-subtitle_mobile sm:text-subtitle text-black font-extrabold">
            Nuestra historia
          </p>
          <p className="text-sm sm:text-base font-extralight my-6 text-[22px]">
            Nuestra historia comienza con la convicción de que los procesos
            legales no solo requieren soluciones jurídicas, sino también un
            acompañamiento humano. Identificamos la falta de cercanía y apoyo
            integral en el ámbito legal tradicional, lo que nos llevó a crear un
            enfoque accesible y empático. Hoy, estamos comprometidos a brindar
            claridad, respaldo y tranquilidad en cada etapa del camino,
            asegurándonos de que nadie enfrente estos desafíos en soledad.
          </p>
        </div>
        <div className="col-span-12 md:col-span-5 flex items-center">
          <Image
            src="/OurHistory.png"
            alt="Nuestra Historia"
            width={610}
            height={450}
          />
        </div>
      </div>
      <div className="min-h-fit h-fit w-full px-5 sm:px-24 py-8 bg-services_blue flex flex-col items-center justify-center">
        <p className="text-xl text-ml_blue font-bold text-center py-4">
          Lo que nos define
        </p>
        <div className="w-full grid grid-cols-12 py-6 sm:py-0 gap-6">
          <div className="col-span-12 md:col-span-4 flex flex-col justify-center items-center">
            <Image
              src="/Purpose.svg"
              alt="Propósito"
              width={100}
              height={100}
            />
            <p className="text-base font-bold py-4">Propósito</p>
            <p className="text-sm sm:text-base font-light text-center">
              Ofrecer un servicio legal integral con abogados especializados
              que, además, brinde apoyo emocional, laboral, financiero y
              práctico para reducir el estrés y la incertidumbre durante su
              proceso legal.
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 flex flex-col justify-center items-center">
            <Image src="/Mission.svg" alt="Misión" width={100} height={100} />
            <p className="text-base font-bold py-4">Misión</p>
            <p className="text-sm sm:text-base font-light text-center">
              Ser un aliado confiable que acompaña a nuestros clientes en sus
              momentos más difíciles, brindándoles confianza, claridad y
              soluciones efectivas para superar sus desafíos legales.{" "}
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 flex flex-col justify-center items-center">
            <Image src="/Vision.svg" alt="Visión" width={100} height={100} />
            <p className="text-base font-bold py-4">Propósito</p>
            <p className="text-sm sm:text-base font-light text-center">
              Convertirnos en el despacho líder en México, redefiniendo la
              experiencia legal con un enfoque integral que combine excelencia
              jurídica, empatía y un acompañamiento total que va más allá del
              aspecto legal.{" "}
            </p>
          </div>
        </div>
      </div>
      <Contacto />
    </div>
  );
}

export default Nosotros;
