import { Details } from "./Details";

export const Section = ({ className }) => {
  return (
    <section className={className}>
      <div className="grid justify-items-center justify-items-b stack-x-large">
        <h2 className="top-heading">FAQ</h2>
        <div className="stack-large grid justify-items-center">
          <Details />
        </div>
      </div>
    </section>
  );
};
