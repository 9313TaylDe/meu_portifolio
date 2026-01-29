import { useState } from "react";
export const frontendSkills = [
  { name: "HTML", level: 80 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 85 },
  { name: "TypeScript", level: 70 },
  { name: "React", level: 80 },
  { name: "Next.js", level: 75 },
  { name: "Tailwind CSS", level: 80 },
  { name: "Testes de Interface", level: 65 },
];

export const backendSkills = [
  { name: "Node.js", level: 70 },
  { name: "Express", level: 65 },
  { name: "REST APIs", level: 75 },
  { name: "JWT / Auth", level: 60 },
  { name: "PostgreSQL", level: 70 },
  { name: "MongoDB", level: 65 },
];

const SkillsAccordion = ({ title, skills }) => {
  const [open, setOpen] = useState(false);

  return (
    <section className="w-full max-w-3xl mx-auto bg-white rounded-xl shadow-lg">
      {/* HEADER */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-4 font-semibold"
      >
        {title}
        <i
          className={`pi pi-angle-down transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* CONTENT */}
      {open && (
        <div className="px-4 pb-4 space-y-4">
          {skills.map((skill) => (
            <div key={skill.name} className="space-y-1">
              <div className="flex justify-between text-sm font-medium">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>

              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-black transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default SkillsAccordion;
