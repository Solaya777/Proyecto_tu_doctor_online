import React, { useState, useEffect } from 'react';
import { getUsers, createUser, updateUser, deleteUser } from '../../auth-back/services/userService';
import UserForm from './UserForm';

const AdminPanel = () => {
    const [users, setUsers] = useState([]);
    const [userToEdit, setUserToEdit] = useState(null);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const fetchedUsers = await getUsers();
        setUsers(fetchedUsers);
    };

    const handleSave = async (userData) => {
        if (userToEdit) {
            await updateUser(userToEdit._id, userData);
            setUserToEdit(null);
        } else {
            await createUser(userData);
        }
        fetchUsers();
    };

    const handleEdit = (user) => {
        setUserToEdit(user);
    };

    const handleDelete = async (id) => {
        await deleteUser(id);
        fetchUsers();
    };

    return (
        <div>
            <h2>Admin Panel</h2>
            <UserForm onSave={handleSave} userToEdit={userToEdit} />
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user._id}>
                            <td>{user.username}</td>
                            <td>{user.name}</td>
                            <td>{user.last_name}</td>
                            <td>
                                <button onClick={() => handleEdit(user)}>Edit</button>
                                <button onClick={() => handleDelete(user._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminPanel;
