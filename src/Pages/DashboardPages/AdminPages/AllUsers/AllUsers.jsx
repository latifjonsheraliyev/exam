import React from "react";
import NavigationBreadcrumb from "../../../../Components/Shared/NavigationBreadcrumb/NavigationBreadcrumb";
import { RiDeleteBinLine } from "react-icons/ri";
import useAxiosSecure from "../../../../Components/Hooks/useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import userPhoto from '../../../../assets/images/logo/user-profile-icon-free-vector.jpg'
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure()

  // Get all users
  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const result = await axiosSecure.get('/users')
      return result.data
    }
  })
  // Make admin
  const handleMakeAdmin = async (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be make admin!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/admin/${user._id}`)
          .then((res) => {
            console.log(res.data)
            if (res.data.modifiedCount > 0) {
              refetch();
              toast.success('Successfully Make admin')
            }
          })

      }
    });

  }

  // delete users
  const handleDeleteUser = async (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be delete user!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/delete/${user._id}`)
          .then((res => {
            if (res?.data?.deletedCount > 0) {
              refetch()
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          }))

      }
    });
  }
  return (
    <div>
      {/* Navigation */}
      <NavigationBreadcrumb></NavigationBreadcrumb>
      {/* content */}
      <div className="flex justify-evenly lg:gap-96  my-4">
        <h1 className="text-4xl ">All Users </h1>
        <h1 className="text-4xl lg:ml-48 ">Total  Users : <span className="text-red-500 font-semibold">{users.length}</span></h1>
      </div>
      <div className="overflow-x-auto ">
        <table className="table lg:w-full font-semibold">
          {/* head */}
          <thead >
            <tr className="bg-gradient-to-r from-blue-500 py-20 to-purple-600 text-white" >
              <th></th>
              <th className="text-xl font-semibold">Name</th>
              <th className="text-xl font-semibold">Email</th>
              <th className="text-xl font-semibold">Role</th>
              <th className="text-xl font-semibold">Action</th>
            </tr>
          </thead>
          <tbody >
            {/* row 1 */}
            {
              users?.map((user, index) =>
                <tr key={user._id}>
                  <th>
                    {index + 1}
                  </th>
                  <td>

                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={user?.photoURL || `${userPhoto}`}
                            alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{user?.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {user?.email}
                  </td>
                  <td>
                    {
                      user?.role === 'admin' ? 'Admin' : <button
                        onClick={() => handleMakeAdmin(user)}
                        className="btn  btn-lg bg-orange-500">
                        <FaUsers className="text-white text-xl " />
                      </button>
                    }
                  </td>
                  <th>
                    <button
                      onClick={() => handleDeleteUser(user)}
                      className="btn btn-ghost btn-lg bg-red-500">
                      <RiDeleteBinLine className="text-white text-xl" />
                    </button>
                  </th>
                </tr>
              )
            }


          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;

