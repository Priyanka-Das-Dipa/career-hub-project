import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center  ">
            <h1>Oops!!</h1><br />
            <Link className="bg-slate-500 p-3 rounded-lg text-white hover:shadow-xl" to="/">Go Back</Link>
        </div>
    );
};

export default ErrorPage;