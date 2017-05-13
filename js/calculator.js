var calculator = {
	tambah : function(a,b) {
		return a + b;
	},
	kurang : function(a,b) {
		return a - b;
	},
	kali : function(a,b) {
		return a * b;
	},
	bagi : function(a,b) {
		return a / b;
	},
	samadengan : function(a,b) {
		//jika lebih besar a
		if (a > b) {
			return a + ' lebih besar dari ' + b;
		} 
		//jika lebih besar b
		else if (a < b) {
			return a + ' lebih kecil dari ' + b;
		} 
		//a sama dengan b
		else {
			return a + ' sama dengan ' + b;
		}
	}
};

console.log("2 + 3 = " + calculator.tambah(2,3));
console.log("4 - 1 = " + calculator.kurang(4,1));
console.log("4 * 5 = " + calculator.kali(4,5));
console.log("26 / 5 = " + calculator.bagi(26,5));
console.log("5 dibandingkan 5 > " + calculator.samadengan(5,5));