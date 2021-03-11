import React from 'react';
import image from '../../Image/male.png';
import image2 from '../../Image/female.png';
import './Image.css';

const Image = (props) => {
    const {strGender} = props.team;

    let greeting;
    
    if (strGender === "Male") {
            greeting = image;
        }
    else {
            greeting = image2;
        }  
    
    return (
        <div className="team-image">
            <img src={greeting}/>

        </div>
    );
};

export default Image;