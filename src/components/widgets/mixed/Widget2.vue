<template>
  <!--begin::Mixed Widget 1-->
  <div class="card card-xxl-stretch">
    <!--begin::Header-->
    <div :class="`bg-${widgetColor}`" class="card-header border-0 py-5">
      <h3 class="card-title fw-bolder text-white"> احصائيات حول عدد الطرود</h3>
      <div class="card-toolbar">
        <!--begin::Menu-->
        <button
          type="button"
          :class="`btn-active-color-${widgetColor}`"
          class="btn btn-sm btn-icon btn-color-white btn-active-white border-0 me-n3"
          data-kt-menu-trigger="click"
          data-kt-menu-placement="bottom-end"
          data-kt-menu-flip="top-end"
        >
          <span class="svg-icon svg-icon-2">
            <inline-svg src="media/icons/duotune/general/gen024.svg" />
          </span>
        </button>
        <Dropdown3></Dropdown3>
        <!--end::Menu-->
      </div>
    </div>
    <!--end::Header-->
    <!--begin::Body-->
    <div class="card-body p-0">
      <!--begin::Chart-->
      <apexchart
        :class="`bg-${widgetColor}`"
        class="mixed-widget-2-chart card-rounded-bottom"
        :options="chartOptions"
        :series="series"
        height="200"
        type="area"
      ></apexchart>
      <!--end::Chart-->
      <!--begin::Stats-->

      <!--end::Stats-->
      <!--end::Body-->
    </div>
    <!--end::Mixed Widget 1-->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Dropdown3 from "@/components/dropdown/Dropdown3.vue";
import { getCSSVariableValue } from "@/assets/ts/_utils";

export default defineComponent({
  name: "widget-1",
  components: {
    Dropdown3,
  },
  props: {
    widgetClasses: String,
    widgetColor: String,
    strokeColor: String,
  },
  setup(props) {
    const labelColor = getCSSVariableValue("--bs-gray-500");
    const borderColor = getCSSVariableValue("--bs-gray-200");

    const color = getCSSVariableValue("--bs-" + props.widgetColor);

    const strokeColor = ref(props.strokeColor);

    const chartOptions = {
      chart: {
        fontFamily: "inherit",
        type: "area",
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
        sparkline: {
          enabled: true,
        },
        dropShadow: {
          enabled: true,
          enabledOnSeries: undefined,
          top: 5,
          left: 0,
          blur: 3,
          color: strokeColor.value,
          opacity: 0.5,
        },
      },
      plotOptions: {},
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "solid",
        opacity: 0,
      },
      stroke: {
        curve: "smooth",
        show: true,
        width: 3,
        colors: [strokeColor.value],
      },
      xaxis: {
        categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          style: {
            colors: labelColor,
            fontSize: "12px",
          },
        },
        crosshairs: {
          show: false,
          position: "front",
          stroke: {
            color: borderColor,
            width: 1,
            dashArray: 3,
          },
        },
      },
      yaxis: {
        min: 0,
        max: 80,
        labels: {
          show: false,
          style: {
            colors: labelColor,
            fontSize: "12px",
          },
        },
      },
      states: {
        normal: {
          filter: {
            type: "none",
            value: 0,
          },
        },
        hover: {
          filter: {
            type: "none",
            value: 0,
          },
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: "none",
            value: 0,
          },
        },
      },
      tooltip: {
        style: {
          fontSize: "12px",
        },
        y: {
          formatter: function (val) {
            return "$" + val + " thousands";
          },
        },
        marker: {
          show: false,
        },
      },
      markers: {
        colors: [color],
        strokeColor: [strokeColor.value],
        strokeWidth: 3,
      },
    };

    const series = [
      {
        name: "Net Profit",
        data: [30, 45, 32, 70, 40, 40, 40],
      },
    ];

    return {
      series,
      chartOptions,
    };
  },
});
</script>
