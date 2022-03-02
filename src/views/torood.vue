<template>
  <!--begin::Card-->
  <div class="card">
    <!--begin::Card header-->
    <div class="card-header border-0 pt-6">
      <!--begin::Card title-->
      <div class="card-title">
        <!--begin::Search-->
        <div class="d-flex align-items-center position-relative my-1">
          <span class="svg-icon svg-icon-1 position-absolute ms-6">
            <inline-svg src="media/icons/duotune/general/gen021.svg" />
          </span>
          <input
            type="text"
            data-kt-subscription-table-filter="search"
            class="form-control form-control-solid w-250px ps-14"
            placeholder="البحث عن الطرود"
            
          />
        </div>
        <!--end::Search-->
      </div>
      <!--begin::Card title-->

      <!--begin::Card toolbar-->
      <div class="card-toolbar">
        <!--begin::Toolbar-->
        <div
          class="d-flex justify-content-end"
          data-kt-subscription-table-toolbar="base"
        >
          <!--begin::Export-->
          <button
            type="button"
            class="btn btn-light-primary me-3"
          >
            <span class="svg-icon svg-icon-2">
              <inline-svg src="media/icons/duotune/arrows/arr078.svg" />
            </span>
            تصدير
          </button>
          <!--end::Export-->

          <!--begin::Add subscription-->
          <router-link
            to="/subscriptions/add-subscription"
            class="btn btn-primary"
          >
            <span class="svg-icon svg-icon-2">
              <inline-svg src="media/icons/duotune/arrows/arr075.svg" />
            </span>
            اضافة 
          </router-link>
          <!--end::Add subscription-->
        </div>
        <!--end::Toolbar-->

        <!--begin::Group actions-->
        <div
          class="d-flex justify-content-end align-items-center d-none"
          data-kt-subscription-table-toolbar="selected"
        >
          <div class="fw-bolder me-5">
            <span
              class="me-2"
              data-kt-subscription-table-select="selected_count"
            ></span>
            Selected
          </div>

          <button
            type="button"
            class="btn btn-danger"
            data-kt-subscription-table-select="delete_selected"
          >
            Delete Selected
          </button>
        </div>
        <!--end::Group actions-->
      </div>
      <!--end::Card toolbar-->
    </div>
    <!--end::Card header-->

    <!--begin::Card body-->
    <div class="card-body pt-0">
      <KTDatatable
        :table-data="data"
        :table-header="headerConfig"
        :enable-items-per-page-dropdown="false"
      >
        <template v-slot:cell-checkbox="{ row: customer }">
          <div
            class="form-check form-check-sm form-check-custom form-check-solid"
          >
            <input
              class="form-check-input"
              type="checkbox"
              :value="customer.id"
              v-model="checkedCustomers"
            />
          </div>
        </template>
        <template v-slot:cell-customer="{ row: customer }">
          <router-link
            to="over"
            href=""
            class="text-gray-800 text-hover-primary mb-1"
          >
            {{ customer.customer }}
          </router-link>
        </template>
        <template v-slot:cell-status="{ row: customer }">
          <a href="#" class="text-gray-600 text-hover-primary mb-1">
            <div :class="`badge badge-light-${customer.color}`">
              {{ customer.status }}
            </div>
          </a>
        </template>
        <template v-slot:cell-billing="{ row: customer }">
          <div class="badge badge-light">{{ customer.billing }}</div>
        </template>
        <template v-slot:cell-product="{ row: customer }">
          {{ customer.product }}
        </template>
        <template v-slot:cell-createdDate="{ row: customer }">
          {{ customer.createdDate }}
        </template>
        <template v-slot:cell-actions="{ row: customer }">
          <a>
             <a
                    href="#"
                    class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                  >
                    <router-link
            to="over"
           
          >
       
   <span class="svg-icon svg-icon-3">
                      <inline-svg
                        src="media/icons/duotune/general/gen019.svg"
                      />
                    </span>          </router-link>
                 
                  </a>

                  <a
                    href="#"
                    class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                  >
                    <span class="svg-icon svg-icon-3">
                      <inline-svg src="media/icons/duotune/art/art005.svg" />
                    </span>
                  </a>

                  <a
                    class="btn btn-icon btn-bg-light btn-active-color-danger btn-sm"
                  >
                    <span class="svg-icon svg-icon-3"  @click=" formSubmit">
                      <inline-svg
                        src="media/icons/duotune/general/gen027.svg"
                      />
                    </span>
                  </a>
       
          </a>
          <!--begin::Menu-->
          <div
            class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
            data-kt-menu="true"
          >
            <!--begin::Menu item-->
            <div class="menu-item px-3">
              <router-link
                to="/apps/customers/customer-details"
                class="menu-link px-3"
                >مشاهدة</router-link
              >
            </div>
              <div class="menu-item px-3">
              <router-link
                to="/apps/customers/customer-details"
                class="menu-link px-3"
                >تعديل</router-link
              >
            </div>
            <!--end::Menu item-->
            <!--begin::Menu item-->
            <div class="menu-item px-3">
              <a @click="deleteCustomer(customer.id)" class="menu-link px-3"
                >حذف</a
              >
            </div>
           
            <!--end::Menu item-->
          </div>
          <!--end::Menu-->
        </template>
      </KTDatatable>
    </div>
    <!--end::Card body-->
  </div>
  <!--end::Card-->
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import KTDatatable from "@/components/kt-datatable/KTDatatable.vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import Swal from "sweetalert2/dist/sweetalert2.min.js";

