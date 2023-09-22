// import { parse } from "postcss";
import { useLoaderData, useParams } from "react-router-dom";
import { GoLocation } from "react-icons/go";
import { AiFillDollarCircle } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
// import { IconBsFillBagPlusFillName } from "react-icons/bs";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../utility/localStrorage";

const JobDetails = () => {
  // const {job_description, job_responsibility, educational_requirements, experiences } = job;

  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  console.log(job);

  const handleApplyJob = () => {
    saveJobApplication(id)
    toast("add the job");
  };
  return (
    <div className="mb-10">
      <h2>Job Details: {id}</h2>
      <div className="grid gap-4 md:grid-cols-4">
        <div className="border md:col-span-3 p-8">
          <h2>
            <span className="text-2xl font-semibold">Job Description:</span>
            {job.job_description}
          </h2>
          <h2>
            <span className="text-2xl font-semibold">Job Responsibility:</span>
            {job.job_responsibility}
          </h2>
          <h2 className="font-semibold text-2xl">Educational Requirements:</h2>
          <p>{job.educational_requirements}</p>
          <h2 className="font-semibold text-2xl">Experience:</h2>
          <p>{job.experiences}</p>
        </div>
        <div className="border md:col-span-1">
          <div className="p-5 py-4">
            <h2 className="text-2xl font-semibold">Job Details:</h2>
            <hr className="font-extrabold" />
            <h3 className="flex  gap-2">
              <AiFillDollarCircle className="text-2xl"></AiFillDollarCircle>{" "}
              Salary:{job.salary}
            </h3>
            <h3 className="flex gap-2 ">
              <AiFillDollarCircle className="text-2xl"></AiFillDollarCircle> Job
              Title:{job.job_title}
            </h3>

            <h2 className="text-2xl font-semibold">Contact Information</h2>
            <hr />
            <h3 className="flex gap-2 ">
              <BsFillTelephoneFill className="text-xl"></BsFillTelephoneFill>{" "}
              Phone:{job.contact_information.phone}
            </h3>
            <h3 className="flex  gap-2">
              <AiOutlineMail className="text-xl"></AiOutlineMail>Email:
              {job.contact_information.email}
            </h3>
            <h3 className="flex  gap-2">
              <GoLocation className="text-3xl"></GoLocation> Job Title:
              {job.contact_information.address}
            </h3>
          </div>

          <button onClick={handleApplyJob} className="btn btn-primary w-full">
            Apply Now
          </button>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default JobDetails;
