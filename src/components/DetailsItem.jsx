import { RiArrowDownSLine } from "react-icons/ri";

/* eslint-disable react/prop-types */
export const DetailsItem = (props) => {
  const { summary, paragraph } = props;
  return (
    <>
      <details className=" w-full text-align-left stack-large">

        <summary className="flex space-between align-items-center heading">{summary}
      <RiArrowDownSLine size={30}/>
        
        </summary>
        <p className="paragraph">{paragraph}</p>
      </details>
      <canvas className="margin-i-end canvas"></canvas>
    </>
  );
};
