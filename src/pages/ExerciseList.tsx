import React, { useEffect, useState } from 'react';
import { Button, Select } from 'antd';
import Header from '../components/Header';
import ExerciseItem from '../components/ExerciseItem';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../constant';

const ExerciseList: React.FC = () => {
  const [filter, setFilter] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (filter.length === 0) {
      setItems(MOCKUP_DATA)
      return;
    }
    const list = []
    MOCKUP_DATA.forEach(e => {
      if (filter.includes(e.category)) {
        list.push(e)
      }
    })
    setItems(list)
  }, [filter])
  return (
    <>
      <Header />
      <div className="container mx-auto">
        <h1 className="text-3xl my-10 font-medium">Exercises</h1>
        <div className="flex">
          <div className="flex items-center mr-10">
            <img src={"/icon-filter.png"} className="h-4 mr-2" />
            <Select
              mode="multiple"
              value={filter}
              style={{ minWidth: '10rem' }}
              onChange={setFilter}
              placeholder="Filter"
              options={CATEGORIES}
            />
          </div>
          <Link to={"/exercises/upload"}>
            <Button type="primary" >UPLOAD</Button>
          </Link>
        </div>
        <div className="mt-14">
          <div className="grid grid-cols-5 gap-10">
            {
              items.map(e => (
                <Link to={`/exercises/${e.id}`}>
                  <ExerciseItem item={e} />
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default ExerciseList;

const MOCKUP_DATA = [
  {
    image: "https://hips.hearstapps.com/hmg-prod/images/knees-0050-preview-65c2b3b60566d.jpg?crop=0.619xw:0.929xh;0.173xw,0.0587xh&resize=640:*",
    name: "sit-ups",
    id: 1,
    category: "core"
  },
  {
    image: "https://cdn.mos.cms.futurecdn.net/d4BtfHNGaktPHoFYEExygF.jpg",
    name: "Exercise legs",
    id: 2,
    category: "legs"
  },
  {
    image: "https://hips.hearstapps.com/hmg-prod/images/knees-0050-preview-65c2b3b60566d.jpg?crop=0.619xw:0.929xh;0.173xw,0.0587xh&resize=640:*",
    name: "Exercise uppur body",
    id: 3,
    category: "core"
  }
]