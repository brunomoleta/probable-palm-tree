import desktopIllustration from "../assets/images/illustration-woman-online-desktop.svg";
import mobileIllustration from "../assets/images/illustration-woman-online-mobile.svg";

export const Illustration = () => {
  return (
    <picture>
      <source
        srcSet={desktopIllustration}
        type="image/webp"
        media="(min-width: 900px)"
      />
      <source
        srcSet={mobileIllustration}
        type="image/webp"
        media="(min-width: 100px)"
      />
      <img src={mobileIllustration} alt="Description" />
    </picture>
  );
};
