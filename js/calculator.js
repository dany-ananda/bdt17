var calculator = {
	tambah : function(a,b) {
		return parseFloat(a) + parseFloat(b);
	},
	kurang : function(a,b) {
		return parseFloat(a) - parseFloat(b);
	},
	kali : function(a,b) {
		return parseFloat(a) * parseFloat(b);
	},
	bagi : function(a,b) {
		return parseFloat(a) / parseFloat(b);
	},
	cek : function(a,b) {
		//jika lebih besar a
		if (parseFloat(a) > parseFloat(b)) {
			return a + ' lebih besar dari ' + b;
		} 
		//jika lebih besar b
		else if (parseFloat(a) < parseFloat(b)) {
			return a + ' lebih kecil dari ' + b;
		} 
		//a sama dengan b
		else {
			return a + ' sama dengan ' + b;
		}
	}
};

var txt;
switch(process.argv[3]) {
	case "tambah":
		txt = "" + process.argv[2] + " + " + process.argv[4] + " = " + calculator.tambah(process.argv[2],process.argv[4]);
		break;
	case "kurang":
		txt = "" + process.argv[2] + " - " + process.argv[4] + " = " + calculator.kurang(process.argv[2],process.argv[4]);
		break;
	case "kali":
		txt = "" + process.argv[2] + " * " + process.argv[4] + " = " + calculator.kali(process.argv[2],process.argv[4]);
		break;
	case "bagi":
		txt = "" + process.argv[2] + " / " + process.argv[4] + " = " + calculator.bagi(process.argv[2],process.argv[4]);
		break;
	case "cek":
		txt = "" + process.argv[2] + " dibandingkan " + process.argv[4] + " => " + calculator.cek(process.argv[2],process.argv[4]);
		break;
}

console.log(txt);
/*
console.log("2 + 3 = " + calculator.tambah(2,3));
console.log("4 - 1 = " + calculator.kurang(4,1));
console.log("4 * 5 = " + calculator.kali(4,5));
console.log("26 / 5 = " + calculator.bagi(26,5));
console.log("5 dibandingkan 5 > " + calculator.samadengan(5,5));
*/