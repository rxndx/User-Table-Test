import React, { useEffect, useState } from 'react';
import { Table, Input } from 'antd';
import { usersSlice, useTypedSelector, useAppDispatch } from '../store/store';

const UserTable: React.FC = () => {
    const dispatch = useAppDispatch();
    const users = useTypedSelector((state) => state.users.list);

    const [filters, setFilters] = useState({
        name: '',
        username: '',
        email: '',
        phone: ''
    });

    useEffect(() => {
        dispatch(usersSlice.fetchItems());
    }, [dispatch]);

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        setFilters({
            ...filters,
            [field]: e.target.value
        });
    };

    const filteredUsers = users.filter((user: { name: string; username: string; email: string; phone: string; }) =>
        user.name.toLowerCase().includes(filters.name.toLowerCase()) &&
        user.username.toLowerCase().includes(filters.username.toLowerCase()) &&
        user.email.toLowerCase().includes(filters.email.toLowerCase()) &&
        user.phone.toLowerCase().includes(filters.phone.toLowerCase())
    );

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            filterDropdown: () => (
                <Input
                    placeholder="Search name"
                    value={filters.name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFilterChange(e, 'name')}
                />
            ),
        },
        {
            title: 'Username',
            dataIndex: 'username',
            key: 'username',
            filterDropdown: () => (
                <Input
                    placeholder="Search username"
                    value={filters.username}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFilterChange(e, 'username')}
                />
            ),
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            filterDropdown: () => (
                <Input
                    placeholder="Search email"
                    value={filters.email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFilterChange(e, 'email')}
                />
            ),
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
            filterDropdown: () => (
                <Input
                    placeholder="Search phone"
                    value={filters.phone}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFilterChange(e, 'phone')}
                />
            ),
        },
    ];

    return (
        <Table
            dataSource={filteredUsers}
            columns={columns}
            rowKey="id"
        />
    );
};

export default UserTable;