import React from 'react';

const Search = ({onChange}) => {
   
        return (
            <form className='mb-4 ' >   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative flex justify-center">
       
        <input onChange={onChange} type="text" id="default-search" class="bg-white border w-[60%] text-black placeholder-black placeholder-font-bold text-lg  rounded-lg focus:ring-green-500 focus:border-green-500 block mr-2 p-2.5 dark:bg-green-100 dark:border-green-400" placeholder="Search for your favorite game" />
       
    </div>
</form>
        );
    }


export default Search;