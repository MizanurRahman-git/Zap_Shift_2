import { Link } from "react-router";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";

const AdminRouter = ({children}) => {
  const { loading } = useAuth();
  const { userRole, isLoading } = useRole();

  if (loading || isLoading) {
    return (
      <div>
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  if(userRole.user_Role !== "Admin"){
    return <div className="text-center space-y-5">
        <h1 className="font-bold text-4xl">Opps, Sorry You are not allow for this page!</h1>
        <Link to='/' className="btn bg-primary text-xl">Please go back to Home</Link>
    </div>
  }
  return children;
};

export default AdminRouter;
