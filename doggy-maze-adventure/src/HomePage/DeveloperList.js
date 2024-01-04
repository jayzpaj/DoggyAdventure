import React from 'react';
import Developer1Image from '../developer1.jpg'; // Import the image file for Developer 1
import Developer2Image from '../developer2.jpg';
import Developer3Image from '../developer3.jpg';
import Developer4Image from '../developer4.png'; 
import "../Css/aboutus.css"

const developers = [
  { name: 'Meliza Bande', role: 'Leader Developer / UI/UX Designer', responsibility: 'Game mechanics and logic / Designing game interfaces and user experience', image: Developer1Image },
  { name: 'Alexis Greko Agonoy', role: 'Assitant Developer', responsibility: 'Assist the leader in the game mechanics and logic', image: Developer2Image },
  { name: 'John Gabriel Rojas', role: 'UI/UX Designer', responsibility: 'Designing game interfaces and user experience', image: Developer3Image },
  { name: 'Terrence Jay Pajarillo', role: 'UI/UX Designer', responsibility: 'Designing game interfaces and user experience', image: Developer4Image },

  // Add more developers as needed
];

const DeveloperList = () => {
  return (
    <div className='developer-list-container'>
      <h2>Meet the Developers</h2>
      <ul>
        {developers.map((developer, index) => (
          <li key={index}>
            <img src={developer.image}alt={`Developer ${index + 1}`} style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
            <h3>{developer.name}</h3>
            <p>
              <strong>Role:</strong> {developer.role}
            </p>
            <p>
              <strong>Responsibility:</strong> {developer.responsibility}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeveloperList;