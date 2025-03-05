import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Employe() {
    const [employes, setEmployes] = useState([]);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [updateId, setUpdateId] = useState(null);

    useEffect(() => {
        const fetchEmployes = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/getEmp');
                setEmployes(response.data);
            } catch (error) {
                console.error('Error fetching employes:', error);
            }
        };

        fetchEmployes();
    }, []);

    const handleInsert = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/insertEmploye', { name, surname });
            setEmployes([...employes, response.data]);
            setName('');
            setSurname('');
        } catch (error) {
            console.error('Error inserting employe:', error);
        }
    };

    const handleUpdate = async () => {
        try {
            const response = await axios.put(`http://localhost:5000/api/empUpdate/${updateId}`, { name, surname });
            setEmployes(employes.map(emp => emp.id === updateId ? response.data : emp));
            setName('');
            setSurname('');
            setUpdateId(null);
        } catch (error) {
            console.error('Error updating employe:', error);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Employees List</h1>
            <ul className="list-disc pl-5 mb-4">
                {employes.map((employe) => (
                    <li key={employe.id} className="mb-2">
                        {employe.name} {employe.surname}
                        <button
                            className="ml-2 text-blue-500 hover:underline"
                            onClick={() => {
                                setName(employe.name);
                                setSurname(employe.surname);
                                setUpdateId(employe.id);
                            }}
                        >
                            Edit
                        </button>
                    </li>
                ))}
            </ul>
            <div className="bg-gray-100 p-4 rounded shadow-md">
                <h2 className="text-xl font-semibold mb-2">{updateId ? 'Update Employe' : 'Add Employe'}</h2>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border p-2 mb-2 w-full"
                />
                <input
                    type="text"
                    placeholder="Surname"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                    className="border p-2 mb-2 w-full"
                />
                <button
                    onClick={updateId ? handleUpdate : handleInsert}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    {updateId ? 'Update' : 'Add'}
                </button>
            </div>
        </div>
    );
}

export default Employe;