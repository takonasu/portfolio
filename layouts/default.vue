<template>
  <div class="has-navbar-fixed-top">
    <nav
      class="navbar header has-shadow has-background-primary is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <p class="title has-text-white">takonasu.tk</p>
        </a>
      </div>
    </nav>

    <section class="main-content columns is-gapless">
      <aside class="column is-2">
        <p class="menu-label is-hidden-touch">
          Menu
        </p>
        <ul class="menu-list is-info">
          <li v-for="(item, key) of items" :key="key">
            <nuxt-link :to="item.to" exact-active-class="is-active">
              <b-icon :icon="item.icon" /> {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </aside>

      <div class="container column is-10">
        <nuxt />
      </div>

      <b-button
        id="to_top"
        v-scroll-to="'body'"
        type="is-primary"
        rounded="true"
      >
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
          title: 'Home',
          icon: 'home',
          to: {
            name: 'index'
          }
        },
        {
          title: 'Product',
          icon: 'lightbulb',
          to: {
            name: 'product'
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
