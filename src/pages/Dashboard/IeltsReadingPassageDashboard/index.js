import { useParams } from "react-router-dom"

export const IeltsReadingPassageDashboard = () => {
    const {testId} = useParams('testId')
    
    return (
        <div>
            IeltsReadingPassageDashboard
        </div>
    )
}