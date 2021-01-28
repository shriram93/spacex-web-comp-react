import React, { Fragment, useEffect, useState } from 'react';
import './LaunchPrograms.scss';
import LaunchProgramsDump from '../../launchProgramsDump';

const formatLaunchPrograms = (launchPrograms) => {
    const formattedLaunchPrograms = launchPrograms.map(launchProgram => {
        const { mission_name, flight_number, launch_year, launch_success, mission_id, rocket, links } = launchProgram;

        return {
            missonname: mission_name,
            flightnumber: flight_number,
            launchyear: launch_year,
            launchsuccess: launch_success,
            missionids: mission_id,
            imageurl: links.mission_patch_small,
            landSuccess: rocket.first_stage.cores[0].land_success
        }

    });
    return formattedLaunchPrograms;
}


const LaunchPrograms = () => {
    const [launchPrograms, setLaunchPrograms] = useState([]);

    useEffect(() => {
        setLaunchPrograms(formatLaunchPrograms(LaunchProgramsDump) || []);
    }, []);

    return (
        <div className="launch-program">
            <div className="launch-program__cards">
                {launchPrograms.map(launchProgram => (
                    <div key={launchProgram.flightnumber} className="launch-program__cards__card">
                        <spacex-card {...launchProgram}></spacex-card>
                    </div>
                ))}
                {launchPrograms.length < 5 && (
                    <Fragment>
                        <div className="launch-program__cards__card launch-program__cards__card--dummy" />
                        <div className="launch-program__cards__card launch-program__cards__card--dummy" />
                        <div className="launch-program__cards__card launch-program__cards__card--dummy" />
                        <div className="launch-program__cards__card launch-program__cards__card--dummy" />
                    </Fragment>
                )}
            </div>
        </div>
    );
}

export default LaunchPrograms;