export default defineComponent({
  name: "kt-subscription-list",
  components: {
    KTDatatable,
  },
  setup() {
    const data = ref([
      {
        customer: "احمد محمد ",
        status: "غزة صلاح الدين",
        color: "success",
        billing: "Oct 25, 2021",
        product: "مستقبل",
        createdDate: "8 30 00",
      },
    {
        customer: "احمد محمد ",
        status: "غزة صلاح الدين",
        color: "success",
        billing: "Oct 25, 2021",
        product: "مستقبل",
        createdDate: "8 30 00",
      },  {
        customer: "احمد محمد ",
        status: "غزة صلاح الدين",
        color: "success",
        billing: "Oct 25, 2021",
        product: "مستقبل",
        createdDate: "8 30 00",
      },  {
        customer: "احمد محمد ",
        status: "غزة صلاح الدين",
        color: "success",
        billing: "Oct 25, 2021",
        product: "مستقبل",
        createdDate: "8 30 00",
      },  {
        customer: "احمد محمد ",
        status: "غزة صلاح الدين",
        color: "success",
        billing: "Oct 25, 2021",
        product: "مستقبل",
        createdDate: "8 30 00",
      },  {
        customer: "احمد محمد ",
        status: "غزة صلاح الدين",
        color: "success",
        billing: "Oct 25, 2021",
        product: "مستقبل",
        createdDate: "8 30 00",
      },
      {
        customer: "Francis Mitcham",
        status: "Active",
        color: "success",
        billing: "Auto-debit",
        product: "Teams",
        createdDate: "Jun 20, 2021",
      },
      {
        customer: "Olivia Wild",
        status: "Suspended",
        color: "danger",
        billing: "--",
        product: "Enterprise",
        createdDate: "Jun 24, 2021",
      },
      {
        customer: "Neil Owen",
        status: "Expiring",
        color: "warning",
        billing: "Auto-debit",
        product: "Basic",
        createdDate: "Aug 19, 2021",
      },

    ]);
    const headerConfig = ref([
      {
        key: "checkbox",
        sortable: false,
      },
      {
        name: "اسم الزبون",
        key: "customer",
        sortable: true,
      },
      {
        name: "العنوان",
        key: "status",
        sortable: true,
      },
      {
        name: "التاريخ",
        key: "billing",
        sortable: true,
      },
      {
        name: "الحالة",
        key: "product",
        sortable: true,
      },
      {
        name: "الوقت",
        key: "createdDate",
        sortable: true,
      },
      {
        name: "Actions",
        key: "actions",
      },
    ]);

    onMounted(() => {
      setCurrentPageBreadcrumbs("Subscription List", ["Apps", "Subscriptions"]);
    });

    const formSubmit = () => {
      Swal.fire({
        text: "هل انت متأكد من الحذف  ؟ ",
        icon: "warning",
        buttonsStyling: false,
        confirmButtonText: "تأكيد",
        customClass: {
          confirmButton: "btn fw-bold btn-danger",
        },
      }).then(() => {
        window.location.reload();
      });
    };
    return {
      data,
      headerConfig,
formSubmit
    };
  },
});
</script>
