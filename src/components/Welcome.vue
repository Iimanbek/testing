<template>
    <v-form
    ref="form"
    v-model="valid"
    lazy-validation>
    <v-text-field
      v-model="valueStore.personInfo.name"
      :counter="20"
      :rules="nameRules"
      label="Firstname and Lastname"
      required></v-text-field>
    <v-text-field
      v-model="valueStore.personInfo.email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-select
      v-model="valueStore.personInfo.gender"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="Gender"
      required
    ></v-select>

    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
      color="primary"
    ></v-checkbox>
    
    <v-btn
      color="error"
      class="mr-4"
      @click="reset">
      Reset Form
    </v-btn>

    <v-btn
      color="success"
      class="mr-4"
      @click="validate" 
      >
      Continue
    </v-btn>

  </v-form>
</template>


<script> 
import { mapStores } from 'pinia'
import { useValueStore } from '../stores/getvalue.js'
export default {
  data: () => ({
    valid: true,
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 20) || 'Name must be less than 10 characters',
    ],
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    select: null,
    items: [
      'Male',
      'Female',
      'Others',
    ],
    checkbox: false,
  }),
  methods: {
    async validate(){
      const { valid } = await this.$refs.form.validate()
      if (valid){
        this.$router.push('/about/1')
      }
    },
    reset () {
      this.$refs.form.reset()
    },
  },
  computed:{
    ...mapStores( useValueStore), 
  }
}
</script>

<style lang="scss">
.v-form{
  background: white;
  width: 500px;
  padding: 50px 30px;
  border-radius: 10px;
}
.v-selection-control__input {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
}
.v-selection-control__input input{
  opacity: 1 !important; 
  width: 50% !important;
  margin-left: 10px ;
}
.v-selection-control__wrapper{
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
}
</style>