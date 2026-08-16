import { Link } from "react-router";

const PaymentCancelled = () => {
    return (
        <div className="mt-3.5 text-center space-y-9">
            <h2 className="text-5xl">Sorry to Your Payment Cancelled...</h2>
            <Link  to='/dashboard/my-parcels' className="btn bg-primary">Please Try Again</Link>
        </div>
    );
};

export default PaymentCancelled;