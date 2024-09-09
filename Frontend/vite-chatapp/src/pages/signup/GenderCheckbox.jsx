import React from 'react'

const GenderCheckbox = ({onCheckboxChange, selectedGender}) => {
    return (
        <div className='flex'>
            <div className="form-control">
                <label className={`cursor-pointer label ${selectedGender === "male" ? selectedGender : " "}`}>
                    <span className="label-text">Male </span>
                    <input type="checkbox"  className="checkbox checkbox-accent ml-2"
                    checked ={selectedGender === "male"}
                    onChange={()=>onCheckboxChange("male")} 
                    />
                </label>
            </div>

            <div className="form-control">
                <label className={`cursor-pointer label ${selectedGender === "female" ? selectedGender : " "}`}>
                    <span className="label-text">Female </span>
                    <input type="checkbox"  className="checkbox checkbox-accent ml-2" 
                    checked ={selectedGender === "female"}
                    onChange={()=>onCheckboxChange("female")}/>
                </label>
            </div>

        </div>
    )
}

export default GenderCheckbox