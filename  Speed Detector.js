function speedDetector(speed){
    const speedLimit= 70
    const speedRate = 5
}
if(speed < speedLimit){
    return 'OK'
}

const speedDifference =speed-speedLimit

let demeritPoints = 0
for(let i = 0; i < speedDifference; i+= speedRate){
    demeritPoints += 1
}

// demeritPoint = demeritPoint+speedRate
if(demeritPoints > 12){
    return 'License suspended'
}

return `Points: ${demeritPoints}`

console.log(speedDetector(100));