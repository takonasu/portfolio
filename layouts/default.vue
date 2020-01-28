<template>
  <div>
    <nav
      class="navbar header has-shadow has-background-info"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a
          class="navbar-item"
          href="/"
        >
        <p class="title has-text-white">takonasu.tk</p>
        </a>
      </div>
    </nav>

    <section class="main-content columns" style="box-sizing: border-box;max-width:100vw;">
      <aside class="column is-2">
        <p class="menu-label is-hidden-touch">
          Menu
        </p>
        <ul class="menu-list is-info">
          <li
            v-for="(item, key) of items"
            :key="key"
          >
            <nuxt-link
              :to="item.to"
              exact-active-class="is-active"
            >
              <b-icon :icon="item.icon" /> {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </aside>

      <div class="container column is-10">
        <nuxt />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Product',
          icon: 'lightbulb',
          to: { name: 'product' }
        }
      ]
    }
  }
}
</script>
