window.onload=async()=>{
	alert("저희 웹사이트에 오신것을 환영해요!");
	var check2= await confirm("들어오실건가요?");
	if(!check2){
		location.href="https://www.google.co.kr/";
	}
};