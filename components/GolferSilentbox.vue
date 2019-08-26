<template>
  <b-row>
    <b-col>
      <silentbox-group class="row">
        <silentbox-item
          v-for="(mediaNode, i) in media"
          :key="i"
          :src="mediaNode.source"
          :description="mediaNode.description"
          :autoplay="true"
          class="col-12 col-sm-6 col-md-4 mb-3"
        >
          <!-- Method 1: img element -->
          <!-- <img class="thumbnail-img" :src="mediaNode.thumbnail" /> -->
          <b-img
            :src="mediaNode.thumbnail"
            height="250"
            class="thumbnail-img"
            :alt="mediaNode.description"
          ></b-img>

          <font-awesome-icon
            v-if="mediaNode.source.includes('youtube')"
            :icon="['fab', 'youtube']"
            class="icon-overlay"
          />

          <!-- Method 2: div element with background -->
          <!-- <div
                class="thumbnail-background"
                :style="{ backgroundImage: 'url(' + mediaNode.thumbnail + ')' }"
          ></div>-->
        </silentbox-item>
      </silentbox-group>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'GolferSilentbox',
  props: {
    media: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.thumbnail-img {
  cursor: pointer;
  width: 100%;
  object-fit: cover;
  box-shadow: 2px 5px 8px #888888;
  border: 1px solid lightgrey;
}

.silentbox-item {
  position: relative;
}

.icon-overlay {
  position: absolute;
  top: 5px;
  right: 20px;
  color: #c4302b;
}

.thumbnail-background {
  background-size: cover;
  background-color: #ccc;
  background-repeat: no-repeat;
  background-position: center center;
  cursor: pointer;
  /* height: 200px; */
  /* box-shadow: 5px 10px 8px #888888; */
}
</style>
