type Props = {
  question: string;
  value: number;
  onChange: (value: number) => void;
  onNext: () => void;
};

export default function NumberStep({
  question,
  value,
  onChange,
  onNext,
}: Props) {
  return (
    <div className="border rounded-2xl p-6 max-w-xl space-y-6">
      <h2 className="text-2xl font-semibold">{question}</h2>

      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="border rounded-xl p-3 w-full"
      />

      <button
        onClick={onNext}
        className="bg-black text-white px-6 py-3 rounded-xl"
      >
        التالي
      </button>
    </div>
  );
}