import {createHash, randomBytes} from 'crypto';

function obtain_b00da_string() {
    let resultingHash: string = "";
    let generatedString: string = "";
    while(!resultingHash.includes("b00da")){
        generatedString = randomBytes(16).toString('hex');
        resultingHash = createHash('sha256').update(generatedString).digest('hex');
    }
    return generatedString;
}
const b00da_string= obtain_b00da_string()
console.log("Generated string is: " + b00da_string + " and hash result is: " + createHash('sha256').update(b00da_string).digest('hex'   ));

// Hola! Soy Dante, un desarrollador backend con muchas ganas de aprender y mejorar, muy interesado en la oportunidad de ser parte del equipo de Buda.com.
// Soy estudiante de Ingeniería en Sistemas en la Universidad Tecnológica Nacional de Argentina. En la carrera, soy ayudante de la materia Paradigmas de Programación, en la que se enseñan los paradigmas Funcional, Lógico y Orientado a Objetos.
// En 2025 participé en la Platanus Hack, donde pude conocer a varios desarrolladores de la comunidad y aprender muchísimo. Allí también escuché excelentes referencias sobre el equipo de Buda.com y su ambiente de trabajo, lo que me motivó a postularme.
// Me considero una persona con muchas ganas de aprender, mejorar como programador y trabajar con gente que me impulse a crecer. Disfruto especialmente de la programación (mi paradigma favorito es el funcional), de explorar nuevas tecnologías y de enfrentar problemas desafiantes. Creo que Buda.com es un lugar ideal para seguir desarrollándome tanto personal como profesionalmente.
// Como ejemplo de mi trabajo, uno de los proyectos que realicé para la cátedra de Paradigmas de Programación fue un bot de Discord que automatiza la creación de grupos de trabajo para los alumnos. Este proyecto surgió como una iniciativa personal para agilizar un proceso que antes se hacía manualmente por mi profesor.
// CV: 