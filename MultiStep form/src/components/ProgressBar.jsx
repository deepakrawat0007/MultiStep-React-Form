import React, { useState } from "react";

const ProgressBar = ({setPage}) => {

  return (
    <div class="position-relative m-4">
    <div class="progress" role="progressbar" aria-label="Progress" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{height: "1px"}}>
      <div class="progress-bar" style={{width: "100%"}}></div>
    </div>
    <button type="button" class="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill" style={{width: "2rem" ,height:"2rem"}} onClick={()=>setPage(1)}>1</button>
    <button type="button" class="position-absolute top-0 start-50 translate-middle btn btn-sm btn-primary rounded-pill" style={{width: "2rem" ,height:"2rem"}} onClick={()=>setPage(2)}>2</button>
    <button type="button" class="position-absolute top-0 start-100 translate-middle btn btn-sm btn-primary rounded-pill" style={{width: "2rem" ,height:"2rem"}} onClick={()=>setPage(3)}>3</button>
  </div>
  );
};

export default ProgressBar;
