import { Illustration } from "./Illustration";
import box from "../assets/images/illustration-box-desktop.svg";
import { Section } from "./Section";

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

        <div className="container-max-h overflow grid grid-col-custom-1 align-items-center justify-items-center w-full">
          <Illustration classname="relative illustration" />
          <Section className="min-w-full grid section" />
        </div>
      </div>
    </main>
  );
};
