import {Link} from 'react-router-dom';
const Registrar = () => {
  return (
    <> 
        <div>
           <h1 className="text-indigo-600 font-black text-6xl">
               Crea tu cuenta y Administra tus <span className="text-black">Pacientes</span>
            </h1>
        </div>
        <div className="mt-10 md:mt-3 shadow-lg px-5 py-5 rounded-xl bg-white">
            <form>
                <div className="my-3">
                   <label htmlFor="" className="uppercase text-gray-600 block text-xl font-bold">
                       Nombre
                    </label>
                   <input 
                     type="text" 
                     placeholder="Tu nombre"
                     className="border w-full p-2 mt-3 bg-gray-50 rounded-xl"
                     required
                    />
               </div>
               <div className="my-3">
                   <label htmlFor="" className="uppercase text-gray-600 block text-xl font-bold">
                       Email
                    </label>
                   <input 
                     type="email" 
                     placeholder="Tu email"
                     className="border w-full p-2 mt-3 bg-gray-50 rounded-xl"
                     required
                    />
               </div>
               <div className="my-3">
                   <label htmlFor="" className="uppercase text-gray-600 block text-xl font-bold">
                       Password
                    </label>
                   <input 
                     type="password" 
                     placeholder="Tu password"
                     className="border w-full p-2 mt-3 bg-gray-50 rounded-xl"
                     required
                    />
               </div>
               <div className="my-3">
                   <label htmlFor="" className="uppercase text-gray-600 block text-xl font-bold">
                       Confirmar Password
                    </label>
                   <input 
                     type="password" 
                     placeholder="Confirma tu password"
                     className="border w-full p-2 mt-3 bg-gray-50 rounded-xl"
                     required
                    />
               </div>
               <input
                 type="submit"
                 value="Crear Cuenta"
                 className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto"
                />
           </form>
           <nav className="mt-10 lg:flex lg:justify-between">
               <Link
                className="block text-center my-3 text-gray-500"
                to="/">¿Ya tienes una cuenta? Inicia Sesión</Link>
               <Link
                className="block text-center my-3 text-gray-500"
                to="/olvide-password">Olvidé mi Password</Link>
           </nav>
        </div>
        
    </>
  )
}

export default Registrar