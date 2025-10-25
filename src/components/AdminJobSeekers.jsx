import React, { useEffect, useState } from "react";
import donut from "../Assets/img/Donut and Shadow.png";

const AdminJobSeekers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jobestate-23.onrender.com/api/users", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) throw new Error(`Request failed with status ${res.status}`);

        const responseData = await res.json();
        console.log("✅ API Response:", responseData);

        // Determine where user data actually lives
        const data = Array.isArray(responseData)
          ? responseData
          : responseData.data || responseData.users || [];

        if (!Array.isArray(data)) throw new Error("Invalid data format received");

        // Filter only regular users
        const filteredUsers = data.filter(
          (u) => u.role && u.role.toLowerCase() === "user"
        );

        setUsers(filteredUsers);
      } catch (err) {
        console.error("❌ Fetch error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading)
    return <p className="text-center mt-10 text-gray-600">Loading users...</p>;

  if (error)
    return (
      <p className="text-center mt-10 text-red-500">
        Error fetching users: {error}
      </p>
    );

  if (!users.length)
    return (
      <p className="text-center mt-10 text-gray-600">
        No users found or data not available.
      </p>
    );

  return (
    <div className="mt-20 md:mt-32 w-full py-7 px-[20px] md:px-[50px] lg:px-[135px]">
      <div className="flex justify-between w-full items-center bg-white">
        <h1 className="text-4xl font-semibold">All Users</h1>
        <img src={donut} alt="" className="hidden md:flex" />
      </div>

      <div className="overflow-x-auto mt-10 rounded-md shadow-lg">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th className="border px-4 py-3 text-left">Name</th>
              <th className="border px-4 py-3 text-left">Email</th>
              <th className="border px-4 py-3 text-left">Role</th>
              <th className="border px-4 py-3 text-left">Joined</th>
              <th className="border px-4 py-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id || user.id} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{user.fullName || "N/A"}</td>
                <td className="border px-4 py-2">{user.email || "N/A"}</td>
                <td className="border px-4 py-2 capitalize">
                  {user.role || "N/A"}
                </td>
                <td className="border px-4 py-2">
                  {user.createdAt
                    ? new Date(user.createdAt).toLocaleDateString()
                    : "—"}
                </td>
                <td className="border px-4 py-2 text-green-600 font-medium">
                  Active
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminJobSeekers;
