const Step2 =({ handleInputChange, prevStep, nextStep, formData }) => {
    return (
      <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Date OF Birth</label>
        <input type="text"
          name="date_of_birth"
          value={formData.date_of_birth}
          onChange={handleInputChange}
          placeholder="Data of Birth" class="form-control" />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Gender</label>
        <input   type="text"
          name="gender"
          value={formData.gender}
          onChange={handleInputChange}
          placeholder="Gender" class="form-control" id="exampleInputPassword1"/>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Phone Number</label>
        <input   type="number"
          name="phone_number"
          value={formData.phone_number}
          onChange={handleInputChange}
          placeholder="Phone Number" class="form-control" id="exampleInputPassword1"/>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Address</label>
        <input  
               type="text"
               name="address"
               value={formData.address}
               onChange={handleInputChange}
               placeholder="address" class="form-control" id="exampleInputPassword1"/>
      </div>
      <button class="btn btn-primary position-absolute top-80 start-0"onClick={prevStep}>Back</button>
      <button class="btn btn-primary position-absolute top-80 start-50"onClick={nextStep}>Next</button>
    </form>
  
    );
  };

  export default Step2;