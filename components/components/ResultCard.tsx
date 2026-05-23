import { ContractResult } from "@/engines/contract-type-engine";

type Props = {
  result: ContractResult;
  onReset: () => void;
};

export default function ResultCard({ result, onReset }: Props) {
  return (
    <div className="border rounded-2xl p-6 max-w-xl space-y-4">
      <h2 className="text-2xl font-bold">{result.title}</h2>

      <p>
        <strong>السبب:</strong> {result.reason}
      </p>

      <p>
        <strong>المرجع:</strong> {result.legalReference}
      </p>

      <p>
        <strong>التوصية:</strong> {result.recommendation}
      </p>

      <button onClick={onReset} className="mt-4 border px-5 py-3 rounded-xl">
        إعادة الفحص
      </button>
    </div>
  );
}