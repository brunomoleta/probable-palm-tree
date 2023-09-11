import clsx from "clsx";
import { useContext, createContext, useState } from "react";

import { database } from "../database/database";

const accordeonContext = createContext({});

// eslint-disable-next-line react-refresh/only-export-components
export const useAccordeonContext = () => {
  return useContext(accordeonContext);
};

// eslint-disable-next-line react/prop-types
export const AccordeonProvider = ({ children }) => {
  const [active, setActive] = useState([]);
  const [open, setOpen] = useState(-1);

  const newList = database.map((item, index) => ({ ...item, id: index }));

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
  });
  
  const summaryClassesBold = clsx({
    flex: true,
    "space-between": true,
    "align-items-center": true,
    "details-gap": true,
    heading: true,
    bold: true,
  });

  const rotated = clsx({
    "rotated-arrow": true,
    "color-red": true,
  });

  const notRotated = clsx({
    "not-rotated-arrow": true,
    "color-red": true,
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
        summaryClassesBold,
        rotated,
        notRotated,

        active,
        setActive,

        addId,
        removeId,
        removeAddId,

        newList,

        setOpen,
        open,

      }}
    >
      {children}
    </accordeonContext.Provider>
  );
};
