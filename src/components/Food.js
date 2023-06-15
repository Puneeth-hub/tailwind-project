import React, { useState } from 'react'
import {data} from '../data/data'
import { Dna } from 'react-loader-spinner'
const Food = () => {
    // console.log(data)
    const [foods, setFoods] = useState(data)
    const [loading, setLoading] = useState(false)
    // filter type burger,pizza etc 

    const filterType = (category)=>{
        setLoading(true)
        setFoods(
            data.filter((item) =>{
                return item.category === category;
            })
        );
        setTimeout(() =>{
            setLoading(false)
        }, 5000)
        
    }

    //filter by prices 

    const filterPrice = (price) =>{
        setLoading(true)
        setFoods(
            data.filter((item) =>{
                return item.price === price;
            })
        );
        setTimeout(()=>{
            setLoading(false)
        },5000)
        
    }
  return (
    <div className='max-w-[1640px] w-auto px-4 py-12'>
        <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
        {/* Filter Row */} 
        <div>
            {/* Filter Type */}
            <div className='flex flex-col lg:flex-row justify-between'>
              <div>
                <p className='font-bold text-gray-700'>Filter Type</p>
                    <div className='flex justify-between flex-wrap bg-white'>
                        <button onClick={()=> setFoods(data)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-full p-3'>All</button>
                        <button onClick={()=>filterType('burger')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-full p-3'>Burgers</button>
                        <button onClick={()=>filterType('pizza')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-full p-3'>Pizza</button>
                        <button onClick={()=>filterType('salad')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-full p-3'>Salads</button>
                        <button onClick={()=>filterType('chicken')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-full p-3'>Chicken</button>
                    </div>
                </div>
            </div>
            {/* Filter Price */}
            <div >
                <p className='font-bold text-gray-700'>Filter Price</p>
                <div className='flex justify-between max-w-[310px] w-full '>
                    <button onClick={()=>filterPrice("₹")} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-full p-3'>₹</button>
                    <button onClick={()=>filterPrice("₹₹")} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-full p-3'>₹₹</button>
                    <button onClick={()=>filterPrice("₹₹₹")} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-full p-3'>₹₹₹</button>
                    <button onClick={()=>filterPrice("₹₹₹₹")} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-full p-3'>₹₹₹₹</button>
                </div>
            </div>
        </div>
        {/* display foods */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
            {loading ? (
                    <div className='flex justify-center items-center col-span-full'>
                        
                    <Dna
                        visible={true}
                        height="150"
                        width="150"
                        ariaLabel="dna-loading"
                        wrapperStyle={{}}
                        wrapperClass="dna-wrapper"
                        
                    />
                    </div>
                
            ):(
                foods.map((item, index) => (
                    <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
                      <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-t-lg' />
                      <div className='flex justify-between px-2 py-4'>
                        <p className='font-bold'>{item.name}</p>
                        <p>
                          <span className='bg-orange-500 text-white p-1 rounded-full'>{item.price}</span>
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          );
        };
            




            

export default Food