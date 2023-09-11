import { DetailsItem } from "./DetailsItem";
import { nanoid } from "nanoid";
import { useAccordeonContext } from "../Provider/accordeonContext";

export const Details = () => {

  const {
    newList,
  } = useAccordeonContext();

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
