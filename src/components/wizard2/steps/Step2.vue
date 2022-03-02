<template>
  <!--begin::Wrapper-->
  <div class="w-100">
    <!--begin::Heading-->
    <div class="pb-10 pb-lg-3">
      <!--begin::Title-->
      <h2 class="fw-bolder text-dark">بيانات المرسل</h2>
      <!--end::Title-->
      <!--begin::Notice-->
      <div class="text-gray-400 fw-bold fs-6">
ادخال بيانات المرسل لتأكيد الطرد       
      </div>
      <!--end::Notice-->
    </div>
    <!--end::Heading-->

    <!--begin::Input group-->
    <div class="mb-10 fv-row">

      

      <!--begin::Hint-->

      <!--end::Hint-->
    </div>
    <!--end::Input group-->
  <div class="row">
    <!--begin::Input group-->
    <div class="col-lg-6 mb-10 fv-row">
      <!--begin::Label-->
      <label class="form-label mb-3">البيانات الاساسية</label>
      <!--end::Label-->

      <!--begin::Input-->
      <Field
        type="text"
        class="form-control form-control-lg form-control-solid"
        name="accountName1"
        placeholder="البيانات الاساسية"
        value=""
      />
      <ErrorMessage
        name="accountName1"
        class="fv-plugins-message-container invalid-feedback"
      ></ErrorMessage>
      <!--end::Input-->
    </div>
    <!--end::Input group-->

    <!--begin::Input group-->
    <div class="col-lg-6 col-md-12 mb-10 fv-row">
      <!--begin::Label-->
      <label class="form-label mb-3">البيانات الثانوية</label>
      <!--end::Label-->

      <!--begin::Input-->
      <Field
        type="text"
        class="form-control form-control-lg form-control-solid"
        name="accountName2"
        placeholder="البيانات الثانوية"
        value=""
      />
      <ErrorMessage
        name="accountName2"
        class="fv-plugins-message-container invalid-feedback"
      ></ErrorMessage>
      <!--end::Input-->
    </div>
    <!--end::Input group-->


        <!--begin::Input group-->
    <div class="col-lg-6 col-md-12 mb-10 fv-row">
      <!--begin::Label-->
      <label class="form-label mb-3">الاسم الاول</label>
      <!--end::Label-->

      <!--begin::Input-->
      <Field
        type="text"
        class="form-control form-control-lg form-control-solid"
        name="accountName3"
        placeholder="الاسم الاول"
        value=""
      />
      <ErrorMessage
        name="accountName3"
        class="fv-plugins-message-container invalid-feedback"
      ></ErrorMessage>
      <!--end::Input-->
    </div>
    <!--end::Input group-->


        <!--begin::Input group-->
    <div class="col-lg-6 col-md-12 mb-10 fv-row">
      <!--begin::Label-->
      <label class="form-label mb-3"> الاسم الثاني </label>
      <!--end::Label-->

      <!--begin::Input-->
      <Field
        type="text"
        class="form-control form-control-lg form-control-solid"
        name="accountName4"
        placeholder="الاسم الثاني"
        value=""
      />
      <ErrorMessage
        name="accountName4"
        class="fv-plugins-message-container invalid-feedback"
      ></ErrorMessage>
      <!--end::Input-->
    </div>
    <!--end::Input group-->



        <!--begin::Input group-->
    <div class="col-lg-6 col-md-12 mb-10 fv-row">
      <!--begin::Label-->
      <label class="form-label mb-3">رقم التواصل</label>
      <!--end::Label-->

      <!--begin::Input-->
      <Field
        type="text"
        class="form-control form-control-lg form-control-solid"
        name="accountName5"
        placeholder="رقم التواصل"
        value=""
      />
      <ErrorMessage
        name="accountName5"
        class="fv-plugins-message-container invalid-feedback"
      ></ErrorMessage>
      <!--end::Input-->
    </div>
    <!--end::Input group-->


        <!--begin::Input group-->
    <div class="col-lg-6 col-md-12 mb-10 fv-row">
      <!--begin::Label-->
      <label class="form-label mb-3">رقم الهوية</label>
      <!--end::Label-->

      <!--begin::Input-->
      <Field
        type="text"
        class="form-control form-control-lg form-control-solid"
        name="accountName6"
        placeholder="رقم الهوية"
        value=""
      />
      <ErrorMessage
        name="accountName6"
        class="fv-plugins-message-container invalid-feedback"
      ></ErrorMessage>
      <!--end::Input-->
    </div>
    <!--end::Input group-->

          <!--begin::Input group-->
    <div class="col-lg-6 col-md-12 mb-10 fv-row">
      <!--begin::Label-->
      <label class="form-label mb-3">العنوان</label>
      <!--end::Label-->

      <!--begin::Input-->
      <Field
        type="text"
        class="form-control form-control-lg form-control-solid"
        name="accountName7"
        placeholder="العنوان"
        value=""
      />
      <ErrorMessage
        name="accountName7"
        class="fv-plugins-message-container invalid-feedback"
      ></ErrorMessage>
      <!--end::Input-->
    </div>
    <!--end::Input group-->


          <!--begin::Input group-->
    <div class="col-lg-6 col-md-12 mb-10 fv-row">
      <!--begin::Label-->
      <label class="form-label mb-3">....</label>
      <!--end::Label-->

      <!--begin::Input-->
      <Field
        type="text"
        class="form-control form-control-lg form-control-solid"
        name="accountName8"
        placeholder="... "
        value=""
      />
      <ErrorMessage
        name="accountName8"
        class="fv-plugins-message-container invalid-feedback"
      ></ErrorMessage>
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
  name: "step-2",
  components: {
    Field,
    ErrorMessage,
  },
});
</script>
