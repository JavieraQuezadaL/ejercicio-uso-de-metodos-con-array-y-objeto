//AGREGAR A TRAUMATOLOGIA
const pacientes = [
    { hora: '09:00', especialista: 'RENÉ POBLETE', paciente: 'ANA GELLONA', rut: '13123329-7', prevision: 'ISAPRE' },
    { hora: '09:30', especialista: 'MARIA SOLAR', paciente: 'RAMIRO ANDRADE', rut: '12221451-K', prevision: 'FONASA' },
    { hora: '10:00', especialista: 'RAUL LOYOLA', paciente: 'CARMEN ISLA', rut: '10112348-3', prevision: 'ISAPRE' },
    { hora: '10:30', especialista: 'ANTONIO LARENAS', paciente: 'PABLO LOAYZA', rut: '13453234-1', prevision: 'ISAPRE' },
    { hora: '12:00', especialista: 'MATIAS ARAVENA', paciente: 'SUSANA POBLETE', rut: '14345656-6', prevision: 'FONASA' }

]

const traumat = traumatologia.concat(pacientes)
console.log(traumat);

radiologia.shift();
radiologia.pop();
console.log(radiologia)

for (const i of dental) {
    document.write(`<p>${i.hora} - ${i.especialista} - ${i.paciente} - ${i.rut} - ${i.prevision}</p>`);
}

const IsapreDental = dental.filter((i) => i.prevision === "ISAPRE")
console.log(IsapreDental)

for (const i of IsapreDental) {
    document.write(`<p>${i.paciente} - ${i.prevision} </p>`)
}

const TraumaFonasa = traumat.filter((i) => i.prevision === "FONASA")
console.log(TraumaFonasa)

for (const i of TraumaFonasa) {
    document.write(`<p>${i.paciente} - ${i.prevision} </p>`)
}
