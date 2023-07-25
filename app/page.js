import React from 'react'
import axios from 'axios'
import Users from './component/Users'


const fetchUsers = async ()=>{ 
  const res = (await axios(`https://reqres.in/api/users`)).data
  return res.data;
}

async function HomePage() {
  const users = await fetchUsers();
  return(
    <>
      <Users users={users}/>
      <div class="conteiner text-center">
        <div class="row align-items-end">
          <div class="col">
            <h4 className='tituloschico'>Español</h4>
            <p>Practica de Next.js. Se uso una API externa.</p>
          </div>
          <div class="col">
            <h4 className='tituloschico'>English</h4>
            <p>Next.js Practice. An external API was used.</p>
          </div>
        </div>
      </div>
    </>)
}
export default HomePage; 