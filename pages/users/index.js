import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";

const UsersPage = () => {
  let [user, Setuser] = useState([]);

  useEffect(() => {
    axios.get("https://reqres.in/api/users").then((res) => {
      Setuser(res.data.data);
    });
  }, []);

  console.log(user);
  return (
    <>
      <h1>Users page</h1>
      <ul>
        {user.map((e) => {
          return (
            <Link href={`/users/${e.id}`}>
              <li
                key={e.id}
                style={{
                  color: "blue",
                  cursor: "pointer",
                }}
              >
                {e.first_name}
              </li>
            </Link>
          );
        })}
      </ul>
    </>
  );
};

export default UsersPage;
