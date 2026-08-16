import { Link } from "react-router";

const PaymentSuccess = () => {
    return (
        <div className="text-center mt-3.5 space-y-6">
            <h2 className="text-5xl">Payment Successful. Thank you</h2>
            <Link to='/' className="btn bg-primary">Back to Home</Link>
        </div>
    );
};

export default PaymentSuccess;