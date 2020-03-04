var two = document.getElementsByClassName("list_one_type2");
var data=[];
var arr=[];
for(let i=0;i<two.length;i++){
	
	var obj={};
	var imgSrc = two[i].getElementsByTagName("img");
	var iname = two[i].getElementsByClassName("name");
	var detail = two[i].getElementsByClassName("briefwarp");
	var price = two[i].getElementsByClassName("price");
	obj.imgSrc = imgSrc[0].src;
	obj.name=iname[0].innerText;
	obj.detail = detail[0].innerText;
	obj.price = price[0].innerHTML;
	data.push(obj);
}


var two = document.getElementsByClassName("list_two_type13");
var data=[];
var arr=[];
for(let i=0;i<two.length;i++){
	
	var obj={};
	var imgSrc = two[i].getElementsByTagName("img");
	var iname = two[i].getElementsByClassName("name");
	var detail = two[i].getElementsByClassName("brief");
	var price = two[i].getElementsByClassName("price");
	obj.imgSrc = imgSrc[0].src;
	obj.name=iname[0].innerText;
	obj.detail = detail[0].innerText;
	obj.price = price[0].innerHTML;
	data.push(obj);
	var obj2={};
	obj2.imgSrc = imgSrc[1].src;
	obj2.name=iname[1].innerText;
	obj2.detail = detail[1].innerText;
	obj2.price = price[1].innerHTML;
	data.push(obj2);
}


var two = document.getElementsByClassName("cells_auto_fill multi_cell");
var data=[];
for(let i=3;i<two.length;i++){
	
	var obj=[];
	var imgSrc = two[i].getElementsByTagName("img");
	for(let i=0;i<imgSrc.length;i++){
		data.push(imgSrc[i].src);
	
    }
}