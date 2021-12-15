var form=document.createElement('form');
var div1=document.createElement('div')
var label=document.createElement('label');
label.setAttribute('for','First Name');
label.innerHTML='First Name';
div1.append(label);
var input=document.createElement('input');
var div2=document.createElement('div')
input.setAttribute('type','text');
input.setAttribute('id','First Name');
div2.append(input);
form.append(div1,div2)



var label1=document.createElement('label');
var div3=document.createElement('div')
label1.setAttribute('for','Middle Name');
label1.innerHTML='Middle Name';
div3.append(label1);
var input1=document.createElement('input');
var div4=document.createElement('div')
input1.setAttribute('type','text');
input1.setAttribute('id','Middle Name');
div4.append(input1)
form.append(div3,div4);


var label2=document.createElement('label');
var div5=document.createElement('div')
label2.setAttribute('for','Last Name');
label2.innerHTML='Last Name';
div5.append(label2);
var input2=document.createElement('input');
var div6=document.createElement('div')
input2.setAttribute('type','text');
input2.setAttribute('id','Last Name');
div6.append(input2)
form.append(div5,div6);


var label3=document.createElement('label');
var div7=document.createElement('div')
label3.setAttribute('for','Email');
label3.innerHTML='Email';
div7.append(label3);
var input3=document.createElement('input');
var div8=document.createElement('div')
input3.setAttribute('type','Email');
input3.setAttribute('id','Email');
div8.append(input3)
form.append(div7,div8)


var input4=document.createElement('input');
input4.setAttribute('type','submit');
input4.setAttribute('id','sub');
form.append(input4);
document.body.append(form);
let res=document.getElementById('sub').addEventListener('click',foo);

function foo(){
    let a=document.getElementById("First Name").value;
   let b=document.getElementById("Middle Name").value;
    let c=document.getElementById("Last Name").value;
    let d=document.getElementById("Email").value;
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}










