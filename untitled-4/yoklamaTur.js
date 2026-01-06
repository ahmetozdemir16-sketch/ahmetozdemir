 
function yoklamaTuruAciklama(veri) {
 
  var yoklamaTur={
  '10':'İşe Başlama',
  '11':'Nakil İşe Başlama',
  '12':'Adres Değişikliği',
  '13':'Şube Açılışı',
  '14':'Ek İşe Başlama',
  '15':'Ek İşe Bırakma',
  '16':'Elektronik Ortamda Tüzel Kişilik Açılış Yoklaması',
  '20':'İşe Bırakma',
  '21':'Nakil İşi Bırakma',
  '23':'Şube Kapanışı',
  '30':'Faal Mükellef Kontrol',
  '31':'Nakil Vasıtaları',
  '32':'Diğer Ücretli Çalışan',
  '33':'Diğer Ücretli Çalışan Terk',
  '34':'Nakil Vasıtaları Terk	',
  '40':'Kayıt Dışı Faaliyet',
  '50':'Gmsi(Mülk Sahibi)',
  '51':'Gmsi(Kiracı)',      
  '60':'Resen Terk(İşyeri Nezd.)',
  '61':'Resen Terk(Şirket Yetk. Nezd./Mükellef İkametgahında)',
  '62':'160A Yoklaması(Şirket Yetkilisi/Mükellef İkametgahında)	',
  '70':'KDV İade (İmalatçı)',
  '71':'KDV İade (İmalatçı Olmayan)',
  '72':'KDV İade (İmalatçıların İhrac Kaydı)',
  '73':'MTY-1',
  '80':'Özel Esas Yoklaması',
  '81':'Anlaşmalı Matbaa Yoklaması',
  '83':'VUK 160A / Özel Esaslar Yoklaması',
  '90':'Atık Madeni Yağ Geri Kazanım Faaliyeti Yoklaması',
  '130':'Serbest Yoklama',
  '180':'MTY-II'  
  };


return yoklamaTur[veri];

}








