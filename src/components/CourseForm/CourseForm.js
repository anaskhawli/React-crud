import react from "react";

const CourseForm=(_props)=>{
  return(
<form onSubmit={_props.addCourses}>
    <input type='text' value={_props.current} onChange={_props.updateCourse}/>
    <button type="text">Add Course</button>
</form>

     
 )
}

export default CourseForm;