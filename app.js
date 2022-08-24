//Global
const tBody= document.getElementById('table-body');

let flights= [
    {
        time: '01:05',
        destination: 'Cairo       ',
        flight: 'EG050',
        gate: 'A08',
        remarks: 'Cancelled'
    },
    {
        time: '10:00',
        destination: 'London      ',
        flight: 'BA730',
        gate: 'C15',
        remarks: 'On time  '
    },
    {
        time: '12:00',
        destination: 'Dubai       ',
        flight: 'EA109',
        gate: 'B10',
        remarks: 'Delayed  '
    },
    {
        time: '13:10',
        destination: 'Munich      ',
        flight: 'LH230',
        gate: 'E01',
        remarks: 'On time  '
    },
    {
        time: '08:00',
        destination: 'Istanbul    ',
        flight: 'TA420',
        gate: 'F03',
        remarks: 'On time  '
    },
    {
        time: '05:00',
        destination: 'New York    ',
        flight: 'EG050',
        gate: 'A08',
        remarks: 'Cancelled'
    },    {
        time: '06:00',
        destination: 'Luxor       ',
        flight: 'EG050',
        gate: 'A15',
        remarks: 'ON Time  '
    },    {
        time: '03:00',
        destination: 'Giza        ',
        flight: 'EG050',
        gate: 'A11',
        remarks: 'Cancelled'
    },    {
        time: '12:00',
        destination: 'Sohag       ',
        flight: 'EG055',
        gate: 'A12',
        remarks: 'On time  '
    },    {
        time: '11:00',
        destination: 'Minya       ',
        flight: 'EG060',
        gate: 'A13',
        remarks: 'Delayed  '
    },    {
        time: '10:00',
        destination: 'Matruh      ',
        flight: 'EG065',
        gate: 'A09',
        remarks: 'Cancelled'
    },    {
        time: '03:00',
        destination: 'Sinai       ',
        flight: 'EG090',
        gate: 'c02',
        remarks: 'Cancelled'
    }    
];


let destinations= ['Munich      ', 
                     'Luxor       ', 
                     'Gaza        ',
                     'New York    ',
                     'Mecca       ', 
                     'Kabul       ',
                     'Algiers     ',
                     'Buenos Aires',
                     'Vienna      ',
                     'Baku        ',
                     'Manama      ',
                     'Dhaka       ', 
                     'Minsk       ', 
                     'Brussels    ', 
                     'Sarajevo    ', 
                     'Brasilia    ',
                     'Beijing     ', 
                     'Bogotá      ',
                     'Havana      ', 
                     'Prague      ',                         
                     'Copenhagen  ',
                     'Cairo       ',
                     'Addis Ababa ',
                     'Helsinki    ',
                     'Paris       ',
                     'Berlin      ',
                     'Athens      ',
                     'New Delhi   ', 
                     'Jakarta     ',
                     'Baghdad     ', 
                     'Dublin      ',
                     'Rome        ', 
                     'Tokyo       ', 
                     'Amman       ', 
                     'Beirut      ',
                     'Luxembourg  ', 
                     'Kuala Lumpur', 
                     'Bamako      ',
                     'Amsterdam   ',
                     'Oslo        ', 
                     'Muscat      ',
                     'Lima        ',
                     'Lisbon      ', 
                     'Doha        ', 
                     'Bucharest   ',
                     'Moscow      ',
                     'Seoul       ',
                     'Madrid      ',
                     'Khartoum    ',
                     'Stockholm   ',
                     'Damascus    ', 
                     'Bangkok     ', 
                     'Tunis       ',
                     'Ankara      ',
                     'Kyiv        ', 
                     'Abu Dhabi   ', 
                     'London      ', 
                     'Washington  ',
                     'Sana`a      ',
                     'Lusaka      ', 
                     'Harare      '
];

let state= ['On Time  ', 'Delayed  ', 'Cancelled'];

function letterRandom(){
    const alphabet= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return alphabet.charAt(Math.floor(Math.random() * alphabet.length));
}

function numberRandom(maxNumber){
    const numbers= '0123456789';
    if (maxNumber){
        const newNumbers= numbers.slice(0, maxNumber + 1 );
        return newNumbers.charAt(Math.floor(Math.random() * newNumbers.length));

    }
    return numbers.charAt(Math.floor(Math.random() * numbers.length));
}

function generateTime(){

    return numberRandom(1)+ numberRandom(2) + ':' + numberRandom(5) + numberRandom(9);
}
//End of Global

//Filling Table 
function fillTable(){
    for (const flight of flights){
        const tableRow= document.createElement('tr');

        for (const flightDetail in flight ){
            const tabelCell= document.createElement('td');
            const word= Array.from(flight[flightDetail]);

            for (const [index,letter] of word.entries()){
                const letterElement= document.createElement('div');
                tabelCell.append(letterElement);

                setTimeout(()=> {
                    letterElement.textContent= letter;
                    letterElement.classList.add('text-slide');
                },200*index);
            }
            tableRow.append(tabelCell);
        }
        tBody.append(tableRow);
    }
}
fillTable();
// end of filling function 


//Replacing a table row at a time  
function newData(){
    flights.pop()
    flights.unshift({
        time: generateTime(),
        destination: destinations[Math.floor(Math.random()*destinations.length)],
        flight: letterRandom() + letterRandom() +  numberRandom() + numberRandom() + numberRandom(),
        gate: letterRandom() + numberRandom() + numberRandom(),
        state: state[Math.floor(Math.random()*state.length)]
    });
    tBody.textContent= '';
    fillTable();
}
setInterval(newData, 10000); //Running the function ever 10 seconds

