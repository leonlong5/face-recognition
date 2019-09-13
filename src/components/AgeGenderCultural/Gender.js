import React from 'react';

const Gender = ({genderList, agesList, multiculturalList}) => {

    return (
        <div>
            {genderList? <div className="gender-container">
                <div className='report-left'>
                    <h1>Report</h1>
                    <p>{genderList[0].name.toUpperCase()} : <span>{(genderList[0].value*100).toFixed(2)}%</span></p>
                    <p>{genderList[1].name.toUpperCase()} : <span>{(genderList[1].value*100).toFixed(2)}%</span></p>
                    <p>Age of {agesList[0].name} : <span>{(agesList[0].value*100).toFixed(2)}%</span></p>
                    <p>Race of {multiculturalList[0].name} : <span>{(multiculturalList[0].value*100).toFixed(2)}%</span></p>
                </div>
                <table className='report-right'>
                    <thead>
                        <tr>
                            <th>MULTICULTURAL APPEARANCE</th>
                            <th>PROBABILITY</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {multiculturalList.map((item, i) => {
                            return <tr key={i}><td>{item.name}</td><td>{item.value}</td></tr>
                    })}
                </tbody>
            </table>
            </div> : null}
        </div>
    )
}

export default Gender;