<template lang="pug">
  div(id="login-container")
    div(class="profile-img")
    h1
      a(href="#" @click.prevent="openDetail(playerData.id)") {{ playerData.first_name }} {{ playerData.last_name }}
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'PlayerCardMin',
  props: {
    playerData: {
      type: Object,
      default: null,
      required: true
    }
  },
  methods: {
    openDetail (playerData: number): void {
      this.$router.push('/' + playerData)
    }
  }
})
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto|Sriracha&display=swap');
$background: #fffffb;
$accent: #ff6b6c;
$otherAccent: #ffc145;
$otherAccentTwo: #8dd84f;
$darkBackground: #5b5f97;
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: "Roboto", arial, sans-serif;
  color: #222
}
a {
  text-decoration: none;
}
#login-container {
  height: 80px;
  width: 93vw;
  padding: 20px;
  border-radius: 5px;
  background: $background;
  position: relative;
  box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
  .profile-img {
    height: 60px;
    width: 60px;
    background: url('https://novosti-dny.com/uploads/posts/2019-06/chto-budet-c-nba-dalshe-konec-epohi-gsv-novosti-ussuriyska_2.jpg');
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 10px;
    left: 15px;
    border-radius: 50%;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
  }
  h1 {
    font-family: 'Sriracha', arial, sans-serif;
    text-align: center;
    margin-bottom: 20px;
    color: $otherAccent;
  }
}

@-webkit-keyframes gradientBG {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
  // 100% {
  //   background-position: 0% 50%;
  // }
}
@keyframes gradientBG {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
  // 100% {
  //   background-position: 0% 50%;
  // }
}
</style>
