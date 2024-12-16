import { User } from "../types/user";
import GoBackButton from "./GoBackButton";

const UserDetails: React.FC<{ user: User; extendedInfo: boolean }> = ({
  user,
  extendedInfo,
}) => {
  const getWebsiteUrl = (website: string) => {
    if (!/^https?:\/\//i.test(website)) {
      return `https://${website}`;
    }
    return website;
  };

  return (
    <div className="user-details">
      <img
        src={`https://ui-avatars.com/api/?name=${user.name}`}
        alt={user.name}
      />
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>

      {extendedInfo ? (
        <>
          <p>Phone: {user.phone}</p>
          <p>
            Address: {user.address.street}, {user.address.city}
          </p>
          <p>Company: {user.company.name}</p>
          <p>
            Website:{" "}
            <a
              href={getWebsiteUrl(user.website)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {user.website}
            </a>
          </p>
        </>
      ) : null}
    </div>
  );
};

export default UserDetails;
