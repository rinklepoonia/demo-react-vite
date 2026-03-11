import React, { useState } from 'react'

const Services = () => {
   const [search, setSearch] = useState("");
  const SEARCH_ITEMS_DATA = [
    { title : "Specialized Translations" , subtitle : "Industry-specific translations by subject matter experts. We understand the nuances of technical, legal, medical, and financial terminology to ensure accuracy and context."},
    { title : "Certified Translations" , subtitle : "Official translations with certification for legal validity. Perfect for immigration "},
    { title : "AI-Powered Translations" , subtitle : "Leverage cutting-edge AI technology combined with human expertise for rapid, "},
    { title : "AI-Powered Translations" , subtitle : "Leverage cutting-edge AI technology combined with human expertise for rapid, "},
  ]

  const filterItem = SEARCH_ITEMS_DATA.filter((data) => 
     `${data.title} ${data.subtitle}`.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className='bg-red-500 min-h-screen py-25'>
<div className='max-w-[1320px] mx-auto px-5'>

  
  <input onChange={(e) => setSearch(e.target.value)} type="search" name="seach" id="" placeholder='search here' className='border border-white rounded h-[50px] outline-0 p-2' />
  <div className='grid grid-cols-3 items-center gap-10 mt-10'>
  {filterItem.length > 0 ? (
      filterItem.slice(0,3).map((data) => (
      <div className='border border-white flex flex-col gap-5 p-2 min-h-[250px]'>
        <p>{data.title}</p>
        <p>{data.subtitle}</p>
      </div>
    )) 
  ) : (
    <p>no matching data</p>
  )
  }
  </div>


</div>
    </div>
  )
}

export default Services