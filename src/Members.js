import React from "react";
import './Members.css';
import Balaji from './BALAJI_R.png';
import Hariprasad from './HARIPRASAD.jpg';
import Jaswant from './JASWANTH.jpg';

const membersData=[
    {name:'Jaswant Reddy',role:'President',img:Jaswant,bio:"Final year"},
    {name:'Hariprasad',role:'Secretary',img:Hariprasad,bio:"Final year"},
    {name:'Balaji',role:'Treasurer',img:Balaji,bio:"Final year"},
];

const Members=()=>{
    return(
    <section id="members" className="members-section">
        <h2>Our Club Executives</h2>
        <div className="members-grid">
            {membersData.map((member,index)=>(
                <div key={index} className="member-card">
                    <img src={member.img} alt={member.name} className="member-image"></img>
                    <h3 className="member-name">{member.name}</h3>
                    <div className="member-details">
                        <p>{member.name}</p>
                        <p>{member.role}</p>
                    </div> 
                </div>
            ))}
        </div>
    </section>
    );
};

export default Members;