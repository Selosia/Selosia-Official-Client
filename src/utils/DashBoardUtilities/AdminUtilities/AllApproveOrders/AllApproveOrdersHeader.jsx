import  { useContext, useState } from 'react';
import { AuthContext } from '../../../../context/AuthProvider';
import '../../../../css/SearchBarResultDropdown.css'

const AllApproveOrdersHeader = ({orderList}) => {

    
  const { setFilteredData, filteredData,  setHasSearched } = useContext(AuthContext);

  const [value, setValue] = useState()

  //! Data Query
  function handleFilter(event) {

    setValue(event.target.value)
  }


  const handleSubmit = (data) => {
    setValue(data)
    console.log('search', data);

      const filtered = orderList?.filter((item) => {
      return (
        item?.projectName?.toLowerCase().includes(data)
      );
    });
    setFilteredData(filtered);
    console.log(filtered);
    setHasSearched(true);
  }


    return (
        <div className="flex justify-between mx-5">
        <div className="space-y-2">
          <h1 className="text-2xl font-serif font-semibold">Selosia</h1>
          {
            filteredData?.length !== 0 ?
          <p>Search result : {filteredData?.length}</p>
          :
          <p>Per-Page new order : {orderList?.length}</p>
          }
        </div>
  
        {/* Search Box */}
        <div>
        <div className="relative hidden sm:block text-[#26BFC7]">
          <label className="sr-only" htmlFor="search"> Search </label>
            <input
            className="h-12 w-full rounded-lg focus:outline-none  bg-white border border-[#26BFC7] pe-10 ps-4 text-sm shadow-sm sm:w-56"
            id="search"
            type="search"
            placeholder="Search project name..."
            value={value}
            onChange={handleFilter}
            />
  
            <button
            onClick={()=>handleSubmit(value)}
            type="button"
            className="absolute end-1 top-6 -translate-y-1/2 rounded-md bg-transparent p-2 text-[#26BFC7] transition hover:text-[#54d1af]"
            >
              <span className="sr-only">Search</span>
              <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
              </svg>
            </button>
        </div>
        <div className="search-dropdown">
          {
            orderList?.filter((item)=>{
            const searchItem = value?.toLowerCase();
            const categoryItems = item?.projectName?.toLowerCase();

            return searchItem && categoryItems?.startsWith(searchItem) && item?.projectName !== searchItem;
            }
            )
            ?.map((item, idx)=>
            <div key={idx} className='search-dropdown-row'
            onClick={()=> handleSubmit(item?.projectName)}
            >
              {item.projectName}
            </div>
            )
          }
        </div>
        </div>
      </div>
    );
};

export default AllApproveOrdersHeader;