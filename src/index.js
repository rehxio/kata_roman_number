const ROMANVALUES = {
	1000: "M",
	900: "CM",
	500: "D",
	400: "CD",
	100: "C",
	90: "XC",
	50: "L",
	40: "XL",
	10: "X",
	9: "IX",
	5: "V",
	4: "IV",
	1: "I"
};

export const toRoman = (value) => {
   if(typeof(value)!==typeof(1)){
      throw new Error();
   } else if (value < 1) {
      return "Error";
   } else if (value > 3000){
      return "Es muy grande";
   } else 
      return convertRoman(value);  
};

let convertRoman = (value) => {
	let key = 0;
	let resultado = '';
	const propiedad = Object.getOwnPropertyNames(ROMANVALUES,key).reverse();
	while (value > 0) {
		if (value < propiedad[key]) {
			key++;
		} else {
			value = value - propiedad[key];
			resultado = resultado + ROMANVALUES[propiedad[key]];
		}
	}
	return resultado;
};