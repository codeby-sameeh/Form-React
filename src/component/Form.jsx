// // import React, { useRef, useState } from 'react';
// // import Button from './Button';
// // import { useForm } from 'react-hook-form';
// // import { DevTool } from '@hookform/devtools';
 
// // const Personel = () => {

// //   const {Arr,setArr}=useState([{}])
// //   const form = useForm();
// //   const { register, handleSubmit, control } = form;

// //   const onSubmit = (data) => {
// //     localStorage.setItem('formData', JSON.stringify(data));
// //     console.log('Form data saved:', data);
// //   };
  
// // // const data=useRef()
// // // const stat=useRef()
// // // const handlesubmit = ()=>{
// // //     // console.log(data.current.value,"initial value");
// // //     localStorage.setItem("inputvalue",data.current.value)
// // //     localStorage.setItem("password",stat.current.value)
    
// // // }
// // // const asset = (localStorage.getItem("inputvalue"));
// // // const asse = (localStorage.getItem("password"));

// //   return (
// //     <div className="Form-main">
// //       <form onSubmit={handleSubmit(onSubmit)}>
// //         <h1>Login</h1>
// //         <label htmlFor="username">Username</label>
// //         <input
// //           type="text"
// //           placeholder="Name"
// //           {...register('username')}
// //         />
// //         <label htmlFor="email">Email</label>
// //         <input
// //           type="email"
// //           placeholder="E-mail"
// //           {...re('email')}
// //         />
// //         <div className="btn">
// //           <Button />
// //         </div>
// //       </form>
// //       <DevTool control={control} />
// //     </div>
// //   )

// // }



// // export default Personel ;






























// // ----------------------------------------------------------------------//


// // import React from 'react';
// // import Button from './Button';
// // import { useForm } from 'react-hook-form';
// // import { DevTool } from '@hookform/devtools';

// // const Personel = () => {
// //   const form = useForm();
// //   const { register, handleSubmit, control } = form;

// //   const onSubmit = (data) => {
// //     const storedData = JSON.parse(localStorage.getItem('formData')) || [];

// //     const updatedData = [...storedData, data];

// //     localStorage.setItem('formData', JSON.stringify(updatedData));

// //     console.log('Form data saved:', updatedData);
// //   };

// //   return (
// //     <div className="Form-main">
// //       <form onSubmit={handleSubmit(onSubmit)}>
// //         <h1>Login</h1>
// //         <label htmlFor="username">Username</label>
// //         <input
// //           type="text"
// //           placeholder="Name"
// //           {...register('username')}
// //         />
// //         <label htmlFor="email">Email</label>
// //         <input
// //           type="email"
// //           placeholder="E-mail"
// //           {...register('email')}
// //         />
// //         <div className="btn">
// //           <Button />
// //         </div>
// //       </form>
// //       <DevTool control={control} />
// //     </div>
// //   );
// // };



// // export default Personel;



















// // ----------------------------------------------------------------------//



// // import React, { useState, useEffect } from "react";

// // const LoginForm = () => {
// //   const [username, setUsername] = useState("");
// //   const [password, setPassword] = useState("");

// //   // Load the data from localStorage when the component mounts
// //   useEffect(() => {
// //     const storedUsername = localStorage.getItem("username");
// //     const storedPassword = localStorage.getItem("password");

// //     if (storedUsername) setUsername(storedUsername);
// //     if (storedPassword) setPassword(storedPassword);
// //   }, []);

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     // Save the username and password to localStorage
// //     localStorage.setItem("username", username);
// //     localStorage.setItem("password", password);

// //     alert("Credentials saved to localStorage!");
    
// //     // Optionally, reset form fields after submission
// //     setUsername("");
// //     setPassword("");
// //   };

// //   return (
// //     <div>
// //       <h2>Login Form</h2>
// //       <form onSubmit={handleSubmit}>
// //         <div>
// //           <label>Username:</label>
// //           <input
// //             type="text"
// //             value={username}
// //             onChange={(e) => setUsername(e.target.value)}
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label>Password:</label>
// //           <input
// //             type="password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             required
// //           />
// //         </div>
// //         <button type="submit">Submit</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default LoginForm;



// // ------------------------------------------------------------------------//

// import react, { useRef, useState } from 'react';
// import Button from './Button';
// import { useForm } from 'react-hook-form';


// const Form = () => {
//   const { register, handleSubmit, control } = useForm;
//   const submit = () => {
//      localStorage.setItem
//   }
//   return (
//     <div>
//       <label htmlFor="username">Username</label>
//       <input type="text" /><br />
//       <label htmlFor="email">E-mail</label>
//       <input type="email" />
//     </div>
//   )
// }

// export default Form
