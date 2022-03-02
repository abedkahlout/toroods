<template>
  <!--begin::Wrapper-->
  <div class="w-100">
    <!--begin::Heading-->
    <div class="pb-10 pb-lg-12">
      <!--begin::Title-->
      <h2 class="fw-bolder text-dark"> بيانات المٌستقبِل</h2>
      <!--end::Title-->

      <!--begin::Notice-->
      <div class="text-gray-400 fw-bold fs-6">
          يجب اضافة بيانات المستقبل 
      </div>
      <!--end::Notice-->
    </div>
    <!--end::Heading-->

      <div class="row">
        <!--begin::Col-->
        <div class="col-lg-4 mb-5">
          <!--begin::Option-->
         <label class="d-flex flex-stack mb-0 cursor-pointer">
          <!--begin:Label-->
            <span class="form-check form-check-custom form-check-solid">
            <Field
              class="form-check-input"
              type="radio"
              name="accountPlan"
              value="3"
            />
          </span>
          <span class="d-flex align-items-center me-2">


            <!--begin::Description-->
            <span class="d-flex flex-column">
              <span class="fw-bolder text-gray-800 text-hover-primary mx-3 fs-5"
                >مؤسسة</span>
           
            </span>
                        <!--begin::Icon-->
            <span class="symbol symbol-50px me-6">
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
                <!--begin::Col-->
        <div class="col-lg-4 mb-5">
          <!--begin::Option-->
         <label class="d-flex flex-stack mb-0 cursor-pointer">
          <!--begin:Label-->
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
          <span class="d-flex align-items-center me-2">
            <!--begin::Icon-->
          

            <!--begin::Description-->
            <span class="d-flex flex-column">
              <span class="fw-bolder text-gray-800 text-hover-primary mx-3 fs-5"
                >فرد</span
              >
           
            </span>
              <span class="symbol symbol-50px me-6">
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

         
        </label>
          <!--end::Option-->
        </div>
        <!--end::Col-->
    <!--begin::Input group-->
    <div class="fv-row col-lg-6 col-md-12 mb-10">
      <!--begin::Label-->
      <label class="d-flex align-items-center form-label">
        <span class="required">الاسم</span>
      </label>
      <!--end::Label-->

      <!--begin::Input-->
     <Field
        type="text"
        name="businessDescription1"
        class="form-control form-control-lg form-control-solid"
        rows="3"
      ></Field>
      <!--end::Input-->
      <ErrorMessage
        name="businessDescriptor1"
        class="fv-plugins-message-container invalid-feedback"
      ></ErrorMessage>

    </div>
    <!--end::Input group-->

    
    <!--begin::Input group-->
    <div class="fv-row col-lg-6 col-md-12 mb-10">
      <!--end::Label-->
      <label class="form-label">رقم التواصل</label>
      <!--end::Label-->

      <!--begin::Input-->
      <Field
        type="text"
        name="businessDescription"
        class="form-control form-control-lg form-control-solid"
        rows="3"
      ></Field>
      <!--end::Input-->
    </div>
    <!--end::Input group-->

        <!--begin::Input group-->
    <div class="fv-row col-lg-6 col-md-12 mb-10">
      <!--end::Label-->
      <label class="form-label">عنوان المستقبل</label>
      <!--end::Label-->

      <!--begin::Input-->
      <Field
        type="text"
        name="businessDescription"
        class="form-control form-control-lg form-control-solid"
        rows="3"
      ></Field>
      <!--end::Input-->
     </div>
      <!--end::Input group-->


        <!--begin::Input group-->
      <div class="fv-row col-lg-6 col-md-12 mb-10">
      <!--end::Label-->
      <label class="form-label">رقم الهوية</label>
      <!--end::Label-->

      <!--begin::Input-->
      <Field
        type="text"
        name="businessDescription"
        class="form-control form-control-lg form-control-solid"
        rows="3"
      ></Field>
      <!--end::Input-->
      </div>
    <!--end::Input group-->


    
      </div>


  </div>
  <!--end::Wrapper-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Field, ErrorMessage } from "vee-validate";

export default defineComponent({
  name: "step-3",
  components: {
    Field,
    ErrorMessage,
  },
});
</script>
