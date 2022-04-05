import {useState} from 'react';
import {Link} from 'react-router-dom';
import clienteAxios from '../config/axios';
import Alerta from '../components/Alerta';
const Registrar = () => {
  const [nombre,setNombre] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [repetirPassword,setRepetirPassword] = useState('');
  const [alerta,setAlerta] = useState({});

  const handleSubmit =async e =>{
    e.preventDefault();

    if([nombre, email, password, repetirPassword].includes('')){
      return setAlerta({msg: 'Hay campos vacíos',error : true});
    }

    if(password !== repetirPassword){
      return setAlerta({msg: 'Los passwords no son iguales',error : true});
    }

    if(password.length < 6){
      return setAlerta({msg: 'El password es muy corto, agrega mínimo 6 caracteres',error : true});
    }

    setAlerta({})

    //Crear el usuario en la API
    try {
      const url = '/veterinarios';
      await clienteAxios.post(url, { nombre, email, password });
      setAlerta({
        msg:'Creado correctamente revisa tu correo',
        error: false
      });
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error:true
      })
    }
  }

  const {msg} = alerta

  return (
    <> 
      <div>
        <h1 className="text-indigo-600 font-black text-6xl">
          Crea tu cuenta y Administra tus <span className="text-black">Pacientes</span>
        </h1>
      </div>
      <div className="mt-10 md:mt-3 shadow-lg px-5 py-5 rounded-xl bg-white">

        {
          msg && <Alerta 
            alerta={alerta}
          />
        }
           
        <form onSubmit={handleSubmit}>
          <div className="my-3">
            <label htmlFor="" className="uppercase text-gray-600 block text-xl font-bold">
              Nombre
            </label>
            <input 
              type="text" 
              placeholder="Tu nombre"
              className="border w-full p-2 mt-3 bg-gray-50 rounded-xl"
              value={nombre}
              onChange={e=>setNombre(e.target.value)}
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
              value={email}
              onChange={e=>setEmail(e.target.value)}
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
              value={password}
              onChange={e=>setPassword(e.target.value)}
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
              value={repetirPassword}
              onChange={e=>setRepetirPassword(e.target.value)}
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