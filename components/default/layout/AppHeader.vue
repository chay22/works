<template>
  <div class="app-header">
    <div class="brand">
      <h1 class="title">Cahyadi Nugraha</h1>
    </div>

    <div class="logo">
      <img
        src="@/assets/img/cahyadinugraha-square-96x96.jpg"
        class="img">
    </div>

    <nav class="nav site-nav">
      <ul>
        <li
          v-for="(link, i) in navLinks"
          :key="i">
          <nuxt-link :to="link.url">{{ link.label }}</nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      navLinks: [
        {
          url: '/',
          label: 'Home'
        },
        {
          url: '/works',
          label: 'Works'
        },
        {
          url: '/about',
          label: 'About'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.app-header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  box-shadow: 1px 1px 1px #fff, 1px 1px 1px #969696;

  > .brand {
    > .title {
      font-size: 1rem;
    }
  }

  > .logo {
    position: absolute;
    bottom: -1rem;
    box-shadow: 0 0 0px 2px #dedede;
    border-radius: 50%;
    display: block;
    overflow: hidden;
    height: 50px;
    width: 50px;

    > .img {
      margin: 0;
    }
  }

  a {
    &.nuxt-link-exact-active,
    &.nuxt-link-active {
      position: relative;

      &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 1px;
        bottom: -0.675rem;
        left: 0;
        background-color: #777;
      }
    }
  }
}
.site-nav {
  > ul {
    list-style: none;
    padding: 0;

    > li {
      display: inline-block;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
  }

  a {
    color: inherit;
    text-decoration: none;

    &:hover,
    &.nuxt-link-exact-active,
    &.nuxt-link-active {
      color: #777;
    }
  }
}
</style>
