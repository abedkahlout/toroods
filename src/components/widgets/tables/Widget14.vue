<template>
  <!--begin::Tables Widget 13-->
  <div :class="widgetClasses" class="card">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bolder fs-3 mb-1">قائمة الزبائن</span>

        <span class="text-muted mt-1 fw-bold fs-7">اكثر من 500 زبون</span>
      </h3>
      <div class="card-toolbar">
        <!--begin::Menu-->
        <button
          type="button"
          class="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
          data-kt-menu-trigger="click"
          data-kt-menu-placement="bottom-end"
          data-kt-menu-flip="top-end"
        >
          <span class="svg-icon svg-icon-2">
            <inline-svg src="media/icons/duotune/general/gen024.svg" />
          </span>
        </button>
        <Dropdown2></Dropdown2>
        <!--end::Menu-->
      </div>
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body py-3">
      <!--begin::Table container-->
      <div class="table-responsive">
        <!--begin::Table-->
        <table
          class="table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3"
        >
          <!--begin::Table head-->
          <thead>
            <tr class="fw-bolder text-muted">
              <th class="w-25px">
                <div
                  class="form-check form-check-sm form-check-custom form-check-solid"
                >
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="1"
                    data-kt-check="true"
                    data-kt-check-target=".widget-13-check"
                  />
                </div>
              </th>
              <th class="min-w-150px">اسم الزبون</th>
              <th class="min-w-140px">رقمه</th>
              <th class="min-w-140px">طريقة الدفع</th>
              <th class="min-w-140px">عدد الطرود</th>
        
              <th class="min-w-100px text-center">الفعالية</th>
            </tr>
          </thead>
          <!--end::Table head-->

          <!--begin::Table body-->
          <tbody>
            <template v-for="(item, index) in list" :key="index">
              <tr>
                <td>
                  <div
                    class="form-check form-check-sm form-check-custom form-check-solid"
                  >
                    <input
                      class="form-check-input widget-13-check"
                      type="checkbox"
                      value="1"
                    />
                  </div>
                </td>

                <td>
                  <a
                    href="#"
                    class="text-dark fw-bolder text-hover-primary fs-6"
                    >{{ item.orderid }}</a
                  >
                </td>

                <td>
                  <a
                    href="#"
                    class="text-dark fw-bolder text-hover-primary d-block mb-1 fs-6"
                    >{{ item.company.name }}</a
                  >
                  <span class="text-muted fw-bold text-muted d-block fs-7"
                    > {{ item.country.code }}</span
                  >
                </td>

                <td>
                  <a
                    href="#"
                    class="text-dark fw-bolder text-hover-primary d-block mb-1 fs-6"
                    >{{ item.date.value }}</a
                  >
                  <span class="text-muted fw-bold text-muted d-block fs-7"
                    > {{ item.date.remarks }}</span
                  >
                </td>

                <td>
                  <a
                    href="#"
                    class="text-dark fw-bolder text-hover-primary d-block mb-1 fs-6"
                    >{{ item.company.name }}</a
                  >
                
                </td>

               

                <td class="text-center">
                

                  <a
                    href="#"
                    class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                  >
                    <span class="svg-icon svg-icon-3">
                      <inline-svg src="media/icons/duotune/art/art005.svg" />
                    </span>
                  </a>

                
                </td>
              </tr>
            </template>
          </tbody>
          <!--end::Table body-->
        </table>
        <!--end::Table-->
      </div>
      <!--end::Table container-->
    </div>
    <!--begin::Body-->
  </div>
  <!--end::Tables Widget 13-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Dropdown2 from "@/components/dropdown/Dropdown2.vue";

export default defineComponent({
  name: "kt-widget-12",
  components: {
    Dropdown2,
  },
  props: {
    widgetClasses: String,
  },
  setup() {
    const list = [
      {
        orderid: "محمد محمد",
        country: {
          name: "Brasil",
        },
        date: {
          value: "05/28/2020",
        },
      
        company: {
          name: "0599855565",
          name3: "56",
        },
       
      },
      {
        orderid: "محمد محمد",
        country: {
          name: "Brasil",
        },
        date: {
          value: "05/28/2020",
        },
      
        company: {
          name: "0599855565",
        },
       
      },
      {
        orderid: "محمد محمد",
        country: {
          name: "Brasil",
        },
        date: {
          value: "05/28/2020",
        },
      
        company: {
          name: "0599855565",
        },
      
      },
        {
        orderid: "محمد محمد",
        country: {
          name: "Brasil",
        },
        date: {
          value: "05/28/2020",
        },
      
        company: {
          name: "0599855565",
        },
        
      },
        {
        orderid: "محمد محمد",
        country: {
          name: "Brasil",
        },
        date: {
          value: "05/28/2020",
        },
      
        company: {
          name: "0599855565",
        },
        
      },
    ];

    return {
      list,
    };
  },
});
</script>
