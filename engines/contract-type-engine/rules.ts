import { ContractAnswers, ContractResult } from "./types";

export function determineContractType(
  answers: ContractAnswers
): ContractResult {
  
  // غير السعودي
  if (!answers.isSaudi) {
    return {
      type: "LIMITED",

      title: "عقد محدد المدة",

      reason:
        "العامل غير السعودي، والأصل أن عقده يكون محدد المدة.",

      legalReference:
        "المادة 37 من نظام العمل السعودي",

      recommendation:
        "راجع مدة العقد وتاريخ انتهائه بدقة."
    };
  }

  // لا يوجد عقد في قوى
  if (!answers.hasQiwaContract) {
    return {
      type: "REVIEW_REQUIRED",

      title: "تحتاج مراجعة بشرية",

      reason:
        "لا يوجد عقد موثق في قوى أو البيانات غير مكتملة.",

      legalReference:
        "يتطلب فحص المستندات والعلاقة التعاقدية",

      recommendation:
        "تواصل مع محامٍ مختص لفحص العلاقة العمالية."
    };
  }

  // العقد نص صراحة أنه غير محدد
  if (answers.contractExplicitlyUnlimited) {
    return {
      type: "UNLIMITED",

      title: "عقد غير محدد المدة",

      reason:
        "العقد يتضمن نصًا صريحًا بأنه غير محدد المدة.",

      legalReference:
        "المادة 55 من نظام العمل",

      recommendation:
        "قد يؤثر ذلك على حقوقك عند الإنهاء."
    };
  }

  // تجاوز 4 سنوات
  if (
    answers.totalContractYears >= 4 &&
    answers.continuedAfterExpiry
  ) {
    return {
      type: "UNLIMITED",

      title: "عقد غير محدد المدة",

      reason:
        "استمرت العلاقة العمالية أكثر من أربع سنوات مع استمرار التنفيذ.",

      legalReference:
        "المادة 55 من نظام العمل",

      recommendation:
        "راجع آثار ذلك على التعويض والإنهاء."
    };
  }

  // 3 تجديدات أو أكثر
  if (
    answers.renewalCount >= 3 &&
    answers.continuedAfterExpiry
  ) {
    return {
      type: "UNLIMITED",

      title: "عقد غير محدد المدة",

      reason:
        "تم تجديد العقد ثلاث مرات أو أكثر مع استمرار العلاقة العمالية.",

      legalReference:
        "المادة 55 من نظام العمل",

      recommendation:
        "قد تصبح أحكام الإنهاء مختلفة قانونيًا."
    };
  }

  // الحالة الافتراضية
  return {
    type: "LIMITED",

    title: "عقد محدد المدة",

    reason:
      "العقد لا يزال ضمن نطاق العقود المحددة المدة.",

    legalReference:
      "المادة 55 من نظام العمل",

    recommendation:
      "تحقق من تاريخ نهاية العقد وشروط التجديد."
  };
}