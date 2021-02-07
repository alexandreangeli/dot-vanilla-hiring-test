function formSubmit(event) {
  event.preventDefault();

  alert(`
    Formulário enviado!

    Nome: 
    ${event.target.elements.name.value}

    E-mail: 
    ${event.target.elements.mail.value}

    Telefone: 
    ${event.target.elements.phone.value}

    Mensagem: 
    ${event.target.elements.message.value}
  `);

  event.target.reset();
}

function mask(event, maskType) {
  switch (maskType) {
    case "phone":
      event.target.value = phoneMask(event.target.value);
      break;
  }
}

function phoneMask(value) {
  let onlyNumbers = value.replace(/\D/g, "");
  let masked = "";
  for (var i = 0; i < onlyNumbers.length; i++) {
    let char = onlyNumbers.charAt(i);

    switch (i) {
      case 0:
        masked += "(";
        break;
      case 2:
        masked += ")";
        masked += " ";
        break;
      case onlyNumbers.length < 11 ? 6 : 7:
        masked += "-";
        break;
    }

    masked += char;
  }
  return masked;
}
