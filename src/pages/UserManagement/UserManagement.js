import { useEffect, useState } from "react";
import { getManyUsers } from "../../apis/user.api";
import { toast } from "react-toastify";
import { CreateUserModal } from "./CreateUserModal";

export const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [showCreateUserModal, setShowCreateUserModal] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const res = await getManyUsers({
                    page: 1,
                    limit: 10,
                });
                setUsers(res.data);
            } catch (error) {
                toast.error(error);
            }
        })();
    }, []);

    return (
        <div>
            <h1 className="fw-bold fs-2">User Management</h1>

            <div className="d-flex justify-content-end">
                <button
                    className="my-button-74 mr-2"
                    onClick={() => setShowCreateUserModal(true)}
                >
                    Add new user
                </button>
                <CreateUserModal
                    show={showCreateUserModal}
                    onHide={() => setShowCreateUserModal(false)}
                ></CreateUserModal>
            </div>

            <div className="mt-4">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-white uppercase bg-red-700">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Full name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Phone
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Role
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Created At
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr
                                key={index}
                                className="bg-white border-b border-gray-700 text-gray-700 hover:text-red-800"
                            >
                                <td className="px-6 py-4">{user.id}</td>
                                <td className="px-6 py-4">{user.fullName}</td>
                                <td className="px-6 py-4">{user.email}</td>
                                <td className="px-6 py-4">{user.phone}</td>
                                <td className="px-6 py-4">
                                    <span className="fw-bold">
                                        {user.roles}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    {new Date(
                                        user.createdAt
                                    ).toLocaleDateString()}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <a
                                        href="#"
                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                        Edit
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
