import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaUserShield } from "react-icons/fa";
import { FiShieldOff } from "react-icons/fi";
import Swal from "sweetalert2";

const UsersManagement = () => {
  const axiosSecure = useAxiosSecure();
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
      return res.data;
    },
  });

  const updateUserRole = (id, role, name) => {
    const roleInfo = { user_Role: role };
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm",
    }).then((result) => {
      if (result.isConfirmed)
        axiosSecure
          .patch(`/users/${id}`, roleInfo)
          .then((res) => {
            if (res.data.modifiedCount) {
              refetch();
              Swal.fire({
                title: `${name} Marked As An ${role}!`,
                icon: "success",
                draggable: true,
              });
            }
          })
          .catch(() => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
            });
          });
    });
  };

  const forAdminUser = (user) => {
    updateUserRole(user._id, "Admin", user.name);
  };

  const forNormalUser = (user) => {
    updateUserRole(user._id, "User", user.name);
  };
  return (
    <div>
      <h1>All Users:{users.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={user.photoURL} alt="User Image" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                      <div className="text-sm opacity-50">{user.user_Role}</div>
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>
                  {user.user_Role === "Admin" ? (
                    <button
                      onClick={() => forNormalUser(user)}
                      className="btn bg-red-700"
                    >
                      <FiShieldOff />
                    </button>
                  ) : (
                    <button
                      onClick={() => forAdminUser(user)}
                      className="btn bg-green-700"
                    >
                      <FaUserShield />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersManagement;
