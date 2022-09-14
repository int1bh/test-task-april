<template lang="pug">
  header
    input(type="checkbox" id="menu-checkbox")
    nav(role="navigation")
      label(for="menu-checkbox" class="toggle-button")
      ul(class="main-menu")
        li
          nuxt-link(exact no-prefetch active-class="active" class="nav-link" to="/") Игроки NBA
</template>

<style lang="scss">
  /* Меню  */
#menu-checkbox {
  /* чекбокс скрыт */
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
}
.main-menu {
  /* пункты меню скрыты */
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
  padding: 0;
  margin: 0;
}
.main-menu li {
  /* пункты меню расположены вертикально */
  /* каждый имеет ширину 100% */
  font-size: 1em;
  display: block;
  width: 100%;
}
.main-menu a {
  display: block;
  border-bottom: 1px solid blueviolet;
  color: lightslategray;
  padding: .5em;
  text-decoration: none;
}
.main-menu a:hover {
  text-decoration: underline;
}
.toggle-button {
  text-align: center;
  display: block;
  cursor: pointer;
  background-color: #5e878f;
  color: #fff;
}
.toggle-button:after {
  content: attr(\e804);
  display: block;
  margin: 10px 0;
  padding: 10px 30px;
}
#menu-checkbox:checked + nav[role="navigation"] .main-menu {
  /* когда чекбокс активен меню становится видимым */
  position: static;
}
#menu-checkbox:checked + nav[role="navigation"] .toggle-button:after {
  content: attr(data-close);
}

@media screen and (min-width: 720px) {
  .toggle-button {
    /* label скрыт */
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
  }
  .main-menu {
    /* меню отображается */
    position: static;
    margin: 0 auto;
    background-color: #5e878f;
    height: 30px;
  }
  .main-menu li {
    width: calc(100% / 8);
    text-align: center;
    display: inline-block;
    margin-right: -4px;
  }
  .main-menu a {
    display: inline-block;
    font-size: .8em;
    background-color: #3f707c;
    text-decoration: none;
    color: #fff;
    text-transform: capitalize;
    border-bottom: 0;
    border-radius: 10px;
  }
}
.toggle-button:after {
  font-family: 'fontello';
  content: "\e804";
  cursor: pointer;
  padding: 15px;
  font-size: 1.5em;
  text-align: center;
}
#menu-checkbox:checked + .main-menu .toggle-button:after {
  content: "\e804";
}
.toggle-button:before {
  content: attr(data-close);
  font-size: 1rem;
  position: relative;
  right: 3px;
  bottom: 3px;
}
.toggle-button:after {
  content: "\f0c9";
  font-family: 'FontAwesome';
  display: inline-block;
}
#menu-checkbox:checked + nav[role="navigation"] .menu {
  display: block;
}
#menu-checkbox:checked + nav[role="navigation"] .toggle-button:after {
  content: "\f0c9";
  font-family: 'FontAwesome';
  color: green;
}
#menu-checkbox:checked + nav[role="navigation"] .toggle-button:before {
  color: green;
}
</style>
