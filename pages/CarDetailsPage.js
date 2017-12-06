import CarService from '../services/CarService.js'

export default {
    template: `
        <section v-if="car">
            <h1>{{car.model}}</h1>
            <h2>$ {{car.price}}</h2>
            <img :src="'img/car/' + car.id + '.png'" >
        </section>
    `,
    data() {
        return {
            car :  null
        }
    },
    created() {
        var carId = +this.$route.params.carId
        CarService.getCarById(carId)
         .then(car => this.car = car)
         .catch(err => {
             this.$router.push('/')
         })
        
    }
}