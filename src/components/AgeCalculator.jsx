import React, { useState } from 'react';

function AgeCalculator() {
  const [birthDate, setBirthDate] = useState('');
  const [birthMonth, setBirthMonth] = useState('');
  const [birthYear, setBirthYear] = useState('');

  const calculateAge = () => {
    if (birthDate && birthMonth && birthYear) {
      const today = new Date();
      const userBirthDate = new Date(birthYear, birthMonth - 1, birthDate);
      const ageInMilliseconds = today - userBirthDate;
      const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
      return Math.floor(ageInYears);
    }
    return null;
  };

  const handleOpenModal = () => {
    const age = calculateAge();
    if (age !== null) {
      document.getElementById('my_modal_1').showModal();
    }
  };

  return (
    <div className='h-screen bg-gradient-to-tr from-purple-500 to-white  flex flex-col items-center justify-center'>
        <div className='bg-purple-700 bg-opacity-30 shadow-2xl rounded-lg backdrop-blur-2xl px-5 flex items-center gap-7 py-8 flex-col'>
      <h1 className='font-firaSans text-4xl text-center  text-black font-bold'>Age Calculator</h1>
      <div className='flex items-center justify-center gap-5 flex-row backdrop-blur-lg text-black p-5 rounded-lg'>
        <input
          type="number"
          placeholder="Day"
          onChange={(e) => setBirthDate(e.target.value)}
          className='bg-white text-black border-[3px] shadow-xl py-1 px-3 text-xl font-firaSans w-[110px] border-grey-300 rounded-md '
        />
        <input
          type="number"
          placeholder="Month"
          onChange={(e) => setBirthMonth(e.target.value)}
          className='bg-white text-black border-[3px] shadow-xl py-1 px-3 text-xl font-firaSans w-[110px] border-grey-300 rounded-md '
        />
        <input
          type="number"
          placeholder="Year"
          onChange={(e) => setBirthYear(e.target.value)}
          className='bg-white text-black border-[3px] shadow-xl py-1 px-3 text-xl font-firaSans w-[110px] border-grey-300 rounded-md '
        />
      </div>
        <button 
              className=" px-3 py-1 text-xl bg-purple-300  hover:bg-white transition ease duration-500  text-black font-firaSans border-2 rounded-full border-purple-900"
              onClick={handleOpenModal}>Calculate</button>
      <Modal age={calculateAge()} />
      </div>
    </div>
  );
}

function Modal({ age }) {
  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <h3 className="font-firaSans text-xl">Greetings!</h3>
        {age !== null && (
          <p className="py-4 font-overpass font-bold text-lg">Your age is {age} years.</p>
        )}
        <div className="modal-action">
          <form method="dialog">
            <button
              className=" px-3 py-1 text-lg bg-purple-300 hover:bg-purple-500 hover:text-white transition ease duration-500  text-black font-firaSans border-2 rounded-full border-slate-600"
              onClick={() => document.getElementById('my_modal_1').close()}
            >
              Thanks!
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}

export default AgeCalculator;
