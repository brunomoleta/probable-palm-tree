import { Illustration } from "./Illustration";
import { Details } from "./Details";

import box from "../assets/images/illustration-box-desktop.svg";

export const Container = () => {
  return (
    <main className="main relative w-full grid justify-items-center align-items-center padding-b-s-3">
      <h1 className="sr-only">Frequently asked questions</h1>
      <div className="relative container">
        <img
          className="z-1 square absolute op-98 top-box left-box"
          src={box}
          alt=""
        />

        <div className=" overflow grid grid-col-custom-1 align-items-center justify-items-center w-full">
          <Illustration classname="relative illustration" />
          <section className="min-w-full grid section">
            <div className="grid justify-items-center justify-items-b stack-x-large">
              <h2 className="top-heading">FAQ</h2>
              <div className="stack-large grid justify-items-center">
                <Details />
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};
