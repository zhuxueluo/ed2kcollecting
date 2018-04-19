var anchorList = document.querySelectorAll('a[href]')

var filter = function(alist){
	var ret = []
for(var i =0; i< alist.length; i++){
	if(alist[i].href.indexOf('ed2k://')>=0){
		ret.push(alist[i].href);
	}
}
return ret;
};
var afilterd = filter(alist);

var wh = window.open();
var printResult = function(newWindow, hrefList){
	for(var i=0; i< hrefList.length; i++){
		var p = newWindow.document.createElement('p')	;
		var txt = 	newWindow.document.createTextNode(hrefList[i]);
		p.append(txt);
			newWindow.document.body.append(p);
			var br = 	newWindow.document.createElement('br');
			newWindow.document.body.append(br);
			
		
		
	}

};
printResult(wh,afilterd);
