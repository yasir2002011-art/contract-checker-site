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
    <section className="relative overflow-hidden rounded-[32px] border border-emerald-200 bg-white shadow-2xl">
      <div className="absolute right-0 top-0 rounded-bl-3xl bg-emerald-600 px-8 py-3 text-xl font-bold text-white">
        النتيجة ★
      </div>

      <div className="p-8 pt-20 text-center">
        <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-emerald-100 text-6xl">
          ✅
        </div>

        <p className="mb-2 text-xl font-bold text-slate-700">
          نتيجة الكاشف:
        </p>

        <h2 className="mb-5 text-5xl font-black text-emerald-700">
          {title}
        </h2>

        <p className="text-xl leading-loose text-slate-700">
          {reason}
        </p>

        <p className="mt-3 text-lg font-bold text-slate-600">
          {legalReference}
        </p>

        <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-xl font-bold text-emerald-800">
          هذه نتيجة أولية ولا تغني عن استشارة المحامي
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 block rounded-3xl bg-gradient-to-l from-emerald-600 to-teal-900 p-8 text-white shadow-xl transition hover:scale-[1.02]"
        >
          <p className="text-xl font-bold">للاستشارة القانونية تواصل مع محامينا</p>
          <p className="mt-3 text-5xl font-black tracking-wider">0539018886</p>
          <p className="mt-4 rounded-2xl bg-white px-6 py-3 text-2xl font-bold text-emerald-700">
            تواصل عبر واتساب
          </p>
        </a>

        <button
          onClick={onReset}
          className="mt-6 w-full rounded-2xl bg-slate-100 py-4 text-xl font-bold text-slate-700 hover:bg-slate-200"
        >
          إعادة الفحص
        </button>
      </div>
    </section>
  );
}