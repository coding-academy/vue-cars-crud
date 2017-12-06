var cars = [
    {
        id: 101,
        model: 'Audi',
        price: 763
    },
    {
        id: 98,
        model: 'Subaru',
        price: 323
    }    
]

function emptyCar() {
    return {model: '', price: 0}
}

function _getNextId() {
    var maxId = cars.reduce((acc, car)=>{
        return (car.id > acc)? car.id : acc
    }, 0);
    return maxId + 1;
} 


function getCars() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{resolve(cars)}, 1000)
    });
    // return Promise.reject();
    // return Promise.resolve(cars);
}

function saveCar(car) {
    return new Promise((resolve, reject)=>{
        if (car.id) {
            var carToUpdateIdx = cars.findIndex(currCar => currCar.id === car.id)
            cars.splice(carToUpdateIdx, 1, car);
        }  else {
            car.id = _getNextId();
            cars.push(car);
        }
       
        resolve(car)
        // reject()
    });
}

function deleteCar(carId) {
    return new Promise((resolve, reject)=>{
        var carIdx = cars.findIndex(car => car.id === carId)
        cars.splice(carIdx, 1);
        resolve()
    });
}


function getCarById(carId) {
    return new Promise((resolve, reject)=>{
        var foundCar = cars.find(car => car.id === carId)
        if (foundCar) resolve(foundCar)
        else reject();
    })
    
    
}

export default {
    getCars,
    saveCar,
    deleteCar,
    emptyCar,
    getCarById
}