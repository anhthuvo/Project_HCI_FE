import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import Header from '../components/Header';
import { Link, useParams } from 'react-router-dom';

const ExerciseDetail: React.FC = () => {
  const [item, setItem] = useState({});
  let { exerciseId } = useParams();

  useEffect(() => {
    const data = {

    }
    setItem(data)
  }, [])
  return (
    <>
      <Header />
      <div className="container mx-auto">
        <h1 className="text-3xl my-10 font-medium">Exercise Detail</h1>
        <div className="flex">
          <div className="w-1/2">
            <Link to="/exercises">
              <Button size="large" >BACK</Button>
            </Link>
            <div className="flex space-x-10 mt-10">
              <div className="w-max">
                <p className="text-center">Reps</p>
                <div className="rounded-full h-28 w-28 bg-slate-500	pt-2 pl-2">
                  <div className="rounded-full h-24 w-24 bg-white pt-2 pl-2">
                    <div className="rounded-full h-20 w-20 bg-slate-500 pt-2 pl-2">
                      <div className="rounded-full h-16 w-16 bg-slate-600 text-white flex items-center justify-center">
                        10
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-max">
                <p className="text-center">Reps or time</p>
                <div className="rounded-full h-28 w-28 bg-slate-500	pt-2 pl-2">
                  <div className="rounded-full h-24 w-24 bg-white pt-2 pl-2">
                    <div className="rounded-full h-20 w-20 bg-slate-500 pt-2 pl-2">
                      <div className="rounded-full h-16 w-16 bg-slate-600 text-white flex items-center justify-center">
                        10
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <video width="100%" height="320" controls>
              <source src="movie.mp4" type="video/mp4" />
              <source src="movie.ogg" type="video/ogg" />
            </video>
          </div>
        </div>

        <div className="flex mt-10">
          <div className="w-1/2">
            <Button size="large" type="primary" className="mr-20 bg-red-700">REMOVE</Button>
            <Link to={`/exercises/edit/${exerciseId}`}>
              <Button size="large" type="primary" >EDIT</Button>
            </Link>
          </div>
          <div className="w-1/2">
            <Button size="large" type="primary" className="ml-auto block bg-green-500" >START</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExerciseDetail;