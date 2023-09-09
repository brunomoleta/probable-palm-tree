import { RiArrowDownSLine } from "react-icons/ri";
import { useAccordeonContext } from "../Provider/accordeonContext";
// import { useEffect } from "react";

/* eslint-disable react/prop-types */
export const DetailsItem = (props) => {
  const {
    summaryClasses,
    summaryClassesBold,
    detailsClasses,
    canvasClasses,
    rotated,
    notRotated,
    removeId,
    addId,
    active,
    removeAddId,
  } = useAccordeonContext();

  const { summary, paragraph, item } = props;

  // useEffect(() => {
  //   console.log(active);
  // }, [active]);

  return (
    <>
      <details className={detailsClasses}>
        <summary
          onClick={() => {
            active.length === 0
              ? addId(item.id)
              : active[0] === item.id
              ? removeId()
              : removeAddId(item.id);
          }}
          className={
            active[0] === item.id ? summaryClassesBold : summaryClasses
          }
        >
          {summary}
          <RiArrowDownSLine
            className={active[0] === item.id ? rotated : notRotated}
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
