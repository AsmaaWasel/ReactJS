import "./App.css";
import Alert from "./components/Alert";
import { Info } from "lucide-react";
import { Ban } from "lucide-react";
import { TriangleAlert } from "lucide-react";
import { CheckCheck } from "lucide-react";

function App() {
  return (
    <>
      <h1>My Alert Component</h1>
      <Alert
        type="alert-info"
        title="info!"
        message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, illo impedit quas facilis nulla corporis, unde atque vero odit dolorum tenetur, beatae temporibus. Accusantium, deleniti cumque. Earum veritatis non exercitationem."
        icon={<Info />}
        onClose={() => alert("Closed!")}
      />
      <Alert
        type="alert-warning"
        title="warning!"
        message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, illo impedit quas facilis nulla corporis, unde atque vero odit dolorum tenetur, beatae temporibus. Accusantium, deleniti cumque. Earum veritatis non exercitationem."
        icon={<Ban />}
        onClose={() => alert("Closed!")}
      />
      <Alert
        type="alert-error"
        title="error!"
        message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, illo impedit quas facilis nulla corporis, unde atque vero odit dolorum tenetur, beatae temporibus. Accusantium, deleniti cumque. Earum veritatis non exercitationem."
        icon={<TriangleAlert />}
        onClose={() => alert("Closed!")}
      />
      <Alert
        type="alert-success"
        title="success!"
        message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, illo impedit quas facilis nulla corporis, unde atque vero odit dolorum tenetur, beatae temporibus. Accusantium, deleniti cumque. Earum veritatis non exercitationem."
        icon={<CheckCheck />}
        onClose={() => alert("Closed!")}
      />
    </>
  );
}

export default App;
