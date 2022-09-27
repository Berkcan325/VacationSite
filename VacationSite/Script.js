function Sum()
{
	var a;
	var radios;
	var radios2;
	var ele = document.getElementsByName('br1');
              
            for(i = 0; i < ele.length; i++) {
                if(ele[i].checked)
                radios=ele[i].value;
            }
    var ele2 = document.getElementsByName('br2');
              
            for(i = 0; i < ele.length; i++) {
                if(ele[i].checked)
                radios2=ele[i].value;
            }
	a=document.getElementById("suma").value*(radios+radios2)*10;
	window.alert("Сумата на екскурзията е "+a+"лв");
}
function Goto1()
{
	window.location.href = "USA.html";
}
function Goto2()
{
	window.location.href = "Ukraine.html";
}
function Goto3()
{
	window.location.href = "Poland.html";
}