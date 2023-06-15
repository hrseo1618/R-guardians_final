import { useState } from 'react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default function RecycleList({ recycles }) {
  const categories = [...new Set(recycles.map((recycle) => recycle.character))];

  return (
    <div className="p-10">
      <h1 className="text-4xl text-center text-green-600 font-bold sm:text-4xl">
        다른 사람들이 찾아본
        <strong className="my-3 font-bold text-green-600 sm:block sm:text-4xl">
          다른 품목들의 분리수거 방법을 둘러보세요
        </strong>
      </h1>
      <div className="my-8 overflow-x-auto">
        {categories.map((category) => (
          <div key={category}>
            <h2 className="text-2xl font-medium mb-4">{category}</h2>
            <table className="min-w-full divide-y-2 text-center divide-gray-200 bg-white text-sm">
              <thead className="ltr:text-left rtl:text-right">
                <tr>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    종류
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    분리방법
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {recycles
                  .filter((recycle) => recycle.character === category)
                  .map((recycle) => (
                    <tr key={recycle.id}>
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        {recycle.character}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {recycle.recycle}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const recycles = await prisma.recycle.findMany();
  const sortedRecycles = recycles.sort((a, b) =>
    a.character.localeCompare(b.character)
  );

  return {
    props: {
      recycles: JSON.parse(JSON.stringify(sortedRecycles)),
    },
  };
}

