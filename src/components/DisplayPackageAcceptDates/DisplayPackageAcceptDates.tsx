import React from 'react'

const header = 'Data akceptacji'



const DisplayPackageAcceptDates: React.FC<{dates: string[]} > = ({dates}) => {
    const oneDate = dates.map((date) => {return <p>{date}</p>})
    
    return(
        <div>
            {oneDate}
        </div>

    )
}




export default DisplayPackageAcceptDates;


