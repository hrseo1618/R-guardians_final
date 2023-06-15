import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
<header aria-label="Site Header" class="border-b border-gray-100">
	<div class="mx-auto flex h-16 max-w-screen-4xl items-center justify-between lg:px-10 xl:px-8">
		<div class="flex flex-1 items-center justify-end gap-8">
			<nav
				aria-label="Site Nav"
				class="hidden lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-gray-500"
			>
				<a
					href="/recycle/new"
					class="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-green-600"
				>
					search
				</a>

				<a
					href="/recycle"
					class="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-green-600"
				>
					list
				</a>

				<a
					href="/place"
					class="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-green-600"
				>
					recycle day
				</a>
			</nav>

			<div class="flex items-center">
				<div class="flex items-center border-x border-gray-100">
					<span class="border-e border-e-gray-100">
						<a
							href="/account"
							class="grid h-16 w-16 place-content-center border-b-4 border-transparent hover:border-green-600"
						>
							<svg
								class="h-4 w-4"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
								/>
							</svg>

							<span class="sr-only"> Account </span>
						</a>
					</span>

					<span class="hidden sm:block">
						<a
							href="/search"
							class="grid h-16 w-16 place-content-center border-b-4 border-transparent hover:border-green-600"
						>
							<svg
								class="h-4 w-4"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								/>
							</svg>

							<span class="sr-only"> Search </span>
						</a>
					</span>
				</div>
			</div>
		</div>
	</div>
</header>
		  <Main />
        <NextScript />
      </body>
    </Html>
  )
}
