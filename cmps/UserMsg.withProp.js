export default {
    template: `
    <div v-if="alive" class="alert" :class="alertClass" >
        {{msg.txt}}
    </div>
    `,
    props: {
        msg: Object
    },
    data() {
        return {
            alive : false,
            countryName: ''
        }
    },
    computed: {
        alertClass() {
            if (!this.msg) return;
            return `alert-${this.msg.type}`
        },
        msgToDisplay() {
            return this.msg.txt.toUpperCase();
        }
        
    },
    watch: {
        countryName(val, prevVal){
            console.log('Change from :', prevVal, 'to :', val);
        },
        msg(val, prevVal) {
            console.log('Change from :', prevVal, 'to :', val);
            if (val) {
                this.alive = true;
                setTimeout(() => {
                    this.alive = false;
                }, 50000)
            }

        }
    }



}