<template>
  <!--begin::Layout-->
  <div class="d-flex flex-column flex-xl-row">
    <!--begin::Sidebar-->
    <div class="flex-column flex-lg-row w-100 w-xl-300px mb-10">
      <!--begin::Card-->
      <div class="card mb-5 mb-xl-8">
        <!--begin::Card body-->
        <div class="card-body pt-15">
          <!--begin::Summary-->
          <div class="d-flex flex-center flex-column mb-5">


            <!--begin::Name-->
            <a
              href="#"
              class="fs-3 text-gray-800 text-hover-primary fw-bolder mb-1"
            >
             بلال مرتجى
            </a>
            <!--end::Name-->

            <!--begin::Position-->
            <div class="fs-5 fw-bold text-muted mb-6">مهندس برمجيات</div>
            <!--end::Position-->

            <!--begin::Info-->
           
            <!--end::Info-->
          </div>
          <!--end::Summary-->

          <!--begin::Details toggle-->
          <div class="d-flex flex-stack fs-4 py-3">
            <div
              class="fw-bolder rotate collapsible"
              data-bs-toggle="collapse"
              href="#kt_customer_view_details"
              role="button"
              aria-expanded="false"
              aria-controls="kt_customer_view_details"
            >
              التفاصيل
              <span class="ms-2 rotate-180">
                <span class="svg-icon svg-icon-3">
                  <inline-svg src="media/icons/duotune/arrows/arr072.svg" />
                </span>
              </span>
            </div>

            <span
              data-bs-toggle="tooltip"
              data-bs-trigger="hover"
              title="Edit customer details"
            >
              
            </span>
          </div>
          <!--end::Details toggle-->

          <div class="separator separator-dashed my-3"></div>

          <!--begin::Details content-->
          <div id="kt_customer_view_details" class="collapse show">
            <div class="py-5 fs-6">

              <!--begin::Details item-->
              <div class="fw-bolder mt-5">رقم التواصل</div>
              <div class="text-gray-600">ID-45453423</div>
              <!--begin::Details item-->
              <!--begin::Details item-->
              <div class="fw-bolder mt-5">رقم الهوية</div>
              <div class="text-gray-600">
                <a href="#" class="text-gray-600 text-hover-primary"
                  >40506698</a
                >
              </div>
              <!--begin::Details item-->
              <!--begin::Details item-->
              <div class="fw-bolder mt-5">عنوان السكن</div>
              <div class="text-gray-600">
               ,الرمال غزة فلسطين
              </div>
              <!--begin::Details item-->
              <!--begin::Details item-->
              <div class="fw-bolder mt-5">عدد الطرود المكتملة</div>
              <div class="text-gray-600">7</div>
              <!--begin::Details item-->
              <!--begin::Details item-->
              <div class="fw-bolder mt-5"> عدد لطرود غير المكتملة</div>
              <div class="text-gray-600">1</div>
  
            </div>
          </div>
          <!--end::Details content-->
        </div>
        <!--end::Card body-->
      </div>
      <!--end::Card-->

      <!--begin::Connected Accounts-->
      <div class="card mb-5 mb-xl-8">
        <!--begin::Card header-->
       
      <!--end::Connected Accounts-->
    </div>
    </div>
    <!--end::Sidebar-->

    <!--begin::Content-->
    <div class="flex-lg-row-fluid ms-lg-15">
      <!--begin:::Tabs-->
      <ul
        class="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-bold mb-8"
      >
        <!--begin:::Tab item-->
        <li class="nav-item">
          <a
            class="nav-link text-active-primary pb-4 active"
            data-bs-toggle="tab"
            href="#kt_customer_view_overview_tab"
            >قائمة الطرود</a
          >
        </li>
        <!--end:::Tab item-->



        
     
        <!--end:::Tab item-->
      </ul>
      <!--end:::Tabs-->

      <!--begin:::Tab content-->
      <div class="tab-content" id="myTabContent">
        <!--begin:::Tab pane-->
        <div
          class="tab-pane fade show active"
          id="kt_customer_view_overview_tab"
          role="tabpanel"
        >
          <PaymentRecords card-classes="mb-6 mb-xl-9"></PaymentRecords>

    
        </div>
        <!--end:::Tab pane-->


        <!--begin:::Tab pane-->
        <div
          class="tab-pane fade"
          id="kt_customer_view_overview_statements"
          role="tabpanel"
        >
          <Earnings card-classes="mb-6 mb-xl-9"></Earnings>
          <Statement card-classes="mb-6 mb-xl-9"></Statement>
        </div>
        <!--end:::Tab pane-->
      </div>
      <!--end:::Tab content-->
    </div>
    <!--end::Content-->
  </div>
  <!--end::Layout-->

  <NewCardModal></NewCardModal>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import NewCardModal from "@/components/modals/forms/NewCardModal.vue";
import PaymentRecords from "@/components/customers/cards/overview/PaymentRecords2.vue";

import Earnings from "@/components/customers/cards/statments/Earnings.vue";
import Statement from "@/components/customers/cards/statments/Statement.vue";

export default defineComponent({
  name: "customer-details",
  components: {
    PaymentRecords,
    Earnings,
    Statement,
    NewCardModal,
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("Customer Details", ["Apps", "Customers"]);
    });

    return {};
  },
});
</script>
