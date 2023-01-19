<template>
  <div class="about">
    <div class="cardd-wrapper">
      <div>
        <h3>{{ qst?.question }}</h3>
          <v-radio-group class="rssdio-group" v-model="valueStore.valueRadio">
            <v-radio
                :label="opt"
                color="primary"
                :value="opt"
                v-for="opt in qst?.variants"
            ></v-radio>
          </v-radio-group>
      </div>

      <div>
        <v-btn 
        class="nextBtn"
        variant="flat"
        color="#0066ff"
        @click="routerControl">Next</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import { mapStores } from 'pinia'
import { useValueStore } from '../stores/getvalue'
export default {
  data: () => ({
    qst: null,
    qstAnswers:null,
  }),
  methods: {
    async getData(){
      const URL = `http://localhost:3000/questions/${this.$route.params.id}`
      const res = await fetch(URL)
      this.qst = await res.json()

      const URL_ANS = `http://localhost:3000/answers/${this.$route.params.id}`
      const res_ANS = await fetch(URL_ANS)
      this.qstAnswers = await res_ANS.json()
    },
    async routerControl(){
      if (this.valueStore.valueRadio){
        const idd =this.$route.params.id
        this.$router.replace({ path: `/about/${+idd + 1}`})
        if (this.$route.params.id >= this.valueStore.dataQst.length ){
          this.$router.replace({ path: '/finsh'})
        }
        if (this.qstAnswers.answer === this.valueStore.valueRadio) {
          this.valueStore.ANSWERS += 1
          console.log('correct',this.valueStore.ANSWERS)
        }
      }


    }
  },
  mounted() {
    // this.getData()
    this.valueStore.getQST()
    
  },
  updated() {
    // this.getData()
    console.log('skdjnsd');

  },
  watch: { 
  '$route.params.id': {
    handler: function() {
      this.getData()
    },
    deep: true,
    immediate: true
  }
},
  computed:{
    ...mapStores(useValueStore)
  }
}
</script>

<style scoped lang="scss">
.about{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
h3{
  color: black;
  border-bottom: 1px solid #0066ff;
  padding-bottom: 5px;
}
.cardd-wrapper{
  background: white;
  width: 500px;
  padding: 50px 30px;
  border-radius: 10px;
}
.nextBtn{
  color: white ;
}
.rssdio-group{
  margin-top: 10px ;
}
</style>
