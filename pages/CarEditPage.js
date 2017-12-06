import EventBusService, {SHOW_MSG} from '../services/EventBusService.js'
import CarService from '../services/CarService.js'
// import UserFeedbackMixin from '../mixins/UserFeedbackMixin.js'



export default {
    // mixins: [UserFeedbackMixin],
    template: `
    <section>
    
    Add Car
        <form @submit.prevent="saveCar">
            <input type="text" v-model="carToUpdate.model" autofocus>
            <button>{{(carId)? 'Save' : 'Add'}}</button>
            <router-link tag="button" to="/">Cancel</router-link>
        </form>
    </section>
    
    `,
    data() {
        return {
            carToUpdate: CarService.emptyCar(),
            carId: +this.$route.params.carId,
            userMsg : null

        }
    },
    created() {
        if (!this.carId) return;
        CarService.getCarById(this.carId)
            .then(car => {
                this.carToUpdate = Object.assign({}, car)
            })
    },
    methods: {
        saveCar() {
            CarService.saveCar(this.carToUpdate)
                .then(addedCar => {
                    this.$router.push('/')
                })
                .catch(err => {
                    var userMsg = { txt: 'Cars Loaded Failed!', type: 'danger' }
                    EventBusService.$emit(SHOW_MSG, userMsg)
                })
        }
    }
    
}