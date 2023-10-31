import clsx from "clsx";
import { useContext, createContext, useState } from "react";

const accordeonContext = createContext({});

export const useAccordeonContext = () => {
  return useContext(accordeonContext);
};

export const AccordeonProvider = ({ children }) => {
  const [active, setActive] = useState([]);

  const detailsClasses = clsx({
    "w-full": true,
    "text-align-left": true,
    "stack-large": true,
  });

  const summaryClasses = clsx({
    flex: true,
    "space-between": true,
    "align-items-center": true,
    "details-gap": true,
    heading: true,
      summary: true
  });

  const canvasClasses = clsx({
    canvas: true,
    active: active.length > 0,
  });

  const addId = (id) => {
    !active.some((idInside) => idInside === id)
      ? setActive([...active, id])
      : null;
  };

  const removeId = () => {
    const emptyList = [...active.slice(0, 0)];
    setActive(emptyList);
  };

  const removeAddId = (id) => {
    const emptyList = [...active.slice(0, 0)];
    setActive([...emptyList, id]);
  };

  return (
    <accordeonContext.Provider
      value={{
        canvasClasses,
        detailsClasses,
        summaryClasses,

        active,
        setActive,

        addId,
        removeId,
        removeAddId,
      }}
    >
      {children}
    </accordeonContext.Provider>
  );
};
