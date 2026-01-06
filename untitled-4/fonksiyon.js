function token(){
  // Get token from localStorage
  var tokenlink = localStorage.getItem('gibToken');
  var myRegexp= /token=(\S+)/;

	  if (!tokenlink) { //localde tokenlink yok ise sayfada arıyoruz

		var tokenlink =$('#token').val();
	 	var token = myRegexp.exec(tokenlink)

		return token[1];

	  }else{ //localde tokenlink var ise 


	var token = myRegexp.exec(tokenlink);

	if (token && token[1]) {
		return token[1];
	}
		return null;

	}
  

}





//vdKodu,vdOrgId
function vdKodu(){
  // localStorage'dan vergi dairesi kodunu al
  var savedVdKodu = localStorage.getItem('vdKodu');
  if (savedVdKodu && savedVdKodu.trim() !== '') {
    return savedVdKodu.trim();
  }
  
}


function vdOrgId(){

var vd_kodu=vdKodu();

return orgIDGetir(vd_kodu);


}

function vdDiziGetir() {
    
        return ['016105','016111','016112','016201','016202','016203','016204','016205','016206','016207','016208','016250','016251','016252','016253','016254','016255','016256','016257','016258','016259','016260','016261'];
    }



function tabloSil(){

    $("#myTable").remove();
    $("#myTable1").remove();
    $("#myTable2").remove();
    $("#myTable4").remove();
    $("#myTable5").remove();
    $("#myTable6").remove();
    $("#myTable7").remove();
    $("#myTable8").remove();
    $("#myTable9").remove();
    $("#myTable10").remove();
    $("#myTable11").remove();
    $("#myTable12").remove();
    $("#myTable13").remove();
    $("#myTable14").remove();
    $("#myTable15").remove();
    $("#myTable16").remove();
    $("#myTable17").remove();
    $("#myTable18").remove();
    $("#myTable19").remove();
    $("#myTable20").remove();
    $("#myTable21").remove();
    $("#myTable22").remove();
    $("#myTable23").remove();
    $("#myTable24").remove();
    $("#myTable25").remove();
	$("#myTable700").remove();
	$("#myTable701").remove();
	$("#myTable702").remove();
	$("#myTable703").remove();
	$("#myTable704").remove();
	$("#myTable705").remove();
	$("#myTable706").remove();
    $("#error-container").remove();
    $("#notlar").remove();
    
    
    
}


function evdoRaporLogin(token){

	var url= 'http://10.251.63.99/evdorapor_server/assos-login?&assoscmd=shlogin&rtype=json&token=' + token;
	var user = postRemote(url);
	var obj =JSON.parse(user);
	
	return (obj.token);


}


function sessionID(token){

	var callid=makeid(13) + '-';

	var url= 'http://10.251.63.99/evdorapor_server/dispatch?cmd=userSessionService_getUserSessionInfo&callid=';
	var url=url.concat(callid + '61&module=evdorapor', '&token=', token, '&jp=%7B%22rfDataInfo%22%3A%5B%5D%7D');
	var getURl = postRemote(url);
	var obj =JSON.parse(getURl);

	return (obj.data.ASessionId);

}


function izahaDavetRaporLogin(token){

	var url= 'http://arkaofis.gelbim.gov.tr:32174/izah-server/assos-login?&assoscmd=shlogin&rtype=json&token=' + token;
	var user = postRemote(url);
	var obj =JSON.parse(user);
	
	return (obj.token);


}

function izahaDavetsessionID(token){

	var callid=makeid(13) + '-';

	var url= 'http://arkaofis.gelbim.gov.tr:32174/izah-server/dispatch?cmd=userSessionService_getUserSessionInfo&callid=';
	var url=url.concat(callid + '61&module=izah', '&token=', token, '&jp=%7B%22rfDataInfo%22%3A%5B%7B%22rf%22%3A%22RF_IZAHA_DAVET_VERGI_DAIRELERI%22%2C%22v%22%3A%2234%22%7D%2C%7B%22rf%22%3A%22RF_IZAHA_DAVET_SMIYB_DURUMU%22%2C%22v%22%3A%2230%22%7D%2C%7B%22rf%22%3A%22RF_IZAHA_DAVET_KONU%22%2C%22v%22%3A%2231%22%7D%2C%7B%22rf%22%3A%22RF_IZAHA_DAVET_DURUMU%22%2C%22v%22%3A%2230%22%7D%2C%7B%22rf%22%3A%22RF_IZAHA_DAVET_ILLER%22%2C%22v%22%3A%2230%22%7D%2C%7B%22rf%22%3A%22RF_IZAHA_DAVET_KOMISYON_TURU%22%2C%22v%22%3A%2230%22%7D%5D%7D');
	var getURl = postRemote(url);
	var obj =JSON.parse(getURl);

	return (obj.data.ASessionId);

}

function izahaDavetLoginDestroy(token,SessionId){

	var callid=makeid(13) + '-';

//&jp=%7B%22ASessionId%22%3A%2291581607612453691525334678253371159158%22%7D

	var url= 'http://arkaofis.gelbim.gov.tr:32174/izah-server/dispatch?cmd=sessionCsapService_destroySession&callid=';
	var url=url.concat(callid + '22&module=izah', '&token=', token, '&jp=%7B%22ASessionId%22%3A%22',SessionId,'%22%7D');
	var getURl = postRemote(url);
	var obj =JSON.parse(getURl);

	alert("İzaha Davet Oturumu Kapatıldı");	

}

function evdoRaporLoginDestroy(token,SessionId){

	var callid=makeid(13) + '-';

	var url= 'http://10.251.63.99/evdorapor_server/dispatch?cmd=sessionCsapService_destroySession&callid=';
	var url=url.concat(callid + '22&module=evdorapor', '&token=', token, '&jp=%7B%22ASessionId%22%3A%22',SessionId,'%22%7D');
	var getURl = postRemote(url);
	var obj =JSON.parse(getURl);

	document.getElementById("oturumDurumu").innerHTML="Oturum Kapatıldı";

	document.getElementById("oturumDurumu").style.backgroundColor="Green";

	console.log("EVDB Rapor Oturumu Kapatıldı");	

}


function evdoRaporLoginDestroy2(token,SessionId){

	var callid=makeid(13) + '-';

	var url= 'http://10.251.63.99/evdorapor_server/dispatch?cmd=sessionCsapService_destroySession&callid=';
	var url=url.concat(callid + '22&module=evdorapor', '&token=', token, '&jp=%7B%22ASessionId%22%3A%22',SessionId,'%22%7D');
	var getURl = postRemote(url);
	var obj =JSON.parse(getURl);

	console.log("EVDB Rapor Oturumu Kapatıldı");	

}


function getAssosLogin(){

	if (evdbAssosLogin==""){

	 var evdbAssosLogin=prompt("EVDB Assos Login Şifrenizi Giriniz",localStorage.getItem("evdbAssosLogin"));
	   localStorage.setItem("evdbAssosLogin", evdbAssosLogin);


	}

	if (evdbRaporAssosLogin==""){

		var evdbRaporAssosLogin=prompt("EVDB Rapor Assos Login Şifrenizi Giriniz",localStorage.getItem("evdbRaporAssosLogin"));
	   localStorage.setItem("evdbRaporAssosLogin", evdbRaporAssosLogin);


	}
		  
 
  
}

 function ihbarname_getir(ihbarnameNo,token){
  
   
   window.open('http://10.251.63.99/evdorapor_server/pdf?params=%7B%22serviceName%22%3A%22evdoLRTarhiyatServices_ihbarnameFisnoSorgulama%22%2C%22reportName%22%3A%22RP_EVDO_IHBARNAME_FIS_SORGULAMA%22%2C%22IHBARNAME_FISNO%22%3A%22'+ihbarnameNo +'%22%7D&cmd=evdorapor&token='+token+'');
     
   
  }
  
   function tahakkuk_getir(tahakkukNo,token){
  
   
   window.open('http://10.251.63.99/evdorapor_server/pdf?params=%7B%22serviceName%22%3A%22evdoLRTahakkukServices_tahakkukFisiSorgulama%22%2C%22reportName%22%3A%22RP_EVDO_MUKELLEF_LISTELERI_THK_FISI_SORGULAMA%22%2C%22FISNUMARASI%22%3A%22' + tahakkukNo+ '%22%7D&cmd=evdorapor&token='+token+'');

   
  }
  
  
   function borc_getir(vkn,vade,token){
  
  
  //
   window.open('http://10.251.63.99/evdorapor_server/pdf?params=%7B%22serviceName%22%3A%22evdoLrBorcServices_belirliTariheKadarSorgulama%22%2C%22reportName%22%3A%22RP_EVDO_BORC_BELIRLITARIHEKADAR_SORGULAMA%22%2C%22VERGINO%22%3A%22'+vkn+'%22%2C%22TCKIMLIKNO%22%3A%22%22%2C%22PLAKANO%22%3A%22%22%2C%22ANAVERGIKODU%22%3A%22%22%2C%22SORGUTARIHI%22%3A%22'+vade+'%22%7D&cmd=evdorapor&token='+ token + '');
     
   
  }
  
   function tahakkuk_getir(tahakkukNo,token){
  
   
   window.open('http://10.251.63.99/evdorapor_server/pdf?params=%7B%22serviceName%22%3A%22evdoLRTahakkukServices_tahakkukFisiSorgulama%22%2C%22reportName%22%3A%22RP_EVDO_MUKELLEF_LISTELERI_THK_FISI_SORGULAMA%22%2C%22FISNUMARASI%22%3A%22' + tahakkukNo+ '%22%7D&cmd=evdorapor&token='+token+'');

   
  }
  
  
  function tahsilatListeGetir(vkn,token){
  
  //tahsilatta sadece vezne ve nakit olan ödemeleri getiriyor
  
  window.open('diger/tahsilat.html?vkn=' + vkn + "&token=" + token );
  
  }
  

function kdvMatrahgetir(vkn,yil,month){

	
	var callid=makeid(13) + '-';
	var tutar=0;

	var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=bynIslemleriService_yilKdvBynSorgula&callid='; 
	var url5=url5.concat(callid + '122', '&token=', token(), '&jp=%7B%22vkn%22%3A%22',vkn,'%22%2C%22vdKodu%22%3A%22%22%2C%22yil%22%3A%22',yil,'%22%7D');
	var liste = getRemote(url5);
	var obj =JSON.parse(liste);

	if (month=="01") {tutar= obj.data.liste[0].ay1;}
	else if (month=="02") {tutar= obj.data.liste[0].ay2;}
	else if (month=="03") {tutar= obj.data.liste[0].ay3;}
	else if (month=="04") {tutar= obj.data.liste[0].ay4;}
	else if (month=="05") {tutar= obj.data.liste[0].ay5;}
	else if (month=="06") {tutar= obj.data.liste[0].ay6;}
	else if (month=="07") {tutar= obj.data.liste[0].ay7;}
	else if (month=="08") {tutar= obj.data.liste[0].ay8;}
	else if (month=="09") {tutar= obj.data.liste[0].ay9;}
	else if (month=="10") {tutar= obj.data.liste[0].ay10;}
	else if (month=="11") {tutar= obj.data.liste[0].ay11;}
	else if (month=="12") {tutar= obj.data.liste[0].ay12;}
	
  if (tutar==""){return "Veri Yok";}else{return Number(tutar).toLocaleString("tr-TR");}

}


function kdvMatrahgetir1(vkn,yil,month,token){

	
	try{
	
	var callid=makeid(13) + '-';
	var tutar=0;
//	var vergi_dairesi=vdKodu();
	var vergi_dairesi="";
	var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=bynIslemleriService_yilKdvBynSorgula&callid='; 
	var url5=url5.concat(callid + '122', '&token=', token, '&jp=%7B%22vkn%22%3A%22',vkn,'%22%2C%22vdKodu%22%3A%22',vergi_dairesi,'%22%2C%22yil%22%3A%22',yil,'%22%7D');
	var liste = getRemote(url5);
	var obj =JSON.parse(liste);

	if (month=="01") {tutar= obj.data.liste[0].ay1;}
	else if (month=="02") {tutar= obj.data.liste[0].ay2;}
	else if (month=="03") {tutar= obj.data.liste[0].ay3;}
	else if (month=="04") {tutar= obj.data.liste[0].ay4;}
	else if (month=="05") {tutar= obj.data.liste[0].ay5;}
	else if (month=="06") {tutar= obj.data.liste[0].ay6;}
	else if (month=="07") {tutar= obj.data.liste[0].ay7;}
	else if (month=="08") {tutar= obj.data.liste[0].ay8;}
	else if (month=="09") {tutar= obj.data.liste[0].ay9;}
	else if (month=="10") {tutar= obj.data.liste[0].ay10;}
	else if (month=="11") {tutar= obj.data.liste[0].ay11;}
	else if (month=="12") {tutar= obj.data.liste[0].ay12;}
	
if (tutar==0){

		return 0;

	}else  if (tutar==""){
		
		return "Veri Yok";

	}else{
	
		return tlCevir(tutar);

		}

}



catch(err){

	return "Hata";

}

}

function tahsilat(vkn,vergiDairesi,vergiKodu,donem1,donem2) {

	try{

		
		var mukellef_sayisi=0;
		
		
		var callid=makeid(13) + '-';
		var org_id=orgIDGetir(vergiDairesi);

///

		var url= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=mhkTahsilatService_tahsilatSorgula&callid=';
		var url=url.concat(callid + '17', '&token=', token(), '&jp=%7B%22vkn%22%3A%22',vkn,'%22%2C%22tckn%22%3A%22%22%2C%22vergiKodu%22%3A%22',vergiKodu,'%22%2C%22basDonem%22%3A%22',donem1,'%22%2C%22bitDonem%22%3A%22',donem2,'%22%2C%22orgOid%22%3A%22',org_id,'%22%2C%22bastar%22%3A%22%22%2C%22bittar%22%3A%22%22%2C%22thsSekli%22%3A%22%22%2C%22odmSekli%22%3A%22%22%2C%22thsIslemTuru%22%3A%22%22%7D');
		var tahsilat = getRemote(url);
		var obj =JSON.parse(tahsilat);
		var tahsilat=0;


		$.each(obj.data, function(index, satir){
		  if (satir.islemTuru!="32"){   //Başka saymanlık adına otomatik tahsilat engelliyor.
				$.each(satir.thsSatirDetaylari, function(index, satir1){
					
				tahsilat=tahsilat + satir1.odenen + satir1.feri + satir1.tecilGz ;
		
			});

		}

		});


		return Number(tahsilat).toLocaleString("tr-TR");
	}


	catch(err){

		return "Hata ile karşılaşıldı";

	}

}  


function tahsilat1(vkn,vergiDairesi,vergiKodu,donem1,donem2,basTar,bitTar) {

	try{

		var mukellef_sayisi=0;
		var callid=makeid(13) + '-';
		var org_id=orgIDGetir(vergiDairesi);
		var nakit=0;
		var mahsup=0;
		var baskaSaymanlik=0;
		var diger=0;
		var sonTarihTahsilatDizi1=new Array();
///

		var url= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=mhkTahsilatService_tahsilatSorgula&callid=';
		var url=url.concat(callid + '17', '&token=', token(), '&jp=%7B%22vkn%22%3A%22',vkn,'%22%2C%22tckn%22%3A%22%22%2C%22vergiKodu%22%3A%22',vergiKodu,'%22%2C%22basDonem%22%3A%22',donem1,'%22%2C%22bitDonem%22%3A%22',donem2,'%22%2C%22orgOid%22%3A%22',org_id,'%22%2C%22bastar%22%3A%22',basTar,'%22%2C%22bittar%22%3A%22',bitTar,'%22%2C%22thsSekli%22%3A%22%22%2C%22odmSekli%22%3A%22%22%2C%22thsIslemTuru%22%3A%22%22%7D');
		var tahsilat = getRemote(url);
		var obj =JSON.parse(tahsilat);
		var tahsilat=0;
		var sonTarihTahsilatDizi=new Array();
		

		if (obj.data.length>0){

				$.each(obj.data, function(index, satir){

					  if (satir.islemTuru!="32"){   //Başka saymanlık adına otomatik tahsilat engelliyor.
					
							$.each(satir.thsSatirDetaylari, function(index, satir1){
							
							if (satir.thsSekli=="0" ||	satir.thsSekli=="1") { nakit= nakit + satir1.odenen + satir1.feri + satir1.tecilGz } //banka ve vezne ödemeleri

							else if (satir.thsSekli=="64") { mahsup= mahsup + satir1.odenen + satir1.feri + satir1.tecilGz } //Başka Saymanlık Tarafından ve mahsuben

							else if (satir.thsSekli=="4") { baskaSaymanlik= baskaSaymanlik + satir1.odenen + satir1.feri + satir1.tecilGz } //Başka Saymanlık Tarafından ve mahsuben

							else if (satir.thsSekli=="8" ||	satir.thsSekli=="16" ||	satir.thsSekli=="32") { diger= diger + satir1.odenen + satir1.feri + satir1.tecilGz } //diğer

							tahsilat=tahsilat + satir1.odenen + satir1.feri + satir1.tecilGz ;
						
							sonTarihTahsilatDizi.push(satir.odemeBelgeNo);

					
							});

					}

				});

				if (sonTarihTahsilatDizi.length>0){

					sonTarihTahsilatDizi1= sonTarihTahsilatDizi.sort();
					sonTarihTahsilat=(sonTarihTahsilatDizi1[sonTarihTahsilatDizi.length-1]).substr(0,8);

				
				}else{

				sonTarihTahsilat="";

				}

				return JSON.stringify({
					nakit: tlCevir(nakit),
					mahsup: tlCevir(mahsup),
					baskaSaymanlik: tlCevir(baskaSaymanlik),
					diger: tlCevir(diger),
					toplam: tlCevir(tahsilat),
					sonTarih: sonTarihTahsilat
				});

		}else{

		return JSON.stringify({
			nakit: "0,00",
			mahsup: "0,00", 
			baskaSaymanlik: "0,00", 
			diger: "0,00",
			toplam: "0,00",
			sonTarih: ""
		});
	}

	} catch(err) {
		console.log("tahsilat1 fonksiyonu hatası:", err);
		// Hata durumunda exception fırlat ki üst seviyede yakalanabilsin
		throw new Error("Tahsilat sorgulama hatası: " + err.message);
	}
}

function borcDurumu (vkno,vdkodu,vergiKodu,vadeTar1,vadeTar2) { // Tek Daire için borç sorgulama

try{
	var myRegex= /[0-9]+/;
	
	
	
	var callid=makeid(13) + '-';
	var vadesiGecmis=0;
	var vadesiGelmemis=0;
	var orgID=orgIDGetir(vdkodu);
	
	var url_kdv= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=mhkBorcService_detayliBorcBilgileriGetir&callid=';
	var url_kdv=url_kdv.concat(callid + '85', '&token=', token(), '&jp=%7B%22input%22%3A%7B%22vkn%22%3A%22',vkno,'%22%2C%22tckn%22%3A%22%22%2C%22vdKodu%22%3A%22',vdkodu,'%22%2C%22orgOid%22%3A%22',orgID,'%22%2C%22anaVergiKodu%22%3A%22',vergiKodu,'%22%2C%22vergiKodu%22%3A%22%22%2C%22vergilendirmeDonemiBas%22%3A%22%22%2C%22vergilendirmeDonemiBit%22%3A%22%22%2C%22vadeBasTarih%22%3A%22',vadeTar1,'%22%2C%22vadeBitTarih%22%3A%22',vadeTar2,'%22%2C%22unvan%22%3A%22%22%7D%7D');
	var kdv_borcu = getRemote(url_kdv);
	var obj_kdv_borcu =JSON.parse(kdv_borcu);
	
	vadesiGecmis = Number(obj_kdv_borcu.data.satir12).toLocaleString("tr-TR"); //M - VADESİ GEÇMİŞ VE BUGÜN ÖDENMESİ GEREKEN TOPLAM BORÇ (A+F+G+I) GETİRİYOR
	vadesiGelmemis =Number(obj_kdv_borcu.data.satir13).toLocaleString("tr-TR"); //M - VADESİ GELMEMİŞ TOPLAM BORÇ (B+H+J)
	
	return "VADESİ GEÇMİŞ : " + vadesiGecmis + "<br>" + "VADESİ GELMEMİŞ : "  + vadesiGelmemis;
}


catch(err){

	return "Hata ile Karşılaşıldı";
}

	
}


function borcDurumu1 (vkno,vdkodu,vadeTar1,vadeTar2) { //tek vergi dairesi için sorgulama

try{
	var myRegex= /[0-9]+/;
	
	
	
	var callid=makeid(13) + '-';
	var vadesiGecmis=0;
	var vadesiGelmemis=0;
	var orgID=orgIDGetir(vdkodu);
	
	var url_kdv= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=mhkBorcService_detayliBorcBilgileriGetir&callid=';
	var url_kdv=url_kdv.concat(callid + '85', '&token=', token(), '&jp=%7B%22input%22%3A%7B%22vkn%22%3A%22',vkno,'%22%2C%22tckn%22%3A%22%22%2C%22vdKodu%22%3A%22',vdkodu,'%22%2C%22orgOid%22%3A%22',orgID,'%22%2C%22anaVergiKodu%22%3A%22%22%2C%22vergiKodu%22%3A%22%22%2C%22vergilendirmeDonemiBas%22%3A%22%22%2C%22vergilendirmeDonemiBit%22%3A%22%22%2C%22vadeBasTarih%22%3A%22',vadeTar1,'%22%2C%22vadeBitTarih%22%3A%22',vadeTar2,'%22%2C%22unvan%22%3A%22%22%7D%7D');
	var kdv_borcu = getRemote(url_kdv);
	var obj_kdv_borcu =JSON.parse(kdv_borcu);
	
	vadesiGecmis = Number(obj_kdv_borcu.data.satir12).toLocaleString("tr-TR"); //M - VADESİ GEÇMİŞ VE BUGÜN ÖDENMESİ GEREKEN TOPLAM BORÇ (A+F+G+I) GETİRİYOR
	vadesiGelmemis =Number(obj_kdv_borcu.data.satir13).toLocaleString("tr-TR"); //M - VADESİ GELMEMİŞ TOPLAM BORÇ (B+H+J)
	
	return "VADESİ GEÇMİŞ : " + vadesiGecmis + "<br>" + "VADESİ GELMEMİŞ : "  + vadesiGelmemis;
}


catch(err){

	return "Hata ile Karşılaşıldı";
}

	
}


function borcDurumu2 (vkno,vdkodu,vergiKodu,vergiDonemi1,vergiDonemi2,vadeTar1,vadeTar2) {



	var myRegex= /[0-9]+/;
	
	
	
	var callid=makeid(13) + '-';
	var vadesiGecmis=0;
	var vadesiGelmemis=0;
	var orgID=orgIDGetir(vdkodu);
	var hata=true;
	
	while(hata){	

			var url_kdv= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=mhkBorcService_detayliBorcBilgileriGetir&callid=';
			var url_kdv=url_kdv.concat(callid + '85', '&token=', token(), '&jp=%7B%22input%22%3A%7B%22vkn%22%3A%22',vkno,'%22%2C%22tckn%22%3A%22%22%2C%22vdKodu%22%3A%22',vdkodu,'%22%2C%22orgOid%22%3A%22',orgID,'%22%2C%22anaVergiKodu%22%3A%22',vergiKodu,'%22%2C%22vergiKodu%22%3A%22%22%2C%22vergilendirmeDonemiBas%22%3A%22',vergiDonemi1,'%22%2C%22vergilendirmeDonemiBit%22%3A%22',vergiDonemi2,'%22%2C%22vadeBasTarih%22%3A%22',vadeTar1,'%22%2C%22vadeBitTarih%22%3A%22',vadeTar2,'%22%2C%22unvan%22%3A%22%22%7D%7D');
			var kdv_borcu = getRemote(url_kdv);
			var obj_kdv_borcu =JSON.parse(kdv_borcu);
			
			if (obj_kdv_borcu.error==undefined){

			hata=false;

			vadesiGecmis = Number(obj_kdv_borcu.data.satir12).toLocaleString("tr-TR"); //M - VADESİ GEÇMİŞ VE BUGÜN ÖDENMESİ GEREKEN TOPLAM BORÇ (A+F+G+I) GETİRİYOR
			vadesiGelmemis =Number(obj_kdv_borcu.data.satir13).toLocaleString("tr-TR"); //M - VADESİ GELMEMİŞ TOPLAM BORÇ (B+H+J)
			
			return vadesiGecmis + "-" + vadesiGelmemis;

		}else{

			console.log("Hata ile Karşılaşıldı Tekrar Deneyeceğim " +  vkno + "-" + vdkodu );		

		}

	}
	
}


function borcDurumu3 (vkn,ilgiliVD,vadeTar1,vadeTar2) { // toplam borç sorgulama

try{
	
	var callid=makeid(13) + '-';
	var vadesiGecmis=0;
//	var orgID=orgIDGetir(vdkodu);
    var vd_listesi= hangiVD3(vkn);
	var toplamBorc=0;
	var toplamBorcAsli=0;
	var ilgiliVDBorc=0;
	var ihtisasBorc=0;
		$.each(vd_listesi, function(index, vd){
			 
			var url= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=borcService_borcBilgileriGetir&callid=';
			var url=url.concat(callid + '120', '&token=', token(), '&jp=%7B%22input%22%3A%7B%22vkn%22%3A%22',vkn,'%22%2C%22tckn%22%3A%22%22%2C%22vdKodu%22%3A%22',vd,'%22%2C%22anaVergiKodu%22%3A%22%22%2C%22vergiKodu%22%3A%22%22%2C%22vergilendirmeDonemiBas%22%3A%22%22%2C%22vergilendirmeDonemiBit%22%3A%22%22%2C%22vadeBasTarih%22%3A%22',vadeTar1,'%22%2C%22vadeBitTarih%22%3A%22',vadeTar2,'%22%2C%22satirlar%22%3A%22447%22%2C%22detayliOzet%22%3A%222%22%7D%7D');
			var borc = getRemote(url);
			var obj =JSON.parse(borc);

			if (obj.error==undefined){
				
				if (obj.data.mVadesiGecmisBugunOdenmesiGerekenTop!=undefined){

					if (vd==ilgiliVD) { ilgiliVDBorc=ilgiliVDBorc + parseFloat(obj.data.mVadesiGecmisBugunOdenmesiGerekenTop); } //

					if (vd=="016250") { ihtisasBorc=ihtisasBorc + parseFloat(obj.data.mVadesiGecmisBugunOdenmesiGerekenTop); } //

					toplamBorc=toplamBorc + parseFloat(obj.data.mVadesiGecmisBugunOdenmesiGerekenTop); //M - VADESİ GEÇMİŞ VE BUGÜN ÖDENMESİ GEREKEN TOPLAM BORÇ (A+F+G+I) GETİRİYOR

					toplamBorcAsli= toplamBorcAsli +  parseFloat(obj.data.aVadesiGecmis);  // A - VADESİ GEÇMİŞ VE BUGÜN ÖDENMESİ GEREKEN VERGİ ASLI BORCU:

				}

			}else{

					toplamBorc="HATA";
					toplamBorcAsli="HATA";
					ilgiliVDBorc="HATA";
					ihtisasBorc="HATA";
			}
		});

		

	return  (tlCevir(toplamBorc) + "-" +  tlCevir(toplamBorcAsli) + "-" + tlCevir(ilgiliVDBorc) +  "-" + tlCevir(ihtisasBorc)) ;

}

catch(err){ 
	console.log("borcDurumu3 fonksiyonu hatası:", err);
	throw new Error("Borç sorgulama hatası: " + err.message);
}

}


function localTLconvert(veri){

 return (Number(veri).toLocaleString("tr-TR"));


}

function borcDurumu4 (vkn,vd,vadeTar1,vadeTar2) { // toplam borç sorgulama

try{
	
	var callid=makeid(13) + '-';

	var vadesiGecmis=0;

	var toplamBorc=0;
	
			 
			var url= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=borcService_borcBilgileriGetir&callid=';
			var url=url.concat(callid + '120', '&token=', token(), '&jp=%7B%22input%22%3A%7B%22vkn%22%3A%22',vkn,'%22%2C%22tckn%22%3A%22%22%2C%22vdKodu%22%3A%22',vd,'%22%2C%22anaVergiKodu%22%3A%22%22%2C%22vergiKodu%22%3A%22%22%2C%22vergilendirmeDonemiBas%22%3A%22%22%2C%22vergilendirmeDonemiBit%22%3A%22%22%2C%22vadeBasTarih%22%3A%22',vadeTar1,'%22%2C%22vadeBitTarih%22%3A%22',vadeTar2,'%22%2C%22satirlar%22%3A%22447%22%2C%22detayliOzet%22%3A%222%22%7D%7D');
			var borc = getRemote(url);
			var obj =JSON.parse(borc);
		
	
				if (obj.data.mVadesiGecmisBugunOdenmesiGerekenTop!=undefined){

				toplamBorc=  parseFloat(obj.data.mVadesiGecmisBugunOdenmesiGerekenTop); //M - VADESİ GEÇMİŞ VE BUGÜN ÖDENMESİ GEREKEN TOPLAM BORÇ (A+F+G+I) GETİRİYOR

				}
		

	return  tlCevir(toplamBorc) ;

}

	catch(err){ 

	return  "Hata ile karşılaşıldı" ;

	}

}
function borcDurumu5 (vkn,vd,vergiKodu,donem1,donem2,vadeTar1,vadeTar2) { // toplam borç sorgulama

try{
	var myRegex= /[0-9]+/;
	
	
	
	var callid=makeid(13) + '-';
	var vadesiGecmis=0;

	var toplamBorc=0;
	
			 
			var url= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=borcService_borcBilgileriGetir&callid=';
			var url=url.concat(callid + '120', '&token=', token(), '&jp=%7B%22input%22%3A%7B%22vkn%22%3A%22',vkn,'%22%2C%22tckn%22%3A%22%22%2C%22vdKodu%22%3A%22',vd,'%22%2C%22anaVergiKodu%22%3A%22',vergiKodu,'%22%2C%22vergiKodu%22%3A%22%22%2C%22vergilendirmeDonemiBas%22%3A%22',donem1,'%22%2C%22vergilendirmeDonemiBit%22%3A%22',donem2,'%22%2C%22vadeBasTarih%22%3A%22',vadeTar1,'%22%2C%22vadeBitTarih%22%3A%22',vadeTar2,'%22%2C%22satirlar%22%3A%22447%22%2C%22detayliOzet%22%3A%222%22%7D%7D');
			var borc = getRemote(url);
			var obj =JSON.parse(borc);
		
	
				if (obj.data.mVadesiGecmisBugunOdenmesiGerekenTop!=undefined){

				toplamBorc=  parseFloat(obj.data.mVadesiGecmisBugunOdenmesiGerekenTop); //M - VADESİ GEÇMİŞ VE BUGÜN ÖDENMESİ GEREKEN TOPLAM BORÇ (A+F+G+I) GETİRİYOR

				}
		

	return  Number(toplamBorc).toFixed(2) ;

}

catch(err){ 

return  "Hata ile karşılaşıldı" ;

}

}

function borcDurumuVergiKoduAciklama(vkno,vergiKodu,donem1,donem2) {

try{

	var myRegex= /[0-9]+/;
	
	
	
	var callid=makeid(13) + '-';
	var vdkodu=vdKodu();
	var orgID=vdOrgId();

	
	var url_kdv= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=mhkBorcService_detayliBorcBilgileriGetir&callid=';
	var url_kdv=url_kdv.concat(callid + '85', '&token=', token(), '&jp=%7B%22input%22%3A%7B%22vkn%22%3A%22',vkno,'%22%2C%22tckn%22%3A%22%22%2C%22vdKodu%22%3A%22',vdkodu,'%22%2C%22orgOid%22%3A%22',orgID,'%22%2C%22anaVergiKodu%22%3A%22', vergiKodu ,'%22%2C%22vergiKodu%22%3A%22',vergiKodu,'%22%2C%22vergilendirmeDonemiBas%22%3A%22',donem1,'%22%2C%22vergilendirmeDonemiBit%22%3A%22',donem2,'%22%2C%22vadeBasTarih%22%3A%22%22%2C%22vadeBitTarih%22%3A%22%22%2C%22unvan%22%3A%22%22%7D%7D');
	var kdv_borcu = getRemote(url_kdv);
	var obj =JSON.parse(kdv_borcu);
	


	var aciklama = obj.data.borcDetaylari[0].thkBorcDetaylari[0].aciklama;
	var tutar = obj.data.borcDetaylari[0].thkBorcDetaylari[0].borc;

	return "Borç Tutarı : " + Number(tutar).toLocaleString("tr-TR") + " - Açıklama : " + aciklama;
	
	
}


catch(err){

	return "Hata ile Karşılaşıldı";
}

	
}

function borcDurumuGet (vkno,vdkodu,vadeTar1,vadeTar2,token) {

try{
	
	var callid=makeid(13) + '-';
	var vadesiGecmis=0;
	var vadesiGelmemis=0;
	
	var url_kdv= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=mhkBorcService_detayliBorcBilgileriGetir&callid=';
	var url_kdv=url_kdv.concat(callid + '85', '&token=', token, '&jp=%7B%22input%22%3A%7B%22vkn%22%3A%22',vkno,'%22%2C%22tckn%22%3A%22%22%2C%22vdKodu%22%3A%22016253%22%2C%22orgOid%22%3A%2200000000000868%22%2C%22anaVergiKodu%22%3A%22%22%2C%22vergiKodu%22%3A%22%22%2C%22vergilendirmeDonemiBas%22%3A%22%22%2C%22vergilendirmeDonemiBit%22%3A%22%22%2C%22vadeBasTarih%22%3A%22',vadeTar1,'%22%2C%22vadeBitTarih%22%3A%22',vadeTar2,'%22%2C%22unvan%22%3A%22%22%7D%7D');
	var kdv_borcu = getRemote(url_kdv);
	var obj_kdv_borcu =JSON.parse(kdv_borcu);
	
	vadesiGecmis = Number(obj_kdv_borcu.data.satir12).toLocaleString("tr-TR"); //M - VADESİ GEÇMİŞ VE BUGÜN ÖDENMESİ GEREKEN TOPLAM BORÇ (A+F+G+I) GETİRİYOR
	vadesiGelmemis =Number(obj_kdv_borcu.data.satir13).toLocaleString("tr-TR"); //M - VADESİ GELMEMİŞ TOPLAM BORÇ (B+H+J)
	
	return "VADESİ GEÇMİŞ : " + vadesiGecmis + "<br>" + "VADESİ GELMEMİŞ : "  + vadesiGelmemis;
}


catch(err){

	return "Hata ile Karşılaşıldı";
}

	
}

function izahToken (token) {


	
}


function vimerVarmi() {

try{
 	  var myRegex= /[0-9]+/;
      
      
      ;
      var callid=makeid(13) + '-';
      
      //
      
      var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=vimerService_isTalepGoruntuleme&callid=';
      var url5=url5.concat(callid + '12', '&token=', token(), '&jp=%7B%22talepNo%22%3A%22%22%2C%22vdKodu%22%3A%22',vdKodu() ,'%22%2C%22cagriDurumu%22%3A%221%22%2C%22cagriTuru%22%3A%220%22%2C%22cagriKonusu%22%3A%220%22%2C%22cagriDetayi%22%3A%220%22%2C%22basTar%22%3A%22%22%2C%22bitTar%22%3A%22%22%7D');
      var daireler = getRemote(url5);
      var obj =JSON.parse(daireler);
      var kayit_sayisi=obj.data.talepListe.length;
      
      if (kayit_sayisi>0){ alert("Cevap Bekleyen VİMER Çağrısı Bulunmaktadır");}
      
}


catch(err){

	alert("Hata ile Karşılaşıldı");
}


}


function unvanDurumTahsilGuclugu(vkn,vd){

  var terkdurumu ={'0':'Faal', '1':'', '2':'Terk', '3':'Nakil Halinde Terk', '4':'Nakil Halinde Terk','5':'Ölüm/Tasfiye Halinde Terk','6':'Diğer Terk', '7':'Resen Terk', '8':'V.İ.R Terk', '11':'Diğer Terk', '10':'Diğer Terk', '12':'Diğer Terk',  '13':'Diğer Terk', '15':'Nevi Değişikliği Halinde Terk', '9':'Diğer Terk', '16':'670 sayılı KHK Kapsamına Göre Terk','17':'17 - Elektronik Tescil Olan Tüzel Kişinin İlk Yoklamada Bulunamadığından Terk','20':'20 - Elden/Posta Yolu ile İşe Başlama Bildirimi Mükellefiyet Tesisinde İlk Yoklamada Bulunamadığından Terk','21':'21 - VUK 160/A Maddesi Kapsamında Terk'};

	
	var callid=makeid(13) + '-';
	var hata=true;
	var hataDeneme=0;
	var ilgiDairethGucalacakList=0;
	var digerDairethGucalacakList=0;

	while(hata){

			var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=sicilService_sicilBilgileriSorgulaIlKodu&callid=';
			var url5=url5.concat(callid + '203', '&token=', token(), '&jp=%7B%22vkn%22%3A%22',vkn,'%22%2C%22tckn%22%3A%22%22%2C%22vdKodu%22%3A%22%22%2C%22ilKodu%22%3A%22%22%7D');
			var daireler = getRemote(url5);
			var obj =JSON.parse(daireler);


			
		if (obj.error==undefined){	

			hata=false;

			var unvan=obj.data.kimlikunvan;
			var durum =terkdurumu[obj.data.vdler.baglivd[0].mukblgislemturubittur];
			
			if (obj.data.thGucalacakList!=null) { 

			 	$.each(obj.data.thGucalacakList, function(index, satir){

					if (satir.vKodu==vd){   ilgiDairethGucalacakList++;   }else{ digerDairethGucalacakList++; }

				});
			
			}
			

			return  unvan + "//" + durum + "//" +  ilgiDairethGucalacakList + "//" + digerDairethGucalacakList  ;

		}else{

			hataDeneme++;

		 	if (hataDeneme>2){

				hata=false;

				console.log("unvanDurumTahsilGuclugu Sorgularken Hata ile Karşılaşıldı 3 Hata nedeniyle exception fırlatıyoruz-" +  vkn );

				throw new Error("Unvan sorgulama hatası: 3 deneme sonrası başarısız - VKN: " + vkn);
			
			}else{

				console.log("unvanDurumTahsilGuclugu - Tekrar Deniyoruz -" +  vkn );
		
			}

		}

	}

}

function zamanAsimi() {

  var bugun=new Date();
  
  var yil= bugun.getFullYear();
  
  return (yil-5);
    

}


function faaliyetDurumuGetir(vkn){

  
      var terkdurumu ={'0':'Faal', '1':'', '2':'Terk', '3':'Nakil Halinde Terk', '4':'Nakil Halinde Terk','5':'Ölüm/Tasfiye Halinde Terk','6':'Diğer Terk', '7':'Resen Terk', '8':'V.İ.R Terk', '11':'Diğer Terk', '10':'Diğer Terk', '12':'Diğer Terk',  '13':'Diğer Terk', '15':'Nevi Değişikliği Halinde Terk', '9':'Diğer Terk', '16':'670 sayılı KHK Kapsamına Göre Terk','17':'17 - Elektronik Tescil Olan Tüzel Kişinin İlk Yoklamada Bulunamadığından Terk','20':'20 - Elden/Posta Yolu ile İşe Başlama Bildirimi Mükellefiyet Tesisinde İlk Yoklamada Bulunamadığından Terk','21':'21 - VUK 160/A Maddesi Kapsamında Terk'};

try{
      var myRegex= /[0-9]+/;
      
      
      ;
      var callid=makeid(13) + '-';
      
      var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=sicilService_sicilBilgileriSorgulaIlKodu&callid=';
      var url5=url5.concat(callid + '15', '&token=', token(), '&jp=%7B%22vkn%22%3A%22',vkn,'%22%2C%22tckn%22%3A%22%22%2C%22vdKodu%22%3A%22%22%2C%22ilKodu%22%3A%22%22%7D');
      var daireler = getRemote(url5);
      var obj =JSON.parse(daireler);
   	

 	  var faal = terkdurumu[obj.data.vdler.baglivd[0].mukblgislemturubittur]  ; /// vergi dairesi listeliyor
	  var vd =  obj.data.vdler.baglivd[0].vdadi ; /// vergi dairesi listeliyor
	  var isebaslamatarihi=tarihFormat(obj.data.vdler.baglivd[0].isebaslamatarihi);	  
	  var isibirakmatarihi=tarihFormat(obj.data.vdler.baglivd[0].isibirakmatarihi);

//    return  "<a href='diger/sicil-tablo-getir.html?token=" + token() + "&vkn=" + vkn +  "' target='_blank' >" + isibirakmatarihi + "-" +  faal + "</a>" ;
	
	  return  isebaslamatarihi + "-" + isibirakmatarihi + "-" +  faal + "-" + vd ;
      
      }

	catch(err){

	return "Hata ile karşılaşıldı";
}
    
}


function faaliyetDurumuGetirGet(vkn){

  
		  var terkdurumu ={'0':'Faal', '1':'', '2':'Terk', '3':'Nakil Halinde Terk', '4':'Nakil Halinde Terk','5':'Ölüm/Tasfiye Halinde Terk','6':'Diğer Terk', '7':'Resen Terk', '8':'V.İ.R Terk', '11':'Diğer Terk', '10':'Diğer Terk', '12':'Diğer Terk',  '13':'Diğer Terk', '15':'Nevi Değişikliği Halinde Terk', '9':'Diğer Terk', '16':'670 sayılı KHK Kapsamına Göre Terk','17':'17 - Elektronik Tescil Olan Tüzel Kişinin İlk Yoklamada Bulunamadığından Terk','20':'20 - Elden/Posta Yolu ile İşe Başlama Bildirimi Mükellefiyet Tesisinde İlk Yoklamada Bulunamadığından Terk','21':'21 - VUK 160/A Maddesi Kapsamında Terk'};

	try{

 	      var tokenlink =GetUrlValue('token');
		  var callid=makeid(13) + '-';
		  
		  var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=sicilService_sicilBilgileriSorgulaIlKodu&callid=';
		  var url5=url5.concat(callid + '15', '&token=', tokenlink, '&jp=%7B%22vkn%22%3A%22',vkn,'%22%2C%22tckn%22%3A%22%22%2C%22vdKodu%22%3A%22%22%2C%22ilKodu%22%3A%22%22%7D');
		  var daireler = getRemote(url5);
		  var obj =JSON.parse(daireler);
	   	

	 	  var faal = terkdurumu[obj.data.vdler.baglivd[0].mukblgislemturubittur]; /// vergi dairesi listeliyor
		  var isibirakmatarihi=tarihFormat(obj.data.vdler.baglivd[0].isibirakmatarihi);
		  return  "<a href='sicil-tablo-getir.html?token=" + tokenlink + "&vkn=" + vkn +  "' target='_blank' >" + isibirakmatarihi + "-" +  faal + "</a>" ;
		  
		  }

		catch(err){

		return "Hata ile karşılaşıldı";
	}
		
}


function muhasebe(vkn){

try{
      var myRegex= /[0-9]+/;
      
      
      ;
      var callid=makeid(13) + '-';
      var dizi=new Array();
      
      //

      var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=bynIslemleriService_beyannameVerenBilgileriSorgula&callid=';
      var url5=url5.concat(callid + '75', '&token=', token(), '&jp=%7B%22vkn%22%3A%22',vkn,'%22%2C%22vkodu%22%3A%22%22%2C%22basdonem%22%3A%22%22%2C%22bitdonem%22%3A%22%22%7D');
      var daireler = getRemote(url5);
      var obj =JSON.parse(daireler);
   	
	     
	     
	     	$.each(obj.data.liste, function(index, satir){
	     	
	     	dizi.push(satir.tcknvkn_muh + "-" + satir.unvan_muh + "<br>");
	     	
	     	})
	     	
	  var yeni_dizi=   	removeDuplicates(dizi) ;

      return yeni_dizi.join("");
      
      
      }
      

	catch(err){

	return "Hata ile karşılaşıldı";
}  


}


function tumAdres(vkn){

try{
      var myRegex= /[0-9]+/;
      
      
      ;
      var callid=makeid(13) + '-';
      var dizi=new Array();
      
      //

      var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=sicilService_evdoYsicilMukAdresSorgulama&callid=';
      var url5=url5.concat(callid + '83', '&token=', token(), '&jp=%7B%22vergiNo%22%3A%22',vkn,'%22%2C%22ilKodu%22%3A%22%22%2C%22ilceKodu%22%3A%22%22%7D');
      var daireler = getRemote(url5);
      var obj =JSON.parse(daireler);
   	
	     
	     
	     	$.each(obj.data.liste2, function(index, satir){
	     	
	     	dizi.push(satir.acikadres1 + "<br>");
	     	
	     	
	     	})
	     	
	  var yeni_dizi= removeDuplicates(dizi) ;

      return yeni_dizi.join("");
      
      
      }
      

	catch(err){

		return "Hata ile karşılaşıldı";
	}  


}

function sicilOrtaklik(vkn){

try{
    
      var callid=makeid(13) + '-';
      var dizi=new Array();
    
      var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=sicilService_sirOrtYonTarihSorgulama&callid=';
      var url5=url5.concat(callid + '105', '&token=', token(), '&jp=%7B%22vkn%22%3A%22',vkn,'%22%2C%22tckn%22%3A%22%22%2C%22basTar%22%3A%2219800101%22%2C%22bitTar%22%3A%2220240311%22%7D');
      var daireler = getRemote(url5);
      var obj =JSON.parse(daireler);
   	
	     
	     
	     	$.each(obj.data.tuzelortak, function(index, satir){
	     	
	     	dizi.push("Ortak-" + satir.adsoyad + "<br>");
	     	
	     	
	     	});
	     	
	     	$.each(obj.data.tuzelyonetici, function(index, satir1){
	     	
	     	dizi.push("Yönetici-" + satir1.adsoyad + "<br>");
	     	
	     	
	     	});
	     	
	  var yeni_dizi= removeDuplicates(dizi) ;

      return yeni_dizi.join("");
      
      
      }
      

	catch(err){

	return "Hata ile karşılaşıldı";
}  


}

function mersisOrtaklik(vkn){
   
   try{ 
 		
		  
		  var callid=makeid(13) + '-';
		  var dizi=new Array();

		   
		  var url_muk_mersis= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=sicilService_tuzelKisiOrtaklikBilgisiSorgula&callid=';
		  var url_muk_mersis=url_muk_mersis.concat(callid + '309', '&token=', token(), '&jp=%7B%22vergino%22%3A%22', vkn, '%22%2C%22unvan%22%3A%22%22%7D');
		  var muk_arastir_mersis = getRemote(url_muk_mersis);
		  var obj_muk_mersis_arastir =JSON.parse(muk_arastir_mersis);
		  

				
			$.each(obj_muk_mersis_arastir.data.firmaBilgileri, function(index, satir){
		   
			   var mersisno=satir.mersisno;
				unvan=satir.unvani; 
			 if (unvan.includes("ŞUBESİ")==false){
				  var url_mersis_liste= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=sicilService_tuzelKisiOrtaklikDetayBilgisiSorgula&callid=';
				  var url_mersis_liste=url_mersis_liste.concat(callid + '311', '&token=', token(), '&jp=%7B%22mersisno%22%3A%22', mersisno, '%22%2C%22sirketturu%22%3A%22%22%7D');
				  var liste_mersis = getRemote(url_mersis_liste);
				  var obj_liste_mersis =JSON.parse(liste_mersis);  
				  
				  
				  $.each(obj_liste_mersis.data.temsilci, function(index, satir1){
				  			  
					dizi.push("Temsilci-" + satir1.tadisoyadi  + "<br>");
							
				  });
			  	  
					$.each(obj_liste_mersis.data.ortak, function(index, satir2){
					
						dizi.push("Ortak-" + satir2.oadisoyadi  + "<br>");
				 		
					});
			  
			  }
		   });
		   
			 var yeni_dizi= removeDuplicates(dizi) ;

			  return yeni_dizi.join("");

}
	catch(err){

	return "Hata ile karşılaşıldı";
}  

}
 
function faaliyetDurumuGetir1(vkn){

  
      var terkdurumu ={'0':'Faal', '1':'', '2':'Terk', '3':'Nakil Halinde Terk', '4':'Nakil Halinde Terk','5':'Ölüm/Tasfiye Halinde Terk','6':'Diğer Terk', '7':'Resen Terk', '8':'V.İ.R Terk', '11':'Diğer Terk', '10':'Diğer Terk', '12':'Diğer Terk',  '13':'Diğer Terk', '15':'Nevi Değişikliği Halinde Terk', '9':'Diğer Terk', '16':'670 sayılı KHK Kapsamına Göre Terk','17':'17 - Elektronik Tescil Olan Tüzel Kişinin İlk Yoklamada Bulunamadığından Terk','20':'20 - Elden/Posta Yolu ile İşe Başlama Bildirimi Mükellefiyet Tesisinde İlk Yoklamada Bulunamadığından Terk','21':'21 - VUK 160/A Maddesi Kapsamında Terk'};

	try{
      var myRegex= /[0-9]+/;
      
      
      ;
      var callid=makeid(13) + '-';
      
      var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=sicilService_sicilBilgileriSorgulaIlKodu&callid=';
      var url5=url5.concat(callid + '15', '&token=', token(), '&jp=%7B%22vkn%22%3A%22',vkn,'%22%2C%22tckn%22%3A%22%22%2C%22vdKodu%22%3A%22%22%2C%22ilKodu%22%3A%22%22%7D');
      var daireler = getRemote(url5);
      var obj =JSON.parse(daireler);
   	

 	  var faal = terkdurumu[obj.data.vdler.baglivd[0].mukblgislemturubittur]; /// vergi dairesi listeliyor
 	  
 	  
	     
      return  faal ;
      
      }

	catch(err){

	return "Hata ile karşılaşıldı";
}  

}


function iadeDosyaKapatma(token,iadeDosyaNo,vkno,tckn,tutar,muhasebe,iadeOid){



try{

	var callid=makeid(13) + '-';
	
	var url5= 'http://10.251.63.99/evdo_server/dispatch?cmd=EIadeMahsup_execute&callid=';
	var url5=url5.concat(callid + '292', '&token=', token, '&jp=%7B%22servisAdi%22%3A%22EVDO_IADEMAHSUP_IADEDOSYASI_TOPLU_KAPATMA%22%2C%22marj%22%3A%220%22%2C%22tableIadeDosyalari%22%3A%5B%7B%22iadedosyano%22%3A%22',iadeDosyaNo,'%22%2C%22vergino%22%3A%22',vkno,'%22%2C%22tckimlikno%22%3A%22',tckn,'%22%2C%22tutar%22%3A%22',tutar,'%22%2C%22muhasebelesen%22%3A%22',muhasebe,'%22%2C%22iadedosyasioid%22%3A%22',iadeOid,'%22%7D%5D%7D');
	var daireler = getRemote(url5);

	var obj =JSON.parse(daireler);

	return (obj.data.CORE_INFO_MESSAGE_ID);
	
	}
	
	catch(err){
	
	console.log(err);
	
	}
	

}

function faaliyetBilgiGetir(vkn){

try{

      var callid=makeid(13) + '-';
      
      var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=sicilService_sicilBilgileriSorgulaIlKodu&callid=';
      var url5=url5.concat(callid + '15', '&token=', token(), '&jp=%7B%22vkn%22%3A%22',vkn,'%22%2C%22tckn%22%3A%22%22%2C%22vdKodu%22%3A%22%22%2C%22ilKodu%22%3A%22%22%7D');
      var daireler = getRemote(url5);
      var obj =JSON.parse(daireler);
      
		var daireListesi = obj.data.vdler.baglivd; /// vergi dairesi listeliyor
		var faaliyetDizi =new Array();
		var faaliyetKodu=new Array();
	 
	$.each(daireListesi, function(index, satir){
	
		 
		  var vdkodu=satir.vdkodu;
		  var birimOid= satir.birimoid;
		  var subeno = satir.subeno;
		  var isyerinitelik=satir.isyerinitelik;
		  var isyerituru= satir.isyerituru;
		  var mukblgoid=satir.mukblgoid;
		  
		  ////////////fAALİYET BİLGİLERİNİ GETİRECEZ
		  
			  var urlFaaliyet= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=sicilService_mukSicilDetayBilgileriGetir&callid=';
			  var urlFaaliyet=urlFaaliyet.concat(callid + '56', '&token=', token(), '&jp=%7B%22vkn%22%3A%22',vkn,'%22%2C%22vdkodu%22%3A%22',vdkodu,'%22%2C%22birimOid%22%3A%22',birimOid,'%22%2C%22subeno%22%3A%22',subeno,'%22%2C%22subeadi%22%3A%22%22%2C%22isyerituru%22%3A%22',isyerituru,'%22%2C%22isyerinitelik%22%3A%22',isyerinitelik,'%22%2C%22mukblgoid%22%3A%22',mukblgoid,'%22%7D');
			  var faaliyet = getRemote(urlFaaliyet);
			  var objFaaliyet =JSON.parse(faaliyet);
			  
			  var faaliyetListesi=objFaaliyet.data.faaliyetListesi.faaliyet;
			  
				  $.each(faaliyetListesi, function(index, satir1){
				  
					  if (faaliyetKodu.includes(satir1.faaliyetkod)){
					  
					  }else{
					  faaliyetKodu.push(satir1.faaliyetkod);
					  faaliyetDizi.push(satir1.faaliyetkod + "-" + satir1.faaliyetad + "<br>");
					  
					
					  
					  }
				  
				  });
	   	
	

	 });


	 faaliyetDizi =	removeDuplicates(faaliyetDizi);

 	 return faaliyetDizi;
	 
	



}

catch(err){

console.log(err);

}

}

function faaliyetBilgiGetir1(vkn){

try{

      var callid=makeid(13) + '-';
      
      var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=sicilService_sicilBilgileriSorgulaIlKodu&callid=';
      var url5=url5.concat(callid + '15', '&token=', token(), '&jp=%7B%22vkn%22%3A%22',vkn,'%22%2C%22tckn%22%3A%22%22%2C%22vdKodu%22%3A%22%22%2C%22ilKodu%22%3A%22%22%7D');
      var daireler = getRemote(url5);
      var obj =JSON.parse(daireler);
      
		var daireListesi = obj.data.vdler.baglivd; /// vergi dairesi listeliyor
		var faaliyetDizi =new Array();
		var faaliyetKodu=new Array();
	
		 
		  var vdkodu=daireListesi[0].vdkodu;
		  var birimOid= daireListesi[0].birimoid;
		  var subeno = daireListesi[0].subeno;
		  var isyerinitelik=daireListesi[0].isyerinitelik;
		  var isyerituru= daireListesi[0].isyerituru;
		  var mukblgoid=daireListesi[0].mukblgoid;
		  
		  ////////////fAALİYET BİLGİLERİNİ GETİRECEZ
		  
			  var urlFaaliyet= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=sicilService_mukSicilDetayBilgileriGetir&callid=';
			  var urlFaaliyet=urlFaaliyet.concat(callid + '56', '&token=', token(), '&jp=%7B%22vkn%22%3A%22',vkn,'%22%2C%22vdkodu%22%3A%22',vdkodu,'%22%2C%22birimOid%22%3A%22',birimOid,'%22%2C%22subeno%22%3A%22',subeno,'%22%2C%22subeadi%22%3A%22%22%2C%22isyerituru%22%3A%22',isyerituru,'%22%2C%22isyerinitelik%22%3A%22',isyerinitelik,'%22%2C%22mukblgoid%22%3A%22',mukblgoid,'%22%7D');
			  var faaliyet = getRemote(urlFaaliyet);
			  var objFaaliyet =JSON.parse(faaliyet);
			  
			  var faaliyetListesi=objFaaliyet.data.faaliyetListesi.faaliyet;
			  
				  $.each(faaliyetListesi, function(index, satir1){
				  
					  if (faaliyetKodu.includes(satir1.faaliyetkod)){
					  
					  }else{
					  faaliyetKodu.push(satir1.faaliyetkod);
					  faaliyetDizi.push(satir1.faaliyetkod + "-" + satir1.faaliyetad + "<br>");
					  
					
					  
					  }
				  
				  });
	   	
	


	 faaliyetDizi =	removeDuplicates(faaliyetDizi);

 	 return faaliyetDizi;
	 
	



}

catch(err){

console.log(err);

return "Hata ile karşılaşıldı";

}

}

function ozesMukellefArastir(vkn){
 
try{
	var myRegex= /[0-9]+/;
	
	
	
	var callid=makeid(13) + '-';

	//

	var url= 'http://10.251.63.99/ozes_server/dispatch?cmd=ozelEsaslarListelemeService_mukellefArastirSonucListesiGetir&callid='; 
	var url=url.concat(callid + '23', '&token=', token(), '&jp=%7B%22mukVkn%22%3A%22',vkn,'%22%2C%22mukTckn%22%3A%22%22%7D');
	var ozelesas = getRemote(url);
	var objOzelEsas =JSON.parse(ozelesas);
	var adresteBulunmama=0;

		$.each(objOzelEsas.data.liste, function(index, satir1){ //
		
		if (satir1.girisNedeni="014"){     adresteBulunmama= adresteBulunmama + 1;    }


		});

		$.each(objOzelEsas.data.ekListe, function(index, satir2){ //
		
		if (satir2.ataGirisNedeni="014"){     adresteBulunmama= adresteBulunmama + 1;    }


		});
		
		return adresteBulunmama;

}

	catch(err){

	return "Hata ile karşılaşıldı";
}  

}


function ozesMukellefArastir1(vkn){
 
try{
	var myRegex= /[0-9]+/;
	
	
	
	var callid=makeid(13) + '-';

	//

	var url= 'http://10.251.63.99/ozes_server/dispatch?cmd=ozelEsaslarListelemeService_mukellefArastirSonucListesiGetir&callid='; 
	var url=url.concat(callid + '23', '&token=', token(), '&jp=%7B%22mukVkn%22%3A%22',vkn,'%22%2C%22mukTckn%22%3A%22%22%7D');
	var ozelesas = getRemote(url);
	var objOzelEsas =JSON.parse(ozelesas);
	var adresteBulunmama=0;

	

		$.each(objOzelEsas.data.ekListe, function(index, satir2){ //
		
		if (satir2.ataGirisNedeni="014"){     adresteBulunmama= adresteBulunmama + 1;    }


		});
		
		if (adresteBulunmama>0) {return "Devam Eden Adreste Bulunmama var";}else{ return "Yok"; }
		


}

	catch(err){

	return "Hata ile karşılaşıldı";
}  

}


function okcSorgula(vkn){
 
try{
	var myRegex= /[0-9]+/;
	
	
	
	var callid=makeid(13) + '-';

	//

	var url= 'http://10.251.63.99/ozes_server/dispatch?cmd=odmKaydediciCihazService_odemeKaydediciTumunuGetir&callid='; 
	var url=url.concat(callid + '263', '&token=', token(), '&jp=%7B%22vkn%22%3A%22',vkn,'%22%2C%22vdkodu%22%3A%22%22%7D');
	var ozelesas = getRemote(url);
	var obj =JSON.parse(ozelesas);
	var eskiOKC=0;
	var yeniOKC=0;
	

		$.each(obj.data.liste.sorguSonucu.liste, function(index, satir){ 
		
	
		
	     eskiOKC= obj.data.liste.sorguSonucu.liste.length;  


		});
		
		
		$.each(obj.data.liste.yeniNesil, function(index, satir1){ 
		
	
		
		if (satir1.status==1){     yeniOKC= yeniOKC + 1;    } 


		});
		
	
		return ("Eski OKC : " + eskiOKC + " - Yeni Nesil OKC : " + yeniOKC );
	
		


}

	catch(err){

	return (err);
}  

}


function faaliyetDurumuGet(vkn,token){

	try{
  
      var terkdurumu ={'0':'Faal', '1':'', '2':'Terk', '3':'Nakil Halinde Terk', '4':'Nakil Halinde Terk','5':'Ölüm/Tasfiye Halinde Terk','6':'Diğer Terk', '7':'Resen Terk', '8':'V.İ.R Terk', '11':'Diğer Terk', '10':'Diğer Terk', '12':'Diğer Terk',  '13':'Diğer Terk', '15':'Nevi Değişikliği Halinde Terk', '9':'Diğer Terk', '16':'670 sayılı KHK Kapsamına Göre Terk','17':'17 - Elektronik Tescil Olan Tüzel Kişinin İlk Yoklamada Bulunamadığından Terk','20':'20 - Elden/Posta Yolu ile İşe Başlama Bildirimi Mükellefiyet Tesisinde İlk Yoklamada Bulunamadığından Terk','21':'21 - VUK 160/A Maddesi Kapsamında Terk'};


      var callid=makeid(13) + '-';
      
      var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=sicilService_sicilBilgileriSorgulaIlKodu&callid=';
      var url5=url5.concat(callid + '15', '&token=', token, '&jp=%7B%22vkn%22%3A%22',vkn,'%22%2C%22tckn%22%3A%22%22%2C%22vdKodu%22%3A%22%22%2C%22ilKodu%22%3A%22%22%7D');
      var daireler = getRemote(url5);
      var obj =JSON.parse(daireler);
   	
    	if (obj.error==1) {return "Bir Hata ile Karşılaşıldı";}

 	 var faal = terkdurumu[obj.data.vdler.baglivd[0].mukblgislemturubittur]; /// vergi dairesi listeliyor
	     
      return  faal ;
      
      }
      
	catch(err){

	 	return "Hata ile karşılaşıldı";
	}  

}

function faaliyetDurumuGetir1(vkn){

  try{
      var terkdurumu ={'0':'Faal', '1':'', '2':'Terk', '3':'Nakil Halinde Terk', '4':'Nakil Halinde Terk','5':'Ölüm/Tasfiye Halinde Terk','6':'Diğer Terk', '7':'Resen Terk', '8':'V.İ.R Terk', '11':'Diğer Terk', '10':'Diğer Terk', '12':'Diğer Terk',  '13':'Diğer Terk', '15':'Nevi Değişikliği Halinde Terk', '9':'Diğer Terk', '16':'670 sayılı KHK Kapsamına Göre Terk','17':'17 - Elektronik Tescil Olan Tüzel Kişinin İlk Yoklamada Bulunamadığından Terk','20':'20 - Elden/Posta Yolu ile İşe Başlama Bildirimi Mükellefiyet Tesisinde İlk Yoklamada Bulunamadığından Terk','21':'21 - VUK 160/A Maddesi Kapsamında Terk'};

      var myRegex= /[0-9]+/;
      
      
      ;
      var callid=makeid(13) + '-';
      
      var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=sicilService_sicilBilgileriSorgulaIlKodu&callid=';
      var url5=url5.concat(callid + '15', '&token=', token(), '&jp=%7B%22vkn%22%3A%22',vkn,'%22%2C%22tckn%22%3A%22%22%2C%22vdKodu%22%3A%22%22%2C%22ilKodu%22%3A%22%22%7D');
      var daireler = getRemote(url5);
      var obj =JSON.parse(daireler);
   	
    	if (obj.error==1) {return "Bir Hata ile Karşılaşıldı";}

 	 var faal = terkdurumu[obj.data.vdler.baglivd[0].mukblgislemturubittur]; /// vergi dairesi listeliyor
	
      if (faal=="Faal"){
      
      return "<td style='background:red; color:white''>" + faal + "</td>";
      }else{
      return "<td>" + faal + "</td>";
      
      }
      
  }
      
      catch(err){
      
      	return "Hata ile karşılaşıldı";
      
      }

}


function temelDegisiklikTabloGetir (vkno){

	try{
		
		var mukellef_sayisi=0;
		
		
		var callid=makeid(13) + '-';

	  
		var url_temel= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=sicilService_temelBilgiDegisiklikSorgula&callid=';
		var url_temel=url_temel.concat(callid + '22', '&token=', token(), '&jp=%7B%22vkn%22%3A%22',vkno,'%22%7D');
		var temel_bilgi = getRemote(url_temel);
		var obj_temel_bilgi =JSON.parse(temel_bilgi);  

		var temel_bilgi_degisikligi =  obj_temel_bilgi.data.degisiklikBilgileri.tuzelDegisiklik;

		if (temel_bilgi_degisikligi!=undefined){

			$.each(temel_bilgi_degisikligi,function(index,satir){

			var kisaUnvan = satir.kisaunvan;

			if (kisaUnvan!=undefined){

			if (kisaUnvan.includes("YENİ KURULACAK")==false){

			$("#myTable5 tr:last").after( "<tr><td colspan='5'>" + kisaUnvan + "- İşlem tarihi " + tarih(satir.islemtarihi) + "</td></tr>");

			  }
			  
			}

			});

		}
	
	}
	
	catch(err){
	
		$("#myTable5 tr:last").after( "<tr><td colspan='5'>Hata ile karşılaşıldı</td></tr>");
	
	}
}

function temelDegisiklikTabloGetirGet(vkno){

	try{
	  var tokenlink =GetUrlValue('token');
		var callid=makeid(13) + '-';

	  
		var url_temel= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=sicilService_temelBilgiDegisiklikSorgula&callid=';
		var url_temel=url_temel.concat(callid + '22', '&token=', tokenlink, '&jp=%7B%22vkn%22%3A%22',vkno,'%22%7D');
		var temel_bilgi = getRemote(url_temel);
		var obj_temel_bilgi =JSON.parse(temel_bilgi);  

		var temel_bilgi_degisikligi =  obj_temel_bilgi.data.degisiklikBilgileri.tuzelDegisiklik;

		if (temel_bilgi_degisikligi!=undefined){

			$.each(temel_bilgi_degisikligi,function(index,satir){

			var kisaUnvan = satir.kisaunvan;

			if (kisaUnvan!=undefined){

			if (kisaUnvan.includes("YENİ KURULACAK")==false){

			$("#myTable5 tr:last").after( "<tr><td colspan='5'>" + kisaUnvan + "- İşlem tarihi " + tarih(satir.islemtarihi) + "</td></tr>");

			  }
			  
			}

			});

		}
	
	}
	
	catch(err){
	
		$("#myTable5 tr:last").after( "<tr><td colspan='5'>Hata ile karşılaşıldı</td></tr>");
	
	}
}

function emanetKalanTutar(vkn) {

	try{

		
		var mukellef_sayisi=0;
		
		
		var callid=makeid(13) + '-';


		var url= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=mhkEmanetService_emanetKayitlariniGetir&callid=';
		var url=url.concat(callid + '163', '&token=', token(), '&jp=%7B%22input%22%3A%7B%22vkn%22%3A%22',vkn,'%22%2C%22tckn%22%3A%22%22%2C%22vdkodu%22%3A%22',vdKodu(),'%22%2C%22orgoid%22%3A%22',vdOrgId(),'%22%7D%7D');
		var emanet = getRemote(url);
		var obj =JSON.parse(emanet);
		var kalanMiktar=0;


		$.each(obj.data.emanetverileri, function(index, satir){
				
		kalanMiktar=kalanMiktar + satir.kalanmiktar;		

		});


		return Number(kalanMiktar).toLocaleString("tr-TR");;
	}

	catch(err){

		return "Hata ile karşılaşıldı";

	}

}

function emanetKalanTutar1(vkn,vd) {

	try{

				
		var callid=makeid(13) + '-';

		var url= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=mhkEmanetService_emanetKayitlariniGetir&callid=';
		var url=url.concat(callid + '163', '&token=', token(), '&jp=%7B%22input%22%3A%7B%22vkn%22%3A%22',vkn,'%22%2C%22tckn%22%3A%22%22%2C%22vdkodu%22%3A%22',vd,'%22%2C%22orgoid%22%3A%22',orgIDGetir(vd),'%22%7D%7D');
		var emanet = getRemote(url);
		var obj =JSON.parse(emanet);
		var emanetteKalanTutar=0;

		if (obj.data.emanetverileri.length>0){

			$.each(obj.data.emanetverileri, function(index, satir){
					
			emanetteKalanTutar=emanetteKalanTutar + parseFloat(satir.kalanmiktar);		

			});

		}

		return emanetteKalanTutar;
	}

	catch(err){

		console.log("Emanet sorgularken Hata ile karşılaşıldı."+ err);

		return "Hata";

	}

}

function ortakTakibiVarmi(vkn,vd) {

try{

	
	var mukellef_sayisi=0;
	
	
	var callid=makeid(13) + '-';
	var orgID = orgIDGetir(vd);

	var url= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=mhkOrtakTakipService_ortakTakipleriGetir&callid=';
	var url=url.concat(callid + '29', '&token=', token(), '&jp=%7B%22orgOid%22%3A%22',orgID,'%22%2C%22vkn%22%3A%22',vkn,'%22%2C%22tckn%22%3A%22%22%2C%22bastar%22%3A%2220090101%22%2C%22bittar%22%3A%22',bugunTarih(),'%22%7D');

	var emanet = getRemote(url);
	var obj =JSON.parse(emanet);
	
		

	  if (obj.data.liste.length>0) {
	  
	  
	  return ("<td style='background:red; color:white'><a href='../diger/ortak-takip.html?token=" + token() + "&vkn=" + vkn +  "' target='_blank'>Var</a></td>");  
	  
	  }else{
	  
	  return "<td>Yok</td>";
	  
	  }
		 			
	}
	

catch(err){

	return "Hata ile karşılaşıldı";

}      
	      


}

function ortakTakibiVarmi1(vkn) {

try{

	
	var mukellef_sayisi=0;
	
	
	var callid=makeid(13) + '-';

	//
//vdOrgId()
	var url= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=mhkOrtakTakipService_ortakTakipleriGetir&callid=';
	var url=url.concat(callid + '26', '&token=', token(), '&jp=%7B%22orgOid%22%3A%22',vdOrgId(),'%22%2C%22vkn%22%3A%22',vkn,'%22%2C%22tckn%22%3A%22%22%2C%22bastar%22%3A%2220090101%22%2C%22bittar%22%3A%22',bugunTarih(),'%22%7D');
	var emanet = getRemote(url);
	var obj =JSON.parse(emanet);
	
		

	  if (obj.data.result.length>0) {
	  
	  
	  return ("<a href='diger/ortak-takip.html?token=" + token() + "&vkn=" + vkn +  "' target='_blank'>Var</a>");  
	  
	  }else{
	  
	  return "Yok";
	  
	  }
		 			
	}
	

catch(err){

	return "Hata ile karşılaşıldı";

}      
	      


}

function ortakTakibiVarmi3(vkn,vd) {

try{


	var mukellef_sayisi=0;
	var callid=makeid(13) + '-';
	var orgID = orgIDGetir(vd);

	var url= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=mhkOrtakTakipService_ortakTakipleriGetir&callid=';
	var url=url.concat(callid + '29', '&token=', token(), '&jp=%7B%22orgOid%22%3A%22',orgID,'%22%2C%22vkn%22%3A%22',vkn,'%22%2C%22tckn%22%3A%22%22%2C%22bastar%22%3A%2220090101%22%2C%22bittar%22%3A%22',bugunTarih(),'%22%7D');

	var emanet = getRemote(url);
	var obj =JSON.parse(emanet);
	
	var kayit_sayisi = obj.data.result.length;	


	  if (kayit_sayisi>0) {

		var sonTarih=(obj.data.result[kayit_sayisi-1].anatkpdosyano).substr(0,8);
	  
 	    return tarihFormat3(sonTarih) ;  
	  
	  }else{
	  
		  return "";
	  
	  }
		 			
	}
	

catch(err){

	console.log("Ortak Takibi Hata ile karşılaşıldı." + err);

	return "Hata";


}      
	      


}


function ortakTakibiVarmi4(vkn,vd) {

try{


	var mukellef_sayisi=0;
	var callid=makeid(13) + '-';
	var orgID = orgIDGetir(vd);

	var url= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=mhkOrtakTakipService_ortakTakipleriGetir&callid=';
	var url=url.concat(callid + '29', '&token=', token(), '&jp=%7B%22orgOid%22%3A%22',orgID,'%22%2C%22vkn%22%3A%22',vkn,'%22%2C%22tckn%22%3A%22%22%2C%22bastar%22%3A%2220090101%22%2C%22bittar%22%3A%22',bugunTarih(),'%22%7D');

	var emanet = getRemote(url);
	var obj =JSON.parse(emanet);
	
	var kayit_sayisi = obj.data.result.length;	
	var ortakTakipYapilan=new Array();
	var takibiYapilanBorcToplami=0;
	  if (kayit_sayisi>0) {

		$.each(obj.data.result, function(index, satir){

			ortakTakipYapilan.push(satir.vergino);

			takibiYapilanBorcToplami = takibiYapilanBorcToplami + parseFloat(satir.borc);

			});


		
		var sonTarihAnaTakip=(obj.data.result[kayit_sayisi-1].anatkpdosyano).substr(0,8);

		var sonTarihVergiDonem=(obj.data.result[kayit_sayisi-1].vergiDonemi);
	  
 	    return tarihFormat3(sonTarihAnaTakip) + "*" + sonTarihVergiDonem + "*" + removeDuplicates(ortakTakipYapilan) + "*" + tlCevir(takibiYapilanBorcToplami)  ;  
	  
	  }else{
	  
		  return "";
	  
	  }
		 			
	}
	

catch(err){

	console.log("Ortak Takibi Hata ile karşılaşıldı." + err);

	return "Hata";


}      
	      


}


function eDefterKullanici(vkn) {

try{

	
	var mukellef_sayisi=0;
	
	
	var callid=makeid(13) + '-';
	var dizi =new Array();


	var url= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=efaturaService_eDefterKayitliKullaniciSorgula&callid=';
	var url=url.concat(callid + '186', '&token=', token(), '&jp=%7B%22vkn%22%3A%22',vkn,'%22%2C%22tckn%22%3A%22%22%7D');
	var emanet = getRemote(url);
	var obj =JSON.parse(emanet);
	
		

	  if (obj.data.length>0) {
	  
	  		$.each(obj.data, function(index, satir){
	  		
	  				if (satir.neviYadaTerkTarihi==""){ 
				
					dizi.push("Başvuru Zamanı : " + satir.islemZamani + " - Uygulama Başlangıç Tarihi : " + satir.uygBaslamaTarihi + "<br>");
				
					}else{
					
					dizi.push("Başvuru Zamanı : " + satir.islemZamani + " - Uygulama Başlangıç Tarihi : " + satir.uygBaslamaTarihi + " - Uygulama Bitiş Tarihi : " + satir.neviYadaTerkTarihi + " - Bitiş Nedeni : " + satir.terkNedeni +   "<br>");
					
					}
				
				});				
	  
	  
	  }
	  
	  return dizi;
	  
	  }

catch(err){

	return "Hata ile karşılaşıldı";

}      
	      


}




function takipNoBul(vkno,tahakkukNo,token){


var callid=makeid(13) + '-';
var takip_dosya_no="";
var dizi=new Array();
		var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=mhkTakipService_anaTakipleriGetir&callid='; 
		var url5=url5.concat(callid + '100', '&token=', token, '&jp=%7B%22input%22%3A%7B%22vkn%22%3A%22',vkno,'%22%2C%22tckn%22%3A%22%22%2C%22vdkodu%22%3A%22',vdKodu(),'%22%2C%22orgoid%22%3A%22',vdOrgId(),'%22%2C%22anavergikodu%22%3A%22%22%2C%22vergilendirmedonemibas%22%3A%22%22%2C%22vergilendirmedonemibit%22%3A%22%22%2C%22anatkpdurum%22%3A%22%22%7D%7D');
		var liste = getRemote(url5);
		var obj =JSON.parse(liste);

		$.each( obj.data.anatakipkayitlari, function(index, satir){
		
			var url6= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=mhkTakipService_anaTakipDetayGetir&callid='; 
			var url6=url6.concat(callid + '102', '&token=', token, '&jp=%7B%22input%22%3A%7B%22orgoid%22%3A%22',vdOrgId(),'%22%2C%22anatkpdosyano%22%3A%22',satir.anatkpdosyano ,'%22%2C%22anavergikodu%22%3A%22%22%2C%22vergidonembas%22%3A%22%22%2C%22vergidonembit%22%3A%22%22%7D%7D');
			var liste1 = getRemote(url6);
			var obj1 =JSON.parse(liste1);
			
				$.each( obj1.data.takipdetaylari, function(index, satir1){
				
					if (tahakkukNo==satir1.thkfisno) { 	dizi.push(satir1.tkpdosyano + "-" + tarihFormat(satir1.tebligtarihi) +  "<br>");	}
				
				
				});				
						
		});
		
		return dizi;
		

}

function takipNoBul1(vkno,token){


var callid=makeid(13) + '-';
var takip_dosya_no="";
var dizi=new Map();
		var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=mhkTakipService_anaTakipleriGetir&callid='; 
		var url5=url5.concat(callid + '100', '&token=', token, '&jp=%7B%22input%22%3A%7B%22vkn%22%3A%22',vkno,'%22%2C%22tckn%22%3A%22%22%2C%22vdkodu%22%3A%22',vdKodu(),'%22%2C%22orgoid%22%3A%22',vdOrgId(),'%22%2C%22anavergikodu%22%3A%22%22%2C%22vergilendirmedonemibas%22%3A%22%22%2C%22vergilendirmedonemibit%22%3A%22%22%2C%22anatkpdurum%22%3A%22%22%7D%7D');
		var liste = getRemote(url5);
		var obj =JSON.parse(liste);

		$.each( obj.data.anatakipkayitlari, function(index, satir){
		
			var url6= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=mhkTakipService_anaTakipDetayGetir&callid='; 
			var url6=url6.concat(callid + '102', '&token=', token, '&jp=%7B%22input%22%3A%7B%22orgoid%22%3A%22',vdOrgId(),'%22%2C%22anatkpdosyano%22%3A%22',satir.anatkpdosyano ,'%22%2C%22anavergikodu%22%3A%22%22%2C%22vergidonembas%22%3A%22%22%2C%22vergidonembit%22%3A%22%22%7D%7D');
			var liste1 = getRemote(url6);
			var obj1 =JSON.parse(liste1);
			
				$.each( obj1.data.takipdetaylari, function(index, satir1){
				
					if (tahakkukNo==satir1.thkfisno) { 	dizi.push(satir1.tkpdosyano + "-" + tarihFormat(satir1.tebligtarihi) +  "<br>");	}
				
				
				});				
						
		});
		
		return dizi;
		

}

function emanetKontrol(vkn,belgeNo) {
try{
	
	var mukellef_sayisi=0;
	
	
	var callid=makeid(13) + '-';


	var url= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=mhkEmanetService_emanetKayitlariniGetir&callid=';
	var url=url.concat(callid + '163', '&token=', token(), '&jp=%7B%22input%22%3A%7B%22vkn%22%3A%22',vkn,'%22%2C%22tckn%22%3A%22%22%2C%22vdkodu%22%3A%22',vdKodu(),'%22%2C%22orgoid%22%3A%22',vdOrgId(),'%22%7D%7D');
	var emanet = getRemote(url);
	var obj =JSON.parse(emanet);
	var kalanMiktar=0;


		$.each(obj.data.emanetverileri, function(index, satir){

			var belgeno=satir.belgeno;


			if (belgeNo==belgeno && satir.belgeturu!=14) { 

				kalanMiktar=kalanMiktar + satir.kalanmiktar;		

			}else{

				kalanMiktar=0;		
			}

	});


	return kalanMiktar;

}

catch(err){

	return "Hata ile Karşılaşıldı";

}

}

function emanetKontrolSGK(vkn,belgeNo) {

try{
	
	var mukellef_sayisi=0;
	
	
	var callid=makeid(13) + '-';

	var url= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=mhkEmanetService_emanetKayitlariniGetir&callid=';
	var url=url.concat(callid + '163', '&token=', token(), '&jp=%7B%22input%22%3A%7B%22vkn%22%3A%22',vkn,'%22%2C%22tckn%22%3A%22%22%2C%22vdkodu%22%3A%22',vdKodu(),'%22%2C%22orgoid%22%3A%22',vdOrgId(),'%22%7D%7D');
	var emanet = getRemote(url);
	var obj =JSON.parse(emanet);
	var kalanMiktar=0;


	$.each(obj.data.emanetverileri, function(index, satir){

		var belgeno=satir.belgeno;

			if (belgeNo==belgeno && satir.belgeturu==14) { 

				kalanMiktar=satir.kalanmiktar;		

			}else if (belgeNo==belgeno && satir.belgeturu!=14) { 

				kalanMiktar="SGK'ya ödemek üzere Emanet kaydı yok";		

			}else{

				kalanMiktar=0;		
			}

	});


	return kalanMiktar;

}

catch(err){

	return "Hata ile karşılaşıldı";

}

}


function vknKontrol(){

var veri= $('#input').val();

veri = veri.replace(/'/g,"");  // tek tırnak (apostrophe) siler

veri = veri.replace(/\s/g,"");  //yapıştırılan vkn içinde boşlukları silmek için

veri = veri.replace(/-/g,"");  //yapıştırılan vkn içinde tire silmek için

if (veri.length==8) {veri = "00" + veri ;}

else if (veri.length==9) {veri =  "0" + veri ;}

else if (veri.length==11) {veri = vknGetirGet(veri,token());}

document.getElementById('input').value=veri;

return veri;


}

function boslukSil(veri){

veri = veri.replace(/\s/g,"");  //yapıştırılan vkn içinde boşlukları silmek için

veri = veri.replace(/-/g,"");  //yapıştırılan vkn içinde tire silmek için

return veri;


}


function vknKontrol1(token, veri){

try{

veri = veri.replace(/'/g,"");  // tek tırnak (apostrophe) siler

veri = veri.replace(/\s/g,"");  //yapıştırılan vkn içinde boşlukları silmek için

veri = veri.replace(/-/g,"");  //yapıştırılan vkn içinde tire silmek için

veri = veri.replace(/[^0-9]/g,"");  //yapıştırılan vkn içinde . silmek için



if (veri.length==8) {veri = "00" + veri ;}

if (veri.length==9) {veri =  "0" + veri ;}

if (veri.length==11) {veri = vknGetirGet(veri,token);}


return veri;

}


catch(err){

console.log(err);

return false;
}


}


function vknGetir(veri){


try{

	if (veri.length==11) {
	
		
		
		
		var callid=makeid(13) + '-';

		var url= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=sicilService_sicilBilgileriSorgula&callid=';
		var url=url.concat(callid + '15', '&token=', token(), '&jp=%7B%22vkn%22%3A%22%22%2C%22tckn%22%3A%22', veri, '%22%2C%22vdKodu%22%3A%22%22%7D');
		var daireler = getRemote(url);
		var obj =JSON.parse(daireler);
   	
   		document.getElementById('input').value= obj.data.vkn;
   		
		return obj.data.vkn; 

	}else if (veri.length==10){

	return veri;
	
	}else{
	
	alert("10 haneli bir VKN girmeniz gerekmektedir.");
	
	}
	
}

	catch(err){

	alert("Hata ile karşılaşıldı");

	}	
	

}

function vknGetirGet(veri,token){

try{

		var callid=makeid(13) + '-';

		var url= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=sicilService_mukellefTcknVknBagliVDGetir&callid=';
		var url=url.concat(callid + '9', '&token=', token, '&jp=%7B%22vknTckn%22%3A%22',veri,'%22%7D');
		var daireler = getRemote(url);
		var obj =JSON.parse(daireler);  	
   		
		return obj.data.vkn; 

	

	
}

	catch(err){

	alert("Hata ile karşılaşıldı");

	}	
	

}

function tcGetir(vkn){

		
		
		
		var callid=makeid(13) + '-';

		var url= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=sicilService_mukellefTcknVknBagliVDGetir&callid=';
		var url=url.concat(callid + '9', '&token=', token(), '&jp=%7B%22vknTckn%22%3A%22',vkn,'%22%7D');
		var daireler = getRemote(url);
		var obj =JSON.parse(daireler);
		return obj.data.tckn; 
      
      
}

function tcGetirGet(token,vkn){

	
		var callid=makeid(13) + '-';


		var url= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=sicilService_mukellefTcknVknBagliVDGetir&callid=';
		var url=url.concat(callid + '9', '&token=', token, '&jp=%7B%22vknTckn%22%3A%22',vkn,'%22%7D');
		var daireler = getRemote(url);
		var obj =JSON.parse(daireler);
		return obj.data.tckn; 
      
      
}

function GetUrlValue(VarSearch)
{
    if (!VarSearch) return null;
    
    const params = new URLSearchParams(window.location.search);
    return params.get(VarSearch);
}



function sicilTabloGetir(vkno){

  
  var mukellef_sayisi=0;
  
  
  var callid=makeid(13) + '-';


	$('#tablo5').after(' <table id="myTable5" border=1> <caption>Araştırılan </caption>   <tr>     <th>Vergi No</th>     <th>TC</th>    <th>Ünvan</th> <th>Potansiyel</th> </tr>');

	try{

	var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=sicilService_sicilBilgileriSorgula&callid=';
	var url5=url5.concat(callid + '15', '&token=', token(), '&jp=%7B%22vkn%22%3A%22', vkno, '%22%2C%22tckn%22%3A%22%22%2C%22vdKodu%22%3A%22%22%7D');
	var daireler = getRemote(url5);
	var obj =JSON.parse(daireler);

	var vkn=obj.data.vkn; 
	var tckn=obj.data.tckn; 
	var unvan=obj.data.kimlikunvan; 
	if (obj.data.kimlikpotansiyel==9){var potansiyel="Potansiyel Mükellef"}else{ var potansiyel = " Değil " }

	$("#myTable5 tr:last").after( "<tr><td>" + vkno  + "</td><td>" + tckn  + "</td><td>" + unvan + "</td><td>" + potansiyel + "</td></tr>");

	}
	
	
	catch(err){
	
	$("#myTable5 tr:last").after( "<tr><td>" + vkno + "</td><td></td><td>Hata ile karşılaşıldı</td></tr>");
	
	}
}





function sicilTabloGetir2(vkno){
  
  var mukellef_sayisi=0;
  var callid=makeid(13) + '-';
  var vergikodu="0015";

  var iliski_tur_dizi={'3':'3 - Genel Müdür; Şirket Müdürü','2':'2 - Yönetim Kurulu Üyesi'};
      var terkdurumu ={'0':'Faal', '1':'', '2':'Terk', '3':'Nakil Halinde Terk', '4':'Nakil Halinde Terk','5':'Ölüm/Tasfiye Halinde Terk','6':'Diğer Terk', '7':'Resen Terk', '8':'V.İ.R Terk', '11':'Diğer Terk', '10':'Diğer Terk', '12':'Diğer Terk',  '13':'Diğer Terk', '15':'Nevi Değişikliği Halinde Terk', '9':'Diğer Terk', '16':'670 sayılı KHK Kapsamına Göre Terk','17':'17 - Elektronik Tescil Olan Tüzel Kişinin İlk Yoklamada Bulunamadığından Terk','20':'20 - Elden/Posta Yolu ile İşe Başlama Bildirimi Mükellefiyet Tesisinde İlk Yoklamada Bulunamadığından Terk','21':'21 - VUK 160/A Maddesi Kapsamında Terk'};
      var potansiyelListe ={'1':'Potansiyel Değil', '9':'Potansiyel'};
      var isyeriNitelikListe ={'1':'Merkez', '2':'Şube', '3':'Depo', '4':'KDV İhtisas Şubesi'};
       
      
  $('#tablo5').after(' <table id="myTable5" border=1> <caption>Araştırılan </caption>   <tr>     <th>Vergi No</th>     <th>TC</th>    <th>Ünvan</th> <th> Potansiyel </th></tr>');
   
  $('#tablo4').after('<table id="myTable4" border=1><caption>Mükellefiyet Bilgileri</caption><tr><th>İŞ YERİ NİTELİK</th><th>DAİRE KODU</th><th>DAİRE ADI</th><th>BAŞLAMA TARİHİ</th><th>BİTİŞ TARİHİ</th><th>FAAL TERK</th><th>KDV Beyanı</th></tr>');
      
        
	var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=sicilService_sicilBilgileriSorgula&callid=';
	var url5=url5.concat(callid + '15', '&token=', token() , '&jp=%7B%22vkn%22%3A%22', vkno, '%22%2C%22tckn%22%3A%22%22%2C%22vdKodu%22%3A%22%22%7D');
	var daireler = getRemote(url5);
	var obj =JSON.parse(daireler);

	var vkn=obj.data.vkn; 
	var tckn=obj.data.tckn; 
	var unvan=obj.data.kimlikunvan; 
	if (obj.data.kimlikpotansiyel==9){var potansiyel="Potansiyel Mükellef"}else{ var potansiyel = " Değil " }
		
       $("#myTable5 tr:last").after( "<tr><td>" + vkn  + "</td><td>" + tckn  + "</td><td>" + unvan + "</td><td>" + potansiyel + "</td></tr>");
       
	var sicil_mesaj_liste=obj.data.hatakontrol;

		if (sicil_mesaj_liste!=undefined){

			$.each(sicil_mesaj_liste,function(index,satir){

				 $("#myTable5 tr:last").after( "<tr><td colspan='5'>" + satir.mesaj + "</td></tr>");

			});

		}
	
	

	var daireListesi = obj.data.vdler.baglivd; /// vergi dairesi listeliyor
	
	$.each(daireListesi, function(index, satir){
	
	  var isyerinitelik = satir.isyerinitelik;
	
		  
	  if (isyerinitelik==1 || isyerinitelik==4){
	  
	      var isyerinitelik = isyeriNitelikListe[isyerinitelik];   
	      
	      var bastarih =tarih(satir.isebaslamatarihi);  	      
	      var bittarih =tarih(satir.isibirakmatarihi);
	      
	      var mukblgislemturubittur=satir.mukblgislemturubittur;
	      var faal = terkdurumu[mukblgislemturubittur];
	    
	      $("#myTable4 tr:last").after( "<tr><td>" + isyerinitelik + "</td><td>" + satir.vdkodu  + "</td><td>" + satir.vdadi  + "</td><td>" + bastarih  + "</td><td>" + bittarih  + "</td><td>" + faal  + '</td><td><input rel="sorgula" class="w3-btn w3-green" onclick="beyanname_getir_guncel(\'' + vkno + '\',\'' + satir.vdkodu + '\',\'' +  vergikodu +   '\')"'  + "type='submit' value='Göster'> " + "</td></tr>");
	     	      
	 
	      
	    
	      
	 }
      
      });

}

function sicilTabloGetir3(vkno){
  
  var mukellef_sayisi=0;
  
  
  var callid=makeid(13) + '-';
  var vergikodu1="0001";
  var vergikodu2="0012";

  var iliski_tur_dizi={'3':'3 - Genel Müdür; Şirket Müdürü','2':'2 - Yönetim Kurulu Üyesi'};
  var terkdurumu ={'0':'Faal', '1':'', '2':'Terk', '3':'Nakil Halinde Terk', '4':'Nakil Halinde Terk','5':'Ölüm/Tasfiye Halinde Terk','6':'Diğer Terk', '7':'Resen Terk', '8':'V.İ.R Terk', '11':'Diğer Terk', '10':'Diğer Terk', '12':'Diğer Terk',  '13':'Diğer Terk', '15':'Nevi Değişikliği Halinde Terk', '9':'Diğer Terk', '16':'670 sayılı KHK Kapsamına Göre Terk','17':'17 - Elektronik Tescil Olan Tüzel Kişinin İlk Yoklamada Bulunamadığından Terk','20':'20 - Elden/Posta Yolu ile İşe Başlama Bildirimi Mükellefiyet Tesisinde İlk Yoklamada Bulunamadığından Terk','21':'21 - VUK 160/A Maddesi Kapsamında Terk'};
  var potansiyelListe ={'1':'Potansiyel Değil', '9':'Potansiyel'};
  var isyeriNitelikListe ={'1':'Merkez', '2':'Şube', '3':'Depo', '4':'KDV İhtisas Şubesi'};
        
      
  $('#tablo5').after(' <table id="myTable5" border=1> <caption>Araştırılan </caption>   <tr>     <th>Vergi No</th>     <th>TC</th>    <th>Ünvan</th>  <th>Potansiyel</th>  <th>Gelen Giden Evrak</th><th>Kesinti Listesi</th> </tr>');
   
  $('#tablo4').after('<table id="myTable4" border=1><caption>Mükellefiyet Bilgileri</caption><tr><th>İŞ YERİ NİTELİK</th><th>DAİRE KODU</th><th>DAİRE ADI</th><th>BAŞLAMA TARİHİ</th><th>BİTİŞ TARİHİ</th><th>FAAL TERK</th><th>0001 Beyanı</th><th>0012 Beyanı</th></tr>');
      
        
      var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=sicilService_sicilBilgileriSorgula&callid=';
      var url5=url5.concat(callid + '15', '&token=', token() , '&jp=%7B%22vkn%22%3A%22', vkno, '%22%2C%22tckn%22%3A%22%22%2C%22vdKodu%22%3A%22%22%7D');
      var daireler = getRemote(url5);
      var obj =JSON.parse(daireler);
	
	var vkn=obj.data.vkn; 
	var tckn=obj.data.tckn; 
	var unvan=obj.data.kimlikunvan; 
	if (obj.data.kimlikpotansiyel==9){var potansiyel="Potansiyel Mükellef"}else{ var potansiyel = " Değil " }
	
       $("#myTable5 tr:last").after( "<tr><td>" + vkn  + "</td><td>" + tckn  + "</td><td>" + unvan + "</td><td>" + potansiyel + "</td><td><a target='_blank' href='diger/gelen-giden-evrak.html?vkn=" + vkno + "&token=" + token() + "' > Evrak Getir</a></td><td><a target='_blank' href='diger/kesinti-getir.html?vkn=" + vkno + "&token=" + token() + "' > Kesinti Listesi Getir</a></td></tr>");
       $("#myTable5 tr:last").after( "<tr><td colspan='4' >Açık Adres : " +  adresSorgulama(tckn)  + "</td></tr>");
       
	var sicil_mesaj_liste=obj.data.hatakontrol;

		if (sicil_mesaj_liste!=undefined){

			$.each(sicil_mesaj_liste,function(index,satir){

				 $("#myTable5 tr:last").after( "<tr><td colspan='5'>" + satir.mesaj + "</td></tr>");

			});

		}
	
	

	var daireListesi = obj.data.vdler.baglivd; /// vergi dairesi listeliyor
	
	$.each(daireListesi, function(index, satir){
	
	  var isyerinitelik = satir.isyerinitelik;
	
		  
	  if (isyerinitelik==1 || isyerinitelik==4){
	  
	      var isyerinitelik = isyeriNitelikListe[isyerinitelik];   
	      
	      var bastarih =tarih(satir.isebaslamatarihi);  	      
	      var bittarih =tarih(satir.isibirakmatarihi);
	      
	      var mukblgislemturubittur=satir.mukblgislemturubittur;
	      var faal = terkdurumu[mukblgislemturubittur];
	    
	      $("#myTable4 tr:last").after( "<tr><td>" + isyerinitelik + "</td><td>" + satir.vdkodu  + "</td><td>" + satir.vdadi  + "</td><td>" + bastarih  + "</td><td>" + bittarih  + "</td><td>" + faal  + '</td><td><input rel="sorgula" class="w3-btn w3-green" onclick="beyanname_getir_guncel(\'' + vkno + '\',\'' + satir.vdkodu + '\',\'' +  vergikodu1 +   '\')"'  + "type='submit' value='Göster'> </td><td>" + '<input rel="sorgula" class="w3-btn w3-green" onclick="beyanname_getir_guncel(\'' + vkno + '\',\'' + satir.vdkodu + '\',\'' +  vergikodu2 +   '\')"'  + "type='submit' value='Göster'> </td></tr>");
	     	      
	 
	      
	    
	      
	 }
      
      });
      
	

}


function sicilTabloGetir4(vkno){
  
  var mukellef_sayisi=0;
  var callid=makeid(13) + '-';
  var vergikodu="0015";

  var iliski_tur_dizi={'3':'3 - Genel Müdür; Şirket Müdürü','2':'2 - Yönetim Kurulu Üyesi'};
      var terkdurumu ={'0':'Faal', '1':'', '2':'Terk', '3':'Nakil Halinde Terk', '4':'Nakil Halinde Terk','5':'Ölüm/Tasfiye Halinde Terk','6':'Diğer Terk', '7':'Resen Terk', '8':'V.İ.R Terk', '11':'Diğer Terk', '10':'Diğer Terk', '12':'Diğer Terk',  '13':'Diğer Terk', '15':'Nevi Değişikliği Halinde Terk', '9':'Diğer Terk', '16':'670 sayılı KHK Kapsamına Göre Terk','17':'17 - Elektronik Tescil Olan Tüzel Kişinin İlk Yoklamada Bulunamadığından Terk','20':'20 - Elden/Posta Yolu ile İşe Başlama Bildirimi Mükellefiyet Tesisinde İlk Yoklamada Bulunamadığından Terk','21':'21 - VUK 160/A Maddesi Kapsamında Terk'};
      var potansiyelListe ={'1':'Potansiyel Değil', '9':'Potansiyel'};
      var isyeriNitelikListe ={'1':'Merkez', '2':'Şube', '3':'Depo', '4':'KDV İhtisas Şubesi'};
       
      
  $('#tablo5').after(' <table id="myTable5" border=1> <caption>Araştırılan </caption>   <tr>     <th>Vergi No</th>     <th>TC</th>    <th>Ünvan</th> <th> Potansiyel </th></tr>');
   
  $('#tablo4').after('<table id="myTable4" border=1><caption>Mükellefiyet Bilgileri</caption><tr><th>İŞ YERİ NİTELİK</th><th>DAİRE KODU</th><th>DAİRE ADI</th><th>BAŞLAMA TARİHİ</th><th>BİTİŞ TARİHİ</th><th>FAAL TERK</th><th>KDV Beyanı</th></tr>');
      
        
	var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=sicilService_sicilBilgileriSorgula&callid=';
	var url5=url5.concat(callid + '15', '&token=', token() , '&jp=%7B%22vkn%22%3A%22', vkno, '%22%2C%22tckn%22%3A%22%22%2C%22vdKodu%22%3A%22%22%7D');
	var daireler = getRemote(url5);
	var obj =JSON.parse(daireler);

	var vkn=obj.data.vkn; 
	var tckn=obj.data.tckn; 
	var unvan=obj.data.kimlikunvan; 
	if (obj.data.kimlikpotansiyel==9){var potansiyel="Potansiyel Mükellef"}else{ var potansiyel = " Değil " }
		
       $("#myTable5 tr:last").after( "<tr><td>" + vkn  + "</td><td>" + tckn  + "</td><td>" + unvan + "</td><td>" + potansiyel + "</td></tr>");
       
	var sicil_mesaj_liste=obj.data.hatakontrol;

		if (sicil_mesaj_liste!=undefined){

			$.each(sicil_mesaj_liste,function(index,satir){

				 $("#myTable5 tr:last").after( "<tr><td colspan='5'>" + satir.mesaj + "</td></tr>");

			});

		}


var tahsilGuclugu_Mesaj=obj.data.thGucalacakList;

		if (tahsilGuclugu_Mesaj.length>0){

			$.each(tahsilGuclugu_Mesaj,function(index,satir){

				 $("#myTable5 tr:last").after( "<tr><td colspan='5' style='color:red'>" + vdAdi(satir.vKodu) + " tarafından Tahsil Güçlüğüne alınmıştır</td></tr>");

			});

		}
	
	

	var daireListesi = obj.data.vdler.baglivd; /// vergi dairesi listeliyor
	
	$.each(daireListesi, function(index, satir){
	
	  var isyerinitelik = satir.isyerinitelik;
	
		  
	  if (isyerinitelik==1 || isyerinitelik==4){
	  
	      var isyerinitelik = isyeriNitelikListe[isyerinitelik];   
	      
	      var bastarih =tarih(satir.isebaslamatarihi);  	      
	      var bittarih =tarih(satir.isibirakmatarihi);
	      
	      var mukblgislemturubittur=satir.mukblgislemturubittur;
	      var faal = terkdurumu[mukblgislemturubittur];
	    
	      $("#myTable4 tr:last").after( "<tr><td>" + isyerinitelik + "</td><td>" + satir.vdkodu  + "</td><td>" + satir.vdadi  + "</td><td>" + bastarih  + "</td><td>" + bittarih  + "</td><td>" + faal  + '</td><td><input rel="sorgula" class="w3-btn w3-green" onclick="beyanname_getir_guncel(\'' + vkno + '\',\'' + satir.vdkodu + '\',\'' +  vergikodu +   '\')"'  + "type='submit' value='Göster'> " + "</td></tr>");
	     	      
	 
	      
	    
	      
	 }
      
      });

}

function unvanGetir(vkno){

try{
  
  var mukellef_sayisi=0;
  
  
  var callid=makeid(13) + '-';

  
        
      var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=sicilService_sicilBilgileriSorgula&callid=';
      var url5=url5.concat(callid + '15', '&token=', token(), '&jp=%7B%22vkn%22%3A%22', vkno, '%22%2C%22tckn%22%3A%22%22%2C%22vdKodu%22%3A%22%22%7D');
      var daireler = getRemote(url5);
      var obj =JSON.parse(daireler);
	

	var unvan=obj.data.kimlikunvan; 
	
     return  unvan ;
}

  catch(err){
  
  	return "Hata ile Karşılaşıldı";
  	
  
  }

}


function unvanTCGetir(vkno){


  
  var mukellef_sayisi=0;
  
  
  var callid=makeid(13) + '-';

  //

        
      var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=sicilService_sicilBilgileriSorgula&callid=';
        var url5=url5.concat(callid + '36', '&token=', token(), '&jp=%7B%22vkn%22%3A%22', vkno, '%22%2C%22tckn%22%3A%22%22%2C%22vdKodu%22%3A%22%22%7D');
      var daireler = getRemote(url5);
      var obj =JSON.parse(daireler);
	

		var unvan=obj.data.kimlikunvan; 
		var tckn=obj.data.tckn;
		
	
      return tckn + "-" + unvan ;
      


}





function unvanGetirGet(vkno,token){
  
  var callid=makeid(13) + '-';

  
        
      var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=sicilService_sicilBilgileriSorgula&callid=';
      var url5=url5.concat(callid + '15', '&token=', token, '&jp=%7B%22vkn%22%3A%22', vkno, '%22%2C%22tckn%22%3A%22%22%2C%22vdKodu%22%3A%22%22%7D');
      var daireler = getRemote(url5);
      var obj =JSON.parse(daireler);
	

	var unvan=obj.data.kimlikunvan; 
	
     return  unvan ;


}

function unvanGetirTCdenGet(tc,token){
  
  var callid=makeid(13) + '-';

  
        
      var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=sicilService_sicilBilgileriSorgula&callid=';
      var url5=url5.concat(callid + '15', '&token=', token, '&jp=%7B%22vkn%22%3A%22%22%2C%22tckn%22%3A%22',tc,'%22%2C%22vdKodu%22%3A%22%22%7D');
      var daireler = getRemote(url5);
      var obj =JSON.parse(daireler);
	

	var unvan=obj.data.kimlikunvan; 
	
     return  unvan ;


}
function get_sicilTabloGetir(){


    var token = GetUrlValue('token');
    var vkno=GetUrlValue('vkn');
   var callid=makeid(13) + '-';

  $('#tablo5').after(' <table id="myTable5" border=1> <caption>Araştırılan</caption>   <tr>     <th>Vergi No</th>     <th>TC</th>    <th>Ünvan</th> </tr>');
     
        
      var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=sicilService_sicilBilgileriSorgula&callid=';
      var url5=url5.concat(callid + '15', '&token=', token , '&jp=%7B%22vkn%22%3A%22', vkno, '%22%2C%22tckn%22%3A%22%22%2C%22vdKodu%22%3A%22%22%7D');
      var daireler = getRemote(url5);
      var obj =JSON.parse(daireler);
	
	if (obj.error!="1"){
		var vkn=obj.data.vkn; 
		var tckn=obj.data.tckn; 
		var unvan=obj.data.kimlikunvan; 
		
		   $("#myTable5 tr:last").after( "<tr><td>" + vkn  + "</td><td>" + tckn  + "</td><td>" + unvan + "</td></tr>");
		   
		   }else{
		   
		   	  $("#myTable5 tr:last").after( "<tr><td colspan='3' >" +	 obj.messages[0].text  + "</td></tr>");
		   		   
		   }

	
}


function mukTumAdresGetir(){

try{

    var token = GetUrlValue('token');
    var vkno=GetUrlValue('vkn');
	var tckn= tcGetirGet(token,vkno);

   var callid=makeid(13) + '-';

  $('#tablo6').after(' <table id="myTable6" border=1> <caption>Tüm Adresler</caption><tr>	<th>Adres No</th>	<th>Yerleşim Yeri</th>    <th>Adres Türü</th>	<th>Beyan Kurum</th>	<th>Beyan Kişi</th>    <th>Beyan Tarihi</th> 	<th>Tescil Tarihi</th> 	<th>Taşınmaz Tarihi</th> 	<th>Adres Durumu</th> 	<th>Açıklamalar</th> </tr>');


      var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=mernisService_getTarihceliAdresBilgileri&callid=';
      var url5=url5.concat(callid + '94', '&token=', token , '&jp=%7B%22tckn%22%3A%22',tckn,'%22%7D');
      var daireler = getRemote(url5);
      var obj =JSON.parse(daireler);

		$.each(obj.data.adres,function(index,satir){
		
		   $("#myTable6 tr:last").after( "<tr><td>" + satir.adrno  + "</td><td>" + satir.acikadres  + "</td><td>" + satir.adresturu + "</td><td>" + satir.beyanedenkurum + "</td><td>" + satir.beyankisi + "</td><td>" + tarihFormat(satir.beyantar) + "</td><td>" + tarihFormat(satir.tesciltar) + "</td><td>" + tarihFormat(satir.tasinmatar) + "</td><td>" + satir.adresdurum + "</td><td>" + satir.aciklama + "</td></tr>");

		});
}

catch(err)		   
	{

	   $("#myTable6 tr:last").after( "<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>" + err + "</td></tr>");

}
	
	
}


function get_sicilTabloGetir2(){


  var tokenlink = GetUrlValue('token');
   var vkno=GetUrlValue('vkn');
   var callid=makeid(13) + '-';
   var mukellef_sayisi=0;
 


  var vergikodu="0015";

  var iliski_tur_dizi={'3':'3 - Genel Müdür; Şirket Müdürü','2':'2 - Yönetim Kurulu Üyesi'};
      var terkdurumu ={'0':'Faal', '1':'', '2':'Terk', '3':'Nakil Halinde Terk', '4':'Nakil Halinde Terk','5':'Ölüm/Tasfiye Halinde Terk','6':'Diğer Terk', '7':'Resen Terk', '8':'V.İ.R Terk', '11':'Diğer Terk', '10':'Diğer Terk', '12':'Diğer Terk',  '13':'Diğer Terk', '15':'Nevi Değişikliği Halinde Terk', '9':'Diğer Terk', '16':'670 sayılı KHK Kapsamına Göre Terk','17':'17 - Elektronik Tescil Olan Tüzel Kişinin İlk Yoklamada Bulunamadığından Terk','20':'20 - Elden/Posta Yolu ile İşe Başlama Bildirimi Mükellefiyet Tesisinde İlk Yoklamada Bulunamadığından Terk','21':'21 - VUK 160/A Maddesi Kapsamında Terk'};
      var potansiyelListe ={'1':'Potansiyel Değil', '9':'Potansiyel'};
      var isyeriNitelikListe ={'1':'Merkez', '2':'Şube', '3':'Depo', '4':'KDV İhtisas Şubesi'};
        
      
  $('#tablo5').after(' <table id="myTable5" border=1> <caption>Araştırılan </caption>   <tr>     <th>Vergi No</th>     <th>TC</th>    <th>Ünvan</th> </tr>');
   
  $('#tablo4').after('<table id="myTable4" border=1><caption>Mükellefiyet Bilgileri</caption><tr><th>İŞ YERİ NİTELİK</th><th>DAİRE KODU</th><th>DAİRE ADI</th><th>BAŞLAMA TARİHİ</th><th>BİTİŞ TARİHİ</th><th>FAAL TERK</th><th>KDV Beyanı</th></tr>');
      
        
      var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=sicilService_sicilBilgileriSorgula&callid=';
      var url5=url5.concat(callid + '15', '&token=',tokenlink , '&jp=%7B%22vkn%22%3A%22', vkno, '%22%2C%22tckn%22%3A%22%22%2C%22vdKodu%22%3A%22%22%7D');
      var daireler = getRemote(url5);
      var obj =JSON.parse(daireler);
	
	var vkn=obj.data.vkn; 
	var tckn=obj.data.tckn; 
	var unvan=obj.data.kimlikunvan; 
	
       $("#myTable5 tr:last").after( "<tr><td>" + vkn  + "</td><td>" + tckn  + "</td><td>" + unvan + "</td></tr>");
       
	var sicil_mesaj_liste=obj.data.hatakontrol;

		if (sicil_mesaj_liste!=undefined){

			$.each(sicil_mesaj_liste,function(index,satir){

				 $("#myTable5 tr:last").after( "<tr><td colspan='5'>" + satir.mesaj + "</td></tr>");

			});

		}
	
	

	var daireListesi = obj.data.vdler.baglivd; /// vergi dairesi listeliyor
	
	$.each(daireListesi, function(index, satir){
	
	  var isyerinitelik = satir.isyerinitelik;
	
		  
	  if (isyerinitelik==1 || isyerinitelik==4){
	  
	      var isyerinitelik = isyeriNitelikListe[isyerinitelik];   
	      
	      var bastarih =tarih(satir.isebaslamatarihi);  	      
	      var bittarih =tarih(satir.isibirakmatarihi);
	      
	      var mukblgislemturubittur=satir.mukblgislemturubittur;
	      var faal = terkdurumu[mukblgislemturubittur];
	    
	      $("#myTable4 tr:last").after( "<tr><td>" + isyerinitelik + "</td><td>" + satir.vdkodu  + "</td><td>" + satir.vdadi  + "</td><td>" + bastarih  + "</td><td>" + bittarih  + "</td><td>" + faal  + '</td><td><input rel="sorgula" class="w3-btn w3-green" onclick="get_beyanname_getir_guncel(\'' + vkno + '\',\'' + satir.vdkodu + '\',\'' +  vergikodu +   '\')"'  + "type='submit' value='Göster'> " + "</td></tr>");
	     	      
	 
	      
	    
	      
	 }
      
      });

}



function get_matrahTecilno(vkno,vdkodu,thkNo) {

var tokenlink =GetUrlValue('token');
var callid=makeid(13) + '-';
var dizi =new Array();


    var orgOid=orgIDGetir(vdkodu);
    
	
    if (orgOid!="undefined") { 
    
    var url= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=mhkTecilService_tecilleriGetir&callid=';
    var url=url.concat(callid + '197', '&token=', tokenlink, '&jp=%7B%22input%22%3A%7B%22vkn%22%3A%22',vkno,'%22%2C%22tckn%22%3A%22%22%2C%22vdKodu%22%3A%22',vdkodu,'%22%2C%22orgOid%22%3A%22', orgOid ,'%22%2C%22tecilTip%22%3A%22%22%2C%22tclKaldirmaNdn%22%3A%22%22%7D%7D');


    var url_thk = getRemote(url);
    var obj =JSON.parse(url_thk);

    var a=0;
    var b=0;

    var liste = obj.data.tecilKayitlari; /// 

      $.each(liste, function(index, satir){ //bütün tecil numaralarının tahakkuk numaralı kontrol ediliyor

	    
	    var url1= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=mhkTecilService_tecilDetayGetir&callid=';
	    var url1=url1.concat(callid + '30', '&token=', tokenlink, '&jp=%7B%22input%22%3A%7B%22tecilDosyaNo%22%3A%22',satir.tecilDosyaNo,'%22%2C%22tecilDilekceNo%22%3A%22%22%2C%22tecilDilekceTarihi%22%3A%22%22%2C%22tecildenKaldirmaTarihi%22%3A%22%22%2C%22tecildenKaldirmaNedeni%22%3A%22',satir.tecildenKaldirmaNedeni,'%22%2C%22ortakVkn%22%3A%22%22%2C%22ortakTckn%22%3A%22%22%2C%22plakano%22%3A%22%22%2C%22tecilTuru%22%3A%22%22%2C%22vdKodu%22%3A%22',vdkodu,'%22%2C%22orgOid%22%3A%22',orgOid,'%22%2C%22tecilTipi%22%3A%22',satir.tecilTipi,'%22%7D%7D');
	   
	    var url_thk1 = getRemote(url1);
	    var obj1 =JSON.parse(url_thk1);
	    var tecil_thk=obj1.data.tecilSatirlari[0].thkfisno;
	    
	    
	    if (tecil_thk==thkNo) {
	   	    
	    dizi[0] = satir.tecilDosyaNo;

	    tecilOdenenToplamVab=obj1.data.tecilOdenenToplamVab;
	    
	    tecilOdenenToplamTecilFaizi=obj1.data.tecilOdenenToplamTecilFaizi;
	    
	    tecilToplamIndirim =obj1.data.tecilToplamIndirim;
	    
       toplam= Number(tecilOdenenToplamVab+tecilOdenenToplamTecilFaizi+tecilToplamIndirim).toLocaleString("tr-TR");
	    
       dizi[2]=toplam;
 
       dizi[1]= Number(obj1.data.tecilToplamVab).toLocaleString("tr-TR");
		    
	   dizi[3]= satir.tecildenKaldirmaNedeni;

	    }
	    
	    
	});

   
    }
    
     return dizi;

}

function bugunTarih(){

  var bugun=new Date();
  
  var yil= String(bugun.getFullYear());
  
  var gun = String(bugun.getDate());
  
  if (gun.length==1){   gun= "0" + gun;  }
  
  var ay = String(bugun.getMonth()+1);
  
  if (ay.length==1){   ay= "0" + ay;  }
  
  return yil + ay + gun;
    


}

function bugunTarih1(){

  var bugun=new Date();
  
  var yil= String(bugun.getFullYear());

  var ay = String(bugun.getMonth()+1);
  
  var gun = String(bugun.getDate());

  
 return yil + "-" + ay + "-" + gun  ;
    


}

function bugunTarih2(){

	var bugun=new Date();
	var yil= String(bugun.getFullYear());
	 var ay = String(bugun.getMonth()+1);
	var gun = String(bugun.getDate());
	var saat = String(bugun.getHours());
	var dakika = String(bugun.getMinutes());
	var saniye = String(bugun.getSeconds());

	return yil + "-" + ay + "-" + gun + "-" + saat + "-" + dakika  + "-" + saniye;
    


}

function iadeDosyaSure(iadeTakipNo,token){

var callid=makeid(13) + '-';

	var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=iadeIzlemeService_iadeTakipIzlemeIadeSureleri&callid='; 
	var url5=url5.concat(callid + '76', '&token=', token, '&jp=%7B%22input%22%3A%7B%22iadetakipno%22%3A%22',iadeTakipNo,'%22%2C%22merkez%22%3A%22%22%7D%7D');
	var liste = getRemote(url5);
	var obj =JSON.parse(liste);
	var vdSure="";
	var mukSure="";
	var sure = "";
	
	if(obj.data.iadeDetay.length>0)	{
		
		for(i=0;i<obj.data.iadeDetay.length;i++){
				var label = obj.data.iadeDetay[i].label;
				var labelSure = obj.data.iadeDetay[i].value;
				if (label=="Vergi Dairesinde \nGeçen Süre"){
					vdSure=Number(labelSure)/(60*24);
				}else if (label=="Mükellefte \nGeçen Süre"){
					mukSure=Number(labelSure)/(60*24);
				}
				else if (label=="Deftardarlikta \nGeçen Süre"){
					vdSure=vdSure + Number(labelSure)/(60*24);
				}
		}

		return (Math.round(vdSure)+ "-" + Math.round(mukSure) );

	}else {
	
 		return ("-");

	}



}


function bugun(){

  var bugun=new Date();
  
  var yil= String(bugun.getFullYear());
  
  var gun = String(bugun.getDate());
  
  if (gun.length==1){   gun= "0" + gun;  }
  
  var ay = String(bugun.getMonth()+1);
  
  if (ay.length==1){   ay= "0" + ay;  }
  
  return gun + "-"+  ay + "-" + yil;
    


}

function bugun(){

  var bugun=new Date();
  
  var yil= String(bugun.getFullYear());
  
  var gun = String(bugun.getDate());
  
  if (gun.length==1){   gun= "0" + gun;  }
  
  var ay = String(bugun.getMonth()+1);
  
  if (ay.length==1){   ay= "0" + ay;  }
  
  return gun + "-"+  ay + "-" + yil;
    


}


function kapat(ekOid){

      document.getElementById(ekOid).style.display="none";
       
    
}

function adresSorgulama(tckno){

//

  
  var mukellef_sayisi=0;
  
  
  var callid=makeid(13) + '-';

  
      var url1= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=mernisService_getAdresBilgileri&callid=';
      var url1=url1.concat(callid + '88', '&token=', token(), '&jp=%7B%22tckn%22%3A%22',tckno,'%22%7D');
    
        var adres = getRemote(url1);
	var obj =JSON.parse(adres);
	
      var hataVarmi=obj.error;
            
     if (hataVarmi==undefined || hataVarmi=="undefined" ){
     
    
     return obj.data.acikAdres;   
     
     }else{
     
    
     
     
     }
	
	

}

function devamEdenIadeBilgilerin (yil,tur){

    var myRegex= /[0-9]+/;


;
var callid=makeid(13) + '-';
var talep_sayisi=0;
var talep_tutari=0;

var evdbRaporAssosLogin=localStorage.getItem("evdbRaporAssosLogin");

      
   
      var url= 'http://10.251.63.99/evdorapor_server/dispatch?cmd=evdoLRIadeMahsupServices_iadeStandartDilekcelerListesi&callid=';
      var url=url.concat(callid + '1062', '&token=', evdbRaporAssosLogin, '&jp=%7B%22serviceName%22%3A%22evdoLRIadeMahsupServices_iadeStandartDilekcelerListesi%22%2C%22reportName%22%3A%22RP_EVDO_IADEMAHSUP_STANDARTDILEKCE_IADEDOSYASI_LISTESI%22%2C%22BASVERGIDONEM%22%3A%22%22%2C%22BITVERGIDONEM%22%3A%22%22%2C%22VERGIKODU%22%3A%22%22%2C%22VNOBASLANGIC%22%3A%220000000000%22%2C%22VNOBITIS%22%3A%224999999999%22%2C%22BASTARIHI%22%3A%22',yil,'0101%22%2C%22BITISTARIHI%22%3A%22',yil,'1231%22%2C%22DOSYADURUMU%22%3A%220%22%2C%22TALEPDETAY%22%3A%220%22%2C%22BASTCKIMLIKNO%22%3A%22%22%2C%22BITTCKIMLIKNO%22%3A%22%22%2C%22DZTMUHDURUM%22%3A%225%22%2C%22DILEKCETIPI%22%3A%22',tur,'%22%2C%22DOSYADURUMUSTR%22%3A%22Aktifler%22%2C%22SERVISOID%22%3A%2200000000000001%22%2C%22SERVISADI%22%3A%22%C3%87EK%C4%B0RGE%20VERG%C4%B0%20DA%C4%B0RES%C4%B0%22%2C%22DILEKCEDETAY%22%3A%22%25%22%7D');
      var daireler = getRemote(url);
      var obj =JSON.parse(daireler);
      var hataVarmi=obj.messages;   
    
	    if (hataVarmi=="undefined" || hataVarmi==undefined) {
		  
		  $.each(obj.data.VERILER, function(index, satir){
		  
		  talep_sayisi=talep_sayisi + 1;
	          
	          //talep_tutari=talep_tutari + Number(satir.TUTAR);
		
		
		  });
	      
	      }
	      
	      
      var url= 'http://10.251.63.99/evdorapor_server/dispatch?cmd=evdoLRIadeMahsupServices_iadeStandartDilekcelerListesi&callid=';
      var url=url.concat(callid + '1062', '&token=', evdbRaporAssosLogin , '&jp=%7B%22serviceName%22%3A%22evdoLRIadeMahsupServices_iadeStandartDilekcelerListesi%22%2C%22reportName%22%3A%22RP_EVDO_IADEMAHSUP_STANDARTDILEKCE_IADEDOSYASI_LISTESI%22%2C%22BASVERGIDONEM%22%3A%22%22%2C%22BITVERGIDONEM%22%3A%22%22%2C%22VERGIKODU%22%3A%22%22%2C%22VNOBASLANGIC%22%3A%225000000000%22%2C%22VNOBITIS%22%3A%229999999999%22%2C%22BASTARIHI%22%3A%22',yil,'0101%22%2C%22BITISTARIHI%22%3A%22',yil,'1231%22%2C%22DOSYADURUMU%22%3A%220%22%2C%22TALEPDETAY%22%3A%220%22%2C%22BASTCKIMLIKNO%22%3A%22%22%2C%22BITTCKIMLIKNO%22%3A%22%22%2C%22DZTMUHDURUM%22%3A%225%22%2C%22DILEKCETIPI%22%3A%22',tur,'%22%2C%22DOSYADURUMUSTR%22%3A%22Aktifler%22%2C%22SERVISOID%22%3A%2200000000000001%22%2C%22SERVISADI%22%3A%22%C3%87EK%C4%B0RGE%20VERG%C4%B0%20DA%C4%B0RES%C4%B0%22%2C%22DILEKCEDETAY%22%3A%22%25%22%7D');
      var daireler = getRemote(url);
      var obj =JSON.parse(daireler);
      var hataVarmi=obj.messages;   
    
	    if (hataVarmi=="undefined" || hataVarmi==undefined) {
		  
		  $.each(obj.data.VERILER, function(index, satir){
		  
		  talep_sayisi=talep_sayisi + 1;
	          
	          //talep_tutari=talep_tutari + Number(satir.TUTAR);
		
		
		  });
	      
	      }
      
   
      
      
      return talep_sayisi;	

}



function tapuBilgileri(tapuId,vkn){

var myRegex= /[0-9]+/;


;
var callid=makeid(13) + '-';


 var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=gayrimenkulService_gayrimenkulAlansatan1noluFormSorgulama&callid=';
 var url5=url5.concat(callid + '33', '&token=', token(), '&jp=%7B%22tasinmazid%22%3A%22',tapuId,'%22%2C%22vkn0%22%3A%22',vkn,'%22%2C%22tckn0%22%3A%22%22%2C%22vkn1%22%3A%22%22%2C%22tckn1%22%3A%22%22%2C%22islemid%22%3A%22171628124%22%2C%22kurum%22%3A%22Nil%C3%BCfer%22%2C%22il%22%3A%22BURSA%22%2C%22ilce%22%3A%22N%C4%B0L%C3%9CFER%22%2C%22mahKoy%22%3A%22AK%C3%87ALAR%22%2C%22cins%22%3A%22DA%C4%B0RE%22%2C%22adaNo%22%3A%22144%22%2C%22parselNo%22%3A%2231%22%2C%22yuzOlcum%22%3A%220%22%7D');
 var evrak = getRemote(url5);
 var obj =JSON.parse(evrak);

}



function tarih(tarih_veri){

      if(tarih_veri != ""){
		var year2 = parseFloat(tarih_veri.substring(0,4));
		var month2 = parseFloat(tarih_veri.substring(4,6));
		var day2 = parseFloat(tarih_veri.substring(6,8));
		    
		    return (day2 + '.'+ month2 + '.' + year2);
		    
      }else{
      
      return '';
      }



}

function tarihFormat(tarih_veri){


      if(tarih_veri != "" && tarih_veri != null ){
		var year2 = parseFloat(tarih_veri.substring(0,4));
		var month2 = parseFloat(tarih_veri.substring(4,6));
		var day2 = parseFloat(tarih_veri.substring(6,8));
		    
		    return (day2 + '.'+ month2 + '.' + year2);
		    
      }else{
      
      return '';
      }

}

function tarihFormat1(tarih_veri){

      if(tarih_veri != ""){
		var year2 = parseFloat(tarih_veri.substring(0,4));
		var month2 = parseFloat(tarih_veri.substring(4,6));
		var day2 = parseFloat(tarih_veri.substring(6,8));
		    
		    return (year2 + '-'+ month2 + '-' + day2);
		    
      }else{
      
      return '';
      }



}


function tarihFormat2(tarih_veri){

      if(tarih_veri != "" && tarih_veri != null ){
		var year2 = tarih_veri.substring(6,10);
		var month2 = tarih_veri.substring(10,12);
		var day2 = tarih_veri.substring(12,14);
		    
		    return (day2 + '/'+ month2 + '/' + year2);
		    
      }else{
      
      return '';
      }



}




function tarihFormat3(tarih_veri){


	if(tarih_veri =="Hata") {return "Hata";}


      if(tarih_veri != "" && tarih_veri != null  && tarih_veri != "undefined" && tarih_veri != undefined){
		var year2 = tarih_veri.substring(0,4);
		var month2 = tarih_veri.substring(4,6);
		var day2 = tarih_veri.substring(6,8);
		    
		    return (year2 + '-'+ month2 + '-' + day2 );
		    
      }else{
      
      return ' ';
      }



}



function donemDonustur(veri){


      if(veri != "" && veri != null ){
		var year2 = parseFloat(veri.substring(0,4));
		var month2 = parseFloat(veri.substring(4,6));
				    
		    return (year2 + '-'+ month2);
		    

      }else{
      
      return '';
      }

}


function donemDonustur1(veri){


      if(veri != "" && veri != null ){
		var year2 = parseFloat(veri.substring(3,7));
		var month2 = veri.substring(0,2);
		
			    
		    return (year2 + '-'+ month2);
		    

      }else{
      
      return '';
      }

}


function donemDonustur2(veri){


      if(veri != "" && veri != null ){
		var year2 = veri.substring(0,4);
		var month2 = veri.substring(4,6);
				    
		    return (year2 + month2);
		    

      }else{
      
      return '';
      }

}

function cariDonem(){


	return donemDonustur2(bugunTarih());


}
function kullanmaTespiti(servis,asama){

var myRegex= /[0-9]+/;


;
var callid=makeid(13) + '-';


      if (servis==1){

      var servisAralik={'vn1':'0000000000','vn2':'3249999999'};

      }else if (servis==2){

      var servisAralik={'vn1':'3250000000','vn2':'6349999999'};


      }else if (servis==3){

      var servisAralik={'vn1':'6350000000','vn2':'9999999999'};


      }
      
      
      if (asama==1) {
      
      var asama="K10";
      
      }else{
      
      var asama="KE1";
      
      }
      
      
	    
      
      var url5= 'http://10.251.63.99/ozes_server/dispatch?cmd=ozelEsaslarListelemeService_kulTespListesiGetir&callid=';
      var url5=url5.concat(callid + '94', '&token=', token(), '&jp=%7B%22vdIlKodu%22%3A%22',vdKodu(),'%22%2C%22basVkn%22%3A%22', servisAralik['vn1'],'%22%2C%22bitVkn%22%3A%22',servisAralik['vn2'],'%22%2C%22basTckn%22%3A%22%22%2C%22bitTckn%22%3A%22%22%2C%22akisDurumu%22%3A%22',asama,'%22%2C%22parafSayisi%22%3A%22%22%2C%22raporAralikBas%22%3A%22%22%2C%22raporAralikBit%22%3A%22%22%2C%22lastUpdateOptimeBas%22%3A%22%22%2C%22lastUpdateOptimeBit%22%3A%22%22%2C%22listFilter%22%3A%22VD_MEMUR%22%2C%22respKeyParam%22%3A%22liste%22%2C%22pv%22%3A%7B%22start%22%3A0%2C%22limit%22%3A%221	%22%2C%22sorters%22%3A%5B%5D%7D%7D');
      var evrak = getRemote(url5);
      var obj =JSON.parse(evrak);

      if (obj.data.toplam==undefined || obj.data.toplam=='undefined' ){
      
      return 'Bir Hata ile Karşılaşıldı';
      
      }else{
      
      return obj.data.toplam;
      
      }
      
      

      
      
      

}


function yoklamaBilgisi(vkn){

      var myRegex= /[0-9]+/;
      
      
      
      var callid=makeid(13) + '-';


      var url= 'http://eyoklama.gelirler.gov.tr:32516/edenetis/dispatch?cmd=srvcYoklamalar_getEskiYoklamaListesi&callid=';
      var url=url.concat(callid + '165', '&token=', token(), '&jp=%7B%22vdkodu%22%3A%22',vdKodu(),'%22%2C%22vkn%22%3A%22',vkn,'%22%2C%22tckn%22%3A%22%22%2C%22sessionData%22%3A%7B%22rol%22%3A10%2C%22user%22%3A%22%22%2C%22giris%22%3A%22%22%2C%22birim%22%3A%22',vdKodu(),'%22%2C%22il%22%3A%22016%22%2C%22adi%22%3A%22%22%7D%7D');
      var yoklama = getRemote(url);
      var obj_yoklama =JSON.parse(yoklama);
     
      var yoklamaListesi=obj_yoklama.data; 
      
      
      
      /* 
       var yoklama_dizi=new Array();
      yoklama_dizi=obj_yoklama.data;
      var yoklamaDizi=new Array();
      var a=0;
      
      $.each(yoklama_dizi, function(index, value){ //bütün tecil numaralarının tahakkuk numaralı kontrol ediliyor

      var esonuc=yoklama_dizi['esonuc'];
      var eykodu=yoklama_dizi['eykodu'];
      var egiristar=tarih(yoklama_dizi['egiristar']);
       
       yoklamaDizi[a]= esonuc + "- " +  eykodu + "- " + egiristar +  "<hr><br>";
	
	a=a+1;
	    
	});

      //return (yoklamaListesi);
      
      return yoklamaDizi;*/
      
      return (yoklamaListesi);
      
}




function ozel_esas(vkn,tokenlink){
	try {

	
    var callid=makeid(13) + '-';



	var url= 'http://10.251.63.99/ozes_server/dispatch?cmd=ozesOlumsuzTespitService_mukellefSorgulamaSonucListesiGetirDurumMain&callid=';
	var url=url.concat(callid + '122', '&token=', tokenlink , '&jp=%7B%22mukVkn%22%3A%22',vkn,'%22%2C%22mukTckn%22%3A%22%22%2C%22durum%22%3A%222050%22%7D');
	var olumsuzluk = getRemote(url);
	var obj =JSON.parse(olumsuzluk);
	var durum="Yok";
	
	if (obj.data.listBir=="visible"){ durum="Var"; 	}

	else if (obj.data.listIki=="visible"){ durum="Var";	}

	else if (obj.data.listUc=="visible"){durum="Var";	}

	else if (obj.data.listDort=="visible"){durum="Var";	}

	else if (obj.data.listBes=="visible"){durum="Var";	}

	else if (obj.data.listAlti=="visible"){durum="Var";	}

	else if (obj.data.listYedi=="visible"){durum="Var";	}

	else if (obj.data.listSekiz=="visible"){durum="Var";	}

	else if (obj.data.listDokuz=="visible"){durum="Var";	}
	
	else if (obj.data.listOn=="visible"){durum="Var";	}

	else if (obj.data.listOnbir=="visible"){durum="Var";	}

	else if (obj.data.listOniki=="visible"){durum="Var";	}
	
	else if (obj.data.listOnuc=="visible"){durum="Var";	}


//	if (durum=="Var"){ return "<a href='diger/ozel-esas-getir.html?token=" + tokenlink + "&vkn=" + vkn +  "' target='_blank'>Olumsuz rapor/tespit var</a>"; }else{ return durum; }

	return durum;

	}

	catch(err){

	return "Hata ile Karşılaşıldı";
}	
}

function ozel_esasGet(vkno,token){


  var callid=makeid(13) + '-';


var url= 'http://10.251.63.99/ozes_server/dispatch?cmd=ozelEsaslarListelemeService_mukellefSorgulamaSonucListesiGetir&callid=';
      var url=url.concat(callid + '92', '&token=', token, '&jp=%7B%22mukVkn%22%3A%22', vkno, '%22%2C%22mukTckn%22%3A%22%22%7D');
      var ozel_esas = getRemote(url);
      var obj_ozel_esas =JSON.parse(ozel_esas);
      
      if (obj_ozel_esas.error==1){
      
      return "Bir Hata ile karşılaşıldı";
      
      }
      
      var ozel_esas_durumu=obj_ozel_esas.data.mukellefOzelEsasDurum; 
      
      if (ozel_esas_durumu=="ozelEsas")  {return  "<a href='ozel-esas-getir.html?token=" + token + "&vkn=" + vkno +  "' target='_blank'>Özel Esaslara tabidir</a>";}
      if (ozel_esas_durumu=="genelEsas") {return  "<a href='ozel-esas-getir.html?token=" + token + "&vkn=" + vkno +  "' target='_blank'>Genel Esaslara tabidir</a>";}

      return ozel_esas_durumu;
	
	//if (feto_durum=='Sorgulanmış olan mükellefin bu kapsamda kaydı bulunmamaktadır.'){return "Kayıt Yok";}else{ return "Kayıt var";}


}


function matrahTecilno(vkno,vdkodu,thkNo) {
var myRegex= /[0-9]+/;



var callid=makeid(13) + '-';
var dizi =new Array();


    var orgOid=orgIDGetir(vdkodu);

    if (orgOid!="undefined") { 
    
    var url= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=mhkTecilService_tecilleriGetir&callid=';
    var url=url.concat(callid + '197', '&token=', token(), '&jp=%7B%22input%22%3A%7B%22vkn%22%3A%22',vkno,'%22%2C%22tckn%22%3A%22%22%2C%22vdKodu%22%3A%22',vdkodu,'%22%2C%22orgOid%22%3A%22', orgOid ,'%22%2C%22tecilTip%22%3A%22%22%2C%22tclKaldirmaNdn%22%3A%22%22%7D%7D');


    var url_thk = getRemote(url);
    var obj =JSON.parse(url_thk);

    var a=0;
    var b=0;

    var liste = obj.data.tecilKayitlari; /// 

      $.each(liste, function(index, satir){ //bütün tecil numaralarının tahakkuk numaralı kontrol ediliyor

	    
	    var url1= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=mhkTecilService_tecilDetayGetir&callid=';
	    var url1=url1.concat(callid + '30', '&token=', token(), '&jp=%7B%22input%22%3A%7B%22tecilDosyaNo%22%3A%22',satir.tecilDosyaNo,'%22%2C%22tecilDilekceNo%22%3A%22%22%2C%22tecilDilekceTarihi%22%3A%22%22%2C%22tecildenKaldirmaTarihi%22%3A%22%22%2C%22tecildenKaldirmaNedeni%22%3A%22',satir.tecildenKaldirmaNedeni,'%22%2C%22ortakVkn%22%3A%22%22%2C%22ortakTckn%22%3A%22%22%2C%22plakano%22%3A%22%22%2C%22tecilTuru%22%3A%22%22%2C%22vdKodu%22%3A%22',vdkodu,'%22%2C%22orgOid%22%3A%22',orgOid,'%22%2C%22tecilTipi%22%3A%22',satir.tecilTipi,'%22%7D%7D');
	   
	    var url_thk1 = getRemote(url1);
	    var obj1 =JSON.parse(url_thk1);
	    var tecil_thk=obj1.data.tecilSatirlari[0].thkfisno;
	    
	    
	    if (tecil_thk==thkNo) {
	   	    
	    dizi[0] = satir.tecilDosyaNo;

	    tecilOdenenToplamVab=obj1.data.tecilOdenenToplamVab;
	    
	    tecilOdenenToplamTecilFaizi=obj1.data.tecilOdenenToplamTecilFaizi;
	    
	    tecilToplamIndirim =obj1.data.tecilToplamIndirim;
	    
       toplam= Number(tecilOdenenToplamVab+tecilOdenenToplamTecilFaizi+tecilToplamIndirim).toLocaleString("tr-TR");
	    
       dizi[2]=toplam;
 
       dizi[1]= Number(obj1.data.tecilToplamVab).toLocaleString("tr-TR");
		    
	   dizi[3]= satir.tecildenKaldirmaNedeni;

	    }
	    
	    
	});

   
    }
    
     return dizi;

}


function tecilListesi(vkno){


var myRegex= /[0-9]+/;



var callid=makeid(13) + '-';
var vd=vdKodu();

  $('#tablo21').after('<table id="myTable24" border=1><tr><caption>Çekirge VDM-Tecil Taksitlendirme Listesi</caption><th>Tecil Türü</th><th>Tecil Dosya No</th><th>Kaldırılma Tarihi</th><th>Kaldırılma Nedeni</th><th>Tahakkuk-Tahsilat</th></tr>');



var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=mhkTecilService_tecilleriGetir&callid='; 
			var url5=url5.concat(callid + '48', '&token=', token(), '&jp=%7B%22input%22%3A%7B%22vkn%22%3A%22',vkno,'%22%2C%22tckn%22%3A%22%22%2C%22vdKodu%22%3A%22',vdKodu(),'%22%2C%22orgOid%22%3A%22',vdOrgId(),'%22%2C%22tecilTip%22%3A%22%22%2C%22tclKaldirmaNdn%22%3A%22%22%7D%7D');
			var liste = getRemote(url5);
			var obj =JSON.parse(liste);
			
			
			  $.each(obj.data.tecilKayitlari, function(index, satir){
					

				  $("#myTable24 tr:last").after( "<tr><td>"+ satir.tecilTuru + "-" + satir.basvuruMad +"</td><td>"+ satir.tecilDosyaNo +"</td><td>"+ tarihFormat(satir.tecildenKaldirmaTarihi) +"</td><td>"+ satir.tecildenKaldirmaNedeni +"</td><td><a target='_blank' href='../diger/matrah-artirimi-tahakkuk-tahsilat.html?token=" + token() + "&vkn="+ vkno + "&tecilDosyaNo="+ satir.tecilDosyaNo + "&tecilDilekceNo="+ satir.tecilDilekceNo +"&tecilDosyaNo="+ satir.tecilDosyaNo +"&tecilDilekceTarihi="+ satir.tecilDilekceTarihi +"&tecildenKaldirmaTarihi="+ satir.tecildenKaldirmaTarihi + "&tecilTuru="+ satir.tecilTuru +"&vd="+ vd + "'>Göster   </a></td></tr>");
				  				   
			  
	    });


}
function tecilListesi1(vkno,token){

var callid=makeid(13) + '-';
var vd=vdKodu();

  $('#tablo21').after('<table id="myTable24" border=1><tr><caption>Çekirge VDM-Tecil Taksitlendirme Listesi</caption><th>Tecil Türü</th><th>Tecil Dosya No</th><th>Kaldırılma Tarihi</th><th>Kaldırılma Nedeni</th><th>Tahakkuk-Tahsilat</th></tr>');



var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=mhkTecilService_tecilleriGetir&callid='; 
			var url5=url5.concat(callid + '48', '&token=', token, '&jp=%7B%22input%22%3A%7B%22vkn%22%3A%22',vkno,'%22%2C%22tckn%22%3A%22%22%2C%22vdKodu%22%3A%22',vdKodu(),'%22%2C%22orgOid%22%3A%22',vdOrgId(),'%22%2C%22tecilTip%22%3A%22%22%2C%22tclKaldirmaNdn%22%3A%22%22%7D%7D');
			var liste = getRemote(url5);
			var obj =JSON.parse(liste);
			
			
			  $.each(obj.data.tecilKayitlari, function(index, satir){
					

				  $("#myTable24 tr:last").after( "<tr><td>"+ satir.tecilTuru + "-" + satir.basvuruMad +"</td><td>"+ satir.tecilDosyaNo +"</td><td>"+ tarihFormat(satir.tecildenKaldirmaTarihi) +"</td><td>"+ satir.tecildenKaldirmaNedeni +"</td><td><a target='_blank' href='../diger/matrah-artirimi-tahakkuk-tahsilat.html?token=" + token + "&vkn="+ vkno + "&tecilDosyaNo="+ satir.tecilDosyaNo + "&tecilDilekceNo="+ satir.tecilDilekceNo +"&tecilDosyaNo="+ satir.tecilDosyaNo +"&tecilDilekceTarihi="+ satir.tecilDilekceTarihi +"&tecildenKaldirmaTarihi="+ satir.tecildenKaldirmaTarihi + "&tecilTuru="+ satir.tecilTuru +"&vd="+ vd + "'>Göster   </a></td></tr>");
				  				   
			  
	    });


}



function tecilListesiAktifVarmi(vkno){


var myRegex= /[0-9]+/;



var callid=makeid(13) + '-';
var aktif=0;
 
var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=mhkTecilService_tecilleriGetir&callid='; 
			var url5=url5.concat(callid + '48', '&token=', token(), '&jp=%7B%22input%22%3A%7B%22vkn%22%3A%22',vkno,'%22%2C%22tckn%22%3A%22%22%2C%22vdKodu%22%3A%22',vdKodu(),'%22%2C%22orgOid%22%3A%22',vdOrgId(),'%22%2C%22tecilTip%22%3A%22%22%2C%22tclKaldirmaNdn%22%3A%22%22%7D%7D');
			var liste = getRemote(url5);
			var obj =JSON.parse(liste);
			
			
			  $.each(obj.data.tecilKayitlari, function(index, satir){
					
					if (satir.tecildenKaldirmaNedeni=="Aktif"){ aktif=aktif+1;}
					
					
	    });
	    
	    if (aktif==0){
	    
	        return "<td>Yok</td>";
	        
	        }else{
	        
	          return "<td style='background:red; color:white'>Var</td>";
	          
	        }


}
function fetoSorgu(vkno,tokenlink){

try{
var callid=makeid(13) + '-';

var url3= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=sicilService_fetoPDYSorusturmaBilgisiListesi&callid=';
var url3=url3.concat(callid + '96', '&token=', tokenlink, '&jp=%7B%22vergino%22%3A%22', vkno, '%22%2C%22tckimlikno%22%3A%22%22%2C%22unvan%22%3A%22%22%2C%22babaadi%22%3A%22%22%2C%22anaadi%22%3A%22%22%2C%22dogumtarihi%22%3A%22%22%7D');
var feto = getRemote(url3);
var feto1 =JSON.parse(feto);

var feto_durum = feto1.data.message;

if (feto_durum=='Sorgulanmış olan mükellefin bu kapsamda kaydı bulunmamaktadır.'){return 'Kayıt Yok';}else{ return 'Kayıt var';}

}

catch(err){

return "Hata ile Karşılaşıldı"

}

}
  
  
function fetoSorguGet(vkno){


	try{

			var tokenlink =GetUrlValue('token');

			var callid=makeid(13) + '-';

			var url3= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=sicilService_fetoPDYSorusturmaBilgisiListesi&callid=';
			var url3=url3.concat(callid + '96', '&token=', tokenlink , '&jp=%7B%22vergino%22%3A%22', vkno, '%22%2C%22tckimlikno%22%3A%22%22%2C%22unvan%22%3A%22%22%2C%22babaadi%22%3A%22%22%2C%22anaadi%22%3A%22%22%2C%22dogumtarihi%22%3A%22%22%7D');
			var feto = getRemote(url3);	
			var feto1 =JSON.parse(feto);

			var feto_durum = feto1.data.message;

			if (feto_durum=='Sorgulanmış olan mükellefin bu kapsamda kaydı bulunmamaktadır.'){return 'Kayıt Yok';}else{ return 'Kayıt var';}
	}


	catch(err){

	return "Hata ile Karşılaşıldı";

	}


}
  

function yoklamaGetir(vkno) {

  
  var callid=makeid(13) + '-';
  
   
  var yoklamaListe=new Array(); 
  var a=0; 

      var url5= 'http://eyoklama.gelirler.gov.tr:32516/edenetis/dispatch?cmd=srvcEys_getMukYoklamalar&callid=';
      var url5=url5.concat(callid + '463', '&token=', token(), '&jp=%7B%22vkn%22%3A%22', vkno,'%22%2C%22tckn%22%3A%22%22%2C%22durum%22%3A80%7D');
      var yoklama = getRemote(url5);
      var obj =JSON.parse(yoklama);
  

    var yoklama_liste = obj.data; /// vergi dairesi listeliyor
	
	$.each(yoklama_liste, function(index, satir){
      
	var yoklamaTarih = tarih(satir.tarih);

	var ykodu=satir.ykodu;
	var yoklama_turu=yoklamaTuruAciklama(satir.yturu);
      
	yoklamaListe.push(yoklama_turu + " - " + ykodu + " - " + yoklamaTarih + " - " + "<a href=http://eyoklama.gelirler.gov.tr:32516/edenetis/getSonuc?yKodu=" + ykodu  + " target='_blank'>Görüntüle</a><br>");               
	
	
      
	  });



return yoklamaListe;



} 


function yoklamaVarmi(vkno) {
 
   
  var callid=makeid(13) + '-';
  
   
  var yoklamaListe=new Array(); 
  var a=0; 

      
      var url5= 'http://eyoklama.gelirler.gov.tr:32516/edenetis/dispatch?cmd=srvcYoklama_getYoklamalar&callid=';
      var url5=url5.concat(callid + '463', '&token=', token(), '&jp=%7B%22vkn%22%3A%22', vkno,'%22%2C%22tckn%22%3A%22%22%2C%22durum%22%3A80%7D');
      var yoklama = getRemote(url5);
      var obj =JSON.parse(yoklama);
  

    var yoklama_liste = obj.data; /// vergi dairesi listeliyor
	
	$.each(yoklama_liste, function(index, satir){
      
		var yoklamaTarih = tarih(satir.tarih);
		var ykodu=satir.ykodu;
		var yoklama_turu=yoklamaTuruAciklama(satir.yturu);
      
		yoklamaListe.push(yoklama_turu + " - " + ykodu + " - " + yoklamaTarih + " - " + "<a href=http://eyoklama.gelirler.gov.tr:32516/edenetis/getSonuc?yKodu=" + ykodu  + " target='_blank'>Görüntüle</a><br>");               
	
	
      
	  });



	return yoklamaListe;

} 




function sicil_bilgi_getir(vkn){


	try{

		  var isyeriNitelikListe ={'1':'Merkez', '2':'Şube', '3':'Depo', '4':'KDV İhtisas Şubesi'};
		  var terkdurumu ={'0':'Faal',
		   '1':'', '2':'Terk', '3':'Nakil Halinde Terk', 
		   '4':'Nakil Halinde Terk','5':'Ölüm/Tasfiye Halinde Terk','6':'Diğer Terk', '7':'Resen Terk', 
		   '8':'V.İ.R Terk', '11':'Diğer Terk', '10':'Diğer Terk', '12':'Diğer Terk',  '13':'Diğer Terk', 
		   '15':'Nevi Değişikliği Halinde Terk', '9':'Diğer Terk', '16':'670 sayılı KHK Kapsamına Göre Terk',
		   '17':'17 - Elektronik Tescil Olan Tüzel Kişinin İlk Yoklamada Bulunamadığından Terk',
		   '19':'19 - İnteraktif Vergi Dairesi Üzerinden Mükellefiyet Tesisinde İlk Yoklamada Bulunamadığından Terk',
		   '20':'20 - Elden/Posta Yolu ile İşe Başlama Bildirimi Mükellefiyet Tesisinde İlk Yoklamada Bulunamadığından Terk',
		   '21':'21 - VUK 160/A Maddesi Kapsamında Terk'};

		  var callid=makeid(13) + '-';
		  
		  var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=sicilService_sicilBilgileriSorgulaIlKodu&callid=';
		  var url5=url5.concat(callid + '15', '&token=', token(), '&jp=%7B%22vkn%22%3A%22',vkn,'%22%2C%22tckn%22%3A%22%22%2C%22vdKodu%22%3A%22%22%2C%22ilKodu%22%3A%22%22%7D');
		  var daireler = getRemote(url5);
		  var obj =JSON.parse(daireler);
		  var vd_return =new Array();
		  var i=0;
		  
  	  	 if (obj.data.kimlikpotansiyel==9){var potansiyel="Potansiyel Mükellef"}else{ var potansiyel = " Potansiyel Değil " }

		
  	  	 vd_return.push(potansiyel);
		  
		  var sirketturu=obj.data.sirketturu;
	   	  //var kimlikpotansiyel=obj.data.kimlikpotansiyel;
	   	  //if (kimlikpotansiyel==9){kimlikpotansiyel="Potansiyel";}else{kimlikpotansiyel="";}
		      
		///////////////////////////////////////////////////////////////////////////////////////// Mükellefin bağlı bulunduğu merkez ve KDV İhtisas vergi dairesi bilgilerini getiriyor
		
		var daireListesi = obj.data.vdler.baglivd; /// vergi dairesi listeliyor
		
		$.each(daireListesi, function(index, satir){
		
		
		  var daireadi=satir.vdadi; 
		  var isyerinitelik = satir.isyerinitelik;
		  var isyerituru= satir.isyerituru;
		  var mukblgislemturubittur=satir.mukblgislemturubittur;
		  var faal = terkdurumu[mukblgislemturubittur];

			
			if (isyerinitelik==1 || isyerinitelik==4){

			  var isyerinitelik = isyeriNitelikListe[isyerinitelik];   
		  
			  var bastarih =tarih(satir.isebaslamatarihi);  	      
			  var bittarih =tarih(satir.isibirakmatarihi);
			  		  

			  vd_return.push(satir.vdkodu + "-" +  daireadi  + " / " +  bastarih  + " - " + bittarih  +  "(" + faal  +  ")***") ;
			  
			  

			  }
	  });

	  
		  return vd_return;
      
      }
      
      
      catch(err){
      
       return "Hata ile karşılışldı";
      
      
      }

}


function sicil_merkez_bilgi_getir(vkn){


	try{

		  var isyeriNitelikListe ={'1':'Merkez', '2':'Şube', '3':'Depo', '4':'KDV İhtisas Şubesi'};
		  var terkdurumu ={'0':'Faal',
		   '1':'', '2':'Terk', '3':'Nakil Halinde Terk', 
		   '4':'Nakil Halinde Terk','5':'Ölüm/Tasfiye Halinde Terk','6':'Diğer Terk', '7':'Resen Terk', 
		   '8':'V.İ.R Terk', '11':'Diğer Terk', '10':'Diğer Terk', '12':'Diğer Terk',  '13':'Diğer Terk', 
		   '15':'Nevi Değişikliği Halinde Terk', '9':'Diğer Terk', '16':'670 sayılı KHK Kapsamına Göre Terk',
		   '17':'17 - Elektronik Tescil Olan Tüzel Kişinin İlk Yoklamada Bulunamadığından Terk',
		   '19':'19 - İnteraktif Vergi Dairesi Üzerinden Mükellefiyet Tesisinde İlk Yoklamada Bulunamadığından Terk',
		   '20':'20 - Elden/Posta Yolu ile İşe Başlama Bildirimi Mükellefiyet Tesisinde İlk Yoklamada Bulunamadığından Terk',
		   '21':'21 - VUK 160/A Maddesi Kapsamında Terk'};

		
		  var callid=makeid(13) + '-';
		  
		  var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=sicilService_sicilBilgileriSorgulaIlKodu&callid=';
		  var url5=url5.concat(callid + '15', '&token=', token(), '&jp=%7B%22vkn%22%3A%22',vkn,'%22%2C%22tckn%22%3A%22%22%2C%22vdKodu%22%3A%22%22%2C%22ilKodu%22%3A%22%22%7D');
		  var daireler = getRemote(url5);
		  var obj =JSON.parse(daireler);
		
  	  	 if (obj.data.kimlikpotansiyel==9){var potansiyel="Potansiyel Mükellef"}else{ var potansiyel = " Potansiyel Değil " }

	  

	   	 var unvan= obj.data.kimlikunvan;	      
		///////////////////////////////////////////////////////////////////////////////////////// Mükellefin bağlı bulunduğu merkez ve KDV İhtisas vergi dairesi bilgilerini getiriyor
		
		
		var daireadi= obj.data.vdler.baglivd[0].vdadi;	
		var vdkodu= obj.data.vdler.baglivd[0].vdkodu;
		var bastarih =tarih(obj.data.vdler.baglivd[0].isebaslamatarihi);  	      
        var bittarih =tarih(obj.data.vdler.baglivd[0].isibirakmatarihi);
        var mukblgislemturubittur=obj.data.vdler.baglivd[0].mukblgislemturubittur;
		var faal = terkdurumu[mukblgislemturubittur] ;

		  
 	     return (unvan + "/" + vdkodu + "/" +   daireadi  + "/" +  bastarih  + "/" + bittarih  + "/" + faal  + "/" + potansiyel ) ;
			  			
	
      
      }
      
      
      catch(err){
      
       return "Hata ile karşılışldı";
      
      
      }

}


function baSorgula(vkno,donem,mukVkn) {

  var myRegex= /[0-9]+/;
  
  
  
  var callid=makeid(13) + '-';
  var tutar=0;
  
	var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=formBABSService_formBAGoruntuleYeni&callid=';
	var url5=url5.concat(callid + '16', '&token=', token(), '&jp=%7B%22vkn%22%3A%22',vkno,'%22%2C%22tckn%22%3A%22%22%2C%22yil%22%3A%22',donem,'%22%2C%22ay%22%3A%22%22%7D');
	var ba = getRemote(url5);
	var obj =JSON.parse(ba);
  

	var ba_liste = obj.data.liste2; /// vergi dairesi listeliyor
	
	$.each(ba_liste, function(index, satir){
      
		if (satir.vergiNo==mukVkn) {
	
			tutar = tutar + parseFloat(satir.malHizmetBedeliToplam);
		
			}
	      
	  });
  
  return Number(tutar).toLocaleString("tr-TR");
}


function baKarsilastirmaSorgula(vkno,donem,mukVkn) {

  var myRegex= /[0-9]+/;
  
  
  
  var callid=makeid(13) + '-';
  var tutar=0;
  var bedel1=0;
  var bedel2=0;


  	var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=alisSatisAnaliziService_getAlisSatisAnaliz&callid=';
	var url5=url5.concat(callid + '176', '&token=', token(), '&jp=%7B%22clientObj%22%3A%7B%22vergiNumarasi%22%3A%22',vkno,'%22%2C%22tcKimlikNo%22%3A%22%22%2C%22yil%22%3A%22',donem,'%22%2C%22ay%22%3A%2213%22%2C%22hvBabsMi%22%3Atrue%7D%7D');
	var ba = getRemote(url5);
	var obj =JSON.parse(ba);

	var ba_liste = obj.data.liste; /// vergi dairesi listeliyor
	
		if (ba_liste.length>0){

			$.each(ba_liste, function(index, satir){
			  
				if (satir.vkn==mukVkn) {
					
					bedel1= bedel1 + parseFloat(satir.malHizmetBedeli1);

					bedel2= bedel2 + parseFloat(satir.malHizmetBedeli2);
				
					}
				  
			  });

		}

  
  return (Number(bedel1).toLocaleString("tr-TR") + "-" +  Number(bedel2).toLocaleString("tr-TR"));

}



function removeDuplicates(arr) {
        return arr.filter((item,
            index) => arr.indexOf(item) === index);
    }
  /*  
function gekCevaplanmismi(){

	var myRegex= /[0-9]+/;
	
	
	
	var callid=makeid(13) + '-';

return;
}


function gekArsivVarmi(){

return;

}    
*/


function cariYil(){

      var tarih=new Date();

     return tarih.getFullYear();

}
function hangiVD (vkno,yil) {
    
      var callid=makeid(13) + '-';
      var vdListe=new Array();
      var a =0;
      var tarih=new Date();
      var cariYil=tarih.getFullYear();
      
        
      var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=sicilService_sicilBilgileriSorgula&callid=';
      var url5=url5.concat(callid + '15', '&token=', token(), '&jp=%7B%22vkn%22%3A%22', vkno, '%22%2C%22tckn%22%3A%22%22%2C%22vdKodu%22%3A%22%22%7D');
      var daireler = getRemote(url5);
      var obj =JSON.parse(daireler);
	
	 var daireListesi = obj.data.vdler.baglivd; /// vergi dairesi listeliyor
	
	$.each(daireListesi, function(index, satir){
	
	  var vdkodu=satir.vdkodu;
	  var isyerinitelik = satir.isyerinitelik;
	  
	
	  if (isyerinitelik==1 || isyerinitelik==4){
	  
	      var bas_yil =satir.isebaslamatarihi.substr(0,4);  	      
	      
	      
	      if (satir.isibirakmatarihi.substr(0,4)=='') {bit_yil=cariYil;}else{var bit_yil =satir.isibirakmatarihi.substr(0,4);}
	      
		
		if (bas_yil<=yil) {
		
		    if (yil<=bit_yil) {
	
			vdListe.push(vdkodu);

		
		}
			}
	  }

    });

   return removeDuplicates(vdListe);
}


function hangiVD2 (vkno) {

      var callid=makeid(13) + '-';
      var vdListe=new Array();
      var a =0;
      var tarih=new Date();
      var cariYil=tarih.getFullYear();
      
        
      var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=sicilService_sicilBilgileriSorgula&callid=';
      var url5=url5.concat(callid + '15', '&token=', token(), '&jp=%7B%22vkn%22%3A%22', vkno, '%22%2C%22tckn%22%3A%22%22%2C%22vdKodu%22%3A%22%22%7D');
      var daireler = getRemote(url5);
      var obj =JSON.parse(daireler);
	
	 var daireListesi = obj.data.vdler.baglivd; /// vergi dairesi listeliyor
	
	$.each(daireListesi, function(index, satir){
	
		  var vdkodu=satir.vdkodu;

		  var isyerinitelik = satir.isyerinitelik;
		  
		  if (isyerinitelik==1 || isyerinitelik==4){	vdListe.push(vdkodu);   }


    });

   return removeDuplicates(vdListe);
}


function hangiVD3 (vkno) { // Borç Sorgulaması için VD

try{
      
      var callid=makeid(13) + '-';
      var vdListe=new Array();
      var a =0;
      var tarih=new Date();
      var cariYil=tarih.getFullYear();
      
        //
      var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=sicilService_mukellefTcknVknBagliVDGetirThkOlanlarDahil&callid=';
      var url5=url5.concat(callid + '130', '&token=', token(), '&jp=%7B%22vknTckn%22%3A%22',vkno,'%22%7D');
      var daireler = getRemote(url5);
      var obj =JSON.parse(daireler);
	
	 var daireListesi = obj.data.bagliVDler; /// vergi dairesi listeliyor
	
	$.each(daireListesi, function(index, satir){
	
		if ((satir.value).substr(0,3)=="016"){

			vdListe.push(satir.value); 
	
		}

    });

	
   return removeDuplicates(vdListe);

}

catch(err){

return "";

}
}


function hangiVD4 (vkno,token) { // Borç Sorgulaması için VD

try{

   
      var callid=makeid(13) + '-';
      var vdListe=new Array();
      var a =0;
      var tarih=new Date();
      var cariYil=tarih.getFullYear();
      
        //
      var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=sicilService_mukellefTcknVknBagliVDGetirThkOlanlarDahil&callid=';
      var url5=url5.concat(callid + '130', '&token=', token, '&jp=%7B%22vknTckn%22%3A%22',vkno,'%22%7D');
      var daireler = getRemote(url5);
      var obj =JSON.parse(daireler);
	
	 var daireListesi = obj.data.bagliVDler; /// vergi dairesi listeliyor
	
	$.each(daireListesi, function(index, satir){
	
		if ((satir.value).substr(0,3)=="016"){

		vdListe.push(satir.value); 

		
		}

    });

   return removeDuplicates(vdListe);

}

catch(err){

console.log(err);
return "";

}
}

function aylikBanka(token,vkn,yil,ay){

	try{
		var callid=makeid(13) + '-';
		var gelen_toplam=0;
		var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=posKrediKartiService_bankaSatisBilgGoreAylikSorgula&callid=';
		var url5=url5.concat(callid + '22', '&token=', token, '&jp=%7B%22vkn%22%3A%22',vkn,'%22%2C%22tckn%22%3A%22%22%2C%22satisDonemAy%22%3A%22',ay,'%22%2C%22satisDonemYil%22%3A%22',yil,'%22%2C%22respKeyParam%22%3A%22bankaSatisAylikListe%22%2C%22isFullData%22%3Afalse%2C%22isFullExport%22%3Atrue%2C%22pv%22%3A%7B%22start%22%3A0%2C%22limit%22%3A%2250%22%2C%22sorters%22%3A%5B%5D%7D%7D');
		var banka = getRemote(url5);
		var obj =JSON.parse(banka);
			  
			  var kayit_sayisi=obj.data.totalCount;
			  
			  if (kayit_sayisi>0){
				
			  return tlCevir(obj.data.bankaSatisAylikListe[kayit_sayisi].toplamGenel);

				}else{
				
				return 0;
				}

	}


	catch(err){

		return "Hata";

	}
}



function yillikBanka(token,vkn,yil){

try{

var callid=makeid(13) + '-';
var gelen_toplam=0;

	 var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=posKrediKartiService_bankaSatisBilgGoreYillikSorgula&callid=';
      var url5=url5.concat(callid + '19', '&token=', token, '&jp=%7B%22vkn%22%3A%22',vkn,'%22%2C%22tckn%22%3A%22%22%2C%22yil%22%3A%22',yil,'%22%7D');
      var banka = getRemote(url5);
      var obj =JSON.parse(banka);
      
	  var kayit_sayisi=obj.data.liste.length;
      
      if (kayit_sayisi>0){      
  
      	return tlCevir(obj.data.liste[kayit_sayisi-1].toplamGenel);

	}else{
		
   	 return 0;

		}

}


catch(err){

return "Hata";

}
}



function iadeMahsupSorgulama(token,vkn){

		var callid=makeid(13) + '-';
	var vdDizi=iadeMahsupVdSorgula1(vkn);
      

for (i;i<vdDizi.length;i++) {

      var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=iadeMahsupService_iadeMahsupSorgulama&callid=';
      var url5=url5.concat(callid + '92', '&token=', token, '&jp=%7B%22vkn%22%3A%227601099913%22%2C%22vdKodu%22%3A%22',vdDizi[i],'%22%2C%22vergiKodu%22%3A%22%22%2C%22donemBasAy%22%3A%22%22%2C%22donemBitYil%22%3A%22%22%2C%22donemBasYil%22%3A%22%22%2C%22donemBitAy%22%3A%22%22%7D');
      var daireler = getRemote(url5);
      var obj =JSON.parse(daireler);
	
	 var iade = obj.data.iadeMahsupKlm; /// vergi dairesi listeliyor
	
	$.each(iade, function(index, satir){
	
	
    	vdListe.push(satir.vdKodu); 
    	
  
    	

    });


}

}


function iadeMahsupVdSorgula(vkno) {


      var myRegex= /[0-9]+/;
      var tokenlink =GetUrlValue('token'); 
	  var vkno=GetUrlValue('vkn');
      
      
      var callid=makeid(13) + '-';
      var vdListe=new Array();


      var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=iadeMahsupService_iadeMahsupOlanVDlerSorgula&callid=';
      var url5=url5.concat(callid + '169', '&token=', tokenlink, '&jp=%7B%22vkn%22%3A%22',vkno,'%22%2C%22vergiKodu%22%3A%22%22%2C%22donemBasAy%22%3A%22%22%2C%22donemBitYil%22%3A%22%22%2C%22donemBasYil%22%3A%22%22%2C%22donemBitAy%22%3A%22%22%7D');
      var daireler = getRemote(url5);
      var obj =JSON.parse(daireler);
	


	 var daireListesi = obj.data.vdler; /// vergi dairesi listeliyor
	
		$.each(daireListesi, function(index, satir){
			
			vdListe.push(satir.vdKodu); 

		});

		return removeDuplicates(vdListe);



   
}

function iadeMahsupHangiVD(vkno) { // Mükellefin daha önce iade talebinde bulunduğu vergi dairelerini listelemek için

var callid=makeid(13) + '-';

var vdListe=new Array();

      var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=iadeMahsupService_iadeMahsupOlanVDlerSorgula&callid=';
      var url5=url5.concat(callid + '169', '&token=', token(), '&jp=%7B%22vkn%22%3A%22',vkno,'%22%2C%22vergiKodu%22%3A%22%22%2C%22donemBasAy%22%3A%22%22%2C%22donemBitYil%22%3A%22%22%2C%22donemBasYil%22%3A%22%22%2C%22donemBitAy%22%3A%22%22%7D');
      var daireler = getRemote(url5);
      var obj =JSON.parse(daireler);
	

	if (obj.error==undefined){
		
		 var daireListesi = obj.data.vdler; /// vergi dairesi listeliyor
			
			 if (daireListesi.length>0){
			
				$.each(daireListesi, function(index, satir){
				
				 if (satir.vdKodu.substr(0,3)=="016"){
					
					vdListe.push(satir.vdKodu); 

					}

				});

			   return removeDuplicates(vdListe);
			   
			}else{
			
			return vdListe;
			
			}

	}else{

		return "Hata";

		}
}



function hangiVD1 (vkno) {

      var tokenlink =GetUrlValue('token'); 
	  var vkno=GetUrlValue('vkn');
     
      var callid=makeid(13) + '-';
      var vdListe=new Array();
      
        
      var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=sicilService_sicilBilgileriSorgula&callid=';
      var url5=url5.concat(callid + '15', '&token=', tokenlink, '&jp=%7B%22vkn%22%3A%22', vkno, '%22%2C%22tckn%22%3A%22%22%2C%22vdKodu%22%3A%22%22%7D');
      var daireler = getRemote(url5);
      var obj =JSON.parse(daireler);
	
	 var daireListesi = obj.data.vdler.baglivd; /// vergi dairesi listeliyor
	
	$.each(daireListesi, function(index, satir){
	
	  var vdkodu=satir.vdkodu;
	  var isyerinitelik = satir.isyerinitelik;
	  
	
	 	 if (isyerinitelik==1 || isyerinitelik==4){	vdListe.push(vdkodu);   }

    });

   return removeDuplicates(vdListe);
}

function gidenEvrakBul (vkn,vdKodu,bastarih) {

try{


var callid=makeid(13) + '-';

//var tarih1=new Date();
//var zamanasimi=tarih1.getFullYear()-5;
//var zamanasimiTarih=zamanasimi + "0101";


var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=mhkEvrakService_gidenEvrakBilgileriniGetir&callid=';
var url5=url5.concat(callid + '92', '&token=', token(), '&jp=%7B%22input%22%3A%7B%22vkn%22%3A%22',vkn,'%22%2C%22tckn%22%3A%22%22%2C%22orgOid%22%3A%22',vdOrgId(),'%22%2C%22vdKodu%22%3A%22',vdKodu,'%22%2C%22bastarih%22%3A%22',bastarih,'%22%2C%22bittarih%22%3A%22%22%7D%7D');
var evrak = getRemote(url5);
var obj =JSON.parse(evrak);
var result=0;
var tarih_sayi_liste =new Array();
var a=0;

var evrakListesi = obj.data.evrakkayitlari; /// vergi dairesi listeliyor
	
	$.each(evrakListesi, function(index, satir){
	
	var evrak_turu=satir.evrakTuru;
	var ozu=satir.ozu;
	var vergiDonem=satir.vergiDonem;
        var gelisTuru=satir.gelisTuru;
	var gittigiYer =satir.gittigiYer;
	
	
	    var url7= 'http://10.251.63.99/keyss/external_dispatch?cmd=evrakOrtakServis_evrakOnizle&callid=';
	    var url7=url7.concat(callid + '125', '&token=', token(), '&jp=%7B%22evrakOid%22%3A%22',satir.evrakOID ,'%22%2C%22konteynerOid%22%3Anull%2C%22evrakVersiyonOid%22%3Anull%2C%22yetkisiz%22%3Atrue%7D');
	    var evrak = getRemote(url7);
	    var objEvrak =JSON.parse(evrak);
	   // var evrakOid =objEvrak.data.evrakOid;
	    var dokumanVersiyonOid= objEvrak.data.dokumanVersiyonOid;
	    var konteynerOid=objEvrak.data.konteynerOid;
	  
	  
	  
	    if (dokumanVersiyonOid!=undefined){
	    
	      
	      var url6= 'http://10.251.63.99/keyss/external_dispatch?cmd=dokumanServis_dokumanOnizle&callid=';
	      var url6=url6.concat(callid + '117', '&token=', token(), '&jp=%7B%22dokumanOid%22%3Anull%2C%22dokumanVersiyonOid%22%3A%22',dokumanVersiyonOid,'%22%2C%22yetkisiz%22%3Atrue%2C%22konteynerOid%22%3A%22',konteynerOid,'%22%2C%22iptal%22%3Afalse%2C%22barkod%22%3Atrue%7D');
	      var evrakFileId = getRemote(url6);
	      var objFileId =JSON.parse(evrakFileId);
	      var evrakNo =objFileId.data.fileID;
	      
	    }
	
	    if (dokumanVersiyonOid!='undefined'){
	    tarih_sayi_liste[a]= ozu + "-" + evrak_turu + "-" + tarih(satir.gittigiTarih) + " - " + satir. evrakNoSuf + "(Vergilendirme Dönemi :" + vergiDonem+ ")<a target='_blank' href='http://10.251.63.99/keyss/flexpaper/pdf/?token=" + token() + "&fileID=" + evrakNo + ".pdf'  > Görüntüle </a><hr><br>";
	    
	    }else{
	    
	    tarih_sayi_liste[a]= ozu + "-" + evrak_turu + "-" + tarih(satir.gittigiTarih) + " - " + satir. evrakNoSuf +  "(Vergilendirme Dönemi :" + vergiDonem+ ") <hr><br>";
	    
	    }
	  a =a+1;
	  
	

	});
	
      tarih_sayi_liste.reverse();
      
      return tarih_sayi_liste ;

}

catch(err){

return "Hata ile karşılaşıldı";

}
      
    
}

function gidenEvrakBul2 (vkn,vdKodu) {

try{
var myRegex= /[0-9]+/;


;
var callid=makeid(13) + '-';

//var tarih1=new Date();
//var zamanasimi=tarih1.getFullYear()-5;
//var zamanasimiTarih=zamanasimi + "0101";


var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=mhkEvrakService_gidenEvrakBilgileriniGetir&callid=';
var url5=url5.concat(callid + '92', '&token=', token(), '&jp=%7B%22input%22%3A%7B%22vkn%22%3A%22',vkn,'%22%2C%22tckn%22%3A%22%22%2C%22orgOid%22%3A%22',vdOrgId(),'%22%2C%22vdKodu%22%3A%22',vdKodu,'%22%2C%22bastarih%22%3A%22%22%2C%22bittarih%22%3A%22%22%7D%7D');
var evrak = getRemote(url5);
var obj =JSON.parse(evrak);
var result=0;
var tarih_sayi_liste =new Array();
var a=0;

var evrakListesi = obj.data.evrakkayitlari; /// vergi dairesi listeliyor
	
	$.each(evrakListesi, function(index, satir){
	
	var evrak_turu=satir.evrakTuru;
	var ozu=satir.ozu;
	var vergiDonem=satir.vergiDonem;
        var gelisTuru=satir.gelisTuru;
	var gittigiYer =satir.gittigiYer;
	
	
	if (evrak_turu!="502-ÖDEME EMRİ" && evrak_turu!="403-TAKDİR KOMİSYONU EVRAĞI" && evrak_turu!="802-UZLAŞMA DAVETİYESİ") {
	
	    var url7= 'http://10.251.63.99/keyss/external_dispatch?cmd=evrakOrtakServis_evrakOnizle&callid=';
	    var url7=url7.concat(callid + '125', '&token=', token(), '&jp=%7B%22evrakOid%22%3A%22',satir.evrakOID ,'%22%2C%22konteynerOid%22%3Anull%2C%22evrakVersiyonOid%22%3Anull%2C%22yetkisiz%22%3Atrue%7D');
	    var evrak = getRemote(url7);
	    var objEvrak =JSON.parse(evrak);
	   // var evrakOid =objEvrak.data.evrakOid;
	    var hata= objEvrak.messages;
	   
	  
	    if (hata==undefined  ){
	      
	      var dokumanVersiyonOid= objEvrak.data.dokumanVersiyonOid;
	      var konteynerOid=objEvrak.data.konteynerOid; 
	      var url6= 'http://10.251.63.99/keyss/external_dispatch?cmd=dokumanServis_dokumanOnizle&callid=';
	      var url6=url6.concat(callid + '117', '&token=', token(), '&jp=%7B%22dokumanOid%22%3Anull%2C%22dokumanVersiyonOid%22%3A%22',dokumanVersiyonOid,'%22%2C%22yetkisiz%22%3Atrue%2C%22konteynerOid%22%3A%22',konteynerOid,'%22%2C%22iptal%22%3Afalse%2C%22barkod%22%3Atrue%7D');
	      var evrakFileId = getRemote(url6);
	      var objFileId =JSON.parse(evrakFileId);
	      var evrakNo =objFileId.data.fileID;
	      
	    }
	
	    if (dokumanVersiyonOid!='undefined'){
	    tarih_sayi_liste[a]= ozu + "-" + evrak_turu + "-" + tarih(satir.gittigiTarih) + " - " + satir. evrakNoSuf + "(Vergilendirme Dönemi :" + vergiDonem+ ")<a target='_blank' href='http://10.251.63.99/keyss/flexpaper/pdf/?token=" + token() + "&fileID=" + evrakNo + ".pdf'  > Görüntüle </a><hr><br>";
	    
	    }else{
	    
	    tarih_sayi_liste[a]= ozu + "-" + evrak_turu + "-" + tarih(satir.gittigiTarih) + " - " + satir. evrakNoSuf +  "(Vergilendirme Dönemi :" + vergiDonem+ ") <hr><br>";
	    
	    }
	  a =a+1;
	  
	}

	});
	
      tarih_sayi_liste.reverse();
      
      return tarih_sayi_liste ;
      
  }


catch(err){

return "Hata ile karşılaşıldı";

} 
}

////takdire sevk dosyasında çalışıyor

function beyanMatrah(vkno,vKodu,donem1,donem2,token){

try{

	var callid=makeid(13) + '-';
	var url3= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=tahakkukService_toplamBazTahakkukGetir&callid=';
	var url3=url3.concat(callid + '20', '&token=', token, '&jp=%7B%22input%22%3A%7B%22vkn%22%3A%22',vkno,'%22%2C%22tckn%22%3A%22%22%2C%22vdKodu%22%3A%22016253%22%2C%22unvan%22%3A%22%22%2C%22vergiKodu%22%3A%22',vKodu,'%22%2C%22ilkDonem%22%3A%22',donem1,'%22%2C%22sonDonem%22%3A%22',donem2,'%22%7D%7D');
	var beyan_matrah = getRemote(url3);
	var obj =JSON.parse(beyan_matrah);


	if (obj.data.anaListe[0].toplamMatrah!=0) {

	  var tutar=obj.data.anaListe[1].toplamMatrah;
	
	  return tlCevir(tutar);

	  }else{
	  
	  return "Veri Yok";
	  
	  
	  }

}

catch(err){

 return "Hata";

}
}
function bsSorgulaEski(vkno,yil,ay) {


try{

  var myRegex= /[0-9]+/;
  
  
  
  var callid=makeid(13) + '-';
  var tutar=0;
  
	var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=formBABSService_formBSGoruntuleYeni&callid=';
	var url5=url5.concat(callid + '16', '&token=', token(), '&jp=%7B%22vkn%22%3A%22',vkno,'%22%2C%22tckn%22%3A%22%22%2C%22yil%22%3A%22',yil,'%22%2C%22ay%22%3A%22',ay,'%22%7D');
	var bs = getRemote(url5);
	var obj =JSON.parse(bs);
  

	var bs_liste = obj.data.liste2; /// vergi dairesi listeliyor
	
	$.each(bs_liste, function(index, satir){
		

			if (satir.belgeSayisiTop!=undefined){
			  	 
				  tutar = parseFloat(satir.malHizmetBedeliTop);
				  
			}
		      
	  });
  
  return tutar;

}

	catch(err){

	return (err);

	}
}


function bsSorgula(vkn,yil,ay,token) { // 	Karşılaştırmalı Alış-Satış Analizi ile çalışıyor



try{

  var callid=makeid(13) + '-';
  var tutarBS=0;
  var tutarKarsiAlis=0;

	var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=alisSatisAnaliziService_getAlisSatisAnaliz&callid=';
	var url5=url5.concat(callid + '121', '&token=', token, '&jp=%7B%22clientObj%22%3A%7B%22vergiNumarasi%22%3A%22',vkn,'%22%2C%22tcKimlikNo%22%3A%22%22%2C%22yil%22%3A%22',yil,'%22%2C%22ay%22%3A%22',ay,'%22%2C%22hvBabsMi%22%3Atrue%7D%7D');
	var bs = getRemote(url5);
	var obj =JSON.parse(bs);
  

	var bs_liste = obj.data.liste1; 
	
	$.each(bs_liste, function(index, satir){
		
		   if (satir.malHizmetBedeli1Top!=undefined) { tutarBS = satir.malHizmetBedeli1Top;}
			
		   if (satir.malHizmetBedeli2Top!=undefined) { tutarKarsiAlis =satir.malHizmetBedeli2Top;  }

		      
	  });
  
  return tlCevir(tutarBS) + "-" + tlCevir(tutarKarsiAlis) ;

}

	catch(err){

	console.log("Karşılaştırmalı Alış-Satış Analizi Hata ile karşılaşıldı" + err);

	return "Hata" + "-" + "Hata" ;


	}
}



document.getElementById('sorguZamani').innerHTML="Sorgu Zamanı : " +  bugun();

//////////////////////eski kullanılmayan////////////////////////////////////////////////////////////////////////////////////////////////////////

function matrah_odenen(vkno,vdkodu,thkNo) {


var callid=makeid(13) + '-';


    var orgOid=orgIDGetir(vdkodu);

    if (orgOid!="undefined") { 
    
    var url= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=mhkTecilService_tecilleriGetir&callid=';
    var url=url.concat(callid + '50', '&token=', token(), '&jp=%7B%22input%22%3A%7B%22vkn%22%3A%22',vkno,'%22%2C%22tckn%22%3A%22%22%2C%22vdKodu%22%3A%22',vdkodu,'%22%2C%22orgOid%22%3A%22', orgOid ,'%22%7D%7D');
    var url_thk = getRemote(url);
    var obj =JSON.parse(url_thk);

    var a=0;
    var b=0;

    var liste = obj.data.tecilKayitlari; /// 

      $.each(liste, function(index, satir){ //bütün tecil numaralarının tahakkuk numaralı kontrol ediliyor

	    
	    var url1= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=mhkTecilService_tecilDetayGetir&callid=';
	       var url1=url1.concat(callid + '30', '&token=', token(), '&jp=%7B%22input%22%3A%7B%22tecilDosyaNo%22%3A%22',satir.tecilDosyaNo,'%22%2C%22tecilDilekceNo%22%3A%22%22%2C%22tecilDilekceTarihi%22%3A%22%22%2C%22tecildenKaldirmaTarihi%22%3A%22%22%2C%22tecildenKaldirmaNedeni%22%3A%22',satir.tecildenKaldirmaNedeni,'%22%2C%22ortakVkn%22%3A%22%22%2C%22ortakTckn%22%3A%22%22%2C%22plakano%22%3A%22%22%2C%22tecilTuru%22%3A%22%22%2C%22vdKodu%22%3A%22',vdkodu,'%22%2C%22orgOid%22%3A%22',orgOid,'%22%2C%22tecilTipi%22%3A%22',satir.tecilTipi,'%22%7D%7D');
	    var url_thk1 = getRemote(url1);
	    var obj1 =JSON.parse(url_thk1);
	    var tecil_thk=obj1.data.tecilSatirlari[0].thkfisno;
	    
	    
	    if (tecil_thk==thkNo) {
	    
	    
	    a=obj1.data.tecilOdenenToplamVab;
	    
	    b=obj1.data.tecilOdenenToplamTecilFaizi;
	    
	    c=obj1.data.tecilToplamIndirim;
	    
	    }
	    
	    
	});

    return Number(a+b+c).toLocaleString("tr-TR");
    
    }else{
    
    return "Kontrol Edilmesi Gerekiyor";
    }

}

function matrah_odenmesi_gereken(vkno,vdkodu,thkNo) {


var callid=makeid(13) + '-';

    var orgOid=orgIDGetir(vdkodu);

    if (orgOid!="undefined") { 
    
    var a=0;

    var url= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=mhkTecilService_tecilleriGetir&callid=';
    var url=url.concat(callid + '15', '&token=', token(), '&jp=%7B%22input%22%3A%7B%22vkn%22%3A%22',vkno,'%22%2C%22tckn%22%3A%22%22%2C%22vdKodu%22%3A%22',vdkodu,'%22%2C%22orgOid%22%3A%22',orgOid ,'%22%7D%7D');
    var url_thk = getRemote(url);
    var obj =JSON.parse(url_thk);

    var liste = obj.data.tecilKayitlari; /// 

      $.each(liste, function(index, satir){

	    var url1= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=mhkTecilService_tecilDetayGetir&callid=';
	       var url1=url1.concat(callid + '30', '&token=', token(), '&jp=%7B%22input%22%3A%7B%22tecilDosyaNo%22%3A%22',satir.tecilDosyaNo,'%22%2C%22tecilDilekceNo%22%3A%22%22%2C%22tecilDilekceTarihi%22%3A%22%22%2C%22tecildenKaldirmaTarihi%22%3A%22%22%2C%22tecildenKaldirmaNedeni%22%3A%22',satir.tecildenKaldirmaNedeni,'%22%2C%22ortakVkn%22%3A%22%22%2C%22ortakTckn%22%3A%22%22%2C%22plakano%22%3A%22%22%2C%22tecilTuru%22%3A%22%22%2C%22vdKodu%22%3A%22',vdkodu,'%22%2C%22orgOid%22%3A%22',orgOid,'%22%2C%22tecilTipi%22%3A%22',satir.tecilTipi,'%22%7D%7D');
	    var url_thk1 = getRemote(url1);
	    var obj1 =JSON.parse(url_thk1);

	    if (obj1.data.tecilSatirlari[0].thkfisno==thkNo) {
	    
	    a= obj1.data.tecilToplamVab;
		    
	    
	    }
	    
	    
	});

    return Number(a).toLocaleString("tr-TR");

    }else{
    
    return "Kontrol Edilmesi Gerekiyor";
    }
    
    
}


function matrah_artırımı_durum(vkno,vdkodu,thkNo) {


var callid=makeid(13) + '-';


    var orgOid=orgIDGetir(vdkodu);

    if (orgOid!="undefined") { 
    
    var a="";

    var url= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=mhkTecilService_tecilleriGetir&callid=';
    var url=url.concat(callid + '15', '&token=', token(), '&jp=%7B%22input%22%3A%7B%22vkn%22%3A%22',vkno,'%22%2C%22tckn%22%3A%22%22%2C%22vdKodu%22%3A%22',vdkodu,'%22%2C%22orgOid%22%3A%22',orgOid,'%22%7D%7D');
    var url_thk = getRemote(url);
    var obj =JSON.parse(url_thk);

    var liste = obj.data.tecilKayitlari; /// 

      $.each(liste, function(index, satir){

	    var url1= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=mhkTecilService_tecilDetayGetir&callid=';
	    var url1=url1.concat(callid + '24', '&token=', token(), '&jp=%7B%22input%22%3A%7B%22tecilDosyaNo%22%3A%22',satir.tecilDosyaNo,'%22%2C%22tecilDilekceNo%22%3A%22%22%2C%22tecilDilekceTarihi%22%3A%22%22%2C%22tecildenKaldirmaTarihi%22%3A%22%22%2C%22tecildenKaldirmaNedeni%22%3A%22',satir.tecildenKaldirmaNedeni,'%22%2C%22ortakVkn%22%3A%22%22%2C%22ortakTckn%22%3A%22%22%2C%22vdKodu%22%3A%22%22%2C%22orgOid%22%3A%22',orgOid,'%22%7D%7D');
	    var url_thk1 = getRemote(url1);
	    var obj1 =JSON.parse(url_thk1);
	    
	    //alert(thkNo);
	    //alert(obj1.data.tecilSatirlari[0].thkfisno);
	    
	    if (obj1.data.tecilSatirlari[0].thkfisno===thkNo) {
	    
	    a= satir.tecildenKaldirmaNedeni;
	    
	  
	}
	
	
    });


    return a;
    
     }else{
    
    return "Kontrol Edilmesi Gerekiyor";
    }
    
    

}

function matrahArtirimi(vkno,durum){

  var myRegex= /[0-9]+/;
  
  
  
  var callid=makeid(13) + '-';
  var matrah_art_liste=new Array();
  var a=0; 
  var hata= "";

         	
      
      ///////////////////////////////////////////////////////////////////////////////////////// Yapılandırma Kontrolü Yapılıyor 7143 
      
   if (durum==1 || durum==4){   
		  var url_7143= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=borcYapilandirma7045Service_matrahArtirimiSorgula7045&callid=';
		  var url_7143=url_7143.concat(callid + '73', '&token=', token(), '&jp=%7B%22vkn%22%3A%22',vkno,'%22%7D');
		  var url7143 = getRemote(url_7143);
		  var obj_7143 =JSON.parse(url7143);
		  
		  var hataVarmi=obj_7143.error;
		        
		 if (hataVarmi==undefined || hataVarmi=="undefined" ){
		   
		
		var liste_7143 = obj_7143.data.liste; /// 

		      
		$.each(liste_7143, function(index, satir){
		
		
		matrah_art_liste[a]=  vdAdi(satir.vdKodu)  + "-7143 Sayılı Kanun-" + satir.vergiKodu +  "<hr><br>";
		a=a+1; 	
		  
		  
		  });
		  
		  }else{
		  
		  hata= obj_7143.messages[0].text + "<br>" ;
		  
		  }
     
     }
     
	 if(durum==2 || durum==4){
            
       
      var url_7326= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=borcYapilandirma7326Service_matrahArtirimiSorgula7326&callid=';
      var url_7326=url_7326.concat(callid + '79', '&token=', token(), '&jp=%7B%22vkn%22%3A%22',vkno,'%22%7D');
      var url7326 = getRemote(url_7326);
      var obj_7326 =JSON.parse(url7326);

    
      var hataVarmi=obj_7326.error;
      var hataVarmi2=obj_7326.data;
    
  
		 if (hataVarmi2!==null){
		 
			 if (hataVarmi==undefined || hataVarmi=="undefined" ){
		  
				  var liste_obj_7326 = obj_7326.data.liste; ///
				  
				  	$.each(liste_obj_7326, function(index, satir){
				  	
				  	matrah_art_liste[a]=  vdAdi(satir.vdKodu)   + "-7326 Sayılı Kanun-" + satir.vergiKodu +  "<hr><br>";
				a=a+1; 	  
				  
				  });
			  
			  }
		  
		 }
      
     } 
     
     if(durum==3 || durum==4){
      
      //////////////////////////7440 Sayılı Kanun///////////////////////////


	  var url_7440= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=borcYapilandirma7426Service_matrahArtirimiSorgula7426&callid=';
      var url_7440=url_7440.concat(callid + '25', '&token=', token(), '&jp=%7B%22vkn%22%3A%22',vkno,'%22%7D');
      var url7440 = getRemote(url_7440);
      var obj_7440 =JSON.parse(url7440);
	
      var hataVarmi=obj_7440.error;
      
      if (hataVarmi==undefined){
  
      var liste_obj_7440 = obj_7440.data.liste; ///
      
      	$.each(liste_obj_7440, function(index, satir){
	
	 	matrah_art_liste[a]=  vdAdi(satir.vdKodu)   + "-7440 Sayılı Kanun-" + satir.vergiKodu +  "<hr><br>";
		a=a+1; 	
      
      
      });
      
       }
     
     }
return matrah_art_liste;


}   


function evdbRaporTokenGetir(){

      var callid=makeid(13) + '-';

      var url5= 'http://10.251.63.99/evdorapor_server/assos-login?&assoscmd=shlogin&rtype=json&token=' + token();
      var yeniToken = postRemote(url5);
      var obj =JSON.parse(yeniToken);
          
	  return obj.token;


}

function evdbRaporSessionGetir(token){
      
      var callid=makeid(13) + '-';

      var url5= 'http://10.251.63.99/evdorapor_server/dispatch?cmd=userSessionService_getUserSessionInfo&callid=' + callid + '19&module=evdorapor&' + token + '&jp=%7B%22rfDataInfo%22%3A%5B%5D%7D';
      var yeniToken = postRemote(url5);
      var obj =JSON.parse(yeniToken);
      return obj.data.ASessionId;

}

function evdbRaporTokenKill(token,ASessionId){

	        
      var callid=makeid(13) + '-';
      var url5= 'http://10.251.63.99/evdorapor_server/dispatch?&cmd=sessionCsapService_destroySession&callid=' + callid + '22&module=evdorapor&token=' + token + '&jp=%7B%22ASessionId%22%3A%22' + ASessionId + '%22%7D';
      var yeniToken = postRemote(url5);
      var obj =JSON.parse(yeniToken);
 

}


function incelemeVarmiMDOS(vkn){

     
      var callid=makeid(13) + '-';
      var dizi =new Array();
      

      var url= 'http://arkaofis.gelbim.gov.tr:32174/izah-server/dispatch?cmd=vdkService_getVDKInceleme&callid=';
      var url=url.concat(callid + '555', '&token=', token(), '&jp=%7B%22vergiKimlikNumarasi%22%3A%22',vkn,'%22%7D');
	  var inceleme = postRemote(url);
      var obj =JSON.parse(inceleme);
      
      
	if ( obj.data.vdkInceleme.length!=0){
      $.each(obj.data.vdkInceleme, function(index, satir){
	
	 	dizi.push("Dönem: " + satir.donem + " - İnceleme Konusu: " + satir.incelemeKonusu + " -  Başlama Tarihi: " + tarihFormat(satir.baslamaTarihi) + " <br>");

      
      
      });
      
      return dizi;
      
      }else{
      
      return '--';
      
      }

}


function adiOrtaklikSorgulu(vkn){

	var myRegex= /[0-9]+/;
      
      
      
      var callid=makeid(13) + '-';
      
      
      //
      var url= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=sicilService_adiOrtakliginOrtaklikBilgileriServisiCagir&callid=';
      var url=url.concat(callid + '180', '&token=', token(), '&jp=%7B%22vkn%22%3A%22',vkn,'%22%7D');
      var url= getRemote(url);
      var obj =JSON.parse(url);
      
      if(obj.data.message==undefined){
      
       $.each(obj.data.adiortak, function(index, satir){
       
       
       	$("#myTable17 tr:last").after( "<tr><td>" + satir.ortvergino  + "</td><td>" + satir.adsoyad + "</td><td>" + satir.orthisse + "</td><td>" + tarihFormat(satir.ortgiristar)  + "</td><td>" + tarihFormat(satir.ortcikistar)  + "</td></tr>");


          });
          
       }

}


function adiOrtaklikSorguluGet(vkn){



      var tokenlink =GetUrlValue('token');
		var callid=makeid(13) + '-';
      //
      var url= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=sicilService_adiOrtakliginOrtaklikBilgileriServisiCagir&callid=';
      var url=url.concat(callid + '180', '&token=', tokenlink, '&jp=%7B%22vkn%22%3A%22',vkn,'%22%7D');
      var url= getRemote(url);
      var obj =JSON.parse(url);
      
      if(obj.data.message==undefined){
      
       $.each(obj.data.adiortak, function(index, satir){
       
       
       	$("#myTable17 tr:last").after( "<tr><td>" + satir.ortvergino  + "</td><td>" + satir.adsoyad + "</td><td>" + satir.orthisse + "</td><td>" + tarihFormat(satir.ortgiristar)  + "</td><td>" + tarihFormat(satir.ortcikistar)  + "</td></tr>");


          });
          
       }

}

function mukellefinadiOrtaklikSorgulu(vkn,token){

	try{
      var callid=makeid(13) + '-';

      var url= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=sicilService_mukunAdiOrtaklikBilgileriniGetir&callid=';
      var url=url.concat(callid + '215', '&token=', token, '&jp=%7B%22vkn%22%3A%22',vkn,'%22%2C%22basTar%22%3A%22%22%2C%22bitTar%22%3A%22%22%7D');
      var url= getRemote(url);
      var obj =JSON.parse(url);
      
      $('#tablo16').after('<table id="myTable17" border=1><caption>Adi Ortaklık Bilgileri</caption><tr><th>Adi Ortaklık VERGİ NO</th><th>Adi Ortaklık Ünvan</th><th>HİSSE</th><th>GİRİŞ TARİHİ</th><th>ÇIKIŞ TARİHİ</th></tr></table></tr>');

     if (obj.data.ortakliklar.adiortak.length>0){
    
      
      	 $.each(obj.data.ortakliklar.adiortak, function(index, satir){
           
         	$("#myTable17 tr:last").after( "<tr><td>" + satir.vergino  + "</td><td>" + satir.unvan + "</td><td>" + satir.orthisse + "</td><td>" + tarihFormat(satir.ortgiristar)  + "</td><td>" + tarihFormat(satir.ortcikistar)  + "</td></tr>");


          });  
     
     }else{

        	$("#myTable17 tr:last").after( "<tr><td></td><td></td><td></td><td></td><td></td></tr>");
}
     
     }

	catch(err){

			$("#myTable17 tr:last").after( "<tr><td colspan='5'>Hata ile karşılaşıldı" + err + "</td></tr>");

	}
          
      

}

function sahisOrtaklikGetir(vkn,token){

 $('#tablo7').after('<table id="myTable7" border=1> <caption>1. Seviye Tüzel Ortaklık Bilgileri</caption><tr><th>VERGİ NO</th><th>UNVAN</th><th>HİSSE</th><th>İLİŞKİ TÜRÜ</th><th>GİRİŞ TARİHİ</th><th>ÇIKIŞ TARİHİ</th></tr></table>');
 
 
	
      var callid=makeid(13) + '-';
      var bastar="19800101";                        
      var bittar= bugunTarih();
      

    var url1= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=sicilService_mukOrtYonTarihSorgulama&callid=';   
	var url1=url1.concat(callid + '62', '&token=', token, '&jp=%7B%22vkn%22%3A%22', vkn, '%22%2C%22tckn%22%3A%22%22%2C%22basTar%22%3A%22%',bastar,'%22%2C%22bitTar%22%3A%22',bittar,'%22%7D');
	var liste1 = getRemote(url1);
	var obj1 =JSON.parse(liste1);
	
	$.each(obj1.data.tuzelortak, function(index, satir){ 
	      
	  var  terk_tarih='';
	  var  terk_durum='';
	  var vn=satir.vergino;
	  var unvan=satir.unvan;
	  var hisse=satir.orthisse;
	  var giristar=satir.ortgiristar;
	  var cikistar=satir.ortcikistar;
	  var iliski_tur='Ortaklık';
		   
	$("#myTable7 tr:last").after( "<tr><td>" + vn  + "</td><td>" + unvan + "</td><td> " + hisse + " </td><td>" + iliski_tur + "</td><td>" + giristar  + "</td><td>" + cikistar + "</td></tr>"); 
		     
		
	  });
	  
	    var iliski_tur_dizi={'3':'3 - Genel Müdür; Şirket Müdürü','2':'2 - Yönetim Kurulu Üyesi'};
	    
	    
	   $.each(obj1.data.tuzelyonetici, function(index, satir){ 
	  	    
	  var vn=satir.vergino;
	  var unvan=satir.unvan;
	  var hisse='';
	  var giristar=satir.yongiristar;
	  var cikistar=satir.yoncikistar;
	  var iliski_tur=iliski_tur_dizi[satir.yonturu];
	  var giristar_yil=giristar.substring(0,4)
	  var cikistar_yil=cikistar.substring(0,4)
	
			  
		$("#myTable7 tr:last").after( "<tr><td>" + vn  + "</td><td>" + unvan + "</td><td> " + hisse + " </td><td>" + iliski_tur + "</td><td>" + giristar  + "</td><td>" + cikistar + "</td></tr>");
	    
	      
	  });



}



function borcMahsupDurumu (vkno,vdKodu) {
var myRegex= /[0-9]+/;



var callid=makeid(13) + '-';
var toplam_mahsup_talebi=0;
    var url_mahsup= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=iadeMahsupService_iadeMahsupOlanVDlerSorgula&callid=';
	var url_mahsup=url_mahsup.concat(callid + '117', '&token=', token(), '&jp=%7B%22vkn%22%3A%22',vkno,'%22%2C%22vergiKodu%22%3A%22%22%2C%22donemBasAy%22%3A%22%22%2C%22donemBitYil%22%3A%22%22%2C%22donemBasYil%22%3A%22%22%2C%22donemBitAy%22%3A%22%22%7D');
	var mahsup = getRemote(url_mahsup);
	var obj_mahsup =JSON.parse(mahsup);
	
	var mahsupVd=obj_mahsup.data.vdler;
	
	if (mahsupVd==''){return 'Mahsup Talebi Yok';}else {
	
	//mahsup talebi var ise
	
	
	    var url_mahsup_detay= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=iadeMahsupService_mahsupDetaySorgulama&callid=';
	    var url_mahsup_detay=url_mahsup_detay.concat(callid + '226', '&token=', token(), '&jp=%7B%22vkn%22%3A%22',vkno,'%22%2C%22vdKodu%22%3A%22',vdKodu,'%22%2C%22iadeVergiKodu%22%3A%22%22%2C%22mahsupVergiKodu%22%3A%22%22%2C%22iadeBasTar%22%3A%22%22%2C%22iadeBitTar%22%3A%22%22%2C%22mahsupBasTar%22%3A%22%22%2C%22mahsupBitTar%22%3A%22%22%2C%22unvan%22%3A%22%22%7D');
	    var mahsup_detay = getRemote(url_mahsup_detay);
	    var obj_mahsup_detay =JSON.parse(mahsup_detay);
	    var hataVarmi =obj_mahsup_detay.messages;
	    
	    
	      if (hataVarmi==undefined){
	      
		  var mahsupDetayListe=obj_mahsup_detay.data.iadeMahsupBlg;
		  
		  $.each(mahsupDetayListe,function(index,satir1){
	
		  
		    if (satir1.durum=="Aktif"){   
		
			
			toplam_mahsup_talebi=toplam_mahsup_talebi + parseInt(satir1.tutar); 
			
			
			}
		    
		  });
		
		  
		
		  if (toplam_mahsup_talebi==0) {
		  

		  return 'Mahsup Talebi Var Ancak Aktif Toplam Tutarı 0 TL' ;
		  
		  
		  
		  }else{
		  
		  
		  return 'Aktif  İadeleri var-Kontrol edilmesi gerekiyor :<br>' + Number(toplam_mahsup_talebi).toLocaleString("tr-TR");
		  
		  		  
		  		  
		  //return  "<a href='../diger/aktif-iade.html?token=" + token() + "&vkn=" + vkno +  "' target='_blank'>Mahsup Talebi Var Aktif Toplam Tutar :" +  toplam_mahsup_talebi +  " Göster</a>";
		  
		 
		  
		  }
		
		
	    }else {
	    
	     return obj_mahsup_detay.messages[0].text;
	    
	    
	    } 
	
	}
}


function borcMahsupDurumuKalanTutar (vkno,vdKodu) {


try{
	var myRegex= /[0-9]+/;
	
	
	
	var callid=makeid(13) + '-';
	var toplamemanetkalantutar=0;
   var iadeDosyaNoDizi=new Array();
   
	var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=iadeMahsupService_mahsupDetaySorgulama&callid='; 
	var url5=url5.concat(callid + '165', '&token=', token(), '&jp=%7B%22vkn%22%3A%22',vkno,'%22%2C%22vdKodu%22%3A%22',vdKodu,'%22%2C%22iadeVergiKodu%22%3A%22%22%2C%22mahsupVergiKodu%22%3A%22%22%2C%22iadeBasTar%22%3A%22%22%2C%22iadeBitTar%22%3A%22%22%2C%22mahsupBasTar%22%3A%22%22%2C%22mahsupBitTar%22%3A%22%22%2C%22unvan%22%3A%22%22%7D');
	var liste = getRemote(url5);
	var obj =JSON.parse(liste);
	
	if (obj.error!="1"){	
		
			$.each( obj.data.iadeMahsupBlg, function(index, satir){
					
					var iadeDosyaNoVarmi=iadeDosyaNoDizi.includes(satir.iadedosyano );
										
						if (satir.durum=="Aktif" && iadeDosyaNoVarmi==false ) {
						
							var url6= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=iadeMahsupService_iadeMahsupSorgulamaDetay&callid='; 
							var url6=url6.concat(callid + '171', '&token=', token(), '&jp=%7B%22vkn%22%3A%22',vkno,'%22%2C%22vdKodu%22%3A%22',vdKodu,'%22%2C%22iadeDosyaNo%22%3A%22',satir.iadedosyano,'%22%2C%22dilekceTipi%22%3A%22',satir.dTipi,'%22%2C%22donem%22%3A%22',satir.vergidonem,'%22%2C%22vKodu%22%3A%22',satir.vergikodu,'%22%2C%22iadeSatir%22%3A%22%22%7D');
							var liste1 = getRemote(url6);
							var obj1 =JSON.parse(liste1);
							
							
							toplamemanetkalantutar+=Number(obj1.data.genelbilgiler[0].emanetkalantutar);
										
						}
							
					iadeDosyaNoDizi.push(satir.iadedosyano);
		   
		   
		   });
 }else{
	   
	   	return obj.messages[0].text;
   }

   
   return Number(toplamemanetkalantutar).toLocaleString("tr-TR") ;
   
   }
   
   
   catch{
   
   
   return "Hata ile Karşılaşıldı";
   }
   
}


function borcMahsupDurumuilgiliDaire (vkno,vergiDairesi) { //Kendi Borclarına mahsup ekranından sorguluyor



try{
		var myRegex= /[0-9]+/;
		
		
		
		var callid=makeid(13) + '-';
		var toplamemanetkalantutar=0;
	    var ilgiliVergiDairesi=vdKodu();
	    var iadeMahsupAktifSorgulama=0;
	   
		var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=iadeMahsupService_mahsupDetaySorgulama&callid='; 
		var url5=url5.concat(callid + '165', '&token=', token(), '&jp=%7B%22vkn%22%3A%22',vkno,'%22%2C%22vdKodu%22%3A%22',vergiDairesi,'%22%2C%22iadeVergiKodu%22%3A%22%22%2C%22mahsupVergiKodu%22%3A%22%22%2C%22iadeBasTar%22%3A%22%22%2C%22iadeBitTar%22%3A%22%22%2C%22mahsupBasTar%22%3A%22%22%2C%22mahsupBitTar%22%3A%22%22%2C%22unvan%22%3A%22%22%7D');
		var liste = getRemote(url5);
		var obj =JSON.parse(liste);
		
		if (obj.error!="1"){	
				
					$.each( obj.data.iadeMahsupBlg, function(index, satir){
																
								if (satir.durum=="Aktif" && satir.vDairesi.includes(ilgiliVergiDairesi)==true ) { toplamemanetkalantutar+=Number(satir.tutar); 	}
											
				   });   	
			   	
		   }

	   
	   return Number(toplamemanetkalantutar).toLocaleString("tr-TR") ;
   
   }
   
   
   catch{
      
   		return "Hata ile Karşılaşıldı";
   
   }
   
}



function iadeMahsupSorgulamailgiliDaire(vkno,vergiDairesi) { // İade Mahsup ekranından Sorguluyor



		var myRegex= /[0-9]+/;
		
		
		
		var callid=makeid(13) + '-';
		var toplamTutar=0;
	      
	  	var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=iadeMahsupService_iadeMahsupSorgulama&callid='; 
		var url5=url5.concat(callid + '94', '&token=', token(), '&jp=%7B%22vkn%22%3A%22',vkno,'%22%2C%22vdKodu%22%3A%22',vergiDairesi,'%22%2C%22vergiKodu%22%3A%22%22%2C%22donemBasAy%22%3A%22%22%2C%22donemBitYil%22%3A%22%22%2C%22donemBasYil%22%3A%22%22%2C%22donemBitAy%22%3A%22%22%7D');
		var liste = getRemote(url5);
		var obj =JSON.parse(liste);
		
	
		if (obj.error!="1"){	
				
					$.each( obj.data.iadeMahsupKlm, function(index, satir){
																
								if (satir.durum=="1-1") { toplamTutar+=Number(satir.iadeDosyaTutar); 	}
											
				   });
				   
			   return Number(toplamTutar).toLocaleString("tr-TR") ;
			   
			   
		 }else{
			   
			   	return obj.messages[0].text;
		   }

   
   
   
}

function iadeMahsupSorgulamailgiliDaire1(vkno,vergiDairesi) { // İade Mahsup ekranından Sorguluyor

		var myRegex= /[0-9]+/;
		
		
		
		var callid=makeid(13) + '-';
		var AktiftoplamKalanTutar=0;
		var hata1=true;

		while(hata1){
		
		var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=iadeMahsupService_iadeMahsupSorgulama&callid='; 
		var url5=url5.concat(callid + '165', '&token=', token() , '&&jp=%7B%22vkn%22%3A%22',vkno,'%22%2C%22vdKodu%22%3A%22',vergiDairesi,'%22%2C%22vergiKodu%22%3A%22%22%2C%22donemBasAy%22%3A%22%22%2C%22donemBitYil%22%3A%22%22%2C%22donemBasYil%22%3A%22%22%2C%22donemBitAy%22%3A%22%22%7D');
		var liste = getRemote(url5);
		var obj =JSON.parse(liste);	
		

			if (obj.error==undefined){	

				hata1=false;

				$.each( obj.data.iadeMahsupKlm, function(index, satir){
			
					if (satir.durum=="1-1" ) {

					var hata2=true;	

							while(hata2){

								var url6= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=iadeMahsupService_iadeMahsupSorgulamaDetay&callid='; 
								var url6=url6.concat(callid + '165', '&token=', token() , '&jp=%7B%22vkn%22%3A%22',vkno,'%22%2C%22vdKodu%22%3A%22',vergiDairesi,'%22%2C%22iadeDosyaNo%22%3A%22',satir.iadeDosyaNo,'%22%2C%22dilekceTipi%22%3A%22%22%2C%22donem%22%3A%22%22%2C%22vKodu%22%3A%22%22%2C%22iadeSatir%22%3A%22%22%7D');
								var liste1 = getRemote(url6);
								var obj1 =JSON.parse(liste1);
								

								if (obj1.error==undefined){	

									hata2=false;
				
									AktiftoplamKalanTutar=AktiftoplamKalanTutar + parseFloat(obj1.data.genelbilgiler[0].emanetkalantutar);
				
								}else{

									console.log("Hata ile Karşılaşıldı Tekrar Deneyeceğim " +  vkno + "-" + vergiDairesi + "-" + satir.iadeDosyaNo  );		
				
								}
								
							  }		

							}
											
					});

			}else{

				console.log("Hata ile Karşılaşıldı Tekrar Deneyeceğim " +  vkno + "-" + vergiDairesi );		

			}

	}
	
			return Number(AktiftoplamKalanTutar).toFixed(2);
			

}


function iadeMahsupSorgulamailgiliDaire2(vkn,ilgiliDaire) { // İade Mahsup ekranından Sorguluyor -- Tüm daireleri de sorguluyor ilgili vd, ihtisas ve tümüne ilişkin bilgileri alabiliyoruz.

		
		var callid=makeid(13) + '-';

		var AktiftoplamKalanTutar=0;

		var ilgiliDaireKalanTutar=0;

		var ihtisasKalanTutar=0;

		var hata1=true;
		var hataSayisi1=0;
		var hataSayisi2=0;

		var vd_listesi=iadeMahsupHangiVD(vkn);

		if (vd_listesi!="Hata"){

		if (vd_listesi.length>0){

		while(hata1){
		
			$.each(vd_listesi, function(index, vd){
			
				var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=iadeMahsupService_iadeMahsupSorgulama&callid='; 
				var url5=url5.concat(callid + '165', '&token=', token() , '&&jp=%7B%22vkn%22%3A%22',vkn,'%22%2C%22vdKodu%22%3A%22',vd,'%22%2C%22vergiKodu%22%3A%22%22%2C%22donemBasAy%22%3A%22%22%2C%22donemBitYil%22%3A%22%22%2C%22donemBasYil%22%3A%22%22%2C%22donemBitAy%22%3A%22%22%7D');
				var liste = getRemote(url5);
				var obj =JSON.parse(liste);	
				

					if (obj.error==undefined){	

						hata1=false;

						$.each( obj.data.iadeMahsupKlm, function(index, satir){
					
							if (satir.durum=="1-1" ) {

							var hata2=true;	

									while(hata2){

										var url6= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=iadeMahsupService_iadeMahsupSorgulamaDetay&callid='; 
										var url6=url6.concat(callid + '165', '&token=', token() , '&jp=%7B%22vkn%22%3A%22',vkn,'%22%2C%22vdKodu%22%3A%22',vd,'%22%2C%22iadeDosyaNo%22%3A%22',satir.iadeDosyaNo,'%22%2C%22dilekceTipi%22%3A%22%22%2C%22donem%22%3A%22%22%2C%22vKodu%22%3A%22%22%2C%22iadeSatir%22%3A%22%22%7D');
										var liste1 = getRemote(url6);
										var obj1 =JSON.parse(liste1);
										

										if (obj1.error==undefined){	

											hata2=false;

											if (vd==ilgiliDaire) {	ilgiliDaireKalanTutar=ilgiliDaireKalanTutar + parseFloat(obj1.data.genelbilgiler[0].emanetkalantutar);}

											if (vd=="016250") {	ihtisasKalanTutar=ihtisasKalanTutar + parseFloat(obj1.data.genelbilgiler[0].emanetkalantutar);}
						
											AktiftoplamKalanTutar=AktiftoplamKalanTutar + parseFloat(obj1.data.genelbilgiler[0].emanetkalantutar);
						
										}else{

											hataSayisi2++;

											
										if (hataSayisi2<=2){
					
											console.log("iadeMahsupService_iadeMahsupSorgulamaDetay - Hata ile Karşılaşıldı Tekrar Deneyeceğim " +  vkn + "-" + vd + "-" + satir.iadeDosyaNo  );		
								
										}else{

 											console.log("iadeMahsupService_iadeMahsupSorgulamaDetay - Çok fazla Hata ile Karşılaşıldı Sonrakine geçiyorum " +  vkn + "-" + vd + "-" + satir.iadeDosyaNo  );		

											hata2=false;

										}

										
						
										}
										
									  }		

									}
													
							});

					}else{

						hataSayisi1++;

						if (hataSayisi1<=2){
	
						console.log("iadeMahsupService_iadeMahsupSorgulama - Hata ile Karşılaşıldı Tekrar Deneyeceğim " +  vkn + "-" + vd );		
				
						}else{

						console.log("iadeMahsupService_iadeMahsupSorgulama-Çok fazla Hata ile Karşılaşıldı Sonraki mükellefe geçiyorum " +  vkn + "-" + vd );		
			
						hata1=false;

						}

					}

			});
	}
	
			return (AktiftoplamKalanTutar + "-" + ilgiliDaireKalanTutar + "-" + ihtisasKalanTutar );
			
	}else{


	return "0-0-0";

	}

}else{

	return "Hata-Hata-Hata";	


	}

}


function iadeMahsupSorgulamailgiliDaire3(vkn,ilgiliDaire) { // İade Mahsup ekranından Sorguluyor

		var myRegex= /[0-9]+/;
		
		
		
		var callid=makeid(13) + '-';

		var AktiftoplamKalanTutar=0;

		var ilgiliDaireKalanTutar=0;

		var ihtisasKalanTutar=0;

		var hata1=true;
		var hataSayisi1=0;
		var hataSayisi2=0;

		while(hata1){
		
				var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=iadeMahsupService_iadeMahsupSorgulama&callid='; 
				var url5=url5.concat(callid + '165', '&token=', token() , '&&jp=%7B%22vkn%22%3A%22',vkn,'%22%2C%22vdKodu%22%3A%22',ilgiliDaire,'%22%2C%22vergiKodu%22%3A%22%22%2C%22donemBasAy%22%3A%22%22%2C%22donemBitYil%22%3A%22%22%2C%22donemBasYil%22%3A%22%22%2C%22donemBitAy%22%3A%22%22%7D');
				var liste = getRemote(url5);
				var obj =JSON.parse(liste);	
				

					if (obj.error==undefined){	

						hata1=false;

						$.each( obj.data.iadeMahsupKlm, function(index, satir){
					
							if (satir.durum=="1-1" ) {

							var hata2=true;	

									while(hata2){

										var url6= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=iadeMahsupService_iadeMahsupSorgulamaDetay&callid='; 
										var url6=url6.concat(callid + '165', '&token=', token() , '&jp=%7B%22vkn%22%3A%22',vkn,'%22%2C%22vdKodu%22%3A%22',vd,'%22%2C%22iadeDosyaNo%22%3A%22',satir.iadeDosyaNo,'%22%2C%22dilekceTipi%22%3A%22%22%2C%22donem%22%3A%22%22%2C%22vKodu%22%3A%22%22%2C%22iadeSatir%22%3A%22%22%7D');
										var liste1 = getRemote(url6);
										var obj1 =JSON.parse(liste1);
										

										if (obj1.error==undefined){	

											hata2=false;

											ilgiliDaireKalanTutar=ilgiliDaireKalanTutar + parseFloat(obj1.data.genelbilgiler[0].emanetkalantutar);
											
						
										}else{

											hataSayisi2++;

											
										if (hataSayisi2<=2){
					
											console.log("iadeMahsupService_iadeMahsupSorgulamaDetay - Hata ile Karşılaşıldı Tekrar Deneyeceğim " +  vkn + "-" + vd + "-" + satir.iadeDosyaNo  );		
								
										}else{

 											console.log("iadeMahsupService_iadeMahsupSorgulamaDetay - Çok fazla Hata ile Karşılaşıldı Sonrakine geçiyorum " +  vkn + "-" + vd + "-" + satir.iadeDosyaNo  );		

											hata2=false;

										}

										
						
										}
										
									  }		

									}
													
							});

					}else{

						hataSayisi1++;

						if (hataSayisi1<=2){
	
						console.log("iadeMahsupService_iadeMahsupSorgulama - Hata ile Karşılaşıldı Tekrar Deneyeceğim " +  vkn + "-" + vd );		
				
						}else{

						console.log("iadeMahsupService_iadeMahsupSorgulama-Çok fazla Hata ile Karşılaşıldı Sonraki mükellefe geçiyorum " +  vkn + "-" + vd );		
			
						hata1=false;

						}

					}

		
	}
	
			return (AktiftoplamKalanTutar + "-" + ilgiliDaireKalanTutar + "-" + ihtisasKalanTutar );
			
	}





function ikincilSorumluluk(vkn,token){


var callid=makeid(13) + '-';



 var url= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=isEmriBorcSorgulamaService_ikincilSorumluklukBilgiBul&callid=';
	var url=url.concat(callid + '131', '&token=', token, '&jp=%7B%22orgoid%22%3A%22',vdOrgId(),'%22%2C%22vergiNo%22%3A%22',vkn,'%22%2C%22tcKimlikNo%22%3A%22%22%2C%22baslangicVadeTarihi%22%3A%2200000000%22%2C%22bitisVadeTarihi%22%3A%2299999999%22%2C%22talepNedeni%22%3A%223%22%7D');
	var ikincil = getRemote(url);
	var obj =JSON.parse(ikincil);
	
	
	 if (obj.data.length>0){
      
      return "<td style='background:red; color:white'><a href='../diger/ikincil-sorumluluk.html?token=" + token() + "&vkn=" + vkn +  "' target='_blank'>Var</a></td>";
      
      }else{
      
      return "<td>Yok</td>";
      
      }

}


function ikincilSorumlulukTutar(vkn,token){
	
	try{

		var callid=makeid(13) + '-';


		var url= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=isEmriBorcSorgulamaService_ikincilSorumluklukBilgiBul&callid=';
		var url=url.concat(callid + '131', '&token=', token, '&jp=%7B%22orgoid%22%3A%22',vdOrgId(),'%22%2C%22vergiNo%22%3A%22',vkn,'%22%2C%22tcKimlikNo%22%3A%22%22%2C%22baslangicVadeTarihi%22%3A%2200000000%22%2C%22bitisVadeTarihi%22%3A%2299999999%22%2C%22talepNedeni%22%3A%223%22%7D');
		var ikincil = getRemote(url);
		var obj =JSON.parse(ikincil);
		var takipTutar=0

	if(obj.data.length>0){
			$.each(obj.data,function(index,satir){

				takipTutar = takipTutar + parseFloat(satir.tkpMiktari);

			});

		return tlCevir(takipTutar);

		}else{

			return "0";

		}

	}

	catch(err){

		return "";

		}

}

function ehacizBanka(vkn,tabloID='22',vd) {

var myRegex= /[0-9]+/;



var callid=makeid(13) + '-';
var hacizTarihi=prompt("Haciz Bildirisi İçin Başlangıç Dönemi  Giriniz Örnek 202501");
var hacizTarihi1=prompt("Haciz Bildirisi İçin Bitiş Dönemi  Giriniz Örnek 202501");




 var url= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=ehacizListeService_mukellefBazindaEhacizSorgula&callid=';
	var url=url.concat(callid + '24', '&token=', token(), '&jp=%7B%22vkn%22%3A%22',vkn,'%22%2C%22tckn%22%3A%22%22%2C%22baslangicDonem%22%3A%22',hacizTarihi,'%22%2C%22bitisDonem%22%3A%22',hacizTarihi1,'%22%7D');
	var ehaciz = getRemote(url);
	var obj =JSON.parse(ehaciz);
	
	$('#tablo'+ tabloID).after('<table id="myTable700" border=1> <caption>MHK / Ehaciz Banka Bilgileri</caption><tr><th>VERGİ DAİRESİ</th><th>HACİZ NO</th><th>DURUM</th><th>TARİH</th></tr></table>');
 

	 $.each(obj.data.liste,function(index,satir){

		if (satir.vdkodu==vd){
		 
			 $("#myTable700 tr:last").after( "<tr><td>" + vdAdi(satir.vdkodu) + "</td><td>" + satir.hbno + "</td><td> " + satir.durum + " </td><td>" + satir.tarih + "</td></tr>");
	   
		 }
	 });


}


function ehacizBanka1(vkn,tabloID='22',token) {


var callid=makeid(13) + '-';

/*var hacizTarihi=prompt("Haciz Bildirisi İçin Başlangıç Dönemi  Giriniz Örnek 202501");
var hacizTarihi1=prompt("Haciz Bildirisi İçin Bitiş Dönemi  Giriniz Örnek 202501");*/


var hacizTarihi="";
var hacizTarihi1="";

 var url= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=ehacizListeService_mukellefBazindaEhacizSorgula&callid=';
	var url=url.concat(callid + '24', '&token=', token, '&jp=%7B%22vkn%22%3A%22',vkn,'%22%2C%22tckn%22%3A%22%22%2C%22baslangicDonem%22%3A%22',hacizTarihi,'%22%2C%22bitisDonem%22%3A%22',hacizTarihi1,'%22%7D');
	var ehaciz = getRemote(url);
	var obj =JSON.parse(ehaciz);
	
	$('#tablo'+ tabloID).after('<table id="myTable700" border=1> <caption>MHK / Ehaciz Banka Bilgileri</caption><tr><th>VERGİ DAİRESİ</th><th>HACİZ NO</th><th>DURUM</th><th>TARİH</th></tr></table>');
 

	 $.each(obj.data.liste,function(index,satir){
		
		 
			 $("#myTable700 tr:last").after( "<tr><td>" + vdAdi(satir.vdkodu) + "</td><td>" + satir.hbno + "</td><td> " + satir.durum + " </td><td>" + satir.tarih + "</td></tr>");
	   

	 });


}


function ehacizBankaVarmi(vkn,yil,vd) { // Hem Aktif hemde Müdürlüğümüz E Haciz işlemi olup olmadığı

var myRegex= /[0-9]+/;



var callid=makeid(13) + '-';
var aktif=0;
var hacizBildirisiYil="";
var pasif=0;

//

 var url= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=ehacizListeService_mukellefBazindaEhacizSorgula&callid=';
 var url=url.concat(callid + '46', '&token=', token(), '&jp=%7B%22vkn%22%3A%22',vkn,'%22%2C%22tckn%22%3A%22%22%2C%22baslangicDonem%22%3A%22',yil,'01%22%2C%22bitisDonem%22%3A%22',yil,'12%22%7D');
 var ehaciz = getRemote(url);
 var obj =JSON.parse(ehaciz);
	

	 $.each(obj.data.liste,function(index,satir){

	 hacizBildirisiYil = (satir.hbno).substr(0,4);
	 
	if (satir.durum=="AKTİF" && satir.vdkodu==vd && hacizBildirisiYil==yil ) { aktif = aktif + 1;} 
	if (satir.durum=="PASİF" && satir.vdkodu==vd && hacizBildirisiYil==yil ) { pasif = pasif + 1;} 
   
	 
	 });

	 if ( aktif==0 && pasif==0 ){
	 
	 
      return "<td>Yok</td>";
      
      }else{
      
      
      return "<td><a target='_blank' href='../diger/e-haciz-liste.html?vkn=" + vkn + "&token=" + token() + "'>" + "Aktif:" +  aktif  + "-Pasif:" +  pasif  + "</a></td>";
      }
      
      
	

}

function tasitHaciz(vkn,vd){


var callid=makeid(13) + '-';
var AktifkayitSayisi=0;
var yakalama=0;
var satis_arz=0;
var satis_kesin=0;
var donem1=""; //cariYil() + "01";
var donem2=""; //cariYil() + "12";
var bugun_yil=bugunYil();

var hata=true;
var hacizSonTarih="";
var deneme=0;
var plakaListe=new Array();
var plakaAktif=new Array();
var plakaDurum=new Array();
var plakaSonTarih=new Array();
var sonDurumTarih=new Array();
	

	 var url= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=ehacizListeService_egmTakyidatEklenenlerListesi&callid=';
	 var url=url.concat(callid + '214', '&token=', token(), '&jp=%7B%22vdkodu%22%3A%22',vd,'%22%2C%22vkn%22%3A%22',vkn,'%22%2C%22tckn%22%3A%22%22%2C%22tip%22%3A%221%22%2C%22baslangicDonem%22%3A%22',donem1,'%22%2C%22bitisDonem%22%3A%22',donem2,'%22%7D');
	 var haciz = getRemote(url);
	 var obj =JSON.parse(haciz);

	if (obj.error==undefined){	

	

	 var kayitSayisi=(obj.data.hacizlist.length);

			if (kayitSayisi>0){

				//hacizSonTarih=obj.data.hacizlist[kayitSayisi-1].sonDurumTarih;

				$.each(obj.data.hacizlist,function(index,satir){
			
					if (satir.hbno!=undefined){

						sonDurumTarih.push(satir.eklemetarihi);
				
						if (plakaListe.includes(satir.plaka)){
							
							if (plakaSonTarih[satir.plaka]<satir.eklemetarihi) {
								
								if ( (satir.takyidatturu==35 || satir.takyidatturu==50) && satir.takyidatdurum=="PASİF" ){ //yakalama veya satışa arz pasif ise dikkate almıyoruz


								}else{
									plakaAktif[satir.plaka]=satir.takyidatdurum;								

									plakaDurum[satir.plaka]=satir.takyidatturu;

									plakaSonTarih[satir.plaka]=satir.eklemetarihi;

								}

							}
							
						}else{
							
							plakaListe.push(satir.plaka);
			
							plakaAktif[satir.plaka]=satir.takyidatdurum;		
							
							plakaDurum[satir.plaka]=satir.takyidatturu;
						
							plakaSonTarih[satir.plaka]=satir.eklemetarihi;
						}
		
					}
				});	
				

				sonDurumTarih.sort();	
			
				hacizSonTarih=sonDurumTarih[sonDurumTarih.length-1];
				
				
			}

			$.each(plakaListe,function(index,plaka){
				
						if (plakaAktif[plaka]=="AKTİF" && plakaDurum[plaka]=="3") {AktifkayitSayisi++;} //aktif hacizli araç sayısını gösteriyor
					
						if (plakaAktif[plaka]=="AKTİF" && plakaDurum[plaka]=="35") {yakalama++;} //mevcut yapılan yakalama
						
						if (plakaAktif[plaka]=="AKTİF" && plakaDurum[plaka]=="50") {satis_arz++;}  //cari yılda yapılan satış arz
						
						if ((plakaSonTarih[plaka]).substr(0,4)==bugun_yil && plakaDurum[plaka]=="49") {satis_kesin++;}  //cari yılda yapılan kesin satış	
						

				
				});	
			
			
			return AktifkayitSayisi + "-" + hacizSonTarih + "-" + yakalama + '-' + satis_arz + '-' + satis_kesin ;


	}else{
			console.log("Hata aldığımız için geçiyoruz " +  vkn + "-" + vd + "-" + err );	
			
			return "Hata-Hata-Hata-Hata-Hata" ;	


				}



}


function ehacizBankaVarmi1(vkn,yil,vd) { // Hem Aktif hemde Müdürlüğümüz E Haciz işlemi olup olmadığı

try{

var callid=makeid(13) + '-';
var tarihDizi=new Array();

 var url= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=ehacizListeService_mukellefBazindaEhacizSorgula&callid=';
 var url=url.concat(callid + '46', '&token=', token(), '&jp=%7B%22vkn%22%3A%22',vkn,'%22%2C%22tckn%22%3A%22%22%2C%22baslangicDonem%22%3A%22',yil,'01%22%2C%22bitisDonem%22%3A%22',yil,'12%22%7D');
 var ehaciz = getRemote(url);
 var obj =JSON.parse(ehaciz);
	
var kayitSayisi=obj.data.liste.length;
var ilgiliDaireKayitSayisi=0;

	if (kayitSayisi>0){

		 $.each(obj.data.liste,function(index,satir){

			if (satir.vdkodu==vd){

				var hacizTarihi=(satir.hbno).substr(0,8);

				tarihDizi.push(hacizTarihi);

				ilgiliDaireKayitSayisi++;

			}
				
		
		});

  		var yeniDizi = tarihDizi.sort();

		return ilgiliDaireKayitSayisi + "-" + yeniDizi[yeniDizi.length-1];

	}else{

		return "0" + "";

	}


}

catch(err){

	console.log(err);

	return "Hata-Hata ";

}


	

}

function plakaBazindaMahrumiyet(plaka,tokenA){

var myRegex= /[0-9]+/;



var callid=makeid(13) + '-';
var cekirgVdMahrumiyetSayisi=0;

//
if (plaka!=undefined){
    var url= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=ehacizListeService_plakaBazindaMahrumiyetSorgula&callid=';
	var url=url.concat(callid + '66', '&token=', token(), '&jp=%7B%22plaka%22%3A%22',plaka,'%22%7D');
	var malvarligi = getRemote(url);
	var obj =JSON.parse(malvarligi);

		if (obj.error==undefined) {


			var kayit_sayisi= obj.data.takyidat.length;
	
			
				
			if (kayit_sayisi>0) {


				 $.each(obj.data.takyidat,function(index,satir){


					if (satir.birimAd=="016253 ÇEKİRGE Vergi Dairesi") {cekirgVdMahrumiyetSayisi=cekirgVdMahrumiyetSayisi+1;}


				});



				return "<a target='_blank' href='diger/mahrumiyet.html?plaka=" + plaka + "&token=" + tokenA + "'>" + "VAR - " + cekirgVdMahrumiyetSayisi + "</a>";
				
				}else{

				return "YOK";
		
			}
		
		}else{
		
		return obj.messages[0].text;
		
		}
		
 }
	

}


function plakaBazindaMahrumiyetIlkSira(plaka,tokenA){

var myRegex= /[0-9]+/;



var callid=makeid(13) + '-';


//
if (plaka!=undefined){
    var url= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=ehacizListeService_plakaBazindaMahrumiyetSorgula&callid=';
	var url=url.concat(callid + '66', '&token=', token(), '&jp=%7B%22plaka%22%3A%22',plaka,'%22%7D');
	var malvarligi = getRemote(url);
	var obj =JSON.parse(malvarligi);

		if (obj.error==undefined) {


			var kayit_sayisi= obj.data.takyidat.length;
	
			
				
			if (kayit_sayisi>0) {

				return  obj.data.takyidat[0].birimAd ;
			
				
				}else{

				return "YOK";
		
			}
		
		}else{
		
		return obj.messages[0].text;
		
		}
		
 }
	

}

function plakaBazindaMahrumiyet1(plaka,tokenA){

var myRegex= /[0-9]+/;



var callid=makeid(13) + '-';


 
return "<a target='_blank' href='../diger/mahrumiyet.html?plaka=" + plaka + "&token=" + token() + "'>" + "Göster " +  "</a>";
								
		
	

}



function odeme_emri(vkn,token,oid,i){

 
  var callid=makeid(13) + '-';
  
  var url= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=mhkEtebligatService_zarfDetayGetir&callid=';
  var url=url.concat(callid + '14', '&token=', token, '&jp=%7B%22input%22%3A%7B%22vkn%22%3A%22',vkn,'%22%2C%22tckn%22%3A%22%22%2C%22zarfOid%22%3A%22',oid,'%22%7D%7D');
  var remote = getRemote(url);
  var obj =JSON.parse(remote);
  var oid1=obj.data.result[0].oid;
 
  
return '<a href="http://10.251.63.99/gibintranet_server/downloadResource?token='+ token +'&cmd=downloadTebligat&dosyaismi=' + oid1 + '&uzanti=imz&oid=' +  oid1 +  '&islem=download&tur=teblig&belgeTuru=tebligat&" target="_blank" ><img id="disket' + i + '" src="disket.png" style="width:60px;height:42px;"> </a> ';
 

}

function plakaMukellef(plaka){
var myRegex= /[0-9]+/;



var callid=makeid(13) + '-';

//
    var url= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=motorluTasitlarService_plakadanMukBilgiSorgu&callid=';
	var url=url.concat(callid + '60', '&token=', token(), '&jp=%7B%22plaka%22%3A%22',plaka,'%22%7D');
	var malvarligi = getRemote(url);
	var obj =JSON.parse(malvarligi);
	var vkn=obj.data.kisiBilgileri[0].vergiKimlikNo;
	var unvan=obj.data.kisiBilgileri[0].unvani;
	
	return vkn + "/" + unvan;
	
	

}

function acikAdres(tckn){

var myRegex= /[0-9]+/;



var callid=makeid(13) + '-';

	  var url2= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=mernisService_getAdresBilgileri&callid=';
      var url2=url2.concat(callid + '88', '&token=', token(), '&jp=%7B%22tckn%22%3A%22',tckn,'%22%7D');
      var adres = getRemote(url2);
      var obj =JSON.parse(adres);  
      var hataVarmi=obj.error;
            
     if (hataVarmi==undefined || hataVarmi=="undefined" ){
     
      return obj.data.acikAdres; 
   
	}else{
	
	return "Hata ile karşılaşıldı";
	}
}



function tumMalKaydet(metinPDF){

var myRegex= /[0-9]+/;



var callid=makeid(13) + '-';

    var url= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=malVarligiService_tumMalVarligiKaydet&callid=';
	var url=url.concat(callid + '88', '&token=', token(), '&jp=%7B%22tumMalVarPdfByteArray%22%3A%22',metinPDF,'%22%2C%22tckn%22%3A%22',tck,'%22%2C%22unvan%22%3A%22%22%7D');
	var malvarligi = getRemote(url);
	var obj =JSON.parse(malvarligi);


}

function tumMalVarligiSorgulama(vkn,tabloID='23',tck,token){


var callid=makeid(13) + '-';


//
    var url= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=malVarligiService_tumMalVarligiBilgileriSorgula&callid=';
	var url=url.concat(callid + '125', '&token=', token, '&jp=%7B%22vkn%22%3A%22',vkn,'%22%2C%22tckn%22%3A%22',tck,'%22%2C%22unvan%22%3A%22%22%7D');
	var malvarligi = getRemote(url);
	var obj =JSON.parse(malvarligi);
	
	
 try{
	 if (obj.data.motorluTasit.tumMotorluTasitBilgileri.veriler.length>0) {
	 
	 	$('#tablo'+ tabloID).after('<table id="myTable701" border=1> <caption>Motorlu Taşıt Bilgisi</caption><tr><th>PLAKA</th><th>MARKA-MODEL</th><th>TİPİ</th><th>CİNSİ</th><th>Terk Türü</th><th>Mahrumiyet Varmı?</th></tr></table>');
	 	
		 $.each(obj.data.motorluTasit.tumMotorluTasitBilgileri.veriler,function(index,satir){
		 
		 $("#myTable701 tr:last").after( "<tr><td>" + satir.plaka + "</td><td>" + satir.marka + "-" + satir.model + " </td><td>" + satir.tip + "</td><td>" + satir.cinsad + "</td><td>"+satir.terk_turu+"</td><td>" + plakaBazindaMahrumiyet1(satir.plaka) + "</td></tr>");
		   
		 
		 });

	}
}

catch(err){
	
				 $("#myTable701 tr:last").after( "<tr><td>Motorlu Taşıtlarda Hata ile Karşılaşıldı</td><td></td><td></td><td></td><td></td><td></td></tr>");
		
	}


/////////////////////////////////////////////////İŞ MAKİNELERERİ SORGULAMA

try{	   
	   
	   if (obj.data.isMakinalari.isMakinalariBilgileri.vehicledetail.length>0) {
	   
	   $('#tablo'+ tabloID).after('<table id="myTable702" border=1> <caption>İş Makineleri Bilgisi</caption><tr><th>SASİ NO</th><th>MARKA-TİPİ</th><th>ODA ADI</th><th>MOTOR NO</th><th>PLAKA NO</th></tr></table>');
	   
			   $.each(obj.data.isMakinalari.isMakinalariBilgileri.vehicledetail,function(index,satir){
				 
				 $("#myTable702 tr:last").after( "<tr><td>" + satir.chassisnumber + "</td><td>" + satir.vehiclebrand + "-" + satir.vehicletype + " </td><td>" + satir.commerceoffice + "</td><td>" + satir.enginenumber + "</td><td>"+satir.platenumber+"</td></tr>");
				   
				 
				 });
			 
	 }
	 
}

catch(err){
	
				 $("#myTable702 tr:last").after( "<tr><td>İş Makineleri Hata ile Karşılaşıldı</td><td></td><td></td><td></td><td></td></tr>");
		
	}
	 
	 ////////////////////////////////////////////////TAPU

try{	   
	   if (obj.data.tapu.takbisBilgileri.summary.length>0) {
	   
	     $('#tablo'+ tabloID).after('<table id="myTable703" border=1> <caption>TAPU Bilgisi</caption><tr><th>Adres</th><th>BAĞIMSIZ</th><th>PAFTA</th><th>ADA</th><th>PARSEL</th><th>TAŞINMAZ TİPİ</th><th>NİTELİK</th></tr></table>');
	 
			   $.each(obj.data.tapu.takbisBilgileri.summary	,function(index,satir){
				 
				 $("#myTable703 tr:last").after( "<tr><td>" + satir.mahalle + "-" + satir.ilce + "-" + satir.il  + "</td><td>"+satir.bagimsizbolum+"</td><td>" + satir.pafta + "</td><td>" + satir.ada + "</td><td>" + satir.parsel + "</td><td>"+satir.bagimsizbolumtip+"</td><td>"+satir.nitelik+"</td></tr>");
				   
				 
				 });
			 
	 }
	 
}

catch(err){
	
								 $("#myTable703 tr:last").after( "<tr><td>Tapu Sorgularkan Hata ile Karşılaşıldı</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>");
		
	}

	 
	 ////////////////////////////////////////////////GEMİ/

try{	 
	  
	   if (obj.data.denizTasit.denizTasit.gemiBilgileri.hatakodu==undefined) {
	   
	     $('#tablo'+ tabloID).after('<table id="myTable704" border=1> <caption>GEMİ Bilgisi</caption><tr><th>Gemi Adı</th><th>Gemi Numarası</th><th>CİNSİ</th><th>Bağlama Limanı</th></tr></table>');
	  
			   $.each(obj.data.denizTasit.denizTasit.gemiBilgileri.data, function(index,satir){
				 
				 $("#myTable704 tr:last").after( "<tr><td>" + satir.gemiadi + "</td><td>" + satir.gemino + "</td><td>" + satir.gemicins + " </td><td>" + satir.bagliman + "</td></tr>");
				   
				 
				 });
			 
	 }	
	 
}
catch(err){
	
			 $("#myTable704 tr:last").after( "<tr><td>Gemi Sorgulamada Hata ile Karşılaşıldı</td><td></td><td></td><td></td></tr>");
		
	}
	  
	  ////////////////////////////////////////////////UÇAK/
	 
try{	   
	   if (obj.data.sivilHavacilik.sivilHavacilikBilgileri.length>0) {
	   
	     $('#tablo'+ tabloID).after('<table id="myTable705" border=1> <caption>Hava Taşıtları Bilgisi</caption><tr><th>Tescil Tarihi</th><th>Tipi</th><th>Sınıfı</th><th>Üretim Yılı</th><th>Hisse Oranı</th></tr></table>');
	 
			   $.each(obj.data.sivilHavacilik.sivilHavacilikBilgileri, function(index,satir){
				 
				 $("#myTable705 tr:last").after( "<tr><td>" + satir.tesciltarihi + "</td><td>" + satir.tipi + "</td><td>" + satir.sinif + "</td><td>" + satir.uretimyil + "</td><td>"+satir.hisseorani+"</td></tr>");
				   
				 
				 });
			 
	 }
	 
	}
	
	catch(err){
	
			$("#myTable705 tr:last").after( "<tr><td>Uçak Sorgularken Hata ile karşılaşıldı</td><td></td><td></td><td></td><td></td></tr>");
		
	}
	   
	 
	 
	 
}


function tumMalVarligiSorgulamaGet(vkn,tabloID='23',tck,token){


var callid=makeid(13) + '-';


//
    var url= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=malVarligiService_tumMalVarligiBilgileriSorgula&callid=';
	var url=url.concat(callid + '125', '&token=', token, '&jp=%7B%22vkn%22%3A%22',vkn,'%22%2C%22tckn%22%3A%22',tck,'%22%2C%22unvan%22%3A%22%22%7D');
	var malvarligi = getRemote(url);
	var obj =JSON.parse(malvarligi);
	
	
 
  try{
	 if (obj.data.motorluTasit.tumMotorluTasitBilgileri.veriler.length>0) {
	 
	 	$('#tablo'+ tabloID).after('<table id="myTable701" border=1> <caption>Motorlu Taşıt Bilgisi</caption><tr><th>PLAKA</th><th>MARKA-MODEL</th><th>TİPİ</th><th>CİNSİ</th><th>Terk Türü</th><th>Mahrumiyet Varmı?</th></tr></table>');
	 	
		 $.each(obj.data.motorluTasit.tumMotorluTasitBilgileri.veriler,function(index,satir){
		 
		 $("#myTable701 tr:last").after( "<tr><td>" + satir.plaka + "</td><td>" + satir.marka + "-" + satir.model + " </td><td>" + satir.tip + "</td><td>" + satir.cinsad + "</td><td>"+satir.terk_turu+"</td><td>" + plakaBazindaMahrumiyet1(satir.plaka) + "</td></tr>");
		   
		 
		 });

	}
}

catch(err){
	
				 $("#myTable701 tr:last").after( "<tr><td>Motorlu Taşıtlarda Hata ile Karşılaşıldı</td><td></td><td></td><td></td><td></td><td></td></tr>");
		
	}


/////////////////////////////////////////////////İŞ MAKİNELERERİ SORGULAMA

try{	   
	   
	   if (obj.data.isMakinalari.isMakinalariBilgileri.vehicledetail.length>0) {
	   
	   $('#tablo'+ tabloID).after('<table id="myTable702" border=1> <caption>İş Makineleri Bilgisi</caption><tr><th>SASİ NO</th><th>MARKA-TİPİ</th><th>ODA ADI</th><th>MOTOR NO</th><th>PLAKA NO</th></tr></table>');
	   
			   $.each(obj.data.isMakinalari.isMakinalariBilgileri.vehicledetail,function(index,satir){
				 
				 $("#myTable702 tr:last").after( "<tr><td>" + satir.chassisnumber + "</td><td>" + satir.vehiclebrand + "-" + satir.vehicletype + " </td><td>" + satir.commerceoffice + "</td><td>" + satir.enginenumber + "</td><td>"+satir.platenumber+"</td></tr>");
				   
				 
				 });
			 
	 }
	 
}

catch(err){
	
				 $("#myTable702 tr:last").after( "<tr><td>İş Makineleri Hata ile Karşılaşıldı</td><td></td><td></td><td></td><td></td></tr>");
		
	}
	 
	 ////////////////////////////////////////////////TAPU

try{	   
	   if (obj.data.tapu.takbisBilgileri.summary.length>0) {
	   
	     $('#tablo'+ tabloID).after('<table id="myTable703" border=1> <caption>TAPU Bilgisi</caption><tr><th>Adres</th><th>BAĞIMSIZ</th><th>PAFTA</th><th>ADA</th><th>PARSEL</th><th>TAŞINMAZ TİPİ</th><th>NİTELİK</th></tr></table>');
	 
			   $.each(obj.data.tapu.takbisBilgileri.summary	,function(index,satir){
				 
				 $("#myTable703 tr:last").after( "<tr><td>" + satir.mahalle + "-" + satir.ilce + "-" + satir.il  + "</td><td>"+satir.bagimsizbolum+"</td><td>" + satir.pafta + "</td><td>" + satir.ada + "</td><td>" + satir.parsel + "</td><td>"+satir.bagimsizbolumtip+"</td><td>"+satir.nitelik+"</td></tr>");
				   
				 
				 });
			 
	 }
	 
}

catch(err){
	
								 $("#myTable703 tr:last").after( "<tr><td>Tapu Sorgularkan Hata ile Karşılaşıldı</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>");
		
	}

	 
	 ////////////////////////////////////////////////GEMİ/

try{	 
	  
	   if (obj.data.denizTasit.denizTasit.gemiBilgileri.hatakodu==undefined) {
	   
	     $('#tablo'+ tabloID).after('<table id="myTable704" border=1> <caption>GEMİ Bilgisi</caption><tr><th>Gemi Adı</th><th>Gemi Numarası</th><th>CİNSİ</th><th>Bağlama Limanı</th></tr></table>');
	  
			   $.each(obj.data.denizTasit.denizTasit.gemiBilgileri.data, function(index,satir){
				 
				 $("#myTable704 tr:last").after( "<tr><td>" + satir.gemiadi + "</td><td>" + satir.gemino + "</td><td>" + satir.gemicins + " </td><td>" + satir.bagliman + "</td></tr>");
				   
				 
				 });
			 
	 }	
	 
}
catch(err){
	
			 $("#myTable704 tr:last").after( "<tr><td>Gemi Sorgulamada Hata ile Karşılaşıldı</td><td></td><td></td><td></td></tr>");
		
	}
	  
	  ////////////////////////////////////////////////UÇAK/
	 
try{	   
	   if (obj.data.sivilHavacilik.sivilHavacilikBilgileri.length>0) {
	   
	     $('#tablo'+ tabloID).after('<table id="myTable705" border=1> <caption>Hava Taşıtları Bilgisi</caption><tr><th>Tescil Tarihi</th><th>Tipi</th><th>Sınıfı</th><th>Üretim Yılı</th><th>Hisse Oranı</th></tr></table>');
	 
			   $.each(obj.data.sivilHavacilik.sivilHavacilikBilgileri, function(index,satir){
				 
				 $("#myTable705 tr:last").after( "<tr><td>" + satir.tesciltarihi + "</td><td>" + satir.tipi + "</td><td>" + satir.sinif + "</td><td>" + satir.uretimyil + "</td><td>"+satir.hisseorani+"</td></tr>");
				   
				 
				 });
			 
	 }
	 
	}
	
	catch(err){
	
			$("#myTable705 tr:last").after( "<tr><td>Uçak Sorgularken Hata ile karşılaşıldı</td><td></td><td></td><td></td><td></td></tr>");
		
	}
	   
	 
	 
	 
	 
	 
	 
}
function borcAciklamaDegistir(aciklama){


 var bul ={
			'1':'TAKİPLİ',
			'2':'6183/B4/5228/5766 TECİLLİ',
			'3':'KDV/ÖTV/Muhtasar TECİLLİ',
			'4' :'414 TECİLLİ',
			'5' : 'VB TECİLLİ',
			'6' : '5335 TECİLLİ',
			'7': 'KOBİ TECİLLİ',
			'8' : 'DİĞER TECİLLİ',
			'9' : 'TAHSİLAT FAZLASI VAR',
			'10' : '6111 TECILLI',
			'11':'6552 TECİLLİ',
			'12':'6552 GEÇİCİ 2-1',
			'13': '6736 TECİLLİ',
			'14': '7020 TECİLLİ',
			'15': '7143 TECİLLİ',
			'16': '7256 TECİLLİ',
			'17': '7326 TECİLLİ',
			'18': '7440 TECİLLİ'
};


   yeni_aciklama=aciklama.replace("1", bul['1']);
   yeni_aciklama=yeni_aciklama.replace("2", bul['2']);
   yeni_aciklama=yeni_aciklama.replace("3", bul['3']);
   yeni_aciklama=yeni_aciklama.replace("4", bul['4']);
   yeni_aciklama=yeni_aciklama.replace("5", bul['5']);
   yeni_aciklama=yeni_aciklama.replace("6", bul['6']);
   yeni_aciklama=yeni_aciklama.replace("7", bul['7']);
   yeni_aciklama=yeni_aciklama.replace("8", bul['8']);
   yeni_aciklama=yeni_aciklama.replace("9", bul['9']);
   yeni_aciklama=yeni_aciklama.replace("10", bul['10']);
   yeni_aciklama=yeni_aciklama.replace("11", bul['11']);
   yeni_aciklama=yeni_aciklama.replace("12", bul['12']);
   yeni_aciklama=yeni_aciklama.replace("13", bul['13']);
   yeni_aciklama=yeni_aciklama.replace("14", bul['14']);
   yeni_aciklama=yeni_aciklama.replace("15", bul['15']);
   yeni_aciklama=yeni_aciklama.replace("16", bul['16']);
   yeni_aciklama=yeni_aciklama.replace("17", bul['17']);
   yeni_aciklama=yeni_aciklama.replace("18", bul['18']);

	return yeni_aciklama;

}

function donustur(aciklama){


 var bul ={'ı':'%C4%B1',
	    'İ':'%C4%B0',
	    'ö':'%C3%B6' , 
	    'ü':'%C3%BC',
	    'ğ':'%C4%9F',
	    'ş':'%C5%9F',
	    'ç':'%C3%A7',
	    ';':'%3B',
	    ' ': '%20',
		'/' :'%2F' };

 
   yeni_aciklama=aciklama.replace(/ı/g, bul['ı']);
   yeni_aciklama=yeni_aciklama.replace(/İ/g, bul['İ']);
   yeni_aciklama=yeni_aciklama.replace(/ö/g, bul['ö']);
   yeni_aciklama=yeni_aciklama.replace(/Ö/g, bul['ö']);
   yeni_aciklama=yeni_aciklama.replace(/ü/g, bul['ü']);
   yeni_aciklama=yeni_aciklama.replace(/Ü/g, bul['ü']);
   yeni_aciklama=yeni_aciklama.replace(/Ğ/g, bul['ğ']);
   yeni_aciklama=yeni_aciklama.replace(/ğ/g, bul['ğ']);
   yeni_aciklama=yeni_aciklama.replace(/ş/g, bul['ş']);
   yeni_aciklama=yeni_aciklama.replace(/Ş/g, bul['ş']);
   yeni_aciklama=yeni_aciklama.replace(/ç/g, bul['ç']);
   yeni_aciklama=yeni_aciklama.replace(/Ç/g, bul['ç']);
   yeni_aciklama=yeni_aciklama.replace(/ /g, bul[' ']);
   yeni_aciklama=yeni_aciklama.replace(/;/g, bul[';']);
   yeni_aciklama=yeni_aciklama.replace(/\//g, bul['/']);

	return yeni_aciklama;

}



function smsVarmi(vkn,token){

try{

var callid=makeid(13) + '-';

    var url= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=izahaDavetService_getIzahaDavetBilgileri&callid=';
	var url=url.concat(callid + '144', '&token=', token, '&jp=%7B%22reqObj%22%3A%7B%22vkn%22%3A%22',vkn,'%22%2C%22tckn%22%3A%22%22%2C%22yil%22%3A%22%22%7D%7D');
	var sms = getRemote(url);
	var obj =JSON.parse(sms);
	
	var gmsiSMS=obj.data.listeGmsi.length;
	var listeGyz=obj.data.listeGyz.length;
	var listeDki=obj.data.listeDki.length;
	var listeUcr=obj.data.listeUcr.length;
	
	if (gmsiSMS>0 || listeGyz>0 || listeDki>0  || listeUcr>0  ){
	
	return "<a target='_blank' href='diger/sms-bilgileri.html?vkn=" + vkn + "&token=" + token + "' >"  +  "VAR</a>";
	
	}	else{
	
	return "YOK";
	}

}

	catch(err){

	return "Yetkiniz Yok / Hata ile Karşılaşıldı";


	}

}




function istisnaDilekcesiVarmi(vkn,token){

try{
	
	
	var callid=makeid(13) + '-';

	var vergi_dairesi = vdKodu();

	var bugun_yil=bugunYil();

	var kayit_sayisi=0;


		var url= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=gmsiBildirimService_gmsiIstisnaDilekceSorgu&callid=';
		var url=url.concat(callid + '12', '&token=', token, '&jp=%7B%22vdKodu%22%3A%22',vergi_dairesi,'%22%2C%22tcknVkn%22%3A%22', vkn ,'%22%2C%22donemBas%22%3A%2220180101%22%2C%22donemBit%22%3A%22',bugun_yil,'1231%22%2C%22yil%22%3A%22%22%7D');
		
		var dilekce = getRemote(url);

		var obj =JSON.parse(dilekce);

		
		
		kayit_sayisi=obj.data.gmsiDilekceSorgula.length;
		
		if (kayit_sayisi>0){
		
		return "<a target='_blank' href='diger/istisna-dilekcesi.html?vkn=" + vkn + "&token=" + token() + "' >"  +  "VAR </a>";

		}else if (kayit_sayisi==0){
		
		return "YOK";
		
		}
		
	}
	
	catch(err){
	
		return "Yetkiniz Yok / Hata ile Karşılaşıldı";


	}
}


function topluTakipKontrol(evdbToken) {

 	 
      var callid=makeid(13) + '-';
     
      //
      
      var url5= 'http://10.251.63.99/evdo_server/dispatch?cmd=topluTakipEngelGiris_getGuncelDonem&&callid=';
      var url5=url5.concat(callid + '81', '&token=', evdbToken , '&jp=%7B%7D');
      var daireler = getRemote(url5);
      var obj =JSON.parse(daireler);
      
      var cariDonem=obj.data.guncelDonemVal; 
      
      
      var url5= 'http://10.251.63.99/evdo_server/dispatch?cmd=topluTakipEngelGiris_topluTakipOnayKontrol&callid=';
      var url5=url5.concat(callid + '180', '&token=', evdbToken , '&jp=%7B%22donem%22%3A%22',cariDonem,'%22%7D');
      var daireler = getRemote(url5);
      var obj =JSON.parse(daireler);
         
      if (obj.data.dahaoncedenonaylanmis==false){ alert("Toplu Takip Onay Bölümü Aktif Hale Gelmiştir");}
      
		



}


function eTebligatVarmi(vkn,tur,token) {

try{
		
	
	var callid=makeid(13) + '-';


	//
		var url= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=internetVergiDairesiKullanicilariService_eTebligataTabiiMukellefSorgulama&callid=';
		
		var url=url.concat(callid + '13', '&token=', token, '&jp=%7B%22vkn%22%3A%22',vkn,'%22%2C%22tckn%22%3A%22%22%2C%22mukTuru%22%3A%22',tur,'%22%7D');
		var sms = getRemote(url);
		var obj =JSON.parse(sms);
		
		if (obj.data.list.length==0){
		
		return "Yok";
		
		}else if (obj.data.list.length>0){
		
		return "Var - Baş Tarihi: " + tarihFormat(obj.data.list[0].akbastar) + "-" + obj.data.list[0].ctel1 ;

		
		}
}

catch(err){

	return "Hata ile karşılaşıldı";
}

}


function kdviraKontrol(vkn,donem) {

	try{
		var myRegex= /[0-9]+/;
		
		
		
		var callid=makeid(13) + '-';
		var kdviraVarmi=0;

		var url= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=kdvKontrolRaporuService_raporDonemleriGetir&callid=';
		var url=url.concat(callid + '14', '&token=', token(), '&jp=%7B%22vkn%22%3A%22',vkn,'%22%2C%22arsivMi%22%3Afalse%7D');
		var kdvira = getRemote(url);
		var obj =JSON.parse(kdvira);

			$.each(obj.data.raporlar, function(index, satir){

				if (satir.donem==donem) { kdviraVarmi= kdviraVarmi + 1;  		}

			});		

		if (kdviraVarmi>0){ return "Var" }else { return "Yok" } 

	}

	catch(err){

	return ("Hata ile karşılaşıldı - " + err);
	}

}


function bugunDonem(){

  var bugun=new Date();
  
  var yil= String(bugun.getFullYear());
  
  var ay = String(bugun.getMonth()+1);
  
  if (ay.length==1){   ay= "0" + ay;  }
  
  return yil + ay ;

}

function bugunYil(){

  var bugun=new Date();
  
  var yil= bugun.getFullYear();
  
  return yil;

}


function FmotorluTasitlarService_aktifTasitSorgulama(vkn){
var myRegex= /[0-9]+/;



var callid=makeid(13) + '-';


//
var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=motorluTasitlarService_aktifTasitSorgulama&callid=';
var url5=url5.concat(callid + '9', '&token=', token(), '&jp=%7B%22vkn%22%3A%22',vkn,'%22%2C%22tckn%22%3A%22%22%2C%22sorgulamaTuru%22%3A%221%22%2C%22mtvMuafiyet%22%3A%221%22%2C%22islemSahibi%22%3A%22GIBINTRA%22%7D');
var rapor = getRemote(url5);
var obj =JSON.parse(rapor);

var kayitSayisi = obj.data.veriler.length;

return kayitSayisi;


}

function raporKayitGetir(vkn,vd){

var myRegex= /[0-9]+/;



var callid=makeid(13) + '-';
var raporDizi=new Array();
var vergi_dairesi=vdkodu();
	var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=raporDefteriService_raporDefteriSorgula&callid=';
		var url5=url5.concat(callid + '21', '&token=', token(), '&jp=%7B%22vkn%22%3A%22', vkn ,'%22%2C%22vdkodu%22%3A%22',vd,'%22%7D');
		var rapor = getRemote(url5);
		var obj_rapor =JSON.parse(rapor);
		var rapor_liste = obj_rapor.data.raporDefterleri;
		
		$.each(rapor_liste, function(index, satir){
	      
		    var rapor_kayit_no=satir.rapordefterino;
		    var aciklama= satir.aciklama;
		    
		    
		    // rapor kayıt defteri içerisinde yer alan bilgiler alınyor
		    
		    //
		      
		    var url6= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=raporDefteriService_raporDefteriDetaySorgula&callid=';
		    var url6=url6.concat(callid + '30', '&token=', token(), '&jp=%7B%22rapordefno%22%3A%22',rapor_kayit_no,'%22%2C%22vdkodu%22%3A%22',vergi_dairesi,'%22%2C%22vkn%22%3A%22',vkn,'%22%7D');
		    var rapor_detay = getRemote(url6);
		    var obj_rapor_detay =JSON.parse(rapor_detay);  
		    
		    var vergiKodu=obj_rapor_detay.data.incelemeBilgileri.vergikodu;
		    var vergidonem=obj_rapor_detay.data.incelemeBilgileri.vergidonem;
			
		    		    		   
		    
		    
		   raporDizi.push( aciklama + "-" + vergiKodu+ "-" +vergidonem + "-"  );
		   
		    
		   
		    
		    });

return raporDizi;
}

function iade_azaltan_mukellefler(){
var myRegex= /[0-9]+/;



var callid=makeid(13) + '-';
var zamanAsimiYil=zamanAsimi();
var kayit_sayisiKDV=0;
var kayit_sayisiVergilendirme=0;
var zamanAsimliKayitSayisiKDV=0;
var zamanAsimliKayitSayisiVergilendirme=0;
//
var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=kdvIadeSonrasiTutarAzaltanService_tutarAzaltanMukListesiGetir&callid=';
		var url5=url5.concat(callid + '57', '&token=', token(), '&jp=%7B%22vdKodu%22%3A%22',vdKodu(),'%22%2C%22basVkn%22%3A%22%22%2C%22bitVkn%22%3A%22%22%2C%22basDonem%22%3A%22%22%2C%22bitDonem%22%3A%22%22%7D');
		var rapor = getRemote(url5);
		var obj =JSON.parse(rapor);
		var rapor_liste = obj.data.liste;
        kayit_sayisiKDV=rapor_liste.length;
		
				
		$.each(rapor_liste, function(index, satir){

				if (satir.donem.substring(0,4)==zamanAsimiYil){
				
				zamanAsimliKayitSayisiKDV=zamanAsimliKayitSayisiKDV + 1 ;
				
				}
	    });
	    
//
	    
var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=gkIadeAzaltanService_iadeAzaltanMukListesiGetir&callid=';
		var url5=url5.concat(callid + '86', '&token=', token(), '&jp=%7B%22vdKodu%22%3A%22',vdKodu(),'%22%2C%22basVkn%22%3A%220000000000%22%2C%22bitVkn%22%3A%229999999999%22%2C%22basDonem%22%3A%22%22%2C%22bitDonem%22%3A%22%22%7D	    ');
		var rapor = getRemote(url5);
		var obj =JSON.parse(rapor);
		var rapor_liste = obj.data.liste;
        kayit_sayisiVergilendirme=rapor_liste.length;
		
				
		$.each(rapor_liste, function(index, satir){

				if (satir.donem.substring(0,4)==zamanAsimiYil){
				
				zamanAsimliKayitSayisiVergilendirme=zamanAsimliKayitSayisiVergilendirme + 1 ;
				
				}
	    });
	    
        alert("KDV İade İşlemi Gerçekleştirildikten Sonra İade Tutarını Azaltan Mükellefler Listesinde Toplam:" + kayit_sayisiKDV + "\n" + "Zamanaşımlı:" + zamanAsimliKayitSayisiKDV );	  
        
	    alert("Gelir/Kurumlar Vergisi İade İşlemleri Gerçekleştirildikten Sonra İade Tutarını Azaltan Mükellefler Listesi:" + kayit_sayisiVergilendirme + "\n" + "Zamanaşımlı:" + zamanAsimliKayitSayisiVergilendirme );			
	    
	    
	    
}

function beyanname_getir_guncel(vkn,vdKodu,vergiKodu){
  
  //
  
  var myRegex= /[0-9]+/;
  
  
  
  var callid=makeid(13) + '-';

  
   var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=bynIslemleriService_bynSorgula&callid=';
   var url5=url5.concat(callid + '25', '&token=', token(), '&jp=%7B%22vkn%22%3A%22',vkn,'%22%2C%22vdKodu%22%3A%22',vdKodu,'%22%2C%22vergiKodu%22%3A%22',vergiKodu,'%22%2C%22donemBas%22%3A%22%22%2C%22donemBit%22%3A%22%22%2C%22arsiv%22%3A%22T%22%7D');
   var beyanname = getRemote(url5);
   var obj=JSON.parse(beyanname);
   var ip=obj.data.kullaniciIp;
  
    
   window.open('http://10.251.67.110:30080/ebyn/vdintraDispatch?SVERGINO='+vkn+'&VERGIKODU='+vergiKodu+'&VDKODU='+vdKodu+'&tD1yil=&tD2yil=&tD1ay=&tD2ay=&ARSIV=F&BFORMUCIKAR=1&KESINMIZANCIKAR=1&cmd=BEYANNAMELISTESIVDO&origin=vdintra&USERID=tcnumaran&USERIP='+ ip + "'");
  
  }
  
  function get_beyanname_getir_guncel(vkn,vdKodu,vergiKodu){
  
	var token = GetUrlValue('token');
	
   var callid=makeid(13) + '-';
   
   var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=bynIslemleriService_bynSorgula&callid=';
   var url5=url5.concat(callid + '25', '&token=', token, '&jp=%7B%22vkn%22%3A%22',vkn,'%22%2C%22vdKodu%22%3A%22',vdKodu,'%22%2C%22vergiKodu%22%3A%22',vergiKodu,'%22%2C%22donemBas%22%3A%22%22%2C%22donemBit%22%3A%22%22%2C%22arsiv%22%3A%22T%22%7D');
   var beyanname = getRemote(url5);
   var obj=JSON.parse(beyanname);
   var ip=obj.data.kullaniciIp;
  
    
   window.open('http://10.251.67.110:30080/ebyn/vdintraDispatch?SVERGINO='+vkn+'&VERGIKODU='+vergiKodu+'&VDKODU='+vdKodu+'&tD1yil=&tD2yil=&tD1ay=&tD2ay=&ARSIV=F&BFORMUCIKAR=1&KESINMIZANCIKAR=1&cmd=BEYANNAMELISTESIVDO&origin=vdintra&USERID=tcnumaran&USERIP='+ ip + "'");
  
  }
  
 function beyanname_getir_arsiv(vkn,vdKodu,vergiKodu){
  
  //
  
  var myRegex= /[0-9]+/;
  
  
  
  var callid=makeid(13) + '-';

  
 
   var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=bynIslemleriService_bynSorgula&callid=';
   var url5=url5.concat(callid + '25', '&token=', token(), '&jp=%7B%22vkn%22%3A%22',vkn,'%22%2C%22vdKodu%22%3A%22',vdKodu,'%22%2C%22vergiKodu%22%3A%22',vergiKodu,'%22%2C%22donemBas%22%3A%22%22%2C%22donemBit%22%3A%22%22%2C%22arsiv%22%3A%22T%22%7D');
   var beyanname = getRemote(url5);
   var obj=JSON.parse(beyanname);
   var ip=obj.data.kullaniciIp;
  
    
   window.open('http://10.251.67.110:30080/ebyn/vdintraDispatch?SVERGINO='+vkn+'&VERGIKODU='+vergiKodu+'&VDKODU='+vdKodu+'&tD1yil=&tD2yil=&tD1ay=&tD2ay=&ARSIV=T&BFORMUCIKAR=1&KESINMIZANCIKAR=1&cmd=BEYANNAMELISTESIVDO&origin=vdintra&USERID=tcnumaran&USERIP='+ ip + "'");
     
   
  }
  
  
 function eFaturaAktifMi(vkn,token){

  var callid=makeid(13) + '-';
  var kayit=0;

  var url1= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=efaturaService_eFaturaKayitliKullaniciSorgula&callid=';
  var url1=url1.concat(callid + '219', '&token=', token, '&jp=%7B%22vkn%22%3A%22', vkn,'%22%2C%22tckn%22%3A%22%22%7D');
  var daireler = getRemote(url1);
  var obj =JSON.parse(daireler);
	
	
  var kayitSayisi=obj.data.eFaturaKayitliKullaniciListesi.length;

	if (kayitSayisi>0) {
	
		 $.each(obj.data.eFaturaKayitliKullaniciListesi, function(index, satir){ // kullanıcı olarak her  bir kaydın listesini veriyor

			 if (satir.eklenmeTarihi!="" && satir.kapanmaTarihi==undefined ) {
			 
				 kayit= kayit +1;
			 
			 }
		
		});

   }

	return kayit;	

}

function eArsivFaturaAktifMi(vkn,token){

  var callid=makeid(13) + '-';
  var kayit=0;

  var url1= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=efaturaService_eArsivKayitliKullaniciSorgula&callid=';
  var url1=url1.concat(callid + '219', '&token=', token, '&jp=%7B%22vkn%22%3A%22', vkn,'%22%2C%22tckn%22%3A%22%22%7D');
  var daireler = getRemote(url1);
  var obj =JSON.parse(daireler);
	
	
  var kayitSayisi=obj.data.eArsivKayitliKullaniciListesi.length;

	if (kayitSayisi>0) {
	
		 $.each(obj.data.eArsivKayitliKullaniciListesi, function(index, satir){ // kullanıcı olarak her  bir kaydın listesini veriyor

			 if (satir.eklenmeTarihi!="" && satir.kapanmaTarihi==undefined ) {
			 
				 kayit= kayit +1;
			 
			 }
		
		});

   }

	return kayit;	

}


function takipDurumu (vkno,vdkodu,vergiKodu,vdDonemBas,vdDonemBit) {
var myRegex= /[0-9]+/;



var callid=makeid(13) + '-';
const vdORGID=orgIDGetir(vdkodu);
var dizi=new Array();
var durumListe ={'-1':'KALDIRILMIŞ', '0':'İPTAL', '1':'GEÇERLİ', '2':'GÜNLENMİŞ'};
var tebligSekliListe={'0':'TEBLİĞ EDİLMEMİŞ', '1':'POSTA', '13':'ETEBLİGAT'};     
    var url= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=mhkTakipService_anaTakipleriGetir&callid=';



 var url=url.concat(callid + '202', '&token=', token(), '&jp=%7B%22input%22%3A%7B%22vkn%22%3A%22',vkno ,'%22%2C%22tckn%22%3A%22%22%2C%22vdkodu%22%3A%22',vdkodu,'%22%2C%22orgoid%22%3A%22',vdORGID,'%22%2C%22anavergikodu%22%3A%22', vergiKodu,'%22%2C%22vergilendirmedonemibas%22%3A%22',vdDonemBas,'%22%2C%22vergilendirmedonemibit%22%3A%22', vdDonemBit , '%22%2C%22anatkpdurum%22%3A%22%22%2C%22ebelgedurum%22%3A%220%22%2C%22tebligdurum%22%3A%2299%22%7D%7D');


    var url_thk = getRemote(url);
    var obj =JSON.parse(url_thk);

    var liste = obj.data.anatakipkayitlari; /// 
    var kayit_sayisi=liste.length;    

    if (liste.length==0) {
    
    return 'Takip Dosyası Bulunamadı';
    
    
	}else{
    
	var veri=obj.data.anatakipkayitlari[(liste.length-1)];

	var durum=veri.durum;

	var takipTarihi=tarihFormat(veri.anatkpdosyano);
	
	var tebligTarihi= tarihFormat(veri.tebligtarihi);  
    
    return takipTarihi + "-" +  durumListe[durum] + "-" + tebligTarihi + "-" + veri.anatkpdosyano  ;
    
    }
}


function eksiklikYaziKontrol(iadeTakipNo){

var myRegex= /[0-9]+/;



var callid=makeid(13) + '-';
var eksiklikYazisi=0;
var eksiklikYaziTarihi=0;	
var talepTarihi	=0;

		var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=iadeIzlemeService_iadeTakipIzlemeIadeAkisOzet&callid='; 
		var url5=url5.concat(callid + '30', '&token=', token(), '&jp=%7B%22input%22%3A%7B%22iadetakipno%22%3A%22',iadeTakipNo,'%22%2C%22merkez%22%3A%22%22%7D%7D');
		var liste = getRemote(url5);
		var obj =JSON.parse(liste);

		$.each( obj.data.iadeDetay, function(index, satir){
				
			if (satir.islemtip==4) { 

				eksiklikYazisi =eksiklikYazisi+1;
				eksiklikYaziTarihi= tarihFormat(satir.durumtarihi);
				}		

				if (satir.islemtip==6) {  talepTarihi= tarihFormat(satir.durumtarihi);	}		

				
		});
  
					return (eksiklikYazisi + "-"    + eksiklikYaziTarihi);

       

}


/*

function kdviraKontrol1(vkn,donem) {

	try{
		var myRegex= /[0-9]+/;
		
		
		
		var callid=makeid(13) + '-';
		var kdviraBilgileri="";
		var donem=donem.replace("-","");
		var kayitSayisi=0;
		var url= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=kdvKontrolRaporuService_raporDonemleriGetir&callid=';
		var url=url.concat(callid + '14', '&token=', token(), '&jp=%7B%22vkn%22%3A%22',vkn,'%22%2C%22arsivMi%22%3Afalse%7D');
		var kdvira = getRemote(url);
		var obj =JSON.parse(kdvira);

		$.each(obj.data.raporlar, function(index, satir){

			if (satir.donem==donem) { 

					kayitSayisi=kayitSayisi+1;

//
					var url1= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=kdvKontrolRaporuService_kontolRaporuKilitMekanizmasi&callid=';
					var url1=url1.concat(callid + '112', '&token=', token(), '&jp=%7B%22raporOid%22%3A%22',satir.oid,'%22%2C%22vkn%22%3A%22',satir.vkn,'%22%2C%22donem%22%3A%22',donem,'%22%2C%22raporTuru%22%3A%22',raporTuru,'%22%2C%22raporCinsi%22%3A%22',raporCinsi,'%22%2C%22arsivMi%22%3Afalse%7D);
					var kdvira1 = getRemote(url1);
					var obj1 =JSON.parse(kdvira1);

					var aktarimTarihi=tarihFormat(obj1.data.rapor.aktarimTarihi);
					var gorunmekteOlanKontrolRaporunListelerininPasifBilgisi=obj1.data.gorunmekteOlanKontrolRaporunListelerininPasifBilgisi;
					if (gorunmekteOlanKontrolRaporunListelerininPasifBilgisi="false"){gorunmekteOlanKontrolRaporunListelerininPasifBilgisi="Pasife alınmış";}else{gorunmekteOlanKontrolRaporunListelerininPasifBilgisi="-";}
					var atu=obj1.data.raporBilgileri.atu;
					if(atu==2){atu="ATU";}else{atu="-"}
					kdviraBilgileri= "Var" + "-" +  aktarimTarihi + "-" + gorunmekteOlanKontrolRaporunListelerininPasifBilgisi + "-" + atu ;
					

		}

			});		

	
	if (kayitSayisi>0){

		return kdviraBilgileri;

	}else if (kayitSayisi==0){

		return  ("Yok" + "-" +  "" + "-" + "" + "-" + "") ;
}


	}


	catch(err){

	return ("Hata ile karşılaşıldı - " + err);
	}

}
*/


function iadeDetay(token,vkn,vergikodu,donem,vergiDairesi,iadetakipno){

var callid=makeid(13) + '-';
var kayit=0;
var iadehakdogislem="";				
var beyiadetutar="";
var iadeislemtaleptutar="";
var talepturu="";
var teminattalebi="";

		var url6= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=iadeIzlemeService_iadeTakipIzlemeIadeTalepTutarDetaylari&callid='; 
		var url6=url6.concat(callid + '16', '&token=', token, '&jp=%7B%22input%22%3A%7B%22vkn%22%3A%22',vkn,'%22%2C%22tckn%22%3A%22%22%2C%22vKodu%22%3A%22',vergikodu,'%22%2C%22iadedonemi%22%3A%22',donem,'%22%2C%22vdkodu%22%3A%22',vergiDairesi,'%22%2C%22merkez%22%3A%22%22%7D%7D');
		var liste1 = getRemote(url6);
		var obj2 =JSON.parse(liste1);

			$.each( obj2.data.iadeDetay, function(index, satir1){
		
					if (iadetakipno==satir1.iadetakipno){
		
						 iadehakdogislem=satir1.iadehakdogislem;				
						 beyiadetutar=satir1.beyiadetutar;
						 iadeislemtaleptutar=satir1.iadeislemtaleptutar;
						 talepturu=satir1.talepturu;
						 teminattalebi=satir1.teminattalebi;
						/*var sure=iadeDosyaSure(satir1.iadetakipno,token);
						var sure1=sure.split("-");			
						var vdSure=sure1[0];
						var mukSure=sure1[1];*/
						kayit = kayit + 1;
					}
			});

			if (kayit==0){

				return("" + "-" + "" + "-" + "" + "-" +  "" + "-" + "");
			}else{
		
			return(iadehakdogislem + "-" + beyiadetutar + "-" + iadeislemtaleptutar + "-" +  talepturu + "-" + teminattalebi);
		}

	

	


}


function bildirimZamani9b(token,oid){

var callid=makeid(13) + '-';
try{
		var url6= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=kdvIstisnaBlgService_onayBekleyenIstisnaBlgDetayGoruntule&callid='; 
		var url6=url6.concat(callid + '42', '&token=', token, '&jp=%7B%22oid%22%3A%22',oid,'%22%2C%22turKodu%22%3A%229B%22%7D');
		var liste1 = getRemote(url6);
		var obj2 =JSON.parse(liste1);

		var tarih = tarihFormat(obj2.data.kayit_zamani);

		return tarih ;
			
	}

	catch(err){

		return err;
	}



}


function kdviraKontrol1(vkn,donem) {

	try{
		var myRegex= /[0-9]+/;
		
		
		
		var callid=makeid(13) + '-';
		var kdviraBilgileri="";
		var donem=donem.replace("-","");
		var kayitSayisi=0;
		var url= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=kdvKontrolRaporuService_raporDonemleriGetir&callid=';
		var url=url.concat(callid + '14', '&token=', token(), '&jp=%7B%22vkn%22%3A%22',vkn,'%22%2C%22arsivMi%22%3Afalse%7D');
		var kdvira = getRemote(url);
		var obj =JSON.parse(kdvira);

		$.each(obj.data.raporlar, function(index, satir){

		

			if (satir.donem==donem) { 

					kayitSayisi=kayitSayisi+1;
					var url1= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=kdvKontrolRaporuService_raporVerisiGetir&callid=';
					var url1=url1.concat(callid + '77', '&token=', token(), '&jp=%7B%22raporOid%22%3A%22',satir.oid,'%22%2C%22vkn%22%3A%22',vkn,'%22%2C%22donem%22%3A%22',donem,'%22%2C%22raporTarihi%22%3A%22',satir.raporTarihi,'%22%2C%22raporTuru%22%3A%220%22%2C%22arsivMi%22%3Afalse%2C%22isIntVdSorgusu%22%3A%220%22%7D');
					var kdvira1 = getRemote(url1);
					var obj1 =JSON.parse(kdvira1);

					var aktarimTarihi=tarihFormat(obj1.data.rapor.aktarimTarihi);
					var gorunmekteOlanKontrolRaporunListelerininPasifBilgisi=obj1.data.gorunmekteOlanKontrolRaporunListelerininPasifBilgisi;
					if (gorunmekteOlanKontrolRaporunListelerininPasifBilgisi="false"){gorunmekteOlanKontrolRaporunListelerininPasifBilgisi="Pasife alınmış";}else{gorunmekteOlanKontrolRaporunListelerininPasifBilgisi="-";}
					kdviraBilgileri= "Var" + "-" +  aktarimTarihi + "-" + gorunmekteOlanKontrolRaporunListelerininPasifBilgisi ;
					

		}

			});		

	
	if (kayitSayisi>0){

		return kdviraBilgileri;

	}else if (kayitSayisi==0){

		return  ("Yok" + "-" +  "" + "-" + "" + "-" + "") ;
}


	}


	catch(err){

	return ("Hata ile karşılaşıldı - " + err);
	}

}

function kacinciYuklenimListe(token,vkn,iadeDonem){

	var callid=makeid(13) + '-';
	var url= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=kdvIadeListeleriService_listeDetaylariniGetir&callid=';
	var url=url.concat(callid + '357', '&token=', token, '&jp=%7B%22vkn%22%3A%22',vkn,'%22%2C%22donem%22%3A%22',iadeDonem,'%22%2C%22listeTuru%22%3A%220%22%7D');
	var veri = getRemote(url);
	var obj =JSON.parse(veri);

	var listeOid=obj.data.sonOlusanRaporBilgisi.listeOid;
	var sonKayit=obj.data.listeBilgileri.length-1;
	
	return (sonKayit + "-" + listeOid );

}


function yillikKDVYuklenimGetir(token,vkn,yil){



	var callid=makeid(13) + '-';
    var sdd = new Array();

	$.each(yil, function(index, yil){

		var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=bynIslemleriService_yilKdvBynSorgula&callid='; 
		var url5=url5.concat(callid + '122', '&token=', token, '&jp=%7B%22vkn%22%3A%22',vkn,'%22%2C%22vdKodu%22%3A%22%22%2C%22yil%22%3A%22',yil,'%22%7D');
		var liste = getRemote(url5);
		var obj =JSON.parse(liste);


		  if (obj.data.liste[33].ay1==''){var veri=0;}else{ var veri=obj.data.liste[33].ay1;}
	      if (obj.data.liste[33].ay2==''){var veri1=0;}else{ var veri1=obj.data.liste[33].ay2;}
	      if (obj.data.liste[33].ay3==''){var veri2=0;}else{ var veri2=obj.data.liste[33].ay3;}
	      if (obj.data.liste[33].ay4==''){var veri3=0;}else{ var veri3=obj.data.liste[33].ay4;}
	      if (obj.data.liste[33].ay5==''){var veri4=0;}else{ var veri4=obj.data.liste[33].ay5;}
	      if (obj.data.liste[33].ay6==''){var veri5=0;}else{ var veri5=obj.data.liste[33].ay6;}
	      if (obj.data.liste[33].ay7==''){var veri6=0;}else{ var veri6=obj.data.liste[33].ay7;}
	      if (obj.data.liste[33].ay8==''){var veri7=0;}else{ var veri7=obj.data.liste[33].ay8;}
	      if (obj.data.liste[33].ay9==''){var veri8=0;}else{ var veri8=obj.data.liste[33].ay9;}
	      if (obj.data.liste[33].ay10==''){var veri9=0;}else{ var veri9=obj.data.liste[33].ay10;}
	      if (obj.data.liste[33].ay11==''){var veri10=0;}else{ var veri10=obj.data.liste[33].ay11;}
	      if (obj.data.liste[33].ay12==''){var veri11=0;}else{ var veri11=obj.data.liste[33].ay12;}
	      
	      sdd[yil + "01"] =  parseFloat(veri);
	      sdd[yil + "02"]= parseFloat(veri1);
	      sdd[yil + "03"]= parseFloat(veri2);
	      sdd[yil + "04"] = parseFloat(veri3);
	      sdd[yil + "05"] = parseFloat(veri4);
	      sdd[yil + "06"] = parseFloat(veri5);
	      sdd[yil + "07"] = parseFloat(veri6);
	      sdd[yil + "08"] = parseFloat(veri7);
	      sdd[yil + "09"] = parseFloat(veri8);
	      sdd[yil + "10"] = parseFloat(veri9);
	      sdd[yil + "11"] = parseFloat(veri10);
	      sdd[yil + "12"] = parseFloat(veri11);



	});



return sdd;

}


function tahakkukSorgula(token,vkn,vd,vergiKodu){

try{
var callid=makeid(13) + '-';
var org_id=orgIDGetir(vd);
     

		var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=mhkTahakkukService_tahakkukSorgula&callid='; 
		var url5=url5.concat(callid + '154', '&token=', token, '&jp=%7B%22vkn%22%3A%22',vkn,'%22%2C%22tckn%22%3A%22%22%2C%22vergiKodu%22%3A%22',vergiKodu,'%22%2C%22basDonem%22%3A%22%22%2C%22bitDonem%22%3A%22%22%2C%22orgOid%22%3A%22',org_id,'%22%2C%22durum%22%3A%222%22%7D');
		var liste = getRemote(url5);
		var obj =JSON.parse(liste);

		var tahakkukSayisi=obj.data.length;

	    if (tahakkukSayisi==0) { return "Tahakkuk Yok" ; } else { return "Tahakkuk Var"; }


}

	catch(err){

		return (err);

	}	

}

function tarhiyatSorgula(token,vkn,vd,vergiKodu){

try{
var callid=makeid(13) + '-';
var org_id=orgIDGetir(vd);
     
	
		var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=mhkTarhiyatService_tarhiyatSorgula&callid='; 
		var url5=url5.concat(callid + '19', '&token=', token, '&jp=%7B%22vkn%22%3A%22',vkn,'%22%2C%22tckn%22%3A%22%22%2C%22vergiKodu%22%3A%22',vergiKodu,'%22%2C%22basDonem%22%3A%22%22%2C%22bitDonem%22%3A%22%22%2C%22orgOid%22%3A%22',org_id,'%22%2C%22ihbDurum%22%3A%226%22%7D');
		var liste = getRemote(url5);
		var obj =JSON.parse(liste);


		var tarhiyatSayisi=obj.data.length;

		if (tarhiyatSayisi==0) { return "Tarhiyat Yok" ; } else { return "Tarhiyat Var"; }

}


catch(err){

return (err);

}
}


function updateRowNumbers() {
    const table = document.getElementById("myTable24");
    const rows = table.tBodies[0].rows;
    for (let i = 1; i < rows.length; i++) {
        rows[i].cells[0].innerText = i ;
    }
}

function topluIslemKayitGetir(token){


		var callid=makeid(13) + '-';


		var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=tdiService_topluIslemKayitGetir&callid='; 
		var url5=url5.concat(callid + '174', '&token=', token, '&jp=%7B%22vdKodu%22%3A%22016253%22%2C%22islemCesitNo%22%3A%221%22%7D');
		var liste = getRemote(url5);
		var obj =JSON.parse(liste);
		var veri=obj.data[0].text;
		veri=veri.split("/");
		var yeni=veri[0] + "%2F" +  veri[1]  + "%2F" + veri[2]

		return yeni;


}


function tableToCSV() {
    // CSV verileri için array
    var csvData = [];
    
    // CSV başlık satırı
    var headers = [
        "Sorgu Tarihi",
        "Vergi Dairesi", 
        "VKN",
        "Ünvan",
        "Faal/Terk",
        "Tahsil Güçlüğü",
        "Toplam Borç Tutarı",
        "Toplam Vergi Borcu Aslı Tutarı",
        "Toplam Mahsup",
        "Zamanaşımlı Borç",
        "VD Borç tutarı",
        "VD Mahsup tutarı",
        "İhtisas Borç tutarı",
        "İhtisas Mahsup tutarı",
        "EHaciz Cari Adet",
        "EHaciz Son Tarih",
        "Taşıt Aktif Adet",
        "Taşıt Yakalama",
        "Taşıt Haciz Son Tarih",
        "Ortak Takip Son Tarih",
        "Mal Varlık Son Tarih",
        "Emanet Tutarı",
        "Cari Tahsilat",
        "Cari Tahsilat Son Tarih"
    ];
    
    // Başlıkları CSV'ye ekle
    csvData.push(headers.join(","));
    
    return csvData;
}


function escapeCsvField(field) {
    if (field === null || field === undefined) {
        return "";
    }
    
    field = String(field);
    
    // Virgül, çift tırnak veya satır sonu içeriyorsa çift tırnak ile sar
    if (field.includes(",") || field.includes('"') || field.includes("\n")) {
        // İçerideki çift tırnakları iki katına çıkar
        field = field.replace(/"/g, '""');
        field = '"' + field + '"';
    }
    
    return field;
}


function downloadCSV(csvContent, filename) {
    // BOM (Byte Order Mark) ekle - Türkçe karakterler için
    var BOM = "\uFEFF";
    var csvData = BOM + csvContent;
    
    // Blob oluştur
    var blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    
    // Download linki oluştur
    var link = document.createElement("a");
    if (link.download !== undefined) {
        var url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", filename);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}


function exportTableToCSV(tableId, filename) {
    var csv = [];
    var table = document.getElementById(tableId);
    var rows = table.querySelectorAll("tr");
    
    for (var i = 0; i < rows.length; i++) {
        var row = [];
        var cols = rows[i].querySelectorAll("td, th");
        
        for (var j = 0; j < cols.length; j++) {
            var cellText = cols[j].innerText || cols[j].textContent || "";
            // CSV için escape et
            if (cellText.includes(",") || cellText.includes('"') || cellText.includes("\n")) {
                cellText = cellText.replace(/"/g, '""');
                cellText = '"' + cellText + '"';
            }
            row.push(cellText);
        }
        
        csv.push(row.join(","));
    }
    
    // CSV'yi indir
    downloadCSV(csv.join("\n"), filename);
}


function malvarligiSorgulama(token,vkn,vd){

try{
		var callid=makeid(13) + '-';

		var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=malVarligiService_mhkTumMalVarligiBilgileriPdfGetir&callid='; 
		var url5=url5.concat(callid + '23', '&token=', token, '&jp=%7B%22tckn%22%3A%22%22%2C%22vkn%22%3A%22',vkn,'%22%2C%22unvan%22%3A%22%22%2C%22basTar%22%3A%2220230811%22%2C%22bitTar%22%3A%222200-01-01%22%2C%22mukellefVdKodu%22%3A%22',vd,'%22%7D');
		var liste = getRemote(url5);
		var obj =JSON.parse(liste);

		var kayitSayisi=obj.data.malVarligiJSONArray.length;

		if (kayitSayisi>0) { 

		return tarihFormat3((obj.data.malVarligiJSONArray[(kayitSayisi-1)].optime).substr(0,8)); 

		}else{ 

		return "";

		}


}


catch(err){

return "Hata";

}


}


function borcDurumuGetir(vkn,token,tabloID,vadeTar1,vadeTar2){


	
	var callid=makeid(13) + '-';
	var vadesiGecmis=0;
//	var orgID=orgIDGetir(vdkodu);
    var vd_listesi= hangiVD4(vkn,token);
	

	$('#tablo'+ tabloID).after('<table id="myTable702" border=1> <caption>Borç Durumu Sorgulama</caption><tr><th>VD</th><th>Vergi Borcu Aslı</th><th>Gecikme Zammı</th><th>Toplam Ödenmesi Gereken</th><th>Vadesi Gelmemiş</th><th></th></tr></table>');


		$.each(vd_listesi, function(index, vd){
			 
			var url= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=borcService_borcBilgileriGetir&callid=';
			var url=url.concat(callid + '120', '&token=', token, '&jp=%7B%22input%22%3A%7B%22vkn%22%3A%22',vkn,'%22%2C%22tckn%22%3A%22%22%2C%22vdKodu%22%3A%22',vd,'%22%2C%22anaVergiKodu%22%3A%22%22%2C%22vergiKodu%22%3A%22%22%2C%22vergilendirmeDonemiBas%22%3A%22%22%2C%22vergilendirmeDonemiBit%22%3A%22%22%2C%22vadeBasTarih%22%3A%22',vadeTar1,'%22%2C%22vadeBitTarih%22%3A%22',vadeTar2,'%22%2C%22satirlar%22%3A%22447%22%2C%22detayliOzet%22%3A%222%22%7D%7D');
			var borc = getRemote(url);
			var obj =JSON.parse(borc);
	
			if (obj.data.aVadesiGecmis!=undefined){ 
	
			 		$("#myTable702 tr:last").after( "<tr><td>" + vd  + "</td><td>" + tlCevir(obj.data.aVadesiGecmis)  + "</td><td>" + tlCevir(obj.data.kOdenmesiGerekenToplamGecikmeZammi)  + "</td><td>" + tlCevir(obj.data.mVadesiGecmisBugunOdenmesiGerekenTop)  + "</td><td>" + tlCevir(obj.data.bVadesiGelmemis)  + "</td><td><a href='diger_borc_detay_getir.html?vkn=" + vkn + "&token=" + token + "' target='_blank'>Borç detayı için tıklayınız</a></td></tr>");


			}

			
		});


}



function tlCevir(veri){

if (veri!="" || veri!="-" ){

	return ((Number(veri)).toLocaleString("tr-TR"));

}else{

	return 0;

}

}


function mahsupKalanTutarSorgulama(token,vkn,vd,dosyaNo){

try{
var callid=makeid(13) + '-';

//

	var url6= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=iadeMahsupService_iadeMahsupSorgulamaDetay&callid='; 
   
	var url6=url6.concat(callid + '159', '&token=', token , '&jp=%7B%22vkn%22%3A%22',vkn,'%22%2C%22vdKodu%22%3A%22',vd,'%22%2C%22iadeDosyaNo%22%3A%22',dosyaNo,'%22%2C%22dilekceTipi%22%3A%22%22%2C%22donem%22%3A%22%22%2C%22vKodu%22%3A%22%22%2C%22iadeSatir%22%3A%22%22%7D');
		

	var liste1 = getRemote(url6);
	var obj1 =JSON.parse(liste1);	
	
	var kalanTutar=obj1.data.genelbilgiler[0].emanetkalantutar;


	return kalanTutar;
	

}

catch(err){

console.log(err);

return "Hata ile karşılaşıldı";

}

}

function tecilEdilenTutar(token,vkn,vd,tecilDosyaNo){

try{
var callid=makeid(13) + '-';

var tecilDilekceNo="";

var tecilDilekceTarihi="";

var orgID=orgIDGetir(vd);

	var url6= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=mhkTecilService_tecilDetayGetir&callid='; 
	var url6=url6.concat(callid + '45', '&token=', token , '&jp=%7B%22input%22%3A%7B%22tecilDosyaNo%22%3A%22',tecilDosyaNo,'%22%2C%22tecilDilekceNo%22%3A%22',tecilDilekceNo,'%22%2C%22tecilDilekceTarihi%22%3A%22',tecilDilekceTarihi,'%22%2C%22tecildenKaldirmaTarihi%22%3A%22%22%2C%22tecildenKaldirmaNedeni%22%3A%22Aktif%22%2C%22ortakVkn%22%3A%22%22%2C%22ortakTckn%22%3A%22%22%2C%22plakano%22%3A%22%22%2C%22tecilTuru%22%3A%226183%2F48%20Tecil%22%2C%22vdKodu%22%3A%22',vd,'%22%2C%22orgOid%22%3A%22',orgID,'%22%2C%22tecilTipi%22%3A%22%22%7D%7D');
	var liste1 = getRemote(url6);
	var obj1 =JSON.parse(liste1);	
	
	var tecilToplamVab=obj1.data.tecilToplamVab;
	var tecilToplamGz= obj1.data.tecilToplamGz;
	var tecilOdenenToplamVab=obj1.data.tecilOdenenToplamVab;
	var tecilOdenenToplamGz=obj1.data.tecilOdenenToplamGz;
	var tecilOdenenToplamTecilFaizi=obj1.data.tecilOdenenToplamTecilFaizi;


	return (tecilToplamVab + "-" + tecilToplamGz + "-" + tecilOdenenToplamVab + "-" + tecilOdenenToplamGz + "-" + tecilOdenenToplamTecilFaizi ) ;
	

}

	catch(err){

	console.log(err);

	return "Hata ile karşılaşıldı";
	}

}


function tahakkukTahsilat(token,vkn,vd,thkFisNo){

try{

var callid=makeid(13) + '-';

var orgID=orgIDGetir(vd);
var toplamOdenen=0;
var odemeBelgeNo="";
	var url6= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=mhkTahakkukService_tahakkukOPSSorgula&callid='; 
	var url6=url6.concat(callid + '143', '&token=', token , '&jp=%7B%22orgOid%22%3A%22',orgID,'%22%2C%22thkFisNo%22%3A%22',thkFisNo,'%22%7D');
	var liste1 = getRemote(url6);
	var obj1 =JSON.parse(liste1);	

	
	$.each(obj1.data, function(index, satir){

	toplamOdenen = toplamOdenen + satir.odenen;
	odemeBelgeNo =satir.odemeBelgeNo;


	});
	


	return (odemeBelgeNo + "-" + tlCevir(toplamOdenen) ) ;
	

}

	catch(err){

	console.log(err);

	return "Hata-Hata";
	}

}



function tahsilatSekli(veri) {

var liste={
"0": "Vezne",
"1": "Banka",
"4": "Başka Saymanlık Tarafından",
"8": "Hacizli Malların Satışı",
"16": "Tahsildar/İcra Memuru",
"32": "Manuel",
"64": "Mahsuben"
}

return liste[veri];

}


function emanetTuru(veri) {

var liste={
"17": "17 Ticaret Sicil Paylarından Oda Payları",
"18": "18 Esnaf ve Sanatkarlar Sicil Harçlarından Oda Payları",
"21": "21 Diğer Resmi Daire ve Kurumlara Ait Tahsilatlar",
"22": "22 Ölen Kimselere Ait Paralar",
"23": "23 Hacizli Mallar Satışından Artan Paralar",
"24": "24 2978 Sayılı Kanun Gereği Yapılacak Vergi İadeleri",
"25": "25 3065 Sayılı Kanun Gereği Yapılacak KDV İadesi",
"26": "26 Vergi Gelirlerinden Yapılacak İadeler",
"27": "27 İhracat İstisnasından Alınan KDV",
"28": "28 Özel Gider İndiriminden Emanet",
"29": "29 Vergi Dışı Gelirlerden Yapılacak İadeler",
"30": "30 4915 Sayılı Kanun Uyarınca Tahsil Edilen Tutarlardan Emanetler",
"31": "31 Bütçe Gelirlerinden Yersiz Tahsilat",
"32": "32 Diğer Fazla ve Yersiz Tahsilat",
"33": "33 Kişilere Ait Diğer Emanetler",
"34": "34 Niteliği Belli Olmayan Paralar",
"39": "39 Diğer Çeşitli Emanetler",
"42": "42 4811 Sayılı Kanun Uyarınca Yapılan Kesinlenmiş Kamu Al. Tahsilat",
"43": "43 Geçici Teminatlar",
"44": "44 Vergi Teminatları",
"45": "45 Akaryakıt Dışındaki Maddelerin İthalinde Sağlanan Fonlar",
"46": "46 Fonlar Adına Yapılan Diğer Kesintiler",
"47": "47 Şeker Fiyat Farkları",
"48": "48 Akaryakıt Fiyat Farkları",
"49": "49 Yiyecek Bedelleri",
"50": "50 Kur Farkları",
"51": "51 Yüksek Öğretim Kredi Borçları",
"52": "52 Yüksek Öğretim Harç Kredisi Borcu",
"53": "53 İhracatta Vergi İadesi",
"54": "54 Destekleme Ve Fiyat İstikrar Fonu",
"55": "55 3516 Sayılı Ölçüler Ve Ayarlar K.Göre Kes.İd.Para Cezaları",
"56": "56 Resmi Arabuluculuk Ücreti",
"57": "57 2634 S.K.Göre Kes.Para Cezaları",
"58": "58 3984 S.K.Göre Tahsil Ed.Reklam Gel.",
"59": "59 2547 sayılı Kanunun 46.Maddesine Göre Öğr.Al.Cari Hizmet Katkı Payları",
"60": "60 4054 saylı Rekabetin Korunması Hak.Kan.Ver.Para Cezaları",
"61": "61 Küçük ve Ortaboy işletmelere KDV Desteği",
"62": "62 Kaldırılan Özel Tahakkuk Artıkları",
"63": "63 Diğer Özel Tahakkuklar",
"64": "64 Sporda Şiddetin Önlenmesine İlişkin İdari Para Cezaları",
"65": "65 406 ve 2813 S. K. Ger. Tahsil Edilen İd. Para C.",
"66": "66 4857 Sayılı Kanunun 101 Maddesi  Uyarınca Kesilen İdari Para Cezaları",
"67": "67 Kapatılamayan Gönderme Emirleri",
"68": "68 Enerji Piyasasi Düzenleme Kurumu Analiz Bedelleri",
"69": "69 4447 sayılı İşsizlik Sigortası Kanunu Uyarınca Kesilen İdari Para Cezaları",
"70": "70 4904 sayılı İş Kurumu Kanunu Uyarınca Kesilen İdari Para Cezaları",
"71": "71 2762 Sayılı Kanuna Göre Alınan Taviz Bedelleri",
"72": "72 Kılavuzluk ve Romörkoj Hizmet Gelirleri",
"73": "73 Madenlerden Alınan Devlet Hakkının %30 Fazlaları (Orman Genel Müd.)",
"74": "74 Madenlerden Alınan Devlet Hakkından %50 İl Özel İdare Payı",
"75": "75 Enerji Piyasası Düzenleme Kurumu Petrol Katılım Payı",
"76": "76 Yabancı Devletlere Ait Vergi Tahsilatları",
"77": "77 Yerli ve Yabancı Film Gösterimler Bilet Bedellerinden Emanetler",
"78": "78 Savunma Sanayi Destekleme Fonu Katılım Payı(3238 S.K.13/2 Maddesi Uyarınca Alınan)",
"79": "79 Savunma Sanayi Destekleme Fonu Katılım Payı(1473 S.K. 4.Maddesi Uyarınca 6183 S.K. Göre Alınan %10 Fazlası ile Birlikte)",
"80": "80 3359 Say.Kan.Göre Tahsil Edilecek Fatura Bedelleri",
"81": "81 6001 S.K. Karayolları Kaçak Geçiş Ücretleri",
"82": "82 Suriye Uyruklulara Ait Taşınır ve Taşınmaz Mal Gelirleri",
"83": "83 Madenlerden Alınan Devlet Hak.dan %25 Köylere Hiz.Götürme Bir. Payı",
"84": "84 Kamu İhale Kurumu Gelirleri Tahsilatı",
"85": "85 3039 S. Çeltik Ekimi Kanunu Uyarınca Tahsil Edilen İdari Para Cezaları",
"86": "86 Bilgi Tek. Ve İletişim Kur.Adına Tahsil Ed.İdari Para Cez.",
"87": "87 Tarım Satış Koop.Birlik.Des.Fiy.İstk.Fonu Kayn.Alacak",
"88": "88 DSİ Genel Müdürlüğünün 6111 S.K. Alacak Tahsilatı",
"89": "89 Zirai Ürünlerden Borsada Yapılan Tevkifatlardan Emanete Alınanlar",
"90": "90 Eximbank AlacaklarÕ (Gel.Des.Fon.Tasfiyesi Irak AlacaklarÕ )",
"91": "91 5809 sayılı Elektronik Haberleşme Kanunu Kullanım Hakkı Ücretleri",
"92": "92 Bireysel Emeklilik Sistemi Kapsamında Yapılacak İadeler",
"93": "93 5809 S.K Gereğince B.T.K Adına Tahsil Edilen İdari Ücret",
"97": "97 ÇIPC Dönüşüm Gelirleri ve Karayolları Payı",
"98": "98 ÇKP Dön.Gel.",
"99": "99 Diğer Özel Tahakkuklardan Emanete Alınanlar",
"100": "100 2863 S.K. Taşınmaz Kültür Varlıklarının Korunmasına Ait Katkı Payı",
"101": "101 ÖTV Kanunu Eki (B) Cetvelindeki Mallar İçin Alınan Nakit Teminatlar",
"102": "102 GSM işletmecileri bürüt satışlarının %15 hazine payının %90ı",
"103": "Serbest Bölge Gelirleri",
"104": "104 VUK 153/A Maddesi Kapsamındaki Teminatlar",
"105": "105 GVK Mükerrer Madde 121 Vergiye Uyumlu Mükelleflere Vergi Indirimi",
"106": "106 İkale ve Karşılıklı Sonlandırma Sözleşmesi G. Stopaj İadesi",
"107": "107 İkale ve Karşılıklı Sonlandırma Sözleşmesi G. Stopaj İadesi Mahsup",
"108": "108 7183 sayılı Kanun Gereğince Ajanslara Aktarılacak Turizm Payı",
"109": "109 5809 S. K. Gereğince B.T.K. Adına Tahsil Edilen İdari Ücret",
"110": "110 2918 s.Karayolları Trafik Kanununun131 inci Md.Göre Aktarılmayan Paylar",
"111": "111 VUK 160/A Maddesi Kapsamındaki Teminatlar",
"112": "112 6306 S. Kanun Gereğince Belediyelerden Al. Çevre Katkı Payı",
"113": "113 VUKGT/531 5. Madde Kapsamındaki Teminatlar",
"114": "114 VUKGT/531 6. Madde Kapsamındaki Teminatlar",
"115": "115 5846 sayılı Fikir ve Sanat Eserleri Kanununun 44 üncü Maddesi Gereğince Elde Edilen Gelirler",
"116": "116 Tarımsal Destek Ödemesi Vergi Kesintisi İadeleri",
"117": "117 Diğer Kurumlar Adına Takip Edilen Kişilerden Alacaklar",
"118": "118 ÖTV (II) sayılı Liste Kapsamında Araç Ticareti Teminatı",
"119": "119 TERRA 2A KREDİSİ CEZAİ FAİZİ 6183 Sayılı Kanuna Göre Tahsil Edilen Diğer Tutarlar",
"120": "120 TERRA 2A KREDİSİ GECİKME ZAMMI 6183 Sayılı Kanuna Göre Tahsil Edilen Diğer Tutarlar",
"121": "121 Maden Arama Ruhsat Bedeli",
"122": "122 Maden İşletme Ruhsat Bedeli (Çevre Uyum Masraf Karşılıkları %30 Teminat İçin Alınan)",
"123": "123 Maden İşletme Ruhsat Bedeli (Çevre Uyum Masraf Karşılıkları %20 Kurum Geliri)",
"124": "124 Elektrik Piyasa Lisans Bedeli",
"125": "125 DoÄal Gaz Piyasası Lisans Bedeli",
"126": "126 DoÄal Gaz Piyasası Katılma Payı",
"127": "127 Ecrimisil Gelirleri (Gençlik ve Spor Bakanlığı)",
"128": "128 SGK KOSGEB Destek Ödeme Emanetleri",


}

if (liste[veri]==undefined){ return veri; } else { return (liste[veri]); } 

}




function tasitHacizDurum(veri) {

var liste={
"3": "HACİZ",
"35": "YAKALAMA",
"50": "SATIŞ ARZ",
"49": "KESİN SATIŞ",
}

return liste[veri];

}


function takdiyatDurum(veri) {

var liste={
"7": "MÜLKİYETLİ (M)",
"8": "REHİNLİ (R)",
"18": "HACİZLİ YAKALAMALI",
"41": "İHTİYATİ TEDBİR-2",
"4": "İH.TEDBİR (T)",
"3": "HACİZLİ",
"43": "İHTİYACİ HACİZ",
"35": "YAKALAMA",
"50": "SATIŞ ARZ",
"49": "KESİN SATIŞ",
"2": "DİĞER(D)"
}

if (liste[veri]==undefined){ return veri; } else { return (liste[veri]); } 


}


function ozesGirisNedeni(veri){

     var girisNedeni = {'001':'001 - Sahte Belge Düzenleme Raporu' ,
		      '002':'002 - Muhteviyatı İtibariyle Yanıltıcı Belge Düzenleme Raporu', 
		      '003':'003 - Sahte Belge Kullanma Raporu',
		      '004':'004 - Muhteviyatı İtibariyle Yanıltıcı Belge Kullanma Raporu',
		      '010':'010 - Sahte Belge Düzenleme Tespiti',
		      '011':'011 - Muhteviyatı itibariyle yanıltıcı Belge Düzenleme Tespiti',
		      '012':'012 - Sahte Belge Kullanma Tespiti',
		      '013':'013 - Muhteviyatı itibariyle yanıltıcı Belge Kullanma Tespiti',
		      '014':'014 - Adreste Bulunamama',
		      '015':'015 - Defter Belge İbraz Etmeme',
		      '016':'016 - İhtiyati Tahakkuk İhtiyati Haciz',
		      '017':'017 - Hakkında Olumsuz Rapor Bulunanlardan Mal ve Hizmet Alanlar',
		      '018':'018 - Hakkında Olumsuz Tespit  Bulunanlardan Mal ve Hizmet Alanlar',
		      '153':'153 - 153/A Kapsamında Sahte Belge Düzenleme Raporu',
		      '001.012' :'001.012 - Sahte Belge Kullanma Tespiti',
		      '153.012' : '153.012 - Sahte Belge Kullanma Tespiti',
		      '153.010' : '153.010 - Sahte Belge Düzenleme Tespiti',
		      '153.050' : '153.050 - 153A Kapsamında bulunan Mükellefin Ortağı',
		      '153.060.090' : '153.060.090 - 153A Kapsamında bulunan Mükellefin Kanuni Temsilcisinin Kanuni Temsilcisi Olduğu Şirket/İşletme',
			  '153.015' : '153.015-Defter Belge İbraz Etmeme',
			  '153.050.070':'153.050.070-Ortağının Ortak Olduğu Şirket/İşletme',
			  '010.050.070':'010.050.070-Ortağının Ortak Olduğu Şirket/İşletme'
};
  
if (girisNedeni[veri]==undefined){ return veri; } else { return (girisNedeni[veri]); } 

}



function ozesTabloGetir(tokenlink,vkn,tabloID='22') {

	
try{
	var callid=makeid(13) + '-';
	
$('#tablo'+ tabloID).after('<table id="myTable" border=1><caption>Mükellef Sicil Bilgilerine Göre Olumsuz Rapor / Olumsuz Tespit Sorgu Ekranı</caption><th>TESPİT TÜRÜ</th><th>İNCELEME DÖNEMİ</th><th>VİR TARİH/SAYI</th><th>GELİŞ TARİHİ</th><th>Diğer Açıklama</th></table>');

	var url= 'http://10.251.63.99/ozes_server/dispatch?cmd=ozesOlumsuzTespitService_mukellefSorgulamaSonucListesiGetirDurumMain&callid=';
	var url=url.concat(callid + '122', '&token=', tokenlink, '&jp=%7B%22mukVkn%22%3A%22',vkn,'%22%2C%22mukTckn%22%3A%22%22%2C%22durum%22%3A%222050%22%7D');
	var olumsuzluk = getRemote(url);
	var obj =JSON.parse(olumsuzluk);
	
	if (obj.data.listBir=="visible"){

			var url1= 'http://10.251.63.99/ozes_server/dispatch?cmd=ozesOlumsuzTespitService_olumsuzTespitDetayGetir&callid=';
			var url1=url1.concat(callid + '124', '&token=', tokenlink, '&jp=%7B%22mukVkn%22%3A%22',vkn,'%22%2C%22mukTckn%22%3A%22%22%2C%22durum%22%3A%222050%22%2C%22listName%22%3A%22listBir%22%7D');
			var liste1 = getRemote(url1);
			var obj1 =JSON.parse(liste1);

			$.each(obj1.data, function(index1, satir){



			$('#myTable tr:last').after( '<tr><td>' + ozesGirisNedeni(satir.tespitTuru)+ '</td><td>' + satir.incelemeDonemi  + '</td><td>' + tarihFormat(satir.raporTarihi) + "//" + satir.raporSayisi   + '</td><td>' + tarihFormat(satir.intikalTarihi) + '</td><td></td></tr>');

			});


		}

	if (obj.data.listIki=="visible"){

			var url1= 'http://10.251.63.99/ozes_server/dispatch?cmd=ozesOlumsuzTespitService_olumsuzTespitDetayGetir&callid=';
			var url1=url1.concat(callid + '124', '&token=', tokenlink, '&jp=%7B%22mukVkn%22%3A%22',vkn,'%22%2C%22mukTckn%22%3A%22%22%2C%22durum%22%3A%222050%22%2C%22listName%22%3A%22listIki%22%7D');
			var liste1 = getRemote(url1);
			var obj1 =JSON.parse(liste1);



			$.each(obj1.data, function(index1, satir){



			$('#myTable tr:last').after( '<tr><td>' + ozesGirisNedeni(satir.tespitTuru)+ '</td><td>' + satir.incelemeDonemi  + '</td><td>' + tarihFormat(satir.raporTarihi) + "//" + satir.raporSayisi   + '</td><td>' + tarihFormat(satir.intikalTarihi) + '</td><td> Dayanak Firma :' + satir.vkn  + "-" + satir.unvan + "-" + satir.vd + '</td></tr>');

			});


		}

	if (obj.data.listUc=="visible"){

			var url1= 'http://10.251.63.99/ozes_server/dispatch?cmd=ozesOlumsuzTespitService_olumsuzTespitDetayGetir&callid=';
			var url1=url1.concat(callid + '124', '&token=', tokenlink, '&jp=%7B%22mukVkn%22%3A%22',vkn,'%22%2C%22mukTckn%22%3A%22%22%2C%22durum%22%3A%222050%22%2C%22listName%22%3A%22listUc%22%7D');
			var liste1 = getRemote(url1);
			var obj1 =JSON.parse(liste1);

			$.each(obj1.data, function(index1, satir){



			$('#myTable tr:last').after( '<tr><td>' + ozesGirisNedeni(satir.tespitTuru)+ '</td><td>' + satir.incelemeDonemi  + '</td><td>' + tarihFormat(satir.raporTarihi) + "//" + satir.raporSayisi   + '</td><td>' + tarihFormat(satir.intikalTarihi) + '</td><td></td></tr>');

			});


		}
		    
	if (obj.data.listDort=="visible"){

			var url1= 'http://10.251.63.99/ozes_server/dispatch?cmd=ozesOlumsuzTespitService_olumsuzTespitDetayGetir&callid=';
			var url1=url1.concat(callid + '124', '&token=', tokenlink, '&jp=%7B%22mukVkn%22%3A%22',vkn,'%22%2C%22mukTckn%22%3A%22%22%2C%22durum%22%3A%222050%22%2C%22listName%22%3A%22listDort%22%7D');
			var liste1 = getRemote(url1);
			var obj1 =JSON.parse(liste1);

			$.each(obj1.data, function(index1, satir){



			$('#myTable tr:last').after( '<tr><td>' + ozesGirisNedeni(satir.tespitTuru)+ '</td><td>' + satir.incelemeDonemi  + '</td><td>' + tarihFormat(satir.raporTarihi) + "//" + satir.raporSayisi   + '</td><td>' + tarihFormat(satir.intikalTarihi) + '</td><td></td></tr>');

			});


		}

	if (obj.data.listBes=="visible"){

			var url1= 'http://10.251.63.99/ozes_server/dispatch?cmd=ozesOlumsuzTespitService_olumsuzTespitDetayGetir&callid=';
			var url1=url1.concat(callid + '124', '&token=', tokenlink, '&jp=%7B%22mukVkn%22%3A%22',vkn,'%22%2C%22mukTckn%22%3A%22%22%2C%22durum%22%3A%222050%22%2C%22listName%22%3A%22listBes%22%7D');
			var liste1 = getRemote(url1);
			var obj1 =JSON.parse(liste1);

			$.each(obj1.data, function(index1, satir){



			$('#myTable tr:last').after( '<tr><td>' + ozesGirisNedeni(satir.tespitTuru)+ '</td><td>' + satir.incelemeDonemi  + '</td><td>' + tarihFormat(satir.raporTarihi) + "//" + satir.raporSayisi   + '</td><td>' + tarihFormat(satir.intikalTarihi) + '</td><td></td></tr>');

			});


		}

	if (obj.data.listAlti=="visible"){

			var url1= 'http://10.251.63.99/ozes_server/dispatch?cmd=ozesOlumsuzTespitService_olumsuzTespitDetayGetir&callid=';
			var url1=url1.concat(callid + '124', '&token=', tokenlink, '&jp=%7B%22mukVkn%22%3A%22',vkn,'%22%2C%22mukTckn%22%3A%22%22%2C%22durum%22%3A%222050%22%2C%22listName%22%3A%22listAlti%22%7D');
			var liste1 = getRemote(url1);
			var obj1 =JSON.parse(liste1);

			$.each(obj1.data, function(index1, satir){



			$('#myTable tr:last').after( '<tr><td>' + ozesGirisNedeni(satir.tespitTuru)+ '</td><td>' + satir.incelemeDonemi  + '</td><td>' + tarihFormat(satir.raporTarihi) + "//" + satir.raporSayisi   + '</td><td>' + tarihFormat(satir.intikalTarihi) + '</td><td></td></tr>');

			});


		}

	if (obj.data.listYedi=="visible"){

			var url1= 'http://10.251.63.99/ozes_server/dispatch?cmd=ozesOlumsuzTespitService_olumsuzTespitDetayGetir&callid=';
			var url1=url1.concat(callid + '124', '&token=', tokenlink, '&jp=%7B%22mukVkn%22%3A%22',vkn,'%22%2C%22mukTckn%22%3A%22%22%2C%22durum%22%3A%222050%22%2C%22listName%22%3A%22listYedi%22%7D');
			var liste1 = getRemote(url1);
			var obj1 =JSON.parse(liste1);

			$.each(obj1.data, function(index1, satir){



			$('#myTable tr:last').after( '<tr><td>' + ozesGirisNedeni(satir.tespitTuru)+ '</td><td>' + satir.incelemeDonemi  + '</td><td>' + tarihFormat(satir.raporTarihi) + "//" + satir.raporSayisi   + '</td><td>' + tarihFormat(satir.intikalTarihi) + '</td><td></td></tr>');

			});


		}

	if (obj.data.listSekiz=="visible"){

			var url1= 'http://10.251.63.99/ozes_server/dispatch?cmd=ozesOlumsuzTespitService_olumsuzTespitDetayGetir&callid=';
			var url1=url1.concat(callid + '124', '&token=', tokenlink, '&jp=%7B%22mukVkn%22%3A%22',vkn,'%22%2C%22mukTckn%22%3A%22%22%2C%22durum%22%3A%222050%22%2C%22listName%22%3A%22listSekiz%22%7D');
			var liste1 = getRemote(url1);
			var obj1 =JSON.parse(liste1);

			$.each(obj1.data, function(index1, satir){



			$('#myTable tr:last').after( '<tr><td>' + ozesGirisNedeni(satir.tespitTuru)+ '</td><td>' + satir.incelemeDonemi  + '</td><td>' + tarihFormat(satir.raporTarihi) + "//" + satir.raporSayisi   + '</td><td>' + tarihFormat(satir.intikalTarihi) + '</td><td></td></tr>');

			});


		}

if (obj.data.listDokuz=="visible"){

			var url1= 'http://10.251.63.99/ozes_server/dispatch?cmd=ozesOlumsuzTespitService_olumsuzTespitDetayGetir&callid=';
			var url1=url1.concat(callid + '124', '&token=', tokenlink, '&jp=%7B%22mukVkn%22%3A%22',vkn,'%22%2C%22mukTckn%22%3A%22%22%2C%22durum%22%3A%222050%22%2C%22listName%22%3A%22listDokuz%22%7D');
			var liste1 = getRemote(url1);
			var obj1 =JSON.parse(liste1);

			$.each(obj1.data, function(index1, satir){



			$('#myTable tr:last').after( '<tr><td>' + ozesGirisNedeni(satir.tespitTuru)+ '</td><td>' + satir.incelemeDonemi  + '</td><td>' + tarihFormat(satir.raporTarihi) + "//" + satir.raporSayisi   + '</td><td>' + tarihFormat(satir.intikalTarihi) + '</td><td></td></tr>');

			});


		}
	
	
	if (obj.data.listOn=="visible"){

			var url1= 'http://10.251.63.99/ozes_server/dispatch?cmd=ozesOlumsuzTespitService_olumsuzTespitDetayGetir&callid=';
			var url1=url1.concat(callid + '124', '&token=', tokenlink, '&jp=%7B%22mukVkn%22%3A%22',vkn,'%22%2C%22mukTckn%22%3A%22%22%2C%22durum%22%3A%222050%22%2C%22listName%22%3A%22listOn%22%7D');
			var liste1 = getRemote(url1);
			var obj1 =JSON.parse(liste1);

			$.each(obj1.data, function(index1, satir){



			$('#myTable tr:last').after( '<tr><td>' + ozesGirisNedeni(satir.tespitTuru)+ '</td><td>' + satir.incelemeDonemi  + '</td><td>' + tarihFormat(satir.raporTarihi) + "//" + satir.raporSayisi   + '</td><td>' + tarihFormat(satir.intikalTarihi) + '</td><td></td></tr>');

			});


		}


if (obj.data.listOnbir=="visible"){

			var url1= 'http://10.251.63.99/ozes_server/dispatch?cmd=ozesOlumsuzTespitService_olumsuzTespitDetayGetir&callid=';
			var url1=url1.concat(callid + '124', '&token=', tokenlink, '&jp=%7B%22mukVkn%22%3A%22',vkn,'%22%2C%22mukTckn%22%3A%22%22%2C%22durum%22%3A%222050%22%2C%22listName%22%3A%22listOnbir%22%7D');
			var liste1 = getRemote(url1);
			var obj1 =JSON.parse(liste1);

			$.each(obj1.data, function(index1, satir){



			$('#myTable tr:last').after( '<tr><td>' + ozesGirisNedeni(satir.tespitTuru)+ '</td><td>' + satir.incelemeDonemi  + '</td><td>' + tarihFormat(satir.raporTarihi) + "//" + satir.raporSayisi   + '</td><td>' + tarihFormat(satir.intikalTarihi) + '</td><td></td></tr>');

			});


		}

if (obj.data.listOniki=="visible"){

			var url1= 'http://10.251.63.99/ozes_server/dispatch?cmd=ozesOlumsuzTespitService_olumsuzTespitDetayGetir&callid=';
			var url1=url1.concat(callid + '124', '&token=', tokenlink, '&jp=%7B%22mukVkn%22%3A%22',vkn,'%22%2C%22mukTckn%22%3A%22%22%2C%22durum%22%3A%222050%22%2C%22listName%22%3A%22listOniki%22%7D');
			var liste1 = getRemote(url1);
			var obj1 =JSON.parse(liste1);

			$.each(obj1.data, function(index1, satir){



			$('#myTable tr:last').after( '<tr><td>' + ozesGirisNedeni(satir.tespitTuru)+ '</td><td>' + satir.incelemeDonemi  + '</td><td>' + tarihFormat(satir.raporTarihi) + "//" + satir.raporSayisi   + '</td><td>' + tarihFormat(satir.intikalTarihi) + '</td><td></td></tr>');

			});


		}
	
if (obj.data.listOnuc=="visible"){

			var url1= 'http://10.251.63.99/ozes_server/dispatch?cmd=ozesOlumsuzTespitService_olumsuzTespitDetayGetir&callid=';
			var url1=url1.concat(callid + '124', '&token=', tokenlink, '&jp=%7B%22mukVkn%22%3A%22',vkn,'%22%2C%22mukTckn%22%3A%22%22%2C%22durum%22%3A%222050%22%2C%22listName%22%3A%22listOnuc%22%7D');
			var liste1 = getRemote(url1);
			var obj1 =JSON.parse(liste1);

			$.each(obj1.data, function(index1, satir){



			$('#myTable tr:last').after( '<tr><td>' + ozesGirisNedeni(satir.tespitTuru) + '</td><td>' + satir.incelemeDonemi  + '</td><td>' + tarihFormat(satir.raporTarihi) + "//" + satir.raporSayisi   + '</td><td>' + tarihFormat(satir.intikalTarihi) + '</td><td></td></tr>');

			});


		}

	
}

catch(err){

console.log(err);
}	
	
	}


function getPreviousDayShort(date = new Date()) {
  const prev = new Date(date);
  prev.setDate(prev.getDate() - 1);
  return prev.toISOString().split('T')[0].replace(/-/g,'');
}

function getPreviousDayShort2(date = new Date()) {
  const prev = new Date(date);
  prev.setDate(prev.getDate() - 2);
  return prev.toISOString().split('T')[0].replace(/-/g,'');
}



   // ✅ Memory Management - Bellek sızıntılarını önleme
   function cleanupResources() {
       try {
           // Event delegation listener'ları temizle
           $(document).off('click', '[id^="go"]');
           $(document).off('click', '[data-action]');
           $(document).off('click', '.modal-actions button');
           
           // Eski event listener'ları temizle (geriye uyumluluk için)
           $(document).off('click.customHandler');
           
           // Global değişkenleri temizle
           if (typeof currentModalData !== 'undefined') {
               currentModalData = null;
           }
           
           // Cache'i temizle (eğer CacheManager varsa)
           if (typeof CacheManager !== 'undefined' && CacheManager.clear) {
               CacheManager.clear();
           }
           
           // Modal buton bayraklarını temizle
           if (typeof modalButtonsRunning !== 'undefined') {
               Object.keys(modalButtonsRunning).forEach(key => {
                   modalButtonsRunning[key] = false;
               });
           }
           
           // Global modal işlem bayrağını temizle
           if (typeof globalModalProcessing !== 'undefined') {
               globalModalProcessing = false;
           }
           
           console.log('🧹 Memory cleanup completed successfully');
       } catch (error) {
           console.warn('Memory cleanup warning:', error.message);
       }
   }
   
   // ✅ Page unload'ta bellek temizliği
   window.addEventListener('beforeunload', cleanupResources);
   
   // ✅ Periyodik bellek temizliği (5 dakikada bir)
   setInterval(cleanupResources, 300000);
   
   // ✅ Büyük veri işlemlerinden sonra bellek temizliği
   function performDataOperation(operation) {
       return new Promise(async (resolve, reject) => {
           try {
               const result = await operation();
               cleanupResources(); // İşlem sonrası bellek temizliği
               resolve(result);
           } catch (error) {
               cleanupResources(); // Hata durumunda da bellek temizliği
               reject(error);
           }
       });
   }



   // Global jQuery safety wrapper
   var jQueryReady = false;
   var jQueryCallbacks = [];
   
   // Safe jQuery wrapper function
   function safeJQuery(callback) {
     if (typeof $ !== 'undefined' && jQueryReady) {
       callback();
     } else {
       jQueryCallbacks.push(callback);
     }
   }
   
   // Wait for jQuery to be available
   function waitForJQuery() {
     if (typeof $ !== 'undefined') {
       jQueryReady = true;
       // Execute all pending callbacks
       jQueryCallbacks.forEach(function(callback) {
         try {
           callback();
         } catch (e) {
           console.warn('jQuery callback error:', e);
         }
       });
       jQueryCallbacks = [];
     } else {
       setTimeout(waitForJQuery, 50);
     }
   }
   
   // Start waiting for jQuery
   waitForJQuery();
   
   // Token Modal Management - Wait for jQuery to load
   function initTokenManagement() {
     // Check if token exists in localStorage
     var savedToken = localStorage.getItem('gibToken');
     if (!savedToken) {
       updateTokenStatus('invalid', '❌ Oturum gerekli');
     } else {
       updateTokenStatus('valid', '✅ Oturum aktif');
     }
   }
   
   // Initialize token management when jQuery is ready
   safeJQuery(initTokenManagement);

   function showTokenModal() {
     safeJQuery(function() {
       $('#tokenModal').show();
       $('#tokenInput').focus();
       updateTokenStatus('invalid', '❌ Oturum gerekli');
     });
   }

   function hideTokenModal() {
     safeJQuery(function() {
       $('#tokenModal').hide();
     });
   }

     function updateTokenStatus(status, message) {
    safeJQuery(function() {
      var statusElement = $('#floatingTokenStatus');
      var tokenEnterButton = $('#floatingTokenEnter');
      var tokenRefreshButton = $('#floatingTokenRefresh');
      
      statusElement.removeClass('valid invalid loading').addClass(status);
      
      if (status === 'invalid') {
        statusElement.show().text(message);
        tokenEnterButton.show();
        tokenRefreshButton.hide();
      } else if (status === 'valid') {
        //statusElement.show().text(message);
        tokenEnterButton.hide();
        tokenRefreshButton.show();
      } else {
        statusElement.show().text(message);
        tokenEnterButton.hide();
        tokenRefreshButton.hide();
      }
    });
  }

   function refreshToken() {
     localStorage.removeItem('gibToken');
     updateTokenStatus('invalid', '❌ Oturum gerekli');
   }

   // Token modal event handlers - Wait for jQuery
   function initTokenEventHandlers() {
     $('#tokenSubmit').click(function() {
       var tokenInput = $('#tokenInput').val().trim();
       if (!tokenInput) {
         alert('Lütfen GIB Intranet oturum linkini giriniz.');
         return;
       }

       /* Extract token from the link
       var myRegexp = /token=(\S+)/;
       var tokenMatch = myRegexp.exec(tokenInput);
       
       if (!tokenMatch || !tokenMatch[1]) {
         alert('Geçersiz oturum linki. Lütfen doğru GIB Intranet linkini giriniz.');
         return;
       }

       // Validate token format (basic check)
       var tokenValue = tokenMatch[1];
       if (tokenValue.length < 10) {
         alert('Token çok kısa görünüyor. Lütfen doğru GIB Intranet linkini giriniz.');
         return;
       }

	*/
       // Token validation temporarily disabled - directly save token
       localStorage.setItem('gibToken', tokenInput);
       
       // Hide modal and update status
       hideTokenModal();
       updateTokenStatus('valid', '✅ Oturum aktif');
       
       // Clear input
       $('#tokenInput').val('');
     });

     $('#tokenCancel').click(function() {
       hideTokenModal();
       // Show the "Oturum Gir" button if no token is saved
       if (!localStorage.getItem('gibToken')) {
         $('#floatingTokenEnter').show();
       }
     });

     // Close modal when clicking outside
     $('#tokenModal').click(function(e) {
       if (e.target === this) {
         hideTokenModal();
         // Show the "Oturum Gir" button if no token is saved
         if (!localStorage.getItem('gibToken')) {
           $('#floatingTokenEnter').show();
         }
       }
     });

     // Handle Enter key in token input
     $('#tokenInput').keypress(function(e) {
       if (e.which === 13) {
         $('#tokenSubmit').click();
       }
     });
   }
   
   // Initialize event handlers when jQuery is ready
   safeJQuery(initTokenEventHandlers);

   // Helper function to check token before executing functions
   function checkTokenBeforeExecute() {
     if (!token()) {
       updateTokenStatus('invalid', '❌ Oturum gerekli');
       return false;
     }
     return true;
   }

   // Helper function to get VKN/TCNO with localStorage support
   function getVKNWithDefault(message) {
     var defaultValue = localStorage.getItem('lastVKN') || '';
     var input = prompt(message, defaultValue);
     if (input && input.trim()) {
       localStorage.setItem('lastVKN', input.trim());
       return input.trim();
     }
     return null;
   }


function getTaxInvitationReasons(veri) {
  aciklama= {
    "1": "Ba-Bs Bildirim Formlarında Yer Alan Bilgilerin Analizi Sonucunda Mükelleflerin İzaha Davet Edilmesi",
    "2": "Kredi Kartı Satış Bilgileri ile Katma Değer Vergisi (KDV) Beyannamelerinin Karşılaştırılması Sonucunda Mükelleflerin İzaha Davet Edilmesi",
    "3": "Yıllık Beyannameler ile Muhtasar ve Prim Hizmet Beyannamelerinin Karşılaştırılması Sonucunda Mükelleflerin İzaha Davet Edilmesi",
    "4": "Çeşitli Kurum ve Kuruluşlardan Elde Edilen Bilgiler ile Asgari Ücret Tarifelerinin Karşılaştırılması Sonucunda Mükelleflerin İzaha Davet Edilmesi",
    "5": "Yıllık Gelir ve Kurumlar Vergisi Beyannameleri Üzerinde Yapılan İndirimleri, Kanuni Oranları Aşan Mükelleflerin İzaha Davet Edilmesi",
    "6": "Dağıttığı Kâr Üzerinden Tevkifat Yapmadığı Tespit Edilenlerin İzaha Davet Edilmesi",
    "7": "Geçmiş Yıl Zararlarının Mahsubu Yönünden Mükelleflerin İzaha Davet Edilmesi",
    "8": "İştirak Kazançlarını İlgili Hesapta Göstermeyen Mükelleflerin İzaha Davet Edilmesi",
    "9": "Kurumlar Vergisi Kanununun 5/1-e Maddesindeki İstisna ile İlgili Olarak Mükelleflerin İzaha Davet Edilmesi",
    "10": "Örtülü Sermaye Yönünden Mükelleflerin İzaha Davet Edilmesi",
    "11": "Ortaklardan Alacaklar İçin Hesaplanması Gereken Faizler Yönünden Mükelleflerin İzaha Davet Edilmesi",
    "12": "Ortaklık Hakları veya Hisselerini Elden Çıkardıkları Halde Beyanda Bulunmayan Limited Şirket Ortaklarının İzaha Davet Edilmesi",
    "13": "Gayrimenkul Alım/Satım Bedelinin Eksik Beyan Edilmiş Olabileceğine Dair Haklarında Tespit Bulunanların İzaha Davet Edilmesi",
    "14": "Gayrimenkullere İlişkin Değer Artışı Kazançları Yönünden Mükelleflerin İzaha Davet Edilmesi",
    "15": "Gayrimenkul Sermaye İratlarını Beyan Etmeyen veya Eksik/Hatalı Beyan Eden Mükelleflerin İzaha Davet Edilmesi",
    "17": "VUK Hükümlerine Göre Hatalı Reeskont İşlemleri",
    "18": "Değersiz Hale Gelen Alacaklarda KDV Düzeltmesi",
    "19": "Yurtdışından Para Transferi Suretiyle Elde Edilen Gelirin Beyan Edilmemesi",
    "20": "Yıllık Gelir Veya Kurumlar Vergisi Beyannamelerinde Vergi Matrahının Beyan Edilmemesi/Eksik Beyan Edilmesi",
    "21": "KDV Beyannamelerinde Vergi Matrahının Beyan Edilmemesi/Eksik Beyan Edilmesi",
    "22": "Damga Vergisi Yükümlülüklerini Eksik/Hatalı Beyan Edilmesi",
    "23": "Muhtasar ve Prim Hizmet Beyannameleri Nedeniyle Mükelleflerin İzaha Davet Edilmesi",
    "24": "BSMV'ye Yönelik Mükelleflerin İzaha Davet Edilmesi",
    "25": "Vergisiz Yapılan Akaryakıt Alımları Yönünden Mükelleflerin İzaha Davet Edilmesi"
  };

return aciklama[veri];
}

function izahaDavetİlkTarih(oid,token){

var callid=makeid(13) + '-';

	var url5= 'http://arkaofis.gelbim.gov.tr:32174/izah-server/dispatch?cmd=islemGunluguService_getIslemGunluguKayitlari&callid=';
	var url5=url5.concat(callid + '112', '&token=', token, '&jp=%7B%22izahaDavetOid%22%3A%22',oid,'%22%2C%22respKeyParam%22%3A%22list%22%2C%22pv%22%3A%7B%22start%22%3A0%2C%22limit%22%3A10%2C%22sorters%22%3A%5B%5D%7D%7D');
	var liste = getRemote(url5);
	var obj =JSON.parse(liste);

	return tarihFormat(obj.data.list[obj.data.list.length-1].kayitTarihi);

}


 let sortDirection = {};

        function sortTable(tableName, columnIndex, direction) {
            const table = document.getElementById(tableName);
            const tbody = table.querySelector('tbody');
            const allRows = Array.from(tbody.querySelectorAll('tr'));
            
            // İlk satırı ayır (sabit kalacak)
            const firstRow = allRows[0];
            const rows = allRows.slice(1); // İkinci satırdan itibaren al
            
            const headers = table.querySelectorAll('th');
            
            // Her tablo için ayrı sıralama yönü
            const key = tableName + '_' + columnIndex;
            
            // Sıralama yönünü belirle
            if (!direction) {
                sortDirection[key] = sortDirection[key] === 'asc' ? 'desc' : 'asc';
            } else {
                sortDirection[key] = direction;
            }
            
            const dir = sortDirection[key];
            
            // Tüm header'lardan sınıfları temizle
            headers.forEach(h => h.classList.remove('asc', 'desc'));
            headers[columnIndex].classList.add(dir);
            
            // Satırları sırala
            rows.sort((a, b) => {
                let aVal = a.cells[columnIndex].textContent.trim();
                let bVal = b.cells[columnIndex].textContent.trim();
                
                // Tarih sütunu için özel işlem
                if (columnIndex === 1) {
                    aVal = parseDate(aVal);
                    bVal = parseDate(bVal);
                    return dir === 'asc' ? aVal - bVal : bVal - aVal;
                }
                
                // Sayısal değerler için
                const aNum = parseFloat(aVal.replace(/[^\d,-]/g, '').replace(',', '.'));
                const bNum = parseFloat(bVal.replace(/[^\d,-]/g, '').replace(',', '.'));
                
                if (!isNaN(aNum) && !isNaN(bNum)) {
                    return dir === 'asc' ? aNum - bNum : bNum - aNum;
                }
                
                // Metin karşılaştırması
                return dir === 'asc' 
                    ? aVal.localeCompare(bVal, 'tr')
                    : bVal.localeCompare(aVal, 'tr');
            });
            
            // Sıralanmış satırları tabloya geri ekle
            rows.forEach(row => tbody.appendChild(row));
        }
        
        // Türkçe tarih formatını (GG.AA.YYYY) Date objesine çevir
        function parseDate(dateStr) {
            const parts = dateStr.split('.');
            if (parts.length === 3) {
                // GG.AA.YYYY formatı
                return new Date(parts[2], parts[1] - 1, parts[0]);
            }
            return new Date(dateStr);
        }


function belediyeKontrol(veri) {
  const belediyeVKN = [
    "1620049199", "1620049727", "1620050369", "1620051143", "1660016901",
    "1760038466", "1760954421", "1880055410", "1910006685", "1910023314",
    "1910025989", "1910546222", "1910586525", "1930410371", "1940055392",
    "3910019007", "3910320358", "4490003721", "4490286175", "4680505830",
    "4780031547", "4780031555", "4780836804", "4830348396", "4831360638",
    "4840022518", "6090039607", "6230965968", "6240046436", "6240415188",
    "6240520762", "6310548831", "6310642889", "6320056107", "6370194410",
    "6460366671", "6470000523", "6470762864", "6480053164", "8250083876",
    "9490030940", "9490748988", "9500474080", "9600017193"
  ];
  
  return belediyeVKN.includes(String(veri));
}


function faaliyetBaslangicTarihi(vkn){

try{

	var callid=makeid(13) + '-';

	var url5= 'http://10.251.63.99/gibintranet_server/dispatch?cmd=sicilService_sicilBilgileriSorgulaIlKodu&callid=';
	var url5=url5.concat(callid + '15', '&token=', token(), '&jp=%7B%22vkn%22%3A%22',vkn,'%22%2C%22tckn%22%3A%22%22%2C%22vdKodu%22%3A%22%22%2C%22ilKodu%22%3A%22%22%7D');
	var daireler = getRemote(url5);
	var obj =JSON.parse(daireler);
	var baslangicMerkezTarih="";
	var mesaj="";
	

	 $.each(obj.data.vdler.baglivd, function(index, satir){

	 	if (satir.isyerituru==1 && satir.isebaslamatarihi!="") { baslangicMerkezTarih= satir.isebaslamatarihi; }

	});

	if (obj.data.hatakontrol!=undefined){

		$.each(obj.data.hatakontrol, function(index, satir1){  // sicil mesajlarını getir

		 mesaj = mesaj + "/n" + satir1.mesaj

		});

	}

	return tarihFormat(baslangicMerkezTarih) + "-" + mesaj;

}

catch(err){

return "Hata-" + err;

}

}


