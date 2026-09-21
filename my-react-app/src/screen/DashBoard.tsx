import { signOut } from "firebase/auth";
import { auth } from "../config/Firebase";

const DashBoard = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>

      <button onClick={handleLogout}>Sign Out</button>
    </div>
  );
};

export default DashBoard;
