import { DetailsItem } from "./DetailsItem";
import { nanoid } from "nanoid";
import { useAccordeonContext } from "../Provider/accordeonContext";

export const Details = () => {

  const newList = database.map((item, index) => ({ ...item, id: index }));

  return (
    <>
      {newList.map((item) => (
        <DetailsItem
          key={nanoid()}
          item={item}
          summary={item.summary}
          paragraph={item.paragraph}
        />
      ))}
    </>
  );
};
