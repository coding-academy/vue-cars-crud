export default {
    created() {
        // console.log('Mixin is Here!');
    },
    data() {
        return {
            userMsg : null
        }
    },
    methods: {
        showUserMsg(userMsg, delay=1000) {
            this.userMsg = userMsg;
            setTimeout(()=>{this.userMsg = null}, delay)
        }
    },
    computed : {
        alertClass() {
            if (!this.userMsg) return;
            return `alert-${this.userMsg.type}`
        }
    }    

    
}