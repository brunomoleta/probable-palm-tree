import { DetailsItem } from "./DetailsItem";
import { database } from "../database/database";
import { nanoid } from "nanoid";

export const Details = () => {
  const newList = database.map((item) => ({ ...item, id: nanoid() }));

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
