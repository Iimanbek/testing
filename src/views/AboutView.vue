<template>
  <div class="about">
    <div>
      <h3>{{ qst?.question }}</h3>
    </div>
    <button @click="routerControl">routerControl</button>
  </div>
</template>

<script>
import { mapStores } from 'Pinia'
import { useValueStore } from '../stores/getvalue'
export default {
  data: () => ({
    qst: null
  }),
  methods: {
    async getData(){
      const URL = `http://localhost:3000/questions/${this.$route.params.id}`
      const res = await fetch(URL)
      this.qst = await res.json()
    },
    async routerControl(){
      const idd =this.$route.params.id
      this.$router.replace({ path: `/about/${+idd + 1}`})
      if (this.$route.params.id >= this.valueStore.dataQst.length ){
        this.$router.replace({ path: '/finsh'})
      }
    }
  },
  mounted() {
    this.getData()
    this.valueStore.getQST()
  },
  updated() {
    this.getData()
  },
  computed:{
    ...mapStores(useValueStore)
  }
}
</script>

<style scoped lang="scss">
h3{
  color: white;
}

</style>
