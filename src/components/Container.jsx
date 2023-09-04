import { Illustration } from "./Illustration";
import { Details } from "./details";

export const Container = () => {
  return (
    <main className="w-full grid justify-items-center align-items-center">
      <h1 className="sr-only">Frequently asked questions</h1>
      <div className="container container-max-w">
        <Illustration />
        <section>
          <h2>FAQ</h2>
          <Details />
        </section>
      </div>
    </main>
  );
};
