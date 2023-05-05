const Step3 =({ handleInputChange, prevStep, nextStep, formData }) => {
    return (
      <>
       <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Education Level</label>
        <input  type="text"
          name="education_lvl"
          value={formData.education_lvl}
          onChange={handleInputChange}
          placeholder="Education Level"class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Employment Status</label>
        <input    type="text"
          name="employment_status"
          value={formData.employment_status}
          onChange={handleInputChange}
          placeholder="Employment Status" class="form-control" id="exampleInputPassword1"/>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Annual Income</label>
        <input   type="Number"
          name="annual_income"
          value={formData.annual_income}
          onChange={handleInputChange}
          placeholder="Annual Income"class="form-control" id="exampleInputPassword1"/>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Marital Status</label>
        <input  
                type="text"
                name="marital_status"
                value={formData.marital_status}
                onChange={handleInputChange}
                placeholder="Marital Status" class="form-control" id="exampleInputPassword1"/>
      </div>
      <button class="btn btn-primary"onClick={prevStep}>Back</button>
      <button class="btn btn-primary position-absolute top-80 start-50" onClick={nextStep}>Next</button>
   </form>
      </>
    );
  };

  export default Step3;