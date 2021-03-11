import React, { useEffect, useState } from 'react';
import './TeamDetail.css';
import { useParams } from 'react-router';
import Image from '../Image/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faFacebookSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'



function TeamDetail() {
    const { idTeam } = useParams();

    const [team, setTeam] = useState({});

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeam(data.teams[0]));
    }, [idTeam]);

    

    return (
        <div>
            <img src={team.strTeamBanner} alt="" />
            <div className="team-info">
                <div className="team-detail">
                    <h2> {team.strTeam} </h2>
                    <p>Founded: {team.intFormedYear} </p>
                    <p>Country: {team.strCountry}</p>
                    <p>Sport Type: {team.strSport} </p>
                    <p>Gender: {team.strGender} </p>
                </div>
                <div>
                    <Image team={team} ></Image>
                </div>
            
            </div>
            <div className="description">
                <p> {team.strDescriptionEN} </p>
            </div>
            
            
            
            
            <div className="social-icon" >
                <a href="https://www.google.com/" className="social" ><FontAwesomeIcon icon={faTwitterSquare}/></a>
                
                <a href="https://www.google.com/" className="social" ><FontAwesomeIcon icon={faFacebookSquare}/></a>
                
                <a href="https://www.google.com/" className="social" ><FontAwesomeIcon icon={faYoutubeSquare}/></a>

            </div>

            
        </div>
        
    );
}

export default TeamDetail;