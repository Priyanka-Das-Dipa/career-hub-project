import { GoLocation } from "react-icons/go";
import { AiFillDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;

  return (
    <div>
      <div className="card card-compact bg-base-100 border ">
        <figure className="pt-5">
          <img src={logo} alt="Shoes" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <div>
            <button className="px-5 py-2 font-semibold border rounded mr-4 text-sky-600">
              {remote_or_onsite}
            </button>
            <button className="px-5 py-2 font-semibold border rounded text-sky-600">
              {job_type}
            </button>
          </div>
          <div className="flex gap-8">
            <h2 className="flex gap-2">
              <GoLocation className="text-xl"></GoLocation>
              {location}
            </h2>
            <h2 className="flex gap-2 justify-center items-center">
              <AiFillDollarCircle className="text-2xl"></AiFillDollarCircle>{" "}
              {salary}
            </h2>
          </div>
          <div className="card-actions">
            <Link to={`/job/${id}`}>
              <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
