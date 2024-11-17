function personID () {
   let PII = {
        name: 'Blamah',
        ssn: 123456789
}
return {
    getName(){
        return PII.name
    },
    getSsn(){
        return PII.ssn
    }
}
}
let patient2 = personID()

console.log(patient2.ssn)
console.log(patient2.getName())
console.log(patient2.getSsn())