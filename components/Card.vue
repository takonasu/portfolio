<template>
  <div class="column">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title has-text-grey">
          {{ year + '年 ' + title }}
        </p>
      </header>

      <div class="card-content">
        <div class="content has-text-centered">
          <div style="height:25vh;">
            <a :href="picture">
              <img
                :src="picture"
                size="is-large"
                type="is-primary"
                style="max-height:100%;"
              />
            </a>
          </div>
        </div>
        <b-taglist>
          <b-tag v-for="(tag, key) of tags" :key="key" type="is-primary">
            {{ tag }}
          </b-tag>
        </b-taglist>
        <b-collapse
          :open="viewYear !== 'all'"
          position="is-bottom"
          aria-id="contentIdForA11y1"
        >
          <a
            slot="trigger"
            slot-scope="props"
            aria-controls="contentIdForA11y1"
          >
            <b-icon :icon="!props.open ? 'menu-down' : 'menu-up'" />
            {{ !props.open ? '説明を表示' : '説明を非表示' }}
          </a>
          <p>
            {{ description }}
          </p>
        </b-collapse>
      </div>
      <footer class="card-footer">
        <div class="card-footer-item">
          <span>
            <slot />
          </span>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    year: {
      type: String,
      required: true
    },
    picture: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    viewYear: {
      type: String,
      required: true
    },
    tags: {
      type: Array,
      required: true
    }
  }
}
</script>
