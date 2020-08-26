const fs = require('fs');

const gender = ['M', 'F'];
const maleNames = ['Adam', 'Jan', 'Krzysiek', 'Mateusz', 'Rafał', 'Zbyszek'];
const femaleNames = ['Anna', 'Paulina', 'Magda', 'Sylwia', 'Małgorzata', 'Anita'];
const lastName = ['Kowal', 'Nowak', 'Json'];
const age = [18, 78];

const identity = [];

const randomChoice = arr => (
    arr[Math.round(Math.random()*(arr.length - 1))]
);

const phoneNumberGenerator = digitsNumber => {
    if(digitsNumber > 0) {
        let phoneNumber = '';
        for(j = 0; j < digitsNumber; j++) {
            phoneNumber += Math.round(Math.random() * 9)
        }
        return phoneNumber;
    }
};



for(i = 0; i < 20; i++) {
    const selectedGender = randomChoice(gender);
    const selectedName = selectedGender === 'M' ? randomChoice(maleNames) : randomChoice(femaleNames);
    const selectedLastName = randomChoice(lastName);
    const selectedAge = Math.round(Math.random() * (age[1] - age[0] + 1) + age[0]);
    const phoneNumber = phoneNumberGenerator(9);

    identity.push(
        {
            gender: selectedGender,
            name: selectedName,
            lastName: selectedLastName,
            age: selectedAge,
            phoneNumber: phoneNumber,
            email: `${selectedName}.${selectedLastName}@gmail.com` 
        }
    );
};

fs.writeFile('people.json', JSON.stringify(identity), (err) => {
    if (err) console.log('Something went wrong');
    console.log('File has been successfully generated! Check people.json');
});