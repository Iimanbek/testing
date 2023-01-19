<template>
    <div class="main_wrapper">
        <div class="result_wrapper">
            <div>
                <h1 class="name">{{ valueStore.personInfo.name }}</h1>
                <!-- <link>{{ valueStore.personInfo.email }}</link> -->
                <div class="email-wrap">
                    <label for="email">email:</label>
                    <a href="#" id="email">{{ valueStore.personInfo.email }}</a>
                    <p>gender: {{ valueStore.personInfo.gender }}</p>
                </div>
                <div>
                    <p>Верных ответов:</p>
                    <h1 class="name">{{ valueStore.ANSWERS }} / {{ procent }}%</h1>
                </div>
                <div class="btn-wrap">
                    <v-btn @click="returnnn">RETURN</v-btn>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapStores } from 'pinia';
import { useValueStore } from '../stores/getvalue';
export default {
    data() {
        return {
            procent:0
        }
    },
    methods: {
        getProcent(){
            this.procent = this.valueStore.ANSWERS / this.valueStore.dataQst.length * 100
        },
        async returnnn(){
            await this.$router.replace({ path: '/'})
        }
    },
    mounted() {
        this.getProcent()
    },
    computed:{
        ...mapStores(useValueStore)
    }
}
</script>
<style lang="scss">
.result_wrapper{
//   width: 50%;
  background: white;
  width: 500px;
  padding: 50px 30px;
  border-radius: 10px;
}
.main_wrapper{
    height: 100vh ;
    display: flex;
    justify-content: center;
    align-items: center;
}
.name{
    text-align: center;
    border-bottom: 1px solid #0066ff;
}
a{
    color: black ;
    font-size: 18px;
}
#email{
    margin-left: 10px;
}
.email-wrap{
    margin-bottom: 50px;
}
.btn-wrap{
    margin-top: 30px;
    display: flex;
    justify-content: center;
}
</style>