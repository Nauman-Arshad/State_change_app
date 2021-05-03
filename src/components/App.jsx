import React, { useState } from "react";

// <<<<<<<<<<<<one method >>>>>>>>>>>>>>>>>>
// function App() {
//   const [fName,setFName]=useState("");
//   const [lName,setLName]=useState("");
//   const [email,setEmail]=useState("");

//   function updatefName(event) {
//         const firstName = event.target.value;
//         setFName(firstName);
//     }
//     function updatelName(event){
//       const lastName = event.target.value;
//       setLName(lastName);
//     }
//   function updateEmail(event){
//     const mail = event.target.value;
//     setEmail(mail)
//   }

//   return (
//     <div className="container">
//       <h1>
//         Hello {fName} {lName}
//       </h1>
//       <p>{email}</p>
//       <form>
//         <input name="fName" onChange={updatefName} placeholder="First Name" value={fName}/>
//         <input name="lName" onChange={updatelName} placeholder="Last Name" value={lName} />
//         <input name="email" onChange={updateEmail} placeholder="Email" value={email} />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }

// <<<<<<<<<<<<<<two method.<<<<<<<<<<<<<<<<<<
function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });
  function handleChange(event) {
    const { name, value } = event.target;

    setContact((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email
        };
      } else if (name === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleChange}
          value={contact.fName}
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          value={contact.lName}
          name="lName"
          placeholder="Last Name"
        />
        <input
          onChange={handleChange}
          value={contact.email}
          name="email"
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
