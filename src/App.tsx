import "./styles.css";
import { UserCard } from "./components/UserCard";

const user = {
  id: 1,
  name: "いぬこ",
  email: "1213@aaa.com",
  address: "ADDRESS"
};

export default function App() {
  return (
    <div className="App">
      <UserCard user={user} />
    </div>
  );
}
