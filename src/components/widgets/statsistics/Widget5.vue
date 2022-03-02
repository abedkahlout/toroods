<template>
  <!--begin::Statistics Widget 5-->
  <a href="#" :class="[widgetClasses, `bg-${color}`]" class="card hoverable">
    <!--begin::Body-->
    <div class="card-body">
      <!-- <span :class="`svg-icon-${iconColor}`" class="svg-icon d-block svg-icon-3x mx-n1 my-5">
        <inline-svg :src="svgIcon" />
      </span> -->
      <div :class="`text-inverse-${color}`" class="fw-bolder d-inline fs-1  mt-5">
        {{ title }}
        
      </div>
        <div :class="`text-inverse-${color}`" class="fw-bolder d-inline fs-3 m-5" >
        {{ description }}
      </div>

    </div>
    <!--end::Body-->
  </a>
  <!--end::Statistics Widget 5-->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "kt-widget-5",
  props: {
    widgetClasses: String,
    color: String,
    iconColor: String,
    svgIcon: String,
    title: String,
    description: String,
  },
  components: {},
});
</script>
