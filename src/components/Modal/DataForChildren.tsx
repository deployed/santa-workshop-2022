import React, {useState} from 'react';
import {DataForChildrenType} from "./VerifyPackageModal";
import politenessImage from "./politnessImage.png"


function DataForChildren({dataForChildren}:{dataForChildren: DataForChildrenType}) {
    return (
        <div>
            <div style={{fontWeight:"bold"}}>Imię:</div>
            <div>{dataForChildren.name}</div>
            <div style={{fontWeight:"bold"}}>Wiek:</div>
            <div>{dataForChildren.age}</div>
            <div style={{fontWeight:"bold"}}>Grzeczność:</div>
            <img src={politenessImage}/>
            <div style={{fontWeight:"bold"}}>Kraj:</div>
            <div>{dataForChildren.country}</div>
            <div style={{fontWeight:"bold"}}>Miasto:</div>
            <div>{dataForChildren.city}</div>
            <div style={{fontWeight:"bold"}}>Kod pocztowy:</div>
            <div>{dataForChildren.postalCode}</div>
            <div style={{fontWeight:"bold"}}>Ulica i numer domu:</div>
            <div>{dataForChildren.address}</div>
        </div>
    );
}

export default DataForChildren;