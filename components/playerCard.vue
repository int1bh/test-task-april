<template lang="pug">
  div(id="login-container")
    div(class="profile-img")
    h1 {{ playerData.first_name }} {{ playerData.last_name }}
    div(class="description")
      h3 Дивизион: {{ playerData.team.division }}
      h3 Команда: {{ playerData.team.name }}
    button
      a(href="#" @click.prevent="openDetail(playerData.id)") Подробнее
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'PlayerCard',
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
  height: 300px;
  width: 350px;
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
h3 {
    font-family: 'Sriracha', arial, sans-serif;
    text-align: center;
    margin-bottom: 1px;
    color: $otherAccentTwo;
  }
  .description{
    margin-bottom: 20px;
  }
  button {
    width: 80%;
    height: 80px;
    font-size: 2rem;
    margin: 30px 10% 0 10%;
    color: $background;
    border: none;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
    border-radius: 5px;
    background: linear-gradient(45deg, $accent, $otherAccent, $otherAccent, $accent);
    background-size: 300% 300%;
    outline: none;
    transition: all 200ms ease-in-out;
    &:hover{
      box-shadow: 5px 5px 5px rgba(0,0,0,0.5);
      transform: translateY(2px);
      -webkit-animation: gradientBG 1.5s ease-in-out forwards;
      animation: gradientBG 1.5s ease-in-out forwards;
      cursor: pointer;
    }
    &:active {
      box-shadow: 3px 3px 3px rgba(0,0,0,0.5);
      transform: translateY(4px);
    }
  }
  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: $darkBackground;
    color: white;
    width: 100%;
    position: absolute;
    bottom: 0;
    height: 30px;
    padding: 0 20px;
    margin-left: -20px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    div {
      display: flex;
      .fa-heart {
        color: $accent;
      }
      p:first-child{
        margin-right: 10px;
        border-right: 4px solid white;
        padding-right: 10px;
      }
    }
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
