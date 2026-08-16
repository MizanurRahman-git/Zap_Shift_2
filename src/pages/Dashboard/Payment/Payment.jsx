import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Payment = () => {
  const axiosSecure = useAxiosSecure();
  const { parcelId } = useParams();

  const { data: singleParcel = [], isLoading } = useQuery({
    queryKey: ["parcel", parcelId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcel/${parcelId}`);
      return res.data;
    },
  });

  const handlePayment = async() => {
    const paymentInfo = {
      cost:singleParcel.cost,
      parcelName: singleParcel.parcelName,
      senderEmail:singleParcel.senderEmail,
      parcelId:singleParcel._id
    }

    const res = await axiosSecure.post('/create-checkout-session', paymentInfo);

    window.location.href = res.data.url
  }

  if (isLoading) {
    return (
      <div>
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }
  return (
    <div className="text-center mt-3.5 space-y-6">
      <h2 className="text-5xl">
        Please Pay ${singleParcel?.cost} for {singleParcel?.parcelName}
      </h2>
      <button onClick={handlePayment} className="btn bg-primary text-2xl">Pay</button>
    </div>
  );
};

export default Payment;
