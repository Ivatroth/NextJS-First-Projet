import axios from "axios"
import Link from "next/link";


const getUser = async (id) =>{
    const res = (await axios(`https://reqres.in/api/users/${id}`)).data
    console.log(res); 
    return res.data;
}

export default async function UserDetailPage({params}) {
    console.log(params.id);
    const userdata = await getUser(params.id);
    console.log(userdata.avatar);
  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card text-center">
          <div className="card-header text-center">
            <img className="avatar" src={userdata.avatar} alt={userdata.email}></img>
          </div>
          <div className="card-body text-center">
            <h3>User Nro: {userdata.id}</h3>
            <h1>{userdata.first_name} {userdata.last_name}</h1>
            <h2>{userdata.email}</h2>
          </div>
            <Link href='/'>
              <button className="container-fluid"><i class="bi bi-arrow-bar-left"></i></button>
            </Link>
        </div>
      </div>
    </div>
  )
}
