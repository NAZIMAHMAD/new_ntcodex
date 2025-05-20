// src/components/TawkToChat.js
import { useEffect } from "react";

const TawkToChat = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/6828e74e0b41d919147ed51d/1irfsf3io";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // clean up on unmount
    };
  }, []);

  return null;
};

export default TawkToChat;
