import React from 'react';
import "../Components/team.css";

const Team = () => {
  const teamMembers = [
    { id: 1, name: "Mamoon", role: "Front-end Developer" },
    { id: 2, name: "Areeb", role: "Back-end Developer" },
    { id: 3, name: "Zoya", role: "UI/UX Designer" }
  ];

  return (
    <div>
      <h2>Our Team</h2>
      <ul>
        {teamMembers.map((member) => (
          <li key={member.id}>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Team; 
