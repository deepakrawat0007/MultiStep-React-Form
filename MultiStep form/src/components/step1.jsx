

const Step1 = ({ handleInputChange, nextStep, formData }) => {
 
    return (
      <>
      <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">First Name</label>
    <input type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          placeholder="First Name" class="form-control"  id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Last Name</label>
    <input  type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          placeholder="Last Name" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Email</label>
    <input type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email Address" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input  
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <button class="btn btn-primary position-absolute top-80 start-50"onClick={nextStep} >Next</button>
</form>
</>
    );
  };

  export default Step1;