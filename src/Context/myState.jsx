import React, { useState } from "react";
import MyContext from "./myContext";

function myState(props) {
  const [isPatientCreated, setIsPatientCreated] = useState(false);
  const [patients, setPatients] = useState([]);

  return (
    <MyContext.Provider
      value={{ isPatientCreated, setIsPatientCreated, patients, setPatients }}
    >
      {props.children}
    </MyContext.Provider>
  );
}

export default myState;
