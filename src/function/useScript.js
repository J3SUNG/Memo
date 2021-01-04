import { useEffect } from "react";

const uscScript = () => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "function/Backgorund.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
};

export default uscScript;
