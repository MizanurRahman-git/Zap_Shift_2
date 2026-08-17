import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const [paymentinfo, setPaymentInfo] = useState({});
  const sessionId = searchParams.get("session_id");
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .patch(`/payment-success?session_id=${sessionId}`)
        .then((res) => {
          setPaymentInfo({
            trackingId: res.data.trackingId,
            transactionId: res.data.transactionId,
          });
        });
    }
  }, [sessionId, axiosSecure]);
  return (
    <div className="text-center mt-3.5 space-y-6">
      <h2 className="text-5xl">Payment Successful. Thank you</h2>
      <p>
        Your Transactions ID:{" "}
        <span className="font-bold text-blue-500">
          {paymentinfo.transactionId}
        </span>{" "}
      </p>
      <p>
        Your Tracking ID:{" "}
        <span className="font-bold text-blue-500">
          {paymentinfo.trackingId}
        </span>{" "}
      </p>
      <Link to="/dashboard/my-parcels" className="btn bg-primary">
        Back to Parcels
      </Link>
    </div>
  );
};

export default PaymentSuccess;
