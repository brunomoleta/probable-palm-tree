import { RiArrowDownSLine } from "react-icons/ri";
import { useAccordeonContext } from "../Provider/accordeonContext";

export const DetailsItem = (props) => {
  const {
    summaryClasses,
    detailsClasses,
    canvasClasses,
    removeId,
    addId,
    active,
    removeAddId,
  } = useAccordeonContext();

  const { summary, paragraph, id } = props;

  const summaryClass = `${summaryClasses} ${active[0] === id && `bold`}`;
  const arrowClass = `color-red ${
    active[0] === id ? `rotated-arrow` : `not-rotated-arrow`
  }`;

  const activateItem = () => {
    if (active.length === 0) {
      addId(id);
    } else if (active[0] === id) {
      removeId();
    } else {
      removeAddId(id);
    }
  };

  return (
    <>
      <details
        aria-expanded={active[0] === id}
        open={() => true}
        className={detailsClasses}
      >
        <summary onClick={activateItem} className={summaryClass}>
          {summary}
          <RiArrowDownSLine
            className={arrowClass}
            size={32}
            strokeWidth={active[0] === id ? 2.5 : 1}
            color="color-red"
          />
        </summary>
        <p className={active[0] === id ? "paragraph medium" : "paragraph"}>
          {paragraph}
        </p>
      </details>
      <canvas className={active[0] === id ? canvasClasses : "canvas"}></canvas>
    </>
  );
};
