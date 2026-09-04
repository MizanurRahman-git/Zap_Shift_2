import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AssignRider = () => {
  const axiosSecure = useAxiosSecure();
  const { data: parcels = [] } = useQuery({
    queryKey: ["parcel", "Pending-Pickup"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        "/parcels?pandingPickup=Pending-Pickup",
      );
      return res.data;
    },
  });
  return (
    <div>
      <h2>Total Pending Parcels:{parcels.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Cost</th>
              <th>Parcel CreatedAt</th>
              <th>Pickup District</th>
              <th>Delivery District</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
                parcels.map((parcel, index)=><tr key={index}>
              <th>{index + 1}</th>
              <td>{parcel.parcelName}</td>
              <td>{parcel.cost}</td>
              <td>{parcel.createdAt}</td>
              <td>{parcel.senderDistrict} <p>{parcel.senderEmail}</p></td>
              <td>{parcel.receiverDistrict} <p>{parcel.receiverEmail}</p></td>
              <td>
                <button className="btn">View Detais</button>
              </td>
            </tr>)
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssignRider;
