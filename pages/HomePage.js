import EventBusService,{SHOW_MSG} from '../services/EventBusService.js'
import CarService from '../services/CarService.js'
// import UserFeedbackMixin from '../mixins/UserFeedbackMixin.js'

export default {
    // mixins: [UserFeedbackMixin],
    template: `
        <section>
            <h1>Cars R Us</h1>
            <ul>
                <li v-for="car in cars">
                    {{car}}
                    <button @click="deleteCar(car.id)">x</button>
                    <router-link :to="'/car/' + car.id">Details</router-link>
                    <router-link :to="'/car/' + car.id + '/edit'">Edit</router-link>
                </li>
            </ul>
            <router-link to="/car/create">Add</router-link>
            
        </section>
    
    `,
    data() {
        return {
            cars: [],
            newCar: CarService.emptyCar(),
        }
    },
    created() {
        CarService.getCars()
            .then(cars => {
                var userMsg = {txt: 'Cars Loaded', type: 'success' }
                EventBusService.$emit(SHOW_MSG, userMsg)
                this.cars = cars
            })
            .catch(err => {
                var userMsg = {txt: 'Cars Loaded Failed!', type: 'danger' }
                EventBusService.$emit(SHOW_MSG, userMsg)
                this.cars = []
            })
    },
    methods: {
        deleteCar(carId) {
            CarService.deleteCar(carId)
             .then(_ => {
                var userMsg = {txt: `Car ${carId} was succesfuly deleted`, type: 'success' }
                EventBusService.$emit(SHOW_MSG, userMsg)
                
             })
             .catch(err => {
                var userMsg = {txt: 'Car Delete Failed!', type: 'danger' }
                EventBusService.$emit(SHOW_MSG, userMsg)
                
            })
        },     
    }
    
}