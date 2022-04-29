const color = prompt("выбери цвет: красный, желтый, зеленый");

switch (color) {
    case "красный":
        alert ("стоять!")
        break;
    case "желтый":
        alert("подожди!")
        break;
    case "зеленый":
        alert("езжай!")
        break
    default:
        alert("стоп!")
        break;
}