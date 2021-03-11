import React from 'react';
import { Link } from 'react-router-dom';

const Team = (props) => {
    const {strTeam, strSport, strTeamBadge, idTeam} = props.team
    return (

        <div className="card" style={{width: "220px"}}>
            <img src={strTeamBadge} className="card-img-top" alt=""/>
            <div className="card-body">
                <h3 className="card-title">{strTeam}</h3>
                <p className="card-text">Sports Type: {strSport} </p>
                <Link to={`/team-detail/${idTeam}`}>
                    <button className="btn btn-primary">Explore</button>
                </Link>
            </div>
        </div>
    );
};

export default Team;