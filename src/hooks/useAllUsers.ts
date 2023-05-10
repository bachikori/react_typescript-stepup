// 全ユーザー一覧を取得する

import { useState } from "react";
import { UserProfile1 } from "../types/userProfile";
import axios from "axios";
import { User1 } from "../types/api/user";

export const useAllUsers = () => {
  const [userProfiles, setUserProfiles] = useState<Array<UserProfile1>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getUsers = () => {
    setLoading(true);
    setError(false);

    axios
      .get<Array<User1>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const data = res.data.map((user) => ({
          id: user.id,
          name: `${user.name}(${user.username})`,
          email: user.email,
          address: `${user.address.city}`
        }));
        setUserProfiles(data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { getUsers, userProfiles, loading, error };
};
