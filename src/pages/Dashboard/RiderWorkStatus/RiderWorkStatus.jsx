import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const RiderWorkStatus = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit } = useForm();

  const handleStatus = (data) => {
    const status = data.workStatus;
    const riderWorkStatus = { workStatus: status };
    Swal.fire({
      title: "Please Update Your Work Status",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Update",
    }).then((result) => {
      if (result.isConfirmed)
        axiosSecure
          .patch(`/rider/${user?.email}`, riderWorkStatus)
          .then((res) => {
            if (res.data.modifiedCount) {
              Swal.fire({
                title: "Updated!",
                text: "Your status has been updated.",
                icon: "success",
              });
            }
          })
          .catch(() => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
              footer: '<a href="#">Why do I have this issue?</a>',
            });
          });
    });
  };
  return (
    <div className="text-center mt-5">
      <h1 className="font-bold text-5xl text-emerald-500">
        Please Set Your Work Status...
      </h1>
      <form
        onSubmit={handleSubmit(handleStatus)}
        className="mt-2 card-body items-center"
      >
        <select
          {...register("workStatus")}
          defaultValue="Pick a status"
          className="select border-yellow-400"
        >
          <option disabled={true}>Pick a status</option>
          <option>Available</option>
          <option>In-Transite</option>
          <option>Unavailable</option>
        </select>
        <button className="btn bg-primary w-30">Submit</button>
      </form>
    </div>
  );
};

export default RiderWorkStatus;
