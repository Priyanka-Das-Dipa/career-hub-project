import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  // data load from root file jobs.json

  const [jobs, setJobs] = useState([]);

  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className="">
      <div className="text-center mb-10">
        <h2 className="text-5xl ">Featured Job : {jobs.length}</h2>
        <p className="text-xl ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          aspernatur ad tenetur in inventore harum eius numquam dolor facere
          totam explicabo molestias quas officiis ipsum voluptates asperiores,
          sunt delectus quasi?
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6 ">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <div className={dataLength === jobs.length && "hidden"}>
          <button
            className="btn btn-primary "
            onClick={() => setDataLength(jobs.length)}
          >
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
