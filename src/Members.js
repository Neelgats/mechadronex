import React from "react";
import './Members.css';
import logo from './logo.svg';

const membersData=[
    {name:'Jaswant Reddy',role:'President',img:logo,bio:"axibeu  uibfihb ibf ifbihbibubu b"},
    {name:'Hariprasad',role:'Secretary',img:logo,bio:"jhvuygijhwgjeetdidyhv  yugyg ygey8e y8f y8fey8e"},
    {name:'Balaji',role:'Treasurer',img:logo,bio:"uhvy8y8guihhgbdhgigwg"},
];

const Members=()=>{
    return(
    <section id="members" className="members-section">
        <h2>Our Club Members</h2>
        <div className="members-grid">
            {membersData.map((member,index)=>(
                <div key={index} className="member-card">
                    <img src={member.img} alt={member.name} className="member-image"></img>
                    <h3 className="member-name">{member.name}</h3>
                    <div className="member-details">
                        <p>{member.role}</p>
                        <p>{member.bio}</p>
                    </div> 
                </div>
            ))}
        </div>
    </section>
    );
};

export default Members;