import { FC } from "react";
import { UserProfile1 } from "../types/userProfile";

type Props = {
  user: UserProfile1;
};

export const UserCard: FC<Props> = (props) => {
  const { user } = props;

  const style = {
    border: "solid 1px #ccc",
    borderRadius: "8px"
  };
  return (
    <div style={style}>
      <dl>
        <dt>名前</dt>
        <dd>{user.name}</dd>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>住所</dt>
        <dd>{user.address}</dd>
      </dl>
    </div>
  );
};
