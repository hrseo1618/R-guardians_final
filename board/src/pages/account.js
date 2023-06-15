import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
    <section class="bg-white-50">
  <div
    class="mx-auto max-w-2xl px-4 py-32 lg:flex lg:items-center"
  >
    <div class="mx-auto max-w-2xl text-center space-y-4">
      <h1 class="text-4xl font-extrabold sm:text-4xl">
        분리수거가 어려워도 걱정 마세요
        <strong class="font-extrabold text-green-600 sm:block">
          당신의 쓰레기가 변신하는 순간
        </strong>
      </h1>

      <div class="mt-4 sm:text-l/relaxed">
		  <div class="flow-root ...">
        R-uardians(recycle guardians)가 당신을 위해 여기 있어요.</div>
		  <div class="flow-root ...">
			  당신은 간단하고 쉽게 분리수거 방법을 찾을 수 있습니다. 당신의 작은 노력이 지구를 위한 큰 변화를 만들어낼 것입니다!</div>
      </div>

      <div class="mt-8 flex flex-wrap justify-center gap-4">
        <a
          class="block w-full rounded bg-green-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-lime-400 focus:outline-none focus:ring active:bg-lime-400 sm:w-auto"
          href="/recycle/new"
        >
          HOW?
        </a>

        <a
          class="block w-full rounded px-12 py-3 text-sm font-medium text-green-600 shadow hover:text-lime-400 focus:outline-none focus:ring active:text-lime-400 sm:w-auto"
          href="/place"
        >
          WHEN?
        </a>
      </div>
    </div>
  </div>
</section>
	  </main>
  )
}
