import React, { useState } from 'react';
interface IExerciseItemData {
  image: string
  name: string
  id: number
}
const ExerciseItem = ({ item }: { item: IExerciseItemData}) => {  
    return (
      <>
        <div className="">
          <div className="w-ful p-[50%] relative">
          <img src={item.image} alt={item.name} className="w-full h-full absolute top-0 left-0" />
          </div>
          <p className="text-center">{item.name}</p>
        </div>
      </>
    );
  };
  
  export default ExerciseItem;
  