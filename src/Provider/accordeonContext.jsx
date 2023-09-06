import clsx from "clsx";
import { useContext, createContext, useState } from "react";
// import { database } from "../database/database";

const accordeonContext = createContext({});

// eslint-disable-next-line react-refresh/only-export-components
export const useAccordeonContext = () => {
  return useContext(accordeonContext);
};

// eslint-disable-next-line react/prop-types
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
    heading: true,
  });
  const summaryClassesBold = clsx({
    flex: true,
    "space-between": true,
    "align-items-center": true,
    heading: true,
    bold: true,
  });

  const addId = (id) => {
    active.some((idInside) => idInside === id)
      ? null
      : setActive([...active, id]);
    // cartList.some((item) => item.id === newProduct.id) ? tellUser() : addItem();
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
        detailsClasses,
        summaryClasses,
        summaryClassesBold,
        active,
        setActive,
        addId,
        removeId,
        removeAddId,
        toggleDetails,
        detailsRef,
      }}
    >
      {children}
    </accordeonContext.Provider>
  );
};
