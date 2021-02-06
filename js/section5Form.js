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

function stringify_object(object, depth = 0, max_depth = 2) {
  // change max_depth to see more levels, for a touch event, 2 is good
  if (depth > max_depth) return "Object";

  const obj = {};
  for (let key in object) {
    let value = object[key];
    if (value instanceof Node)
      // specify which properties you want to see from the node
      value = { id: value.id };
    else if (value instanceof Window) value = "Window";
    else if (value instanceof Object)
      value = stringify_object(value, depth + 1, max_depth);

    obj[key] = value;
  }

  return depth ? obj : JSON.stringify(obj);
}

function mask(event, input, maskType) {
  alert(stringify_object(event));
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
