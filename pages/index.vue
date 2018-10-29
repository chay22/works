<template>
  <section class="container">
    <header class="header-section">
      <div class="image">
        <picture>
          <source
            media="(max-width: 768px)"
            srcset="@/assets/img/cahyadinugraha-square-360x360.jpg">
          <img
            src="@/assets/img/cahyadinugraha-square.jpg"
            alt="smiling me"
            class="img">
        </picture>
      </div>
      <h2 class="name">Cahyadi Nugraha</h2>
    </header>
    <div class="hero-section">
      <div class="screen-left" />
      <div class="screen">
        <p>As a self-taught, I've passionately been a full stack web developer for around 2 years. Spent those times for writing with PHP as the base, enhanced by Laravel to make them even more scaled, conveyed at its best with the most-used programming language, JavaScript.
        </p>
        <p>
          As of now, here are some sort of technology I've used in past development:
        </p>
        <div class="tech-list">
          <ul class="list-inline">
            <li class="php"><abbr title="PHP: Hypertext Preprocessor">PHP</abbr></li>
            <li class="mysql">MySQL/MariaDB</li>
            <li class="javascript">JavaScript</li>
            <li class="jquery">jQuery</li>
            <li class="bootstrap">Bootstrap</li>
            <li class="laravel">Laravel</li>
            <li class="vue">Vue.js</li>
            <li class="apache">Apache</li>
            <li class="nodejs">Node.js</li>
            <li class="electron">Electron</li>
            <li class="wordpress">Wordpress</li>
            <li class="scss">SCSS</li>
            <li class="css">CSS</li>
            <li class="html">HTML</li>
            <li class="schemaorg">Schema/Microdata</li>
          </ul>
        </div>
        <p>Not only limited by that, I've also tried to learn C#, TypeScript, NativeScript, etc.</p>
      </div>
      <div class="screen-right" />
    </div>

    <div class="work-section">
      <h2 class="title"><span class="bold">Some works</span> which I involved in</h2>
      <div class="work-list">
        <div
          v-for="(work, i) in works"
          :key="i"
          class="card">
          <div class="body">
            <img
              v-if="work.imgUrl"
              :src="work.imgUrl"
              class="img">
            <div
              v-else-if="work.imgSpriteClass"
              :class="work.imgSpriteClass" />
            <component
              :is="work.isExternalUrl ? 'a' : 'nuxt-link'"
              :to="work.isExternalUrl ? undefined : work.url"
              :href="work.isExternalUrl ? work.url : undefined"
              :target="work.isExternalUrl ? '_blank' : undefined"
              rel="noreferrer"
              class="content">
              <h1 class="title">{{ work.title }}</h1>
            </component>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
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
      ],
      works: [
        {
          imgSpriteClass: 'bgw-firstmedia',
          url: 'https://www.firstmedia.com',
          isExternalUrl: true,
          title: 'First Media'
        },
        {
          imgSpriteClass: 'bgw-rw13',
          url: '/rw13',
          title: 'RW 13 Buah Batu'
        },
        {
          imgSpriteClass: 'bgw-platypus-wpo',
          url: '/platypus-wpo',
          title: 'Platypus WPO'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
$screenHeight: auto;

.app-header {
  display: none;
}

.container {
  min-height: 95vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.work-list {
  display: flex;
  width: 100%;
  flex-wrap: wrap;

  > .card {
    width: 25%;
    padding: 1rem;

    > .body {
      background-color: #fff;
      border-radius: 0.25rem;
      box-shadow: 1px 1px 3px #ccc9c9, 0px 1px 3px #d6d6d6;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    .img,
    [class^='bgw-'] {
      border-top-left-radius: 0.25rem;
      border-top-right-radius: 0.25rem;
      width: 100%;
    }

    [class^='bgw-'] {
      height: 150px;
    }

    .content {
      padding: 1rem;
      display: block;
      width: 100%;
    }

    .title {
      font-size: 1.2rem;
      font-weight: normal;
      margin: 0;
    }
  }
}

.header-section {
  width: 100%;
  padding: 4rem 1.5rem 2rem;
  text-align: center;

  > .image {
    width: 150px;
    border-radius: 50%;
    display: block;
    overflow: hidden;
    height: 150px;
    margin: 0 auto 1rem;
    border: 1px solid #dadada;
    box-shadow: 0 0 0px 4px #d8d8d8;
  }
}

.hero-section {
  position: relative;
  width: 100%;
  padding: 2rem 1.5rem 5rem;
  margin: 0 auto;
  display: flex;

  .screen-area {
    width: 100%;
    display: flex;
    background-color: #fff;
    margin: 0 auto;
    position: relative;
  }

  .screen-left,
  .screen-right {
    width: 15%;
    height: $screenHeight;
    z-index: 4;
    background-color: #eef2f5;
  }

  .screen-left {
    border-bottom-left-radius: 1rem;
  }

  .screen-right {
    border-bottom-right-radius: 1rem;
  }

  .screen {
    width: 70%;
    height: $screenHeight;
    box-shadow: 0 4px 22px rgba(197, 203, 207, 0.6);
    position: relative;
    z-index: 4;
    margin: 0 auto -2rem;
    background-color: #fff;
    padding: 1.75rem 1.5rem;
    border-radius: 1rem;
    box-shadow: -1px -4px 13px 0px rgba(197, 203, 207, 0.6);

    &:before,
    &:after {
      width: 100%;
      position: absolute;
      left: 0;
      background-color: #fff;
    }

    &:before {
      top: -0.5rem;
      height: 0.5rem;
      border-top-left-radius: 1rem;
      border-top-right-radius: 1rem;
      box-shadow: -1px -4px 13px 0px rgba(197, 203, 207, 0.6);
    }

    &:after {
      bottom: -1rem;
      height: 1rem;
      border-bottom-left-radius: 1rem;
      border-bottom-right-radius: 1rem;
      box-shadow: 3px 7px 20px rgba(197, 203, 207, 0.38);
    }

    > .inner {
      width: 100%;
      height: 100%;
      background-color: transparent;
      border: 1rem solid #fff;
    }

    &:before,
    &:after,
    > .inner {
      pointer-events: none;
    }
  }

  .summary {
    width: 100%;
  }
}

.work-section {
  padding: 2rem 1.5rem;
  position: relative;
  background-color: #1f6e9c;

  &:before {
    content: '';
    width: 100%;
    position: absolute;
    height: 7.1rem;
    top: -7rem;
    left: 0;
    background-color: inherit;
  }

  > .title {
    font-size: 2rem;
    color: #fff;
    margin-bottom: 3rem;

    > .bold {
      font-size: 3.5rem;
      display: block;
    }
  }

  .work-list {
    background-color: #226a94;
    border-radius: 0.25rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
}

.tech-list {
  margin-bottom: 1rem;

  .list-inline {
    flex-wrap: wrap;

    > li {
      background-color: #ececec;
      border: 1px solid #eee;
      border-radius: 0.25rem;
    }
  }
}
</style>
