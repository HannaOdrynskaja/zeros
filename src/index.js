module.exports = function getZerosCount(number) {
  var num = number;
	var countDegr=0;
	var res = num; 
	var i = 1; 
		while (num>=Math.pow(5,i)) {
				res=Math.floor(num/Math.pow(5,i));
				countDegr=countDegr+res;
				i++;		
		}	
return countDegr;		
}
