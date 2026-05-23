type Props = {
  question: string;

  onYes: () => void;

  onNo: () => void;

  onUnsure?: () => void;
};

export default function QuestionStep({
  question,
  onYes,
  onNo,
  onUnsure,
}: Props) {
  return (
    <div className="bg-white shadow-xl rounded-3xl p-8 max-w-2xl space-y-8">

      <h2 className="text-3xl font-bold text-center">
        {question}
      </h2>

      <div className="flex flex-col gap-4">

        <button
          onClick={onYes}
          className="bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl text-xl"
        >
          نعم
        </button>

        <button
          onClick={onNo}
          className="bg-red-500 hover:bg-red-600 text-white py-4 rounded-2xl text-xl"
        >
          لا
        </button>

        {onUnsure && (
          <button
            onClick={onUnsure}
            className="border border-gray-300 py-4 rounded-2xl text-xl"
          >
            غير متأكد
          </button>
        )}

      </div>

    </div>
  );
}