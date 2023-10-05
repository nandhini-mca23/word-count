var para=`Some of the biggest and most "expensive" transportation! projects in the world have involved building bridges. Bridges are crucial links that carry cars, trucks and trains across bodies of water, mountain gorges or other roads. As a result, they are one of the most important aspects of civil engineering and are subject to intense scrutiny, especially when they collapse. Bridge collapses can be tragic events, leading to loss of life and serious property damage. That is why bridge engineers, designers and builders must always take their jobs very seriously. The best way for them to prevent these accidents is to understand why bridges collapse in the first place. Understanding bridge collapses can lead to major changes in the design, construction and safety of future building projects. The following are main reasons why bridges fall.`
para=para.toLowerCase();

para=para.replace(/[,.!#$@%&""]/g,'')
console.log(para);

para=para.split(" ");

var newarray=[]
var number='5';
var count=1;
for(let i=0;i<para.length;i++){
	if(para[i]!=number){
        for(let j=i+1;j<para.length;j++){
			if(para[i]==para[j]){
				count++;
				para[j]=number;
			}
		}
		
		newarray.push([para[i],count]);
		count=1;
	}
}
console.log(newarray);

for(let x=0;x<newarray.length;x++){
	for(let y=x+1;y<newarray.length;y++ ){
		if(newarray[x][1]<newarray[y][1]){
			let temp=newarray[x];
			newarray[x]=newarray[y];
			newarray[y]=temp;
		}
	}
}
var top=newarray.slice(0,3);
console.log(top);

var text=""

for(let z=0;z<newarray.length;z++){
	
	text=text+"<h3>"+newarray[z][0]+"---"  +newarray[z][1] + "times "+"</h3>"+"<hr>"
}
document.getElementById('count').innerHTML=text;
