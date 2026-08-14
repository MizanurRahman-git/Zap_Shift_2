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
  if (isLoading) {
    return (
      <div>
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }
  return (
    <div>
      <h2>
        Parcel Name:{" "}
        <span className="text-blue-600 underline">
          {singleParcel?.parcelName}
        </span>{" "}
      </h2>
    </div>
  );
};

export default Payment;
