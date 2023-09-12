export const Attribution = () => {
  const fEM = "https://www.frontendmentor.io?ref=challenge";
  const profile = "https://www.frontendmentor.io/profile/brunomoleta";
  return (
    <footer className="footer w-full grid align-items-center justify-items-center">
      <p className="text-align-center">

        Challenge by <a className="hv-color-white underline" href="#" onClick={() => window.open(fEM, "_blank")}>
          Frontend Mentor</a>
        .
        Coded by <a className="hv-color-white underline" href="#" onClick={() => window.open(profile, "_blank")}>
          Bruno Moleta Santos</a>
        .
      </p>
    </footer>
  );
};
