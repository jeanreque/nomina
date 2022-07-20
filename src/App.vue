<template>
  <template v-if="user">

    <router-view/>

    </template>
    <Auth v-if="!user && user !== undefined"/>
    </template>

<script>
import {onMounted , computed} from "vue"
import {useStore} from "vuex"
import {auth , app} from "./utils/firebase"
import Auth from "./views/Auth.vue"
export default {
  name : 'App',
  components : {
    Auth
  },
  setup() {
    const store = useStore()
    //const user = store.state.user
    const user = computed(() => store.state.user)
    onMounted(() => {
      // console.log('HELLO')
      auth.onAuthStateChanged((user) => {
        console.log('User', user)
        //store.commit("setUser", user)
         store.commit("setUser", {name : "Jean"})
      })
      
    })
    
    return {
      user
    }

  },
}
</script>


<style lang="scss">


</style>
