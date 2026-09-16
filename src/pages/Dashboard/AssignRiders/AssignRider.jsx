import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useRef, useState } from "react";

const AssignRider = () => {
  const axiosSecure = useAxiosSecure();
  const riderModalRef = useRef();
  const [parcelInfo, setParcelInfo] = useState(null);

  const { data: parcels = [] } = useQuery({
    queryKey: ["parcel", "Pending-Pickup"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        "/parcels?pandingPickup=Pending-Pickup",
      );
      return res.data;
    },
  });

  const { data: riders = [] } = useQuery({
    queryKey: ["riders", parcelInfo?.senderDistrict, "available"],
    enabled: !!parcelInfo,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/riders/${parcelInfo?.senderDistrict}/available`,
      );
      return res.data;
    },
  });

  const handleRiderModal = (parcel) => {
    setParcelInfo(parcel);
    riderModalRef.current.showModal();
  };
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
                  <button
                    onClick={() => handleRiderModal(parcel)}
                    className="btn bg-primary"
                  >
                    Find Rider
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Rider Modal */}
      <dialog
        ref={riderModalRef}
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Total Available Riders: {riders.length}
          </h3>
          <p className="py-2">
            <div className="aura text-orange-600 bg-yellow-200">
              <div className="card bg-base-100 text-base-content">
                <div className="card-body">
                  <p>Please Select Any Rider For The Parcel.</p>
                </div>
              </div>
            </div>
          </p>
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Email or Phone</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {riders.map((rider, index) => (
                  <tr key={rider._id}>
                    <th>{index + 1}</th>
                    <td>{rider.riderName}</td>
                    <td>
                      <p>{rider.riderEmail}</p> <p>{rider.phoneNumber}</p>
                    </td>
                    <td>
                      <button className="btn bg-primary">Assign</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <div className="aura">
                <button className="btn">Close</button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AssignRider;
