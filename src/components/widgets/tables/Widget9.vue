<template>
  <!--begin::Tables Widget 9-->
  <div class="card" :class="widgetClasses">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bolder fs-3 mb-1"> </span>

        <span class="text-muted mt-1 fw-bold fs-7"></span>
      </h3>

      <div
        class="card-toolbar"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        data-bs-trigger="hover"
        title="Click to add a user"
      >
        <a
          href="#"
          class="btn btn-sm btn-light-primary"
          data-bs-toggle="modal"
          data-bs-target="#kt_modal_invite_friends"
        >
          <span class="svg-icon svg-icon-3">
            <inline-svg src="media/icons/duotune/arrows/arr075.svg" />
          </span>
          اضافة زبون جديد
        </a>
      </div>
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body py-3">
      <!--begin::Table container-->
      <div class="table-responsive">
        <!--begin::Table-->
        <table
          class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4"
        >
          <!--begin::Table head-->
          <thead>
            <tr class="fw-bolder text-muted">
              <th class="w-25px">
               
              </th>
              
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
                      class="form-check-input widget-9-check"
                      type="checkbox"
                      :value="index"
                    />
                  </div>
                </td>

                <td>
                  <div class="d-flex align-items-center">
                    <div class="symbol symbol-45px me-5">
                      <img :src="item.image" alt="" />
                    </div>
                    <div class="d-flex justify-content-start flex-column">
                      <a
                        href="#"
                        class="text-dark fw-bolder text-hover-primary fs-6"
                        >{{ item.name }}</a
                      >

                      <span
                        class="text-muted fw-bold text-muted d-block fs-7"
                        >{{ item.skills }}</span
                      >
                    </div>
                  </div>
                </td>

                <td class="d-none">
                  <a
                    href="#"
                    class="text-dark fw-bolder text-hover-primary d-block fs-6"
                    >{{ item.companyName }}</a
                  >
             
                </td>

                <td class="text-end">
                  <div class="d-flex flex-column w-100 me-2">
                    <div class="d-flex flex-stack mb-2">
                      <span class="text-muted me-2 fs-7 fw-bold">
                        نسبة اكتمال الطلب

                                                {{ item.value }}%

                      </span>
                    </div>

                    <div class="progress h-8px w-100">
                      <div
                        class="progress-bar"
                        :class="`bg-${item.color}`"
                        role="progressbar"
                        :style="{ width: item.value + '%' }"
                        :aria-valuenow="item.value"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
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
  <!--end::Tables Widget 9-->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "kt-widget-9",
  components: {},
  props: {
    widgetClasses: String,
  },
  setup() {
    const checked = ref(false);

    const list = [
      {
        image: "media/avatars/300-14.jpg",
        name: "منى منى",
        skills: "9566612",
        value: "50",
        color: "primary",
      },
      {
        image: "media/avatars/300-2.jpg",
        name: "اسماء اسماء",
        skills: "9566612",
        value: "30",
        color: "danger",
      },
      {
        image: "media/avatars/300-5.jpg",
        name: "Lebron Wayde",
        skills: "9566612",
        value: "60",
        color: "primary",
      },
      {
        image: "media/avatars/300-20.jpg",
        name: "Natali Goodwin",
        skills: "9566612",
        value: "50",
        color: "warning",
      },
      {
        image: "media/avatars/300-23.jpg",
        name: "Kevin Leonard",
        skills: "9566612",
        value: "90",
        color: "success",
      },
    ];

    return {
      list,
      checked,
    };
  },
});
</script>
