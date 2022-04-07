const notes = [
    {
        course: "Educacion Fisica",
        note: 10,
        credit: 2,
    },
    {
        course: "Programacion",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas Personales",
        note: 7,
        credit: 5,
    },
];

const noteWhitCredit = notes.map(function(noteObject){
    return noteObject.note * noteObject.credit;
});

const sumOfNotesWhitCredit = noteWhitCredit.reduce(function (sum = 0, newVal){
    return sum + newVal;
});

const credits = notes.map(function(noteObject){
    return noteObject.credit;
});

const sumOfCredits = credits.reduce(
    function (sum = 0, newVal){
        return sum + newVal;
    }
);

const promedioPonderadoConCreditos = sumOfNotesWhitCredit / sumOfCredits;

