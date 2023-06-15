import { useState } from 'react';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';

export default function NewRecycle() {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/recycle', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ inputValue }),
    });
    const data = await response.json();
    console.log(data);
    setResult(data);
  };

  return (
    <section className="bg-green-50 flex flex-col items-center justify-center min-h-screen">
      <div className="mb-6">
        <h1 className="text-4xl text-green-600 font-extrabold mb-2 sm:text-5xl text-center">
          분리수거 어떻게 하나요?
        </h1>
        <strong className="block font-bold text-gray-600 sm:text-4xl text-center">
          분리수거하고 싶은 품목을 입력해주세요.
        </strong>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
        <textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="품목을 입력해주세요."
          className="w-96 h-24 p-4 rounded-lg shadow-md border border-green-400 resize-none focus:outline-none focus:ring-2 focus:ring-green-500 text-green-600"
        />
        <button
          type="submit"
          className="bg-green-600 px-8 py-3 text-sm font-medium text-white rounded-lg shadow hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-500 active:bg-green-600"
        >
          <IoCheckmarkCircleOutline className="inline-block mr-2 text-3xl" />
          결과 보기
        </button>
      </form>
      {result && (
        <div className="mt-8 text-green-600 text-center">
          <p className="text-sm font-semibold">
            {result.recycleway}
          </p>
        </div>
      )}
    </section>
  );
}

