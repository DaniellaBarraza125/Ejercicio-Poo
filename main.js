class Persona {
    constructor(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
    obtDetalles() {
        console.log(
            ` Nombre = ${this.nombre} Edad= ${this.edad} Genero =  ${this.genero}`,
        );
    }
}
let dani = new Persona("dani", "30", "Fem");
dani.obtDetalles();

class Estudiante extends Persona {
    constructor(nombre, edad, genero, curso, grupo) {
        super(nombre, edad, genero);

        this.curso = curso;
        this.grupo = grupo;
    }
    registrar() {
        console.log(
            `estudiante ${this.nombre} registrado en ${this.curso} con exito`,
        );
    }
}
let estudianteRegistrado = new Estudiante("Alex", 31, "masc", "Frances", "A");
console.log(estudianteRegistrado);
class Profesor extends Persona {
    constructor(nombre, edad, asignatura, nivel) {
        super(nombre, edad);

        this.asignatura = asignatura;
        this.nivel = nivel;
    }
    asignar() {
        console.log(
            ` ${this.nombre} fue contratado como profesor de ${this.asignatura} a los ${this.edad} años `,
        );
    }
}
let profesorContratado = new Profesor(
    "Miguel",
    31,
    "Masaje descontracturante",
    "segundo semestre",
);

console.log(profesorContratado);

// extras
class Warrior {
    constructor(life, power) {
        this.life = life;
        this.power = power;
    }
    attack() {
        console.log(this.power);
    }
    defend(damage) {
        console.log(this.life - damage);
    }
}

class Maya extends Warrior {
    constructor(life, power, don, atributo) {
        super(life, power);

        this.don = don;
        this.atributo = atributo;
    }
    drinkColaCao() {
        console.log(
            `el poder de ${this.atributo} ${this.don} ahora es ${
                this.power + 10
            }`,
        );
    }
}

class Aztec extends Warrior {
    constructor(life, power, animal, atributo) {
        super(life, power);

        this.animal = animal;
        this.atributo = atributo;
    }
    drinkNesquik() {
        console.log(
            `el poder de ${this.animal} ${this.atributo} ahora es ${
                this.power + 10
            }`,
        );
    }
}
let newAztec = new Aztec(10, 10, "aguila", "astuta");
console.log(newAztec);

newAztec.drinkNesquik();

let newMaya = new Maya(10, 10, "que todo lo ve", "ojo");
console.log(newMaya);
newMaya.drinkColaCao();
