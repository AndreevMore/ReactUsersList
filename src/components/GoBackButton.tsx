import { useNavigate } from "react-router-dom"; //

const GoBackButton: React.FC = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return <button onClick={handleGoBack}>Back</button>;
};

export default GoBackButton;
