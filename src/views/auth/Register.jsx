import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
   // init state form
   const [state, setState] = useState({
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
   });

   // init state validasi
   const [validasi, setValidasi] = useState([]);

   let navigate = useNavigate();

   // handleSubmit
   const handlerSubmit = async (e) => {
      e.preventDefault();

      try {
         await axios.post("http://127.0.0.1:8000/api/register", state);
         // redirect to Dashboard
         navigate("/dashboard");
      } catch (error) {
         // masukkan response error ke state validasi
         setValidasi(error.response.data);
      }
   };

   return (
      <>
         <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
               <div>
                  <img
                     className="mx-auto h-12 w-auto"
                     src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                     alt="Workflow"
                  />
                  <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                     Register your account
                  </h2>
               </div>
               <form onSubmit={handlerSubmit} className="mt-8 space-y-6">
                  <input type="hidden" name="remember" defaultValue="true" />
                  <div className="rounded-md shadow-sm -space-y-px">
                     <div>
                        <label htmlFor="name" className="sr-only">
                           Name
                        </label>
                        <input
                           id="name"
                           name="name"
                           type="text"
                           // required
                           value={state.name}
                           onChange={(e) =>
                              setState({ ...state, name: e.target.value })
                           }
                           className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                           placeholder="Full name"
                        />
                        {/* message error validasi */}
                        {validasi.name && (
                           <div className="pb-2 text-sm text-red-500">
                              {validasi.name[0]}
                           </div>
                        )}
                     </div>

                     <div>
                        <label htmlFor="email-address" className="sr-only">
                           Email address
                        </label>
                        <input
                           id="email-address"
                           name="email"
                           type="email"
                           autoComplete="email"
                           // required
                           value={state.email}
                           onChange={(e) =>
                              setState({ ...state, email: e.target.value })
                           }
                           className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                           placeholder="Email address"
                        />
                        {/* message error validasi */}
                        {validasi.email && (
                           <div className="pb-2 text-sm text-red-500">
                              {validasi.email[0]}
                           </div>
                        )}
                     </div>
                     <div>
                        <label htmlFor="password" className="sr-only">
                           Password
                        </label>
                        <input
                           id="password"
                           name="password"
                           type="password"
                           autoComplete="current-password"
                           // required
                           value={state.password}
                           onChange={(e) =>
                              setState({ ...state, password: e.target.value })
                           }
                           className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                           placeholder="Password"
                        />
                        {/* message error validasi */}
                        {validasi.password && (
                           <div className="pb-2 text-sm text-red-500">
                              {validasi.password[0]}
                           </div>
                        )}
                     </div>
                     <div>
                        <label htmlFor="password" className="sr-only">
                           Password
                        </label>
                        <input
                           id="password_confirmation"
                           name="password_confirmation"
                           type="password"
                           autoComplete="current-password"
                           // required
                           value={state.password_confirmation}
                           onChange={(e) =>
                              setState({
                                 ...state,
                                 password_confirmation: e.target.value,
                              })
                           }
                           className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                           placeholder="Password confirmation"
                        />
                        {/* message error validasi */}
                        {validasi.password_confirmation && (
                           <div className="pb-2 text-sm text-red-500">
                              {validasi.password_confirmation[0]}
                           </div>
                        )}
                     </div>
                  </div>

                  <div>
                     <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 mb-1 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                     >
                        Register
                     </button>
                     <Link
                        to="/"
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                     >
                        Sign in
                     </Link>
                  </div>
               </form>
            </div>
         </div>
      </>
   );
};

export default Register;
