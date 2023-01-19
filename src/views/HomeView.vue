<template>
  <main>
    <div class="card-wrapper">
      <v-welcome/>
    </div>
  </main>
</template>

<script>
import welcome from '../components/Welcome.vue'
export default {
  data() {
    return {
    }
  },
  components:{
    'v-welcome':welcome,
  },
  methods: {
    
  },
  mounted() {
  },
}
</script>

<style lang="scss">
.card-wrapper{
  max-width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>