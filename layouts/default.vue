<template>
  <div class="app">
    <app-header />
    <nuxt/>
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '@/components/default/layout/AppHeader'
import AppFooter from '@/components/default/layout/AppFooter'

export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style>
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  color: #333;
  line-height: 1.5;
  background-color: #eef2f5;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

body,
button,
input,
select,
textarea {
  font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Helvetica,
    Arial, sans-serif;
}

p {
  margin-bottom: 0.5rem;
}

.img {
  max-width: 100%;
}

.app {
  display: flex;
  flex-direction: column;
}

.list-inline {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.list-inline > li {
  padding: 0.25rem 0.5rem;
  margin-bottom: 0.5rem;
}

.list-inline > li:not(:last-child) {
  margin-right: 0.5rem;
}
</style>
