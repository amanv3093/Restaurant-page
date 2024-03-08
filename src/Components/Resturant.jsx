import React, { useEffect, useState } from 'react';
import Resturantdata from './resturant.json';
import './resturant.css';
import ResturantCard from './ResturantCard';

function Resturant() {
    const [data, setData] = useState(Resturantdata);
    const [ratingData, setRatingData] = useState(0);
    const [searchData, setSearchData] = useState('');
    
    
    const search = (id, e) => {
      if(e===''){
        setData(Resturantdata)
        setSearchData(e);
        console.log("k");

      }else{
        if (id === 'searchValue') {
            setSearchData(e);
        } else {
            setRatingData(e);
        }
        console.log(e);
        
        const filteredData = Resturantdata.filter(elem => {
           return elem.name.toLowerCase().includes(searchData.toLowerCase()) && elem.rating >= ratingData;
        });

        setData(filteredData);
      }
    };

    return (
        <div>
            <div className='input-box'>
                <input type='text' id='searchValue' onChange={e => search(e.target.id, e.target.value)}
                    value={searchData} placeholder='Search restaurants...' />

                <div className='input-InnerBox'>
                    <p>Minimum Rating:</p>
                    <input type='number' id='rating' min='0' max='5' onChange={e => search(e.target.id, e.target.value)} value={ratingData}  />
                </div>
            </div>
            <main>
                {data.map(elem => (
                    <ResturantCard key={elem.id} value={elem} />
                ))}
            </main>
        </div>
    );
}

export default Resturant;
