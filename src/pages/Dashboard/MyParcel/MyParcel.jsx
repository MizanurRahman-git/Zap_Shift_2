import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { PiListMagnifyingGlassBold } from "react-icons/pi";
import { CiEdit } from "react-icons/ci";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const MyParcel = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: myParcels = [], refetch } = useQuery({
    queryKey: ["myParcels", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user?.email}`);
      return res.data;
    },
  });

  const handleParcelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed)
        axiosSecure.delete(`/parcels/${id}`).then((res) => {
          if (res.data.deletedCount) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your Parcel has been deleted.",
              icon: "success",
            });
          }
        });
    });
  };

  return (
    <div>
      <h2>This is My parcel page: {myParcels?.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Cost</th>
              <th>Payment Stutus</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {myParcels.map((parcel, index) => (
              <tr key={parcel._id}>
                <th>{index + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>{parcel.cost}</td>
                <td>Blue</td>
                <td>
                  <button className="btn btn-square hover:bg-primary">
                    <PiListMagnifyingGlassBold />
                  </button>
                  <button className="btn btn-square hover:bg-primary mx-3">
                    <CiEdit />
                  </button>
                  <button
                    onClick={() => handleParcelDelete(parcel._id)}
                    className="btn btn-square hover:bg-primary"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyParcel;
