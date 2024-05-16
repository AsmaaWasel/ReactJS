import { SquareX } from "lucide-react";
import "./index.scss";
interface AlertProps {
  type: "alert-success" | "alert-error" | "alert-warning" | "alert-info";
  title: string;
  message: string;
  icon: React.ReactNode;
  onClose?: () => void;
}

const Alert = ({ type, title, message, icon, onClose }: AlertProps) => {
  return (
    <div className={`alert-wrapper ${type}`}>
      <div className="header">
        <div className="title">
          {icon}
          <h4>{title}</h4>
        </div>
        <SquareX onClick={onClose} />
      </div>
      <div className="message">{message}</div>
    </div>
  );
};
export default Alert;
