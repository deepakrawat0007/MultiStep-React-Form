
const Step4= ({prevStep , handleSubmit ,formData})=>{
    return(
        <>
        <div className="data">
            <h4>First Name:{formData.firstName}</h4>
            <h4>Last Name:{formData.lastName}</h4>
            <h4>Email:{formData.email}</h4>
            <h4>Password:{formData.password}</h4>
            <h4>DOB:{formData.date_of_birth}</h4>
            <h4>Gender:{formData.gender}</h4>
            <h4>Phone:{formData.phone_number}</h4>
            <h4>Address:{formData.address}</h4>
            <h4>Education Level:{formData.education_lvl}</h4>
            <h4>Employment Status:{formData.employment_status}</h4>
            <h4>Annual Income:{formData.annual_income}</h4>
            <h4>Marital Status:{formData.marital_status}</h4>
        </div>
        <form onSubmit={handleSubmit}>
        <button class="btn btn-primary"onClick={prevStep}>Back</button>
      <button class="btn btn-primary"onClick={handleSubmit}>Submit</button>
        </form>
        </>
    )
}

export default Step4;