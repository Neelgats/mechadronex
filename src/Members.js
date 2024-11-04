import React from "react";
import './Members.css';

const membersData=[
    {name:'Jaswant Reddy',role:'President',img:'logo.svg'},
    {name:'Hariprasad',role:'Secretary',img:'logo.svg'},
    {name:'Balaji',role:'Treasurer',img:'logo.svg'},
];

const Members=()=>{
    return(
    <section id="members" className="members-section">
        <h2>Our Club Members</h2>
        <div className="members-grid">
            {membersData.map((member,index)=>(
                <div key={index} className="member-card">
                    <img src={member.img} alt={`${member.name}`}></img>
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                </div>
            ))}
        </div>
    </section>
    );
}

export default Members;