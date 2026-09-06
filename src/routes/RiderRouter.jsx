import { Link } from "react-router";
import useAuth from "../hooks/useAuth";
import useStatus from "../hooks/useStatus";

const RiderRouter = ({ children }) => {
  const { loading } = useAuth();
  const { rider, isLoading } = useStatus();

  if (loading || isLoading) {
    return (
      <div>
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  if (rider.status !== "Approved") {
    return (
      <div className="text-center space-y-5">
        <h1 className="font-bold text-4xl">
          Opps, Sorry You are not allow for this page!
        </h1>
        <Link to="/" className="btn bg-primary text-xl">
          Please go back to Home
        </Link>
      </div>
    );
  }
  
  return children;
};

export default RiderRouter;
