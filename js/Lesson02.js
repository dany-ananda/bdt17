//STEP 2 - BABY STEPS

var result = 0;
var param = process.argv;

for (var i=2; i<param.length; i++) {
	result += Number(param[i]);
};
console.log(result);