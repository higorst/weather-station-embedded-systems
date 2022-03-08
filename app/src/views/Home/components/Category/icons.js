import capIcon from "assets/icons/cap.png";
import freeIcon from "assets/icons/free.png";
import homeIcon from "assets/icons/home.png";
import shirtIcon from "assets/icons/shirt.png";
import sunblockIcon from "assets/icons/sunblock.png";
import umbrellaIcon from "assets/icons/umbrella.png";
import sunglassesIcon from "assets/icons/sunglasses.png";

const icons = {
  baixo: [freeIcon],
  moderado: [shirtIcon, capIcon, sunblockIcon],
  alto: [shirtIcon, capIcon, sunblockIcon, umbrellaIcon],
  "muito-alto": [
    shirtIcon,
    capIcon,
    sunblockIcon,
    umbrellaIcon,
    sunglassesIcon,
  ],
  extremo: [
    shirtIcon,
    capIcon,
    sunblockIcon,
    umbrellaIcon,
    sunglassesIcon,
    homeIcon,
  ],
};

export { icons };
