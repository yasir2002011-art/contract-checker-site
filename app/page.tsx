"use client";

import { useState } from "react";
import QuestionStep from "@/components/QuestionStep";
import ResultCard from "@/components/ResultCard";

type Screen =
  | "welcome"
  | "isSaudi"
  | "qiwa"
  | "explicitUnlimited"
  | "limitedText"
  | "renewals"
  | "result";

type Result = {
  title: string;
  reason: string;
  legalReference: string;
};

export default function Home() {
  const [screen, setScreen] = useState<Screen>("welcome");

  const [result, setResult] = useState<Result>({
    title: "",
    reason: "",
    legalReference: "",
  });

  function reset() {
    setScreen("welcome");
    setResult({
      title: "",
      reason: "",
      legalReference: "",
    });
  }

  function showResult(title: string, reason: string, legalReference: string) {
    setResult({ title, reason, legalReference });
    setScreen("result");
  }

  function lawyerReview(reason: string) {
    showResult("تحتاج مراجعة محامٍ", reason, "مراجعة بشرية للعقد");
  }

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-slate-50 px-6 py-8 text-slate-900"
    >
      <div className="mx-auto max-w-7xl space-y-8">
        <header className="text-center">
          <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-3xl text-white shadow-lg">
            📄
          </div>

          <h1 className="text-5xl font-black text-blue-950">
            كاشف نوع مدة العقد
          </h1>

          <p className="mt-3 text-2xl text-slate-600">
            اعرف هل عقدك محدد المدة أو غير محدد المدة وفق نظام العمل السعودي
          </p>
        </header>

        <section className="mx-auto max-w-5xl rounded-3xl border border-blue-200 bg-white/80 p-6 shadow-sm">
          <h2 className="mb-3 text-center text-2xl font-black text-blue-700">
            لماذا معرفة نوع العقد مهمة؟
          </h2>

          <p className="text-center text-xl leading-loose text-slate-700">
            نوع العقد يؤثر على طريقة الإنهاء والتعويضات المستحقة. الخطأ في
            طريقة إنهاء عقدك قد يكلف دفع تعويضات وفق المادة 77 من نظام العمل،
            كما أن التعويض في العقد محدد المدة يختلف عن التعويض في العقد غير
            محدد المدة.
          </p>
        </section>

        {screen === "welcome" && (
          <section className="mx-auto max-w-3xl rounded-[32px] border border-blue-100 bg-white p-10 text-center shadow-xl">
            <h2 className="text-3xl font-black text-blue-950">
              ابدأ فحص نوع عقدك الآن
            </h2>

            <p className="mt-4 text-xl leading-loose text-slate-600">
              أجب عن أسئلة قصيرة، وستظهر لك نتيجة أولية عن نوع عقدك.
            </p>

            <button
              onClick={() => setScreen("isSaudi")}
              className="mt-8 rounded-3xl bg-blue-700 px-12 py-5 text-2xl font-bold text-white shadow-lg hover:bg-blue-800"
            >
              ابدأ الفحص
            </button>
          </section>
        )}

        {screen !== "welcome" && screen !== "result" && (
          <section className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[32px] border border-blue-100 bg-white p-8 shadow-xl">
              {screen === "isSaudi" && (
                <QuestionStep
                  question="هل العامل سعودي؟"
                  onYes={() => setScreen("qiwa")}
                  onNo={() =>
                    showResult(
                      "عقدك محدد المدة",
                      "عقد العامل غير السعودي يكون محدد المدة.",
                      "المادة 37 من نظام العمل"
                    )
                  }
                  onUnsure={() =>
                    lawyerReview("تحديد الجنسية أو صفة العامل يحتاج مراجعة.")
                  }
                />
              )}

              {screen === "qiwa" && (
                <QuestionStep
                  question="هل لديك عقد موثق في قوى؟"
                  onYes={() => setScreen("explicitUnlimited")}
                  onNo={() =>
                    lawyerReview(
                      "الأداة الحالية مخصصة لمن لديهم عقد موثق في قوى."
                    )
                  }
                  onUnsure={() =>
                    lawyerReview("يلزم التحقق من وجود عقد موثق في قوى.")
                  }
                />
              )}

              {screen === "explicitUnlimited" && (
                <QuestionStep
                  question="هل عقدك ينص بوضوح على أنه غير محدد المدة؟"
                  onYes={() =>
                    showResult(
                      "عقدك غير محدد المدة",
                      "العقد ينص صراحة على أنه غير محدد المدة.",
                      "المادة 55 من نظام العمل"
                    )
                  }
                  onNo={() => setScreen("limitedText")}
                  onUnsure={() =>
                    lawyerReview("يلزم فحص صياغة العقد بشكل دقيق.")
                  }
                />
              )}

              {screen === "limitedText" && (
                <QuestionStep
                  question="هل عقدك يتضمن بوضوح مدة معينة أو النص أنه محدد المدة؟"
                  onYes={() => setScreen("renewals")}
                  onNo={() =>
                    showResult(
                      "عقدك غير محدد المدة",
                      "عدم وجود مدة محددة أو نص واضح على تحديد المدة يجعل العقد غير محدد المدة.",
                      "المادة 55 من نظام العمل"
                    )
                  }
                  onUnsure={() =>
                    lawyerReview("يلزم فحص بند مدة العقد قبل إصدار نتيجة.")
                  }
                />
              )}

              {screen === "renewals" && (
                <QuestionStep
                  question="هل تجاوزت مدة عملك الحالي مع صاحب العمل 4 سنوات أو تجدد العقد 3 مرات متتالية؟"
                  onYes={() =>
                    showResult(
                      "عقدك غير محدد المدة",
                      "تجاوز مدة العمل أربع سنوات أو تجدد العقد ثلاث مرات متتالية يحول العقد إلى غير محدد المدة.",
                      "المادة 55 من نظام العمل"
                    )
                  }
                  onNo={() =>
                    showResult(
                      "عقدك محدد المدة",
                      "العقد ما زال محدد المدة لعدم تجاوز أربع سنوات أو ثلاث تجديدات متتالية.",
                      "المادة 55 من نظام العمل"
                    )
                  }
                  onUnsure={() =>
                    lawyerReview("يلزم فحص مدة العقد وعدد مرات التجديد.")
                  }
                />
              )}

              <div className="mt-6 rounded-2xl bg-blue-50 p-5 text-center text-blue-800">
                <p className="text-xl font-bold">إجاباتك سرية وآمنة 100%</p>
                <p className="mt-1 text-slate-600">لا يتم حفظ أي بيانات شخصية</p>
              </div>
            </div>

            <ResultCard
              title="نتيجة الكاشف"
              reason="ستظهر النتيجة هنا بعد إكمال الأسئلة."
              legalReference="نظام العمل السعودي"
              onReset={reset}
            />
          </section>
        )}

        {screen === "result" && (
          <section className="mx-auto max-w-3xl">
            <ResultCard
              title={result.title}
              reason={result.reason}
              legalReference={result.legalReference}
              onReset={reset}
            />
          </section>
        )}

        <footer className="rounded-3xl border border-blue-100 bg-white/70 p-5 text-center text-lg text-slate-600">
          جميع الحقوق محفوظة | المعلومات المقدمة لأغراض توعوية فقط، واستشارة
          محامٍ مختص ضرورية في الحالات القانونية.
        </footer>
      </div>
    </main>
  );
}