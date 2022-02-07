import react,{Component,Fragment} from "react";

class CourseList extends Component{
    state ={
        isEdit : false
    }
//render course item
renderCourse = () => {
    return(
        <li> 
     
     
     
        <span> {this.props.details.name}</span>  
        <button onClick={()=> {this.ToggelState()}}>Edit Course</button> 
        <button onClick={()=> {this.props.deleteCourse(this.props.index)}}>
            Delete Course
        </button>
           
           
            </li> 

    )
} 
//ToggelState  
ToggelState = () => {
    let {isEdit}=this.state;
    this.setState({
        isEdit:!isEdit
    })
} 
//update Course Item 
updateCourseItem = (e) => {
e.preventDefault();
this.props.editCourse(this.props.index,this.input.value );
this.ToggelState();
}
//render update form 
renderUpDateForm = ()=>{
    return (
        <form onSubmit={this.updateCourseItem}>
            <input type='text' ref={(v)=>{this.input=v}} defaultValue={this.props.details.name  }/>
            <button>Update Course</button>
        </form>
    )
}
    render(){
        let {isEdit} = this.state;
        return(
            <Fragment>
{ isEdit   ?     this.renderUpDateForm()   :    this.renderCourse()}

                                              
            </Fragment>
        );
    }

}

export default CourseList;