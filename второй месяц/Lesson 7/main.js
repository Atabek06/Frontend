// class dog{
//     constructor(weight, height, color) {
//         this.weight = weight;
//         this.height = height;
//         this.color = color;
//     }
// }
//
// const rex = new dog(40, 1.5, 'purple');
// const bobik = new dog(3, 30, 'yellow');
//
// console.log(rex);
// console.log(bobik);

//1: Абстрактный класс

// class Animal {
//     constructor(type, gender, color, voiceText) {
//         this.type = type;
//         this.gender = gender;
//         this.color = color;
//         this.voiceText = voiceText
//     }
//     voice(){
//         console.log(this.voiceText)
//     }
// }
//
// class dog extends Animal {
//     constructor(type, gender, color, voiceText, name, purposeText, floors, doors) {
//         super(type, gender, color, voiceText);
//         this.name = name;
//         this.purposeText = purposeText;
//         this.floors = floors;
//         this.doors = doors;
//     }
//     purpose(){
//         console.log(`Dog: ${this.name}/npurpose: ${this.purposeText}/npurpose: ${this.floors}/npurpose: ${this.doors}`)
//     }
// }
//
// const rex = new dog(
//     'хищник',
//     'male',
//     'pink',
//     'gaf gaf!',
//     'Тузик',
//     'security',
//     2,
//     2
//
//
// ) // обьект класса дог
//
// rex.purpose();
//
// const bublik = new dog(
//     'domestic',
//     'female',
//     'red',
//     'tyaf tyaf',
//     'bublik',
//     'face control'
// )
//
// bublik.purpose();

class House{
    constructor(type, floors, wallcolor, roofcolor, windows, staircolor, outdoors, doors, rooms, bathrooms, tv ) {
        this.type = type;
        this.floors = floors;
        this.wallcolor = wallcolor;
        this.roofcolor = roofcolor;
        this.windows = windows;
        this.staircolor = staircolor;
        this.outdoors = outdoors;
        this.doors = doors;
        this.rooms = rooms;
        this.bathrooms = bathrooms;
        this.tv = tv;
    }
}
class Home extends House{
    constructor(type, floors, wallcolor, roofcolor, windows, staircolor, outdoors, doors, rooms, bathrooms, tv) {
        super(type, floors, wallcolor, roofcolor, windows, staircolor, outdoors, doors, rooms, bathrooms, tv);
    }
}

const Myhouse = new Home(
    'Land plot',
    2,
    'orange-yellow',
    'brown',
    12,
    'grey',
    2,
    10,
    10,
    2,
    4
)

console.log(Myhouse)


