import React,{useState} from 'react';

function Header() {
  return (

    <header className="flex justify-between items-center py-4 px-8 sticky top-0 bg-white z-10">

      <div className="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-2" alt="logo" />
        <span className="text-xl font-bold text-gray-800 font-bold text-2xl">GeekFoods</span>
      </div>

      <div>
        <ul className="flex gap-x-2.5 font-font-bold">
          <li className="mr-4 hover:text-blue-600 cursor-pointer ">Home </li>
          <li className="mr-4 hover:text-blue-600 cursor-pointer">Quote</li>
          <li className="mr-4 hover:text-blue-600 cursor-pointer text-blue-600">Restaurants</li>
          <li className="mr-4 hover:text-blue-600 cursor-pointer">Foods</li>
          <li className="mr-4 hover:text-blue-600 cursor-pointer" >Contact</li>
        </ul>
      </div>

      <button className="bg-blue-500  text-white font-bold py-2 px-4 rounded" >Get started</button>

    </header>
  );
}

export default Header;
