import { useEffect, useState } from "react";


function CircularPrograss({ skills }) {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setProgress(100)
    }, 200)
  }, [])

  let cumulativePercent = 0;

  return (
    <svg width="120" height="120" className="group-hover:scale-110 transition duration-500">
      {skills.map((skill, index) => {

        const rotation = (cumulativePercent / 100) * 360;

        const dash = (skill.value / 100) * circumference * (progress / 100);

        cumulativePercent += skill.value;

        return (
          <circle
            key={index}
            cx="60"
            cy="60"
            r={radius}
            fill="transparent"
            stroke={skill.color}
            strokeWidth="10"
            strokeDasharray={`${dash} ${circumference}`}
            strokeDashoffset="0"
            strokeLinecap="butt"
            transform={`rotate(${rotation} 60 60)`}
            style={{
              transition: "stroke-dasharray 1s ease"
            }}
          />
        );
      })}
    </svg>
  );

}

export default CircularPrograss;