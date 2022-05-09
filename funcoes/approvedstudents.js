alunos = {
    aluno0 : {
        id : 1,
        nome : "Jorge",
        idade : 22,
        notas : {
            prova1 : 0,
            prova2 : 0,
            prova3 : 0,
            prova4 : 0,
            prova5 : 0,
        } 
    },
    aluno1 : {
        id: 2,
        nome: "Maria",
        idade: 25,
        notas: {
            prova1: 8,
            prova2: 9,
            prova3: 7,
            prova4: 5,
            prova5: 10,
        }
    },
    aluno2 : {
        id: 3,
        nome: "Ana",
        idade: 27,
        notas: {
            prova1: 10,
            prova2: 5,
            prova3: 10,
            prova4: 10,
            prova5: 10,
        }
    }
}
function hasPassed(dbOfStudents){

    const approved = []

    for (alunoatual in dbOfStudents) {

        let totalNotas = Object.values(dbOfStudents[alunoatual]['notas']); // list populated with every note from given 'alunoatual'
        let initialValue = 0;
        // get the sum of every note with reduce property. Gonna say i didnt properly understand how it works. But it does.
        const sumNotas = totalNotas.reduce((previousValue, currentValue) => previousValue + currentValue, 
        initialValue 
        );
        const numberOfTests = Object.keys(dbOfStudents[alunoatual]['notas']).length;
        
        let k = 0
        sumNotas / numberOfTests > 6 ? approved.push(dbOfStudents[alunoatual]['nome']) : k++
        
    }
    for (passed in approved){
        console.log(`${approved[passed]} has passed!`)
    }

}


hasPassed(alunos);



