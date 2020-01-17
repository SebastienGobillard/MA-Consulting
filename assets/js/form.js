function VerifForm(form) {
  var prenom=document.getElementById('form').user_firstname.value;
  var nom=document.getElementById('form').user_lastname.value;
  var email=document.getElementById('form').user_email.value;
  var message=document.getElementById('form').user_message.value;

  if (prenom == "") {
    document.getElementById('msg_erreur').innerHTML= 'Veuillez indiquer un nom valide';
    document.getElementById('msg_erreur').style.display='block';
    document.getElementById('msg_erreur').className='focus';
    form.prenom.focus();
    return false;
  } else {
    document.getElementById('msg_erreur').style.display='none';
  }
  if (nom == "") {
    document.getElementById('msg_erreur').innerHTML= 'Veuillez indiquer un nom valide';
    document.getElementById('msg_erreur').style.display='block';
    document.getElementById('msg_erreur').className='focus';
    form.nom.focus();
    return false;
  } else {
      document.getElementById('msg_erreur').style.display='none';
  }
  if (email == "") {
    document.getElementById('msg_erreur').innerHTML= 'Veuillez indiquer un mail valide';
    document.getElementById('msg_erreur').style.display='block';
    document.getElementById('msg_erreur').className='focus';
    form.email.focus();
    return false;
  } else {
    document.getElementById('msg_erreur').style.display='none';
  }
  if (message == "") {
    document.getElementById('msg_erreur').innerHTML= 'Veuillez rédiger un message valide';
    document.getElementById('msg_erreur').style.display='block';
    document.getElementById('msg_erreur').className='focus';
    form.message.focus();
    return false;
  } else {
    document.getElementById('msg_erreur').style.display='none';
  }

  return true;
}