function validasi_input(form){    
    pola_email=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;    
    pola_tanggal=/^d{1,2}\/\d{1,2}\/\d{4}$/;    
    if (form.nama.value.length > 50 && form.nama.value.length !=0){    
      alert("Nama tidak boleh panjang - panjang!");    
      form.nama.focus();    
      return (false);    
    }    
    else if (form.nama.value == ""){    
      alert("Nama aja lu gk diisi kocakk !");    
      form.nama.focus();    
      return (false);    
    }    
    else if (!pola_email.test(form.email.value)){    
      alert ("pola email mu salah coba lagi ");    
     form.email.focus();    
     return (false);    
    }     
    else if (form.nohp.value.length < 10 || form.nohp.value.length > 12){    
      alert("wah no Hp mu gk bener ");    
      form.nohp.focus();    
      return (false);    
    }    
    else if (!pola_tanggal.test(form.tgllahir.value)){    
      alert ("salah itu format tanggal mu !");    
      form.tgllahir.focus();    
      return (false);    
    }    
  return (true);    