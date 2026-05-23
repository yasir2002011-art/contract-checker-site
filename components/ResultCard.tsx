type ResultCardProps = {
  title: string;
  reason: string;
  legalReference: string;
  onReset: () => void;
};

export default function ResultCard({
  title,
  reason,
  legalReference,
  onReset,
}: ResultCardProps) {
  const whatsappMessage =
    "السلام عليكم أتيتك من موقع كشاف نوع مدة العقد ابغى خدمة قانونية";

  const whatsappUrl = `https://wa.me/966539018886?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section className="relative overflow-hidden rounded-[32px] border border-emerald-200 bg-white shadow-2xl max-w-full">
      <div className="absolute right-0 top-0 rounded-bl-3xl bg-emerald-600 px-6 py-3 text-lg font-bold text-white">
        النتيجة ★
      </div>

      <div className="p-6 pt-20 text-center">
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-emerald-100 text-5xl">
          ✅
        </div>

        <p className="mb-2 text-lg font-bold text-slate-700">
          نتيجة الكاشف:
        </p>

        <h2 className="mb-5 text-3xl font-black leading-tight text-emerald-700 md:text-5xl">
          {title}
        </h2>

        <p className="text-lg leading-loose text-slate-700 md:text-xl">
          {reason}
        </p>

        <p className="mt-4 text-base font-bold text-slate-600 md:text-lg">
          تحتاج مراجعة بشرية للعقد
        </p>

        <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-lg font-bold leading-loose text-emerald-800 md:text-xl">
          هذه نتيجة أولية ولا تغني عن استشارة المحامي
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 block overflow-hidden rounded-3xl bg-gradient-to-l from-emerald-600 to-teal-900 p-6 text-white shadow-xl transition hover:scale-[1.02]"
        >
          <p className="text-lg font-bold md:text-xl">
            للاستشارة القانونية تواصل مع محامينا
          </p>

          <p className="mt-4 break-words text-3xl font-black tracking-wide md:text-5xl">
            0539018886
          </p>

          <div className="mt-5 inline-block rounded-2xl bg-white px-6 py-3 text-xl font-bold text-emerald-700">
            تواصل عبر واتساب
          </div>
        </a>

        <button
          onClick={onReset}
          className="mt-6 w-full rounded-2xl bg-slate-100 py-4 text-lg font-bold text-slate-700 transition hover:bg-slate-200 md:text-xl"
        >
          إعادة الفحص
        </button>
      </div>
    </section>
  );
}