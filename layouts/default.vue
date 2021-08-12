<template>
  <div class="has-navbar-fixed-top">
    <b-navbar :spaced="true" :fixed-top="true" type="is-primary">
      <template #start>
        <b-navbar-item
          v-for="(item, key) of items"
          :key="key"
          :href="item.to.name"
        >
          {{ item.title }}
        </b-navbar-item>
      </template>
    </b-navbar>

    <section class="main-content columns is-gapless">
      <div class="container">
        <nuxt />
      </div>

      <b-button id="to_top" v-scroll-to="'body'" type="is-primary" rounded>
        <b-icon pack="fas" icon="arrow-up" />
      </b-button>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'プロフィール',
          icon: 'home',
          to: {
            name: '/'
          }
        },
        {
          title: '制作物',
          icon: 'lightbulb',
          to: {
            name: '/product'
          }
        },
        {
          title: '趣味',
          icon: 'binoculars',
          to: {
            name: '/hobby'
          }
        }
      ]
    }
  },
  head: {
    bodyAttrs: {
      class: 'has-navbar-fixed-top'
    }
  }
}
</script>
<style lang="scss">
// Import Bulma's core
@import '~bulma/sass/utilities/_all';

// Set your colors

$primary: #31b3ff;
$primary-invert: findColorInvert($primary);
$twitter: #4099ff;
$twitter-invert: findColorInvert($twitter);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
  'white': (
    $white,
    $black
  ),
  'black': (
    $black,
    $white
  ),
  'light': (
    $light,
    $light-invert
  ),
  'dark': (
    $dark,
    $dark-invert
  ),
  'primary': (
    $primary,
    $primary-invert
  ),
  'info': (
    $info,
    $info-invert
  ),
  'success': (
    $success,
    $success-invert
  ),
  'warning': (
    $warning,
    $warning-invert
  ),
  'danger': (
    $danger,
    $danger-invert
  ),
  'twitter': (
    $twitter,
    $twitter-invert
  ),
  'colorset1': (
    #d2eeff,
    findColorInvert(#d2eeff)
  )
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import '~bulma';
@import '~buefy/src/scss/buefy';

body {
  min-height: 100vh;
}

body::before {
  content: '';
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100vh;
  background: repeating-linear-gradient(
    -45deg,
    #d2eeff,
    #d2eeff 15px,
    #6ecaff 15px,
    #6ecaff 20px
  );
}

#to_top {
  position: fixed;
  right: 1rem;
  bottom: 1rem;
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s;
}
.page-enter,
.page-leave-active {
  opacity: 0;
}
</style>
