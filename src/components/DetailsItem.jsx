import { RiArrowDownSLine } from "react-icons/ri";
import { useAccordeonContext } from "../Provider/accordeonContext";

/* eslint-disable react/prop-types */
export const DetailsItem = (props) => {
  const {
    summaryClasses,
    summaryClassesBold,
    detailsClasses,
    removeId,
    addId,
    active,
    removeAddId,
  } = useAccordeonContext();

  const { summary, paragraph, item } = props;

  return (
    <>
      <details
        onClick={() => {
          active.length === 0
            ? addId(item.id)
            : active[0] === item.id
            ? removeId()
            : removeAddId(item.id);
        }}
        className={detailsClasses}
      >
        <summary
          className={
            active[0] === item.id ? summaryClassesBold : summaryClasses
          }
        >
          {summary}
          <RiArrowDownSLine className="color-red" size={30} />
        </summary>
        <p className="paragraph">{paragraph}</p>
      </details>
      <canvas className="canvas"></canvas>
    </>
  );
};
