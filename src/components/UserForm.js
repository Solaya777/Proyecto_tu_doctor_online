import React, { useState, useEffect } from 'react';

const UserForm = ({ onSave, userToEdit }) => {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        if (userToEdit) {
            setUsername(userToEdit.username);
            setName(userToEdit.name);
            setLastName(userToEdit.last_name);
            setPhone(userToEdit.phone);
            setPassword('');
        }
    }, [userToEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ username, name, last_name: lastName, password });
        setUsername('');
        setName('');
        setLastName('');
        setPassword('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="First Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required={userToEdit ? false : true}
            />
            <button type="submit">Save</button>
        </form>
    );
};

export default UserForm;