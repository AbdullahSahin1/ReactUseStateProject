import './App.css';
import Course from './Course'
import {useState} from 'react';


function getRandomCourse(){
  const coursesArray = ['Angular','bootstrap','css,','html','javascript','node','react','vue'];
  return coursesArray[Math.floor(Math.random()*coursesArray.length)]
}

function App() {
  const [courses, setCourses] = useState([])
  const handleClick = () =>{
      setCourses([...courses, getRandomCourse()])
  }
  const CourseList =   courses.map((course,index)=>{
    return <Course key={index} courseName={course}/>
  });
  return (
    <div className ="App">
      <button className = "appButton" onClick={handleClick}>Görsel Ekle</button>
     <div className='courseList'>
      {CourseList}
     </div>
    </div>
 
  )  
}

export default App;
