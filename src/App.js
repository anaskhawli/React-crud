import { Component } from 'react';
import './App.css';
import CourseForm from './components/CourseForm/CourseForm';
import CourseList from './components/CourseList/CourseList';

class  App extends Component {
  state ={
    courses : [
      {
        name : "Html"
      },
      {
        name : "Css"
      },
      {
        name : "Js"
      },
    ],
    current : ''
  }
  //UpdateCourse
updateCourse=(e)=>{
this.setState({
  current:e.target.value
})
}


  //Add Course
  addCourse=(e)=>{
    e.preventDefault();
let Current=this.state.current;
let courses = this.state.courses;
if(Current===''){
  return false 
}else{
courses.push({name:Current})
this.setState({
  courses,
  current: ""
})
}
}
//delete Course 
deleteCourse =(index)=>{
  let courses=this.state.courses;
  courses.splice(index,1);
  this.setState({
    courses
  })

}
  //Edit Course 
  editCourse=(index,value)=>{
    let courses=this.state.courses;
    let course = courses[index];
    course['name']=value;
    this.setState({
      courses
    })


  }
  render(){
    
    const {courses}= this.state;
    let length=courses.length;
    const courseList=length ? (
    courses.map((course,index)=>{
      return  <CourseList details={course}key={index}  index={index} deleteCourse={this.deleteCourse} editCourse={this.editCourse} />


    })
    ):(
      <p> There is no Item To Show</p>
  )
    return (
    <section className="App">
<h2>Add Courses </h2>  
 <CourseForm current={this.state.current} updateCourse={this.updateCourse} addCourses={this.addCourse}/>
<ul>
{courseList}
</ul>
  
  
   </section>
  );
}}

export default App;
