import "./styles.css";
import axios from "axios";
import { Practice1 } from "./practices/Practice1";
import { Practice2 } from "./practices/Practice2";
import { Practice3 } from "./practices/Practice3";
import { Practice4 } from "./practices/Practice4";
import { Todo } from "./Todo";
import { TodoType } from "./types/todo";
import { useState } from "react";
import { Text } from "./Text";
import { UserProfile } from "./UserProfile";
import { User } from "./types/user";
import { UserCard } from "./components/userCard";
import { User1 } from "./types/api/user";
import { UserProfile1 } from "./types/userProfile";
import { useAllUsers } from "./hooks/useAllUsers";

export default function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const { getUsers, userProfiles, loading, error } = useAllUsers();
  // const user: User = {
  //   name: "あああ",
  //   hobbies: ["映画", "ゲーム"]
  // };
  const user = {
    id: 1,
    name: "あああ",
    email: "aaa@example",
    address: "ADDress"
  };

  const onClickUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  const onClickUser1 = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users?id=1")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  const onClickFetchData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };
  const onClickFetchUser = () => getUsers();

  return (
    <div className="App">
      <button onClick={onClickUsers}>users</button>
      <button onClick={onClickUser1}>id=1のusers</button>
      <Practice1 />
      <Practice2 />
      <Practice3 />
      <Practice4 />
      <button onClick={onClickFetchUser}>データ取得</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>データの取得に失敗しました</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {userProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
      {/* <UserCard user={user} /> */}
      <UserProfile user={user} />
      <Text color="red" fontSize="18px" />
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}
