import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';
import './Home.css';


const Home = () => {

    const [teams, setTeams] = useState([]);

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`;
        fetch(url)
        .then(res => res.json())
        .then(data => setTeams(data.teams))
    },[])

    const homeStyle = {
        display:"grid",
        gridTemplateColumns:"repeat(3, 1fr)",
        gridGap: "1rem",
    }

    return (
        <div className="main-container">
            <div>
                

            </div>
            <div  style={homeStyle}>
                {
                    teams.map(team => <Team key={team.idLeague} team={team}></Team>)
                }
            </div>
            
        </div>
    );
};

export default Home;