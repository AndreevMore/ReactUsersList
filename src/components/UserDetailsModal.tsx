import ReactDOM from "react-dom";
import { UserDetailsModalProps } from "../types/user";
import UserDetails from "./UserDetails";

const UserDetailsModal: React.FC<UserDetailsModalProps> = ({
  onClose,
  user,
}) => {
  if (!document.getElementById("modal-root")) {
    console.error('No "modal-root" div found. Please add it to your HTML.');
    return null;
  }

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &#x2715;
        </button>

        <UserDetails user={user} extendedInfo={true} />
      </div>
    </div>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default UserDetailsModal;
