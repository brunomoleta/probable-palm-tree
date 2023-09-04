export const Attribution = () => {
  const fEM = "https://www.frontendmentor.io?ref=challenge";
  const profile = "https://www.frontendmentor.io/profile/brunomoleta";
  return (
    <footer className="w-full grid align-items-center justify-items-center">
      <div className="">
        Challenge by{" "}
        <a href="#" onClick={() => window.open(fEM, "_blank")}>
          Frontend Mentor
        </a>
        .
      </div>
      <div>
        Coded by{" "}
        <a href="#" onClick={() => window.open(profile, "_blank")}>
          Bruno Moleta Santos
        </a>
        .
      </div>
    </footer>
  );
};
