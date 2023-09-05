/* eslint-disable react/prop-types */
import desktopIllustration from "../assets/images/illustration-woman-online-desktop.svg";
import mobileIllustration from "../assets/images/illustration-woman-online-mobile.svg";
// import halo from "../assets/images/halo.svg";

import greybase from "../assets/images/illustration-shadow-desktop.svg";

export const Illustration = ({classname}) => {
  return (
    <div className={classname}>
      <img
        className="shadow"
        src={greybase}
        alt=""
      />
      {/* <img
        className="halo"
        src={halo}
        alt=""
      /> */}


      <picture className="z-2 op-99">
        <source
          srcSet={desktopIllustration}
          type="image/webp"
          media="(min-width: 800px)"
        />
        <source
          srcSet={mobileIllustration}
          type="image/webp"
          media="(min-width: 100px)"
        />
        <img src={mobileIllustration} alt="Description" />
      </picture>
    </div>
  );
};
