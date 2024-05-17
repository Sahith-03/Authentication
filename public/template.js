// 'use client'
// import React from 'react';

// function Template(props){
//     console.log(props)
//     return (
//     <>
//             <div className="flex h-screen">
            
//         <img src='image.png' className='w-1/2' id='bgimage'></img>
        
//         <div className='border w-1/3 h-2/3 rounded-3xl m-auto'>
            
//             <div className='flex flex-col text-center'>
//                 <label>{props.Heading}</label>
//             </div>

            
//             <div className='flex flex-col'>
            
//             <form onSubmit={props.handleSignUp} className='flex flex-col gap-y-3'>
//                 <input
//                 type="email"
//                 placeholder="Email"
//                 value={props.email}
//                 onChange={(e) => setEmail(e.target.value)
//                 }
//                 className='bg-sky-800 w-8/12 m-auto h-10 rounded ps-3'
//                 />
//                 <input
//                 type="password"
//                 placeholder="Password"
//                 value={props.password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className='bg-sky-800 w-8/12 m-auto h-10 rounded ps-3'
//                 />
//                 <button type="submit" className='bg-sky-500 w-8/12 m-auto h-10 rounded'>{props.Heading}</button>
//             </form>
            
//             {props.flag ? (<button onClick={props.handleGoogleSignIn}>
//             <div className='flex flex-row'> 
//                 <img src='/google.png'></img>
//                 <span>Sign up with Google</span> 
//             </div>
//             </button>) : null }

            
//             </div>

//             <p>Already a user? 
//             <a href='/signIn'><span className='text-sky-500'>{props.Alternative}</span></a>
//             </p>
//         </div>

//         </div>
//     </>
//     )
// }

// export default Template;


'use client';
import React from 'react';

function Template(props) {
  console.log(props);
  return (
    <>
      <div className="flex h-screen">
        <img src="image.png" className="w-1/2" id="bgimage" alt="Background" />
        <div className="border w-1/3 h-2/3 rounded-3xl m-auto">
          <div className="flex flex-col text-center">
            <label>{props.Heading}</label>
          </div>
          <div className="flex flex-col">
            <form onSubmit={props.handleSignUp} className="flex flex-col gap-y-3">
              <input
                type="email"
                placeholder="Email"
                value={props.email}
                onChange={(e) => props.setEmail(e.target.value)}
                className="bg-sky-800 w-8/12 m-auto h-10 rounded ps-3"
              />
              <input
                type="password"
                placeholder="Password"
                value={props.password}
                onChange={(e) => props.setPassword(e.target.value)}
                className="bg-sky-800 w-8/12 m-auto h-10 rounded ps-3"
              />
              <button type="submit" className="bg-sky-500 w-8/12 m-auto h-10 rounded">
                {props.Heading}
              </button>
            </form>
            {props.flag ? (
              <button onClick={props.handleGoogleSignIn}>
                <div className="flex flex-row">
                  <img src="/google.png" alt="Google" />
                  <span>Sign up with Google</span>
                </div>
              </button>
            ) : null}
          </div>
          <p>
            Already a user? 
            <a href="/">
              <span className="text-sky-500">{props.Alternative}</span>
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Template;
