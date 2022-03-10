import capIcon from "assets/icons/cap.png";
import freeIcon from "assets/icons/free.png";
import homeIcon from "assets/icons/home.png";
import shirtIcon from "assets/icons/shirt.png";
import sunblockIcon from "assets/icons/sunblock.png";
import umbrellaIcon from "assets/icons/umbrella.png";
import sunglassesIcon from "assets/icons/sunglasses.png";

const icons = {
  baixo: [
    {
      icon: freeIcon,
      msg: "Não são necessárias medidas de proteção. Divirta-se :D",
    },
  ],
  moderado: [
    {
      icon: shirtIcon,
      msg: "Vestimenta para cobrir boa parte do seu corpo",
    },
    { icon: capIcon, msg: "Um chapéu será interessante para cobrir o rosto" },
    {
      icon: sunblockIcon,
      msg: "Dentro desse nível peles sensíveis começam a queimar a partir de 12 minutos de exposição",
    },
  ],
  alto: [
    { icon: shirtIcon, msg: "Vestimenta para cobrir boa parte do seu corpo" },
    { icon: capIcon, msg: "Um chapéu será interessante para cobrir o rosto" },
    {
      icon: sunblockIcon,
      msg: "Dentro desse nível peles sensíveis começam a queimar a partir de 8 minutos de exposição",
    },
    { icon: umbrellaIcon, msg: "Procurar sombra entre as 12h e às 16h" },
  ],
  "muito-alto": [
    { icon: shirtIcon, msg: "Vestimenta para cobrir boa parte do seu corpo" },
    { icon: capIcon, msg: "Um chapéu será interessante para cobrir o rosto" },
    {
      icon: sunblockIcon,
      msg: "Dentro desse nível peles sensíveis começam a queimar a partir de 6 minutos de exposição",
    },
    { icon: umbrellaIcon, msg: "Procurar sombra entre as 12h e às 16h" },
    { icon: sunglassesIcon, msg: "Óculos de sol com filtro UV será excelente" },
  ],
  extremo: [
    { icon: shirtIcon, msg: "Vestimenta para cobrir boa parte do seu corpo" },
    { icon: capIcon, msg: "Um chapéu será interessante para cobrir o rosto" },
    {
      icon: sunblockIcon,
      msg: "Dentro desse nível peles sensíveis começam a queimar a partir de 4 minutos de exposição",
    },
    { icon: umbrellaIcon, msg: "O ideal é EVITAR TODA exposição solar" },
    { icon: sunglassesIcon, msg: "Óculos de sol com filtro UV será excelente" },
    { icon: homeIcon, msg: "O ideal é EVITAR TODA exposição solar" },
  ],
};

export { icons };
