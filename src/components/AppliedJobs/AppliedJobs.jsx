import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../utility/localStrorage";

const AppliedJobs = () => {
    const jobs = useLoaderData()
    useEffect(()=>{
        const storedJobIds = getStoredJobApplication()
        if(jobs.length > 0){
            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))
            console.log(jobsApplied)
        }
    }, [])
    return (
        <div>
            <h1>this is applies jobs</h1>
        </div>
    );
};

export default AppliedJobs;