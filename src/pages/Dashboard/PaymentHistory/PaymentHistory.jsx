import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const PaymentHistory = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: paymentInfo = [] } = useQuery({
    queryKey: ["payment", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user?.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <h2>Total: {paymentInfo?.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Parcel Name</th>
              <th>Amount</th>
              <th>Transaction ID</th>
              <th>Tracking ID</th>
            </tr>
          </thead>
          <tbody>
            {
                paymentInfo.map((payment, index) => <tr key={payment._id}>
              <th>{index + 1}</th>
              <td>{payment?.parcelName}</td>
              <td>{payment?.cost} /-</td>
              <td>{payment.paymentStatus === "paid" ? payment?.transactionId : "Please Pay First"}</td>
              <td>{payment.paymentStatus === "paid" ? payment?.trackingId : "Please Pay First"}</td>
            </tr>)
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
