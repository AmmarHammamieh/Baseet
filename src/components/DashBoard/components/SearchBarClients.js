import axios from "axios";
import React, { useEffect, useState } from "react";

import { AiFillCloseCircle } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addCategory, selectCategories } from "../../../GlobalData/CategorySlice";
import { addProduct, selectProducts } from "../../../GlobalData/ProductSlice";



function SearchBarClients({ placeholder ,SetClients ,Clients }) {
  const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    const [Data, SetData] = useState([]);
    
    const dispatch = useDispatch();


    useEffect(() => {
        getClients();
  
    }, [Clients])
  
 
//// change while searchword change
async   function getClients() {
    await axios.get(`http://127.0.0.1:8000/api/DashBoard/Clients`)
       .then(res => {
        SetData(res.data);
       })
    
     }

  const handleFilter = (event) => {
      const searchWord = event.target.value;

      const newFilter = [];
      setWordEntered(searchWord);
   
          newFilter[newFilter.length] = Data.filter((value) => {
              return value.name.toLowerCase().includes(searchWord.toLowerCase());
          });
      
    if (searchWord === "") {
        setFilteredData([]); 
        SetClients(Data);
        
    } else {
        setFilteredData(newFilter);
        SetClients(newFilter[0]);
        console.log(Clients);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
      setWordEntered("");
      SetClients(Data);

      dispatch(addProduct(Data));
      
  };

  return (
    <div className="w-full">
      <div className="flex w-full">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
          className="p-2  w-full text-right  focus:outline-none px-4 bg-[#FAF9FB] rounded-full border-0 "
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <AiOutlineSearch className="mt-3 mr-3"/>
          ) : (
            <AiFillCloseCircle id="clearBtn" className="mt-3 mr-3" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {/* {filteredData[0].map((value) => {
            return ( 
                <a className="dataItem" href={value.link} target="_blank">
                <p>{value.name} </p>
              </a>
            );
          })} */}
        </div>
      )}
    </div>
  );
}

export default SearchBarClients;