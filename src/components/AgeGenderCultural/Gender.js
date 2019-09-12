import React from 'react';

const Gender = ({genderList}) => {

    return (
        <div>
            {genderList? <div className="gender-container">
                <p>{genderList[0].name} <span>{genderList[0].value}</span></p>
                <p>{genderList[1].name} <span>{genderList[1].value}</span></p>
            </div> : null}
        </div>
    )
}

export default Gender;