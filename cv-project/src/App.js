import { Component } from "react";
import Header from "./Components/Header/Header";
import "./Components/App.css"
import SectionTitle from "./Components/SectionTitle";
import GeneralSectionButton from "./Components/General/GeneralSectionButton";
import GeneralForm from "./Components/General/GeneralForm"
import RenderGeneralInfo from "./Components/General/RenderGeneralInfo";
import EducationForm from "./Components/Education/EducationForm";
import RenderEducationInfo from "./Components/Education/RenderEducationInfo";
import EducationSectionButton from "./Components/Education/EducationSectionButton";
import ExperienceForm from "./Components/Experience/ExperienceForm";
import ExperienceSectionButton from "./Components/Experience/ExperienceSectionButton";
import RenderExperienceInfo from "./Components/Experience/RenderExperienceInfo";
import { FaPlus } from "react-icons/fa"
import { FaEdit } from "react-icons/fa"
import { render } from "react-dom";



class App extends Component {

  constructor(props) {
    super(props);
    // piece of state for general form
    this.state = {
      errors: {},
      name: "",
      email: "",
      number: "",
      isGeneralFormSubmitted: false,
      isGeneralFormShown: false,
      school: "",
      title: "",
      graduationDate: "",
      isEducationFormSubmitted: false,
      isEducationFormShown: false,
      company: "",
      position: "",
      mainTasks: "",
      startingDate: "",
      endingDate: "",
      isExperienceFormSubmitted: false,
      isExperienceFormShown: false,


    }
  }
// handle general form
handleChange = (e) => {
    this.setState({[e.target.name] : e.target.value})
}

validateForm = () => {
  const { name, email, number } = this.state
  let isValid = true // meaning that there is nothing wrong with the user input
  const errors = {}
  
  if(!name) {
    errors.name = "Name is required"
    isValid = false
  }
  if(!email) {
    errors.email = "Email is required"
    isValid = false
  }
  if(!email.includes("@")) {
    errors.email = "Enter a valid email"
    isValid = false
  }
  if(!number) {
    errors.number = "Number is required"
    isValid = false
  }
  this.setState({errors});
  return isValid;
}

handleSubmit = (e) => {
        e.preventDefault()
        const isValid = this.validateForm(); // so that the result of the const isValid will be true
        // if the form inputs aconsole.log(isValid);
        
        if(isValid) {
          this.setState({isGeneralFormSubmitted: true})
          let currentState = this.state.isGeneralFormShown;
          this.setState({isGeneralFormShown: !currentState})
        }
}

showGeneralForm = () => {
  let currentState = this.state.isGeneralFormShown;
  this.setState({isGeneralFormShown: !currentState})
}

closeGeneralForm = () => {
  this.setState({isGeneralFormShown: false})
}

// handle education

handleEducationFormChange = (e) => {
  this.setState({[e.target.name]: e.target.value})
}

validateEducationForm = () => {
  const { school, title, graduationDate} = this.state
  let isEducationFormValid = true // meaning that there is nothing wrong with the user input
  const errors = {}
  
  if(!school) {
    errors.school = "School/University is required"
    isEducationFormValid = false
  }
  if(!title) {
    errors.title = "Title is required"
    isEducationFormValid = false
  }
  if(!graduationDate) {
    errors.graduationDate = "Graduation date is required"
    isEducationFormValid = false
  }
  this.setState({errors});
  return isEducationFormValid;
}

handleEducationFormSubmit = (e) => {
  e.preventDefault();
  const isEducationFormValid = this.validateEducationForm();
  
  if(isEducationFormValid) {
    this.setState({isEducationFormSubmitted: true})
    let currentEducationFormState = this.state.isEducationFormShown;
    this.setState({isEducationFormShown: !currentEducationFormState})
  }
}

showEducationForm = () => {
  let currentEducationFormState = this.state.isEducationFormShown;
  this.setState({isEducationFormShown: !currentEducationFormState})
}

closeEducationForm = () => {
  this.setState({isEducationFormShown: false})
}

// handle experience
handleExperienceFormChange = (e) => {
  this.setState({[e.target.name]: e.target.value})
}

validateExperienceForm = () => {
  const { company, position, mainTasks, startingDate, endingDate } = this.state
  let isExperienceFormValid = true // meaning that there is nothing wrong with the user input
  const errors = {}
  
  if(!company) {
    errors.company = "Company is required"
    isExperienceFormValid = false
  }
  if(!position) {
    errors.position = "Position is required"
    isExperienceFormValid = false
  }
  if(!mainTasks) {
    errors.mainTasks = "Main tasks are required"
    isExperienceFormValid = false
  }
  if(!startingDate) {
    errors.startingDate = "Starting date is required"
    isExperienceFormValid = false
  }
  if(!endingDate) {
    errors.endingDate = "Ending date is required"
    isExperienceFormValid = false
  }
  this.setState({errors});
  return isExperienceFormValid;
}

handleExperienceFormSubmit = (e) => {
  e.preventDefault();
  const isExperienceFormValid = this.validateExperienceForm();
  
  if(isExperienceFormValid) {
    this.setState({isExperienceFormSubmitted: true})
    let currentExperienceFormState = this.state.isExperienceFormShown;
    this.setState({isExperienceFormShown: !currentExperienceFormState})
  }
}

showExperienceForm = () => {
  let currentExperienceFormState = this.state.isExperienceFormShown;
  this.setState({isExperienceFormShown: !currentExperienceFormState})
}

closeExperienceForm = () => {
  this.setState({isExperienceFormShown: false})
}

