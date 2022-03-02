<template>
 <div class="row g-5 g-xl-8">
    <div class="col-xl-4">
      <StatisticsWidget5
        widget-classes="card-xl-stretch mb-xl-8"
        svg-icon="media/icons/duotune/general/gen032.svg"
        color="white"
        icon-color="primary"
        title="1000"
        description="زبون "
      ></StatisticsWidget5>
    </div>
     <div class="col-xl-4">
      <StatisticsWidget5
        widget-classes="card-xl-stretch mb-xl-8"
        svg-icon="media/icons/duotune/general/gen032.svg"
        color="white"
        icon-color="primary"
        title="5000"
        description="طلب  مكتمل"
      ></StatisticsWidget5>
    </div>
     <div class="col-xl-4">
      <StatisticsWidget5
        widget-classes="card-xl-stretch mb-xl-8"
        svg-icon="media/icons/duotune/general/gen032.svg"
        color="white"
        icon-color="primary"
        title="195"
        description="طلب غير مكتمل "
      ></StatisticsWidget5>
    </div>

    </div>

  <!--begin::Dashboard-->
  <div class="row gy-5 g-xl-8">
    <div class="col-xxl-4">
      <MixedWidget2
        widget-classes="card-xl-stretch mb-xl-8"
        widget-color="white"
        chart-height="200"
        stroke-color="#7E8299 "
      ></MixedWidget2>
    </div>


  </div>

  <div class="row gy-5 gx-xl-8">
    <div class="col-xxl-4">
    </div>
    <div class="col-xxl-8">
      <TableWidget9
        widget-classes="card-xxl-stretch mb-5 mb-xl-8"
      ></TableWidget9>
    </div>
  </div>

  <div class="row gy-5 g-xl-8">
   
  </div>


  <!--end::Dashboard-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import TableWidget9 from "@/components/widgets/tables/Widget9.vue";
import MixedWidget2 from "@/components/widgets/mixed/Widget2.vue";
import { setCurrentPageTitle } from "@/core/helpers/breadcrumb";
import StatisticsWidget5 from "@/components/widgets/statsistics/Widget5.vue";


export default defineComponent({
  name: "dashboard",
  components: {
    TableWidget9,
    MixedWidget2,
    StatisticsWidget5
  },
  setup() {
    onMounted(() => {
      setCurrentPageTitle("Dashboard");
    });
  },
});
</script>
