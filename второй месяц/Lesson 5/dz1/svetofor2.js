let expr=prompt("цвет светофора?")
switch (expr) {
    case "красный":
      document.getElementsByClassName('red')[0].style.background = "red";
    alert("стоять");
    break;
  case "жёлтый":
  document.getElementsByClassName('yellow')[0].style.background = "yellow";
    alert("терпения друг мой");
    break;
  case "зелёный":
  document.getElementsByClassName('green')[0].style.background = "green";
    alert("газуй");
    break;
  default:
    alert('такого цвета не существует')
}

