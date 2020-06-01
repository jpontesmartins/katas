
function projectPartners(totalOfStudents) {
    let totalOfUniquePairs = 0;
    for (let i =1; i <= totalOfStudents; i++) {
        for (let j = i+1; j <= totalOfStudents; j++) {
            totalOfUniquePairs++;
        }
    }    
    return totalOfUniquePairs;
}

module.exports = {
    projectPartners
}
