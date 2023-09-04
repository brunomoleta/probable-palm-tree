/* eslint-disable react/prop-types */
export const DetailsItem = (props) => {
  const { summary, paragraph } = props;
  return (
    <details>
      <summary className="heading">
        {summary}
      </summary>
      <p className="paragraph">{paragraph}</p>
    </details>
  );
};