  render() {
    return (
      <div className="App">
       <div className={this.state.isGeneralFormShown || this.state.isEducationFormShown || this.state.isExperienceFormShown ? "Container Blur" : "Container"} >
         <Header title="CV App"/>
         
         <div className="Section-cont">
           <div className="Section-title-btn-container">
            <SectionTitle title="General Information" />
            <GeneralSectionButton text={this.state.isGeneralFormSubmitted ? < FaEdit /> : < FaPlus />} showGeneralForm={this.showGeneralForm}/>
           </div>
          <div className="Rendered-info">
          {this.state.isGeneralFormSubmitted && <RenderGeneralInfo
          name={this.state.name}
          email={this.state.email}
          number={this.state.number}/>}
          </div>
         </div>
         
         <div className="Section-cont">
            <div className="Section-title-btn-container">
              <SectionTitle title="Education" />
              <EducationSectionButton text={this.state.isEducationFormSubmitted ? < FaEdit /> : < FaPlus />} showEducationForm={this.showEducationForm}/>
            </div>
            <div className="Rendered-info">
              {this.state.isEducationFormSubmitted && <RenderEducationInfo
              school={this.state.school}
              title={this.state.title}
              graduationDate={this.state.graduationDate}/>}
            </div>
         </div>
         
         <div className="Section-cont">
            <div className="Section-title-btn-container">
              <SectionTitle title="Experience" />
              <ExperienceSectionButton text={this.state.isExperienceFormSubmitted ? < FaEdit /> : < FaPlus />} showExperienceForm={this.showExperienceForm}/>
            </div>
            <div className="Rendered-info">
              {this.state.isExperienceFormSubmitted && <RenderExperienceInfo
              company={this.state.company}
              position={this.state.position}
              mainTasks={this.state.mainTasks}
              startingDate={this.state.startingDate}
              endingDate={this.state.endingDate}/>}
            </div>
         </div>
       </div>
         <GeneralForm
         class={this.state.isGeneralFormShown}
         name={this.state.name}
         email={this.state.email}
         number={this.state.number}
         errors = {this.state.errors}
         onChange={this.handleChange}
         onSubmit={this.handleSubmit}
         closeGeneralForm={this.closeGeneralForm}
         />
         <EducationForm 
         classEdu={this.state.isEducationFormShown}
         school={this.state.school}
         title={this.state.title}
         graduationYear={this.state.graduationDate}
         errors = {this.state.errors}
         onEducationFormChange={this.handleEducationFormChange}
         onEducationFormSubmit={this.handleEducationFormSubmit}
         closeEducationForm={this.closeEducationForm}
         />
         <ExperienceForm 
         classExp={this.state.isExperienceFormShown}
         company={this.state.company}
         position={this.state.position}
         mainTasks={this.state.mainTasks}
         startingDate={this.state.startingDate}
         endingDate={this.state.endingDate}
         errors = {this.state.errors}
         onExperienceFormChange={this.handleExperienceFormChange}
         onExperienceFormSubmit={this.handleExperienceFormSubmit}
         closeExperienceForm={this.closeExperienceForm}
         />
      </div>
    );
  }
  }


export default App;
