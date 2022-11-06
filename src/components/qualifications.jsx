import React from 'react';
import Qualification from "./Qualification"

import qualificationsArray  from './qualificationsList.json';



// const AllCompanies = [
//     { "CompanyName": "UNL", "StartYear": 2019, "EndYear": 0, "Order": 1 },
//     { "CompanyName": "Assurity", "StartYear": 2014, "EndYear": 2019, "Order": 2 },
//     ];
  

const qualificationsSorted = qualificationsArray.sort((a, b) => (a.priority > b.priority) ? 1 : -1)


const AssurityQualifications = qualificationsSorted.filter(obj => {
    return obj.company === "Assurity";
  });
  const UNLAdmissionsQualifications = qualificationsSorted.filter(obj => {
    return obj.company === "University of Nebraska - Admissions";
  });
  const UNLNTC = qualificationsSorted.filter(obj => {
    return obj.company === "University of Nebraska - Nebraska Transportation Center";
  });
  const JournalStart = qualificationsSorted.filter(obj => {
    return obj.company === "Lincoln Journal Star";
  });

console.log(AssurityQualifications);

  
const Qualifications = () => {
    return (
        <div className="qualifications">
            <h1>Qualifications</h1>
            <h2>Assurity</h2>
            <ul>
                {AssurityQualifications.map((qualification) => (
                    <Qualification key={qualification.id}>{qualification.qualification}</Qualification>
                ) )}
            </ul>
        </div>
        )

    }

export default Qualifications;