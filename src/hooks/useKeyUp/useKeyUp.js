import React from "react";

function useKeyUp(key, callback, response = null) {
  React.useEffect(() => {
    function handleKeyUp(event) {
      if (event.code === key) {
        callback();
      }
    }

    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);
  return response;
}

export default useKeyUp;
