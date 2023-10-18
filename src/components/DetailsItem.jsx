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

  const { summary, paragraph, item } = props;

  return (
    <>
      <details open={() => null} className={detailsClasses}>
        <summary
          onClick={() => {
            active.length === 0
              ? addId(item.id)
              : active[0] === item.id
              ? removeId()
              : removeAddId(item.id);
          }}
          className={`${summaryClasses} ${active[0] === item.id && `bold`}`}
        >
          {summary}
          <RiArrowDownSLine
            className={`color-red ${
              active[0] === item.id ? `rotated-arrow` : `not-rotated-arrow`
            }`}
            size={30}
          />
        </summary>
        <p className="paragraph">{paragraph}</p>
      </details>
      <canvas
        className={active[0] === item.id ? canvasClasses : "canvas"}
      ></canvas>
    </>
  );
};
