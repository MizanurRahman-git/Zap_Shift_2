import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useRef, useState } from "react";

const AssignRider = () => {
  const axiosSecure = useAxiosSecure();
  const riderModalRef = useRef()
  const [parcelInfo, setParcelInfo] = useState(null)
  console.log(parcelInfo);
  const { data: parcels = [] } = useQuery({
    queryKey: ["parcel", "Pending-Pickup"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        "/parcels?pandingPickup=Pending-Pickup",
      );
      return res.data;
    },
  });

  const handleRiderModal = (parcel) => {
    setParcelInfo(parcel)
    riderModalRef.current.showModal()
  }
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
            {parcels.map((parcel, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>{parcel.cost}</td>
                <td>{parcel.createdAt}</td>
                <td>
                  {parcel.senderDistrict} <p>{parcel.senderEmail}</p>
                </td>
                <td>
                  {parcel.receiverDistrict} <p>{parcel.receiverEmail}</p>
                </td>
                <td>
                  <button onClick={() => handleRiderModal(parcel)} className="btn bg-primary">Find Rider</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <dialog ref={riderModalRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AssignRider;
