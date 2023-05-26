"use client";
import React from 'react';
import Image from "next/image";
import {MagnifyingGlassIcon, UserCircleIcon} from "@heroicons/react/24/solid";
import Avatar from 'react-avatar';
import {useBoardStore} from "@/store/BoardStore";

const Header = ({}) => {
  const [searchString, setSearchString] = useBoardStore((state) => [state.searchString, state.setSearchString]);



  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-pink-400 to-[#0055D1] rounded-md filter blur-3xl opacity-50 -z-50"></div>
        <Image
          src="https://links.papareact.com/c2cdd5"
          alt={"header"}
          width={300}
          height={100}
          className="w-44 md:w-56 pb-10 md:pb-0 object-contain cursor-pointer"
        />
        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
          <form className="flex items-center space-x-5 bg-white rounded-md p-3 shadow-md flex-1 md:flex-initial">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400"/>
            <input type="text" value={searchString} onChange={(e) => setSearchString(e.target.value)} className="flex-1 outline-none p-2" placeholder={'Search'}/>
            <button type={'submit'} hidden>Search</button>
          </form>
          {/*@ts-ignore*/}
          <Avatar name="Rokas Rudzianskas" round color="#0055D1" size={'50'} />
        </div>
      </div>
      <div className="flex items-center justify-center px-5 py-2 md:py-5">
        <p className="flex items-center text-sm font-light pr-5 rounded-xl w-fit shadow-xl bg-white italic max-w-3xl text-[#0055D1] p-5">
          <UserCircleIcon className="inline-block h-10 w-10 text-[#0055D1] mr-1" />
          GPT is summarizing the text for you in a few seconds and you can use it for free. Just sign up and start using it.
        </p>
      </div>
    </header>
  );
};

export default Header;
// by Rokas with ❤️
