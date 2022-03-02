<template>
  <!--begin::Card-->
  <div :class="`card pt-4 ${cardClasses}`">
    <!--begin::Card header-->
    <div class="card-header border-0">
      <!--begin::Card title-->
      <div class="card-title">
        <h2>الاشعارات</h2>
      </div>
      <!--end::Card title-->

      <!--begin::Card toolbar-->
      <div class="card-toolbar">
        <!--begin::Button-->
        <button type="button" class="btn btn-sm btn-light-primary">
          <span class="svg-icon svg-icon-3">
            <inline-svg src="media/icons/duotune/files/fil021.svg" />
          </span>
          حفظ
        </button>
        <!--end::Button-->
      </div>
      <!--end::Card toolbar-->
    </div>
    <!--end::Card header-->

    <!--begin::Card body-->
    <div class="card-body py-0">
      <!--begin::Table wrapper-->
      <div class="table-responsive">
        <!--begin::Table-->
        <table
          class="table align-middle table-row-dashed fw-bold text-gray-600 fs-6 gy-5"
          id="kt_table_customers_logs"
        >
          <!--begin::Table body-->
          <tbody>
            <template v-for="(log, i) in logs" :key="i">
              <tr>
                <!--begin::Badge--->
                <td class="min-w-70px">
                  <div :class="`badge badge-light-${log.color}`">
                    {{ log.code }}
                  </div>
                </td>
                <!--end::Badge--->

                <!--begin::Status--->
                <td>
                  {{ log.message }}
                </td>
                <!--end::Status--->

                <!--begin::Timestamp--->
                <td class="pe-0 text-end min-w-200px">
                  {{ log.date }}
                </td>
                <!--end::Timestamp--->
              </tr>
            </template>
          </tbody>
          <!--end::Table body-->
        </table>
        <!--end::Table-->
      </div>
      <!--end::Table wrapper-->
    </div>
    <!--end::Card body-->
  </div>
  <!--end::Card-->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "logs",
  components: {},
  props: {
    cardClasses: String,
  },
  setup() {
    const logs = ref([
      {
        code: "تمت بنجاح",
        color: "success",
        message: "هذا النص بديل للاشعارات",
        date: "10 Mar 2021, 11:05 am",
      },
      {
        code: "قيد الطلب",
        color: "warning",
        message: "هذا النص بديل للاشعارات",
        date: "15 Apr 2021, 6:43 am",
      },
      {
        code: "تمت بنجاح",
        color: "success",
        message: "هذا النص بديل للاشعارات",
        date: "15 Apr 2021, 6:43 am",
      },
      {
        code: "لم يتم الارسال",
        color: "danger",
        message: "هذا النص بديل للاشعارات",
        date: "10 Nov 2021, 2:40 pm",
      },
      {
        code: "تمت بنجاح",
        color: "success",
        message: "هذا النص بديل للاشعارات",
        date: "05 May 2021, 10:10 pm",
      },
      {
        code: "لم يتم الارسال",
        color: "danger",
        message: "هذا النص بديل للاشعارات",
        date: "20 Dec 2021, 11:05 am",
      },
      {
        code: "تمت بنجاح",
        color: "success",
        message: "هذا النص بديل للاشعارات",
        date: "10 Mar 2021, 8:43 pm",
      },
      {
        code: "قيد الطلب",
        color: "warning",
        message: "هذا النص بديل للاشعارات",
        date: "20 Dec 2021, 2:40 pm",
      },
      {
        code: "تمت بنجاح",
        color: "success",
        message: "هذا النص بديل للاشعارات",
        date: "25 Oct 2021, 11:05 am",
      },
      {
        code: "قيد الطلب",
        color: "warning",
        message: "هذا النص بديل للاشعارات",
        date: "19 Aug 2021, 6:43 am",
      },
      {
        code: "تمت بنجاح",
        color: "success",
        message: "هذا النص بديل للاشعارات",
        date: "25 Oct 2021, 11:05 am",
      },
      {
        code: "لم يتم الارسال",
        color: "danger",
        message: "هذا النص بديل للاشعارات",
        date: "20 Dec 2021, 11:05 am",
      },
    ]);

    return {
      logs,
    };
  },
});
</script>
