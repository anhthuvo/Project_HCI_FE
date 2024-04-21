import './App.css';
import ExerciseList from './pages/ExerciseList';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExerciseUpload from './pages/ExerciseUpload';
import ExerciseDetail from './pages/ExerciseDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ExerciseList />}/>
        <Route path="/exercises" element={<ExerciseList />}/>
        <Route path="/exercises/upload" element={<ExerciseUpload />}/>
        <Route path="/exercises/edit/:exerciseId" element={<ExerciseUpload />}/>
        <Route path="/exercises/:exerciseId" element={<ExerciseDetail />}/>
      </Routes>
    </BrowserRouter>
    // <TableStore>
    //     <Landing />
    // </TableStore>
  );
}

export default App;
