import { useEffect } from "react";
import { Link, useSearchParams } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentSuccess = () => {
    const [searchParams] = useSearchParams()
    const sessionId = searchParams.get("session_id")
    const axiosSecure = useAxiosSecure()
    
    useEffect(()=>{
        if(sessionId){
            axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
            .then(res=>{
                console.log(res);
            })
        }
    },[sessionId, axiosSecure])
    return (
        <div className="text-center mt-3.5 space-y-6">
            <h2 className="text-5xl">Payment Successful. Thank you</h2>
            <Link to='/' className="btn bg-primary">Back to Home</Link>
        </div>
    );
};

export default PaymentSuccess;