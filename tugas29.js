function regex(patt) {
	let data = "Belajar menimba ilmu programming bersama Niomic";
	return patt.exec(data);
}

var patt = new RegExp("bersama")

console.log(regex(patt))
