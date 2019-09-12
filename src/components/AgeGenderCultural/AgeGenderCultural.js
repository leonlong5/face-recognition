import React from 'react';
import './AgeGenderCultural.css';
import AgeChart from './AgeChart';
import Gender from './Gender';
import Multicultural from './Multicultural'


const AgeGenderCultural = ({ agesList, genderList, multiculturalList }) => {
    
    return (
    <div id='report-container'>
        <Gender genderList={genderList} agesList={agesList} multiculturalList={multiculturalList}></Gender>
        <Multicultural multiculturalList={multiculturalList}></Multicultural>
        <AgeChart agesList={agesList}></AgeChart>
    </div>)
}


export default AgeGenderCultural;