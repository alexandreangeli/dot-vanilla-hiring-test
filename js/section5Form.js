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

function mask(event, input, maskType) {
  if (
    event.key.length === 1 &&
    event.altKey == false &&
    event.ctrlKey == false
  ) {
    maskSwitch(event.key, input, maskType);
  } else if (event.code == "Backspace") {
    setTimeout(() => maskSwitch("", input, maskType));
  }
}

function maskSwitch(newChar, input, maskType) {
  switch (maskType) {
    case "phone":
      input.value = phoneMask(input.value, newChar);
      break;
  }
}

function phoneMask(value, newChar) {
  let onlyNumbers = (value + newChar).replace(/\D/g, "");
  let masked = "";
  for (var i = 0; i < onlyNumbers.length; i++) {
    let char = onlyNumbers.charAt(i);

    if (onlyNumbers.length < 11) {
      switch (i) {
        case 0:
          masked += "(";
          break;
        case 2:
          masked += ")";
          masked += " ";
          break;
        case 6:
          masked += "-";
          break;
      }
    } else {
      switch (i) {
        case 0:
          masked += "(";
          break;
        case 2:
          masked += ")";
          masked += " ";
          break;
        case 3:
          masked += " ";
          break;
        case 7:
          masked += "-";
          break;
      }
    }

    if (!newChar || i != onlyNumbers.length - 1) {
      masked += char;
    }
  }
  return masked;
}
