import { useState } from "react";
import UserDetailsModal from "./UserDetailsModal";
import { User } from "../types/user";
import UserDetails from "./UserDetails";

const UserCard: React.FC<{ user: User }> = ({ user }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="user-card">
      <UserDetails user={user} extendedInfo={false}/>

      <div className="user-card-buttons">
        <a href={`/users/${user.id}`}>Details Page</a>
        <button onClick={toggleModal}>Details Modal</button>
      </div>
      
      {isModalOpen && (
        <UserDetailsModal user={user} userId={user.id} onClose={toggleModal} />
      )}
    </div>
  );
};

export default UserCard;
