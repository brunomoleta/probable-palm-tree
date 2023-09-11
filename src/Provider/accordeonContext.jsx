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

  const [open, setOpen] = useState(database.map((item) => item === false));

  const handleDetails = (id) => {
    if (active[0] === id) {
      const newArray = [...open];

      newArray[id] = true;
      setOpen(newArray);
    } else {
      const newArray = open.map((item) => item === false);

      setOpen(newArray);
    }
  };

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

        setOpen,
        open,

        handleDetails,
      }}
    >
      {children}
    </accordeonContext.Provider>
  );
};
