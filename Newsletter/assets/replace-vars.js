 // Replacing Variables At Top Of This Document
  
  var emailFormCard = document.getElementById("emailFormCard") ;
emailFormCard.innerHTML = emailFormCard.innerHTML
                        .replace(/GOOGLE_ENTRY_FORM_NUM/g, Google_Entry_ID)
                         .replace(/GOOGLE_FORM_URL/g, Google_Form_Link)
  ;
