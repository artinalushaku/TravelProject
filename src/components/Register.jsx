import React, { useState } from 'react';
import axios from 'axios';


function Register() {
  

  return (

    <><div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Regjistrohu</h2>
        <form >
          {['firstName', 'lastName', 'number', 'email', 'username'].map((field, index) => (
            <div className="mb-5" key={index}>
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor={field}>
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                type={field === 'number' ? 'tel' : field === 'email' ? 'email' : 'text'}
                id={field}
                name={field}
                
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder={`Shkruani ${field}`}
                required />
            </div>
          ))}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
             
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Shkruani password tuaj"
              required />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-200 ease-in-out"
          >
            Regjistrohu
          </button>
        </form>
       
      </div>
    </div></>
  );
};

export default Register;
