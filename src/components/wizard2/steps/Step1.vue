<template>
  <!--begin::Wrapper-->
  <div class="w-100">
    <!--begin::Heading-->
    <div class="pb-10 pb-lg-15">
      <!--begin::Title-->
      <h2 class="fw-bolder d-flex align-items-center text-dark">
          نوع الطرد
      
      </h2>
      <!--end::Title-->

      <!--begin::Notice-->
      <div class="text-gray-400 fw-bold fs-6">
                اختر نوع الطرد
        </div>
      <!--end::Notice-->
    </div>
    <!--end::Heading-->

    <!--begin::Input group-->
    <div class="fv-row">
      <!--begin::Row-->
      <div class="row flex-column">
        <!--begin::Col-->
        <div class="col-lg-5 mb-5">
          <!--begin::Option-->
         <label class="d-flex flex-stack mb-0 cursor-pointer">
                <span class="form-check form-check-custom form-check-solid">
            <Field
              class="form-check-input"
              type="radio"
              name="accountPlan"
              value="3"
            />
          </span>
          <!--begin:Label-->
          <span class="d-flex align-items-center me-2">
        

            <!--begin::Description-->
            <span class="d-flex flex-column">
              <span class="fw-bolder text-gray-800 text-hover-primary fs-5"
                >جواز السفر </span
              >
              <span class="fs-6 fw-bold text-gray-400"
                >استخدام جواز السفر </span
              >
            </span>
                <!--begin::Icon-->
            <span class="symbol symbol-50px ms-6">
              <span class="symbol-label">
                <span class="svg-icon svg-icon-1 svg-icon-gray-600">
                  <inline-svg src="media/icons/duotune/graphs/gra008.svg" />
                </span>
              </span>
            </span>
            <!--end::Icon-->
            <!--end:Description-->
          </span>
          <!--end:Label-->

          <!--begin:Input-->
     
          <!--end:Input-->
        </label>
          <!--end::Option-->
        </div>
        <!--end::Col-->
        <div class="col-lg-5 mb-5">
          <!--begin::Option-->
         <label class="d-flex flex-stack mb-0 cursor-pointer">
                  <!--begin:Input-->
          <span class="form-check form-check-custom form-check-solid">
            <Field
              class="form-check-input"
              type="radio"
              name="accountPlan"
              value="3"
            />
          </span>
          <!--end:Input-->
          <!--begin:Label-->
          <span class="d-flex align-items-center me-2">


            <!--begin::Description-->
             <span class="d-flex flex-column">
              <span class="fw-bolder text-gray-800 text-hover-primary fs-5"
                >تصديق ورقة  </span
              >
              <span class="fs-6 fw-bold text-gray-400"
                >استخدام  ورقة تصديق </span
              >
            </span>
            <!--end:Description-->
                        <!--begin::Icon-->
            <span class="symbol symbol-50px ms-6">
              <span class="symbol-label">
                <span class="svg-icon svg-icon-1 svg-icon-gray-600">
                  <inline-svg src="media/icons/duotune/graphs/gra008.svg" />
                </span>
              </span>
            </span>
            <!--end::Icon-->
          </span>
          <!--end:Label-->

   
        </label>
          <!--end::Option-->
        </div>

                <div class="col-lg-5 mb-5">
          <label class="d-flex flex-stack mb-0 cursor-pointer">
                  <!--begin:Input-->
          <span class="form-check form-check-custom form-check-solid">
            <Field
              class="form-check-input"
              type="radio"
              name="accountPlan"
              value="3"
            />
          </span>
          <!--end:Input-->
          <!--begin:Label-->
          <span class="d-flex align-items-center me-2">


            <!--begin::Description-->
             <span class="d-flex flex-column">
              <span class="fw-bolder text-gray-800 text-hover-primary fs-5"
                >الهوية </span
              >
              <span class="fs-6 fw-bold text-gray-400"
                >تصديق الهوية </span
              >
            </span>
            <!--end:Description-->
                        <!--begin::Icon-->
            <span class="symbol symbol-50px ms-6">
              <span class="symbol-label">
                <span class="svg-icon svg-icon-1 svg-icon-gray-600">
                  <inline-svg src="media/icons/duotune/graphs/gra008.svg" />
                </span>
              </span>
            </span>
            <!--end::Icon-->
          </span>
          <!--end:Label-->

   
        </label>
        </div>
        <!--begin::Col-->
        <div class="col-lg-5">
          <!--begin::Option-->
                <label class="d-flex flex-stack mb-0 cursor-pointer">
                       <span class="form-check form-check-custom form-check-solid">
            <Field
              class="form-check-input"
              type="radio"
              name="accountPlan"
              value="3"
            />
          </span>
          <!--begin:Label-->
          <span class="d-flex align-items-center">
         

            <!--begin::Description-->
            <span class="d-flex flex-column ">
              <span class="fw-bolder text-gray-800 text-hover-primary fs-5"
                > هدية(BOX)</span
              >
              <span class="fs-6 fw-bold text-gray-400"
                > استخدم هدية(BOX</span
              >
            </span>
            <!--end:Description-->
               <!--begin::Icon-->
            <span class="symbol symbol-50px ms-6">
              <span class="symbol-label">
                <span class="svg-icon svg-icon-1 svg-icon-gray-600">
                  <inline-svg src="media/icons/duotune/graphs/gra008.svg" />
                </span>
              </span>
            </span>
            <!--end::Icon-->
          </span>
          <!--end:Label-->

          <!--begin:Input-->
     
          <!--end:Input-->
        </label>
        </div>
        <!--end::Col-->

      </div>
      <!--end::Row-->
    </div>
    <!--end::Input group-->
  </div>

  
  <!--end::Wrapper-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Field } from "vee-validate";

export default defineComponent({
  name: "step-1",
  components: {
    Field,
  },
});
</script>
