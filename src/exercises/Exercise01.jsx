import React from 'react';
import {useLocation} from 'react-router-dom'


var i=0
const Exercise01 = () => {
  const [users, setUsers] = React.useState([])
  const currentPath = useLocation()
  const TOTAL_USERS = 5
  /* THE FIX STARTS HERE */
  
  async function fetchUsers() {
    i++
    if(i<=TOTAL_USERS){
      let response = await fetch('https://jsonplaceholder.typicode.com/users?id=' + i).then(res => res.json())
      setUsers(users.concat(response))
  }
  else {
    i=0;
  }
}
 React.useEffect(() => {
  fetchUsers()
  }, [users, currentPath])

  /* THE FIX ENDS HERE */

  return (
    <div className="container">
      <h2>Instructions</h2>

      <p>We are currently trying to render the first 5 users we obtain from a REST API. The problem is that, for some reason, it's only rendering one of them. Another thing we've noticed is that, sometimes, it renders different user.</p>

      <p>
        <strong>TODO:</strong>
        <ul>
          <li>Fetch and Render the first 5 users</li>
          <li>Make sure the order is ascendant by ID</li>
        </ul>
      </p>

      <hr className="my-5" />

      <h3>Users</h3>

      <ul className="list-group">
        {users.map(user => <li key={`user-${user.id}`} className="list-group-item">
          <strong>ID:</strong> {user.id} - <strong>Name:</strong> {user.name} <strong>Email:</strong> {user.email}
        </li>)}
      </ul>

    </div>
  );
};

export default Exercise01;
