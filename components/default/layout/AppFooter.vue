<template>
  <footer class="app-footer">
    <p>Get to know me even deeper</p>
    <ul class="list-inline">
      <li
        v-for="(media, i) in socialMedia"
        :key="i"
        :class="media.type">
        <i :class="[`ic`, `ic-${media.type}`]"/>
        <a
          v-if="media.type === 'email'"
          :href="media.url"
          :title="media.title">
          {{ media.title }}
        </a>
        <a
          v-else
          :href="media.url"
          :title="media.title"
          rel="noreferrer"
          target="_blank">
          {{ media.title }}
        </a>
      </li>
    </ul>
    <p class="end">Made with love within 2 + {{ builtDays }} days.</p>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      builtDays: 0,
      socialMedia: [
        {
          type: 'email',
          title: 'Email',
          url: 'mailto:cahyadinugraha18@gmail.com',
        },
        {
          type: 'stackoverflow',
          title: 'StackOverflow',
          url: 'https://stackoverflow.com/users/5816907/chay22',
        },
        {
          type: 'github',
          title: 'Github',
          url: 'https://github.com/chay22',
        },
        {
          type: 'twitter',
          title: 'Twitter',
          url: 'https://twitter.com/chyir',
        },
        {
          type: 'facebook',
          title: 'Facebook',
          url: 'https://www.facebook.com/chay.nugraha',
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.app-footer {
  padding-top: 3rem;
  text-align: center;

  > .list-inline {
    justify-content: center;
    > li {
      display: flex;
      justify-content: center;
      padding: 0 0.5rem;
      align-items: center;

      > .ic {
        padding: 0 0.5rem;
        background-color: #fff;
        padding-right: 0;
      }

      > a {
        background-color: #fff;
        box-shadow: 1px 1px 1px #eee;
        padding: 0.25rem 0.5rem;
        border-radius: 0.25rem;
        color: #333;
        text-decoration: none;
      }
    }
  }

  .end {
    font-size: 80%;
    margin: 2.5rem 0 0;
    padding: 1rem;
    background-color: #e8ebec;
  }
}
</style>
