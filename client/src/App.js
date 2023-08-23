import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import axios from "axios";

import "./App.css";
import { Form } from "./components/Form";
import { UserList } from "./components/UsersList";

const BASE_URL = "https://registrationapp-production.up.railway.app/";

function App() {
  const [userData, setUserData] = useState(null);
  const fetchUsersData = async () => {
    const resp = await axios.get(`${BASE_URL}/getUsers`);
    console.log(resp);
    setUserData(resp.data.data.users);
  };
  useEffect(() => {
    fetchUsersData();
  }, []);

  return (
    <div className="App">
      {/* Form Component */}
      <Form fetchUsersData={fetchUsersData} BASE_URL={BASE_URL} />
      {/* All users list */}
      <UserList
        userData={userData}
        setUserData={setUserData}
        fetchUsersData={fetchUsersData}
        BASE_URL={BASE_URL}
      />

      <Toaster />
    </div>
  );
}

export default App;
