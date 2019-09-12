import React from 'react';
import './AgeGenderCultural.css';
import AgeChart from './AgeChart';
import Gender from './Gender';

let options = null;

const AgeGenderCultural = ({ agesList, genderList, multiculturalList }) => {
    
    return (
    <div>
        <AgeChart agesList={agesList}></AgeChart>
        <Gender genderList={genderList}></Gender>
    </div>)
}


export default AgeGenderCultural;