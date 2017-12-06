import EventBusService, {SHOW_MSG} from '../services/EventBusService.js'

export default {
    template: `
    <div v-if="alive" class="alert" :class="alertClass" >
        {{msg.txt}}
    </div>
    `,
    created() {
        EventBusService.$on(SHOW_MSG, msg=>{
            // console.log('show-msg', msg);
            this.msg = msg;
            var delay = msg.delay || 2000;
            this.alive = true;
            setTimeout(() => {
                this.alive = false;
            }, delay)
        })
    },
    data() {
        return {
            alive : false,
            msg: null
        }
    },
    computed: {
        alertClass() {
            if (!this.msg) return;
            return `alert-${this.msg.type}`
        }
    }
}