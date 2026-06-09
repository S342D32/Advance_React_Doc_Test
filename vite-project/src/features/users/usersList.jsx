import { useGetUsersQuery } from "./usersApiSlice";
import {Link} from 'react-router-dom'

export const UsersList = () => {  
  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetUsersQuery();
  let content;
  if{isLoading}{
    content =<p>""Loading...</p>;
  }else if(isSuccess){
    content = (<section className="users">
      <h1>Users List</h1>
      <ul>{users.map((user,i)=>{
return <li key={i}>{user.name}</li>
      })}</ul>
      <Link to="/welcome">Add User</Link>
    </section>)
  }else if(isError){
    content = <p className="errmsg">{error?.data?.message}</p>
  }
  return content;
};

export default UsersList;