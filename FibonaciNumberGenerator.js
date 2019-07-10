// JavaScript Document
function Fibonacci(x){
	
	var i = 0;
	var j = 1;
	var k = 0;
	 document.write("Fibonacci Sequence as below till user input : " + x + "</br>");
	
	if( x ==0)
	{
		document.write( i);
	}
	else
	{
		while(k <= x)
	{
		if (k == 0)
		{
			document.write( i + ", ");
			document.write( j + ", ");
			k++;
		}
		else
		{
			k = i + j;
			i = j;
			j = k;
			if (i + j <= x)
			{
				document.write( k + ", ");
			}
			else
			{
				document.write( k );
				break;
			}
		}
	}
	}
	
	
}