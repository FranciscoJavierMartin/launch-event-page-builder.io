import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { assets } from '@/utils/asset-utils';
import { type Framework, frameworks } from '@/utils/framework-utils';
import FrameworkRotation from '@/components/FrameworkRotation';
import CountdownTimer from '@/components/CountdownTimer';

export default component$(() => {
  const currentFramework = useSignal<Framework>(frameworks[0]);
  const showBackground = useSignal<boolean>(false);

  useVisibleTask$(({ cleanup }) => {
    let currentIndex: number = 0;

    const rotateFrameworks = () => {
      currentFramework.value = frameworks[currentIndex];
      currentIndex = (currentIndex + 1) % frameworks.length;
    };

    const intervalId = setInterval(rotateFrameworks, 2000);

    cleanup(() => clearInterval(intervalId));
  });

  useVisibleTask$(() => {
    showBackground.value = true;
  });

  return (
    <main>
      <div
        class={[
          'fixed',
          'inset-0',
          'transition-colors',
          'delay-100',
          'duration-700',
          'opacity-25',
          { 'bg-purple-300': currentFramework.value === 'qwik' },
          { 'bg-sky-300': currentFramework.value === 'safari' },
          { 'bg-yellow-300': currentFramework.value === 'chrome' },
          { 'bg-teal-300': currentFramework.value === 'tailwind' },
          { 'bg-blue-300': currentFramework.value === 'react' },
          { 'bg-green-300': currentFramework.value === 'vue' },
          { 'bg-orange-300': currentFramework.value === 'svelte' },
          { 'bg-red-300': currentFramework.value === 'mobile' },
          { 'bg-neutral-300': currentFramework.value === 'desktop' },
        ]}
      />
      <img
        src={assets.gradient}
        width={1200}
        height={1200}
        role='presentation'
        alt='gradient background'
        class='fixed inset-0 w-screen h-screen object-cover'
      />
      <div
        class='fixed inset-0 opacity-30'
        style={{
          backgroundSize: '30px',
          backgroundImage: `url(${assets.square})`,
        }}
      />
      <div
        class={[
          'bg-black',
          'fixed',
          'inset-0',
          'transition-opacity',
          'duration-[1500ms]',
          showBackground.value ? 'opacity-0' : 'opacity-100',
        ]}
      />
      <div class='max-w-7xl mt-20 mx-auto'>
        <div class='flex flex-col items-center relative z-10'>
          <h1 class='text-5xl max-w-3xl text-center leading-snug mb-12 font-bold'>
            <img
              alt='Figma logo'
              src={assets.figma}
              class='inline-block mr-8 -mt-2'
              height={50}
              width={50}
            />
            to <FrameworkRotation currentFramework={currentFramework.value} />{' '}
            will{' '}
            <span
              class={[
                'transition-colors',
                'duration-200',
                { 'text-purple-300': currentFramework.value === 'qwik' },
                { 'text-sky-300': currentFramework.value === 'safari' },
                { 'text-yellow-300': currentFramework.value === 'chrome' },
                { 'text-teal-300': currentFramework.value === 'tailwind' },
                { 'text-blue-300': currentFramework.value === 'react' },
                { 'text-green-300': currentFramework.value === 'vue' },
                { 'text-orange-300': currentFramework.value === 'svelte' },
                { 'text-red-300': currentFramework.value === 'mobile' },
                { 'text-neutral-300': currentFramework.value === 'desktop' },
              ]}
            >
              never
            </span>{' '}
            be the same again
          </h1>
          <p class='mb-8'>
            <span class='text-gray-300'>Join us for an AI launch event by</span>
            <img
              alt='Builder.io logo'
              class='inline-block ml-1 -mt-1'
              height={20}
              width={100}
              src={assets.builder}
            />
            {' + '}
            <img
              alt='Figma logo'
              class='inline-block mx-1'
              height={20}
              width={55}
              src={assets.figmatwo}
            />
          </p>
          <form class='flex gap-4 mb-8'>
            <input
              placeholder='your@email.com'
              class='pl-2 w-[200px] md:w-[300px] rounded-md border-2 border-solid border-gray-400 px-4 py-3  shadow-sm placeholder:text-gray-400 backdrop-blur-sm'
              style={{ background: 'rgba(255, 255, 255, 0.08);' }}
            />
            <button
              class={[
                'text-black',
                'px-6',
                'py-3',
                'rounded-md',
                'text-sm',
                'font-semibold',
                'transition-colors',
                'duration-200',
                { 'bg-purple-300': currentFramework.value === 'qwik' },
                { 'bg-sky-300': currentFramework.value === 'safari' },
                { 'bg-yellow-300': currentFramework.value === 'chrome' },
                { 'bg-teal-300': currentFramework.value === 'tailwind' },
                { 'bg-blue-300': currentFramework.value === 'react' },
                { 'bg-green-300': currentFramework.value === 'vue' },
                { 'bg-orange-300': currentFramework.value === 'svelte' },
                { 'bg-red-300': currentFramework.value === 'mobile' },
                { 'bg-neutral-300': currentFramework.value === 'desktop' },
              ]}
            >
              Claim Ticket
            </button>
          </form>
          <CountdownTimer currentFramework={currentFramework} />
        </div>
        <div class='relative flex pointer-events-none mt-20'>
          <img
            loading='lazy'
            decoding='async'
            sizes='200px'
            style='object-fit: cover; width: 200px; height: 100px;'
            src='https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fb35ed803c96845ba94bb627a008c7c76?format=webp&amp;width=200&amp;height=100&amp;fit=cover&amp;sharp=true'
            width='200'
            height='100'
            class='backdrop-blur-sm absolute transition-all duration-700 z-40 l-5 !w-48 md:!w-[200px] top-[-100px] md:top-[-200px] md:left-1/2 md:!ml-[-470px] pointer-events-none opacity-100'
          />
          <div class='p-5 text-sm whitespace-pre text-neutral-200 pointer-events-none mx-auto min-w-[530px]'>
            <code class='language-javascript relative'>
              <div>
                <span class='opacity-50'>
                  {'export default function Page() {'}
                </span>
              </div>
              <div>
                <span class='opacity-50'>{'  return ('}</span>
              </div>
              <span class='hljs-tag'>
                {'    '}&lt;<span class='text-red-400'>div</span>{' '}
                <span class='text-orange-300'>className</span>=
                <span class='text-green-300'>"flex flex-col"</span>&gt;
              </span>
              <div>
                {' '}
                <span class='hljs-tag'>
                  {'     '}&lt;<span class='text-red-400'>Heading</span> /&gt;
                </span>
              </div>
              <div>
                {' '}
                <span class='hljs-tag'>
                  {'     '}&lt;<span class='text-red-400'>Paragraph</span>{' '}
                  <span class='text-orange-300'>className</span>=
                  <span class='text-green-300'>"mt-6 self-center"</span> /&gt;
                </span>
              </div>
              <div>
                {' '}
                <span class='hljs-tag'>
                  {'     '}&lt;<span class='text-red-400'>div</span>{' '}
                  <span class='text-orange-300'>className</span>=
                  <span class='text-green-300'>"flex self-center gap-6"</span>
                  &gt;
                </span>
              </div>
              <div>
                {' '}
                <span class='hljs-tag'>
                  {'       '}&lt;<span class='text-red-400'>TextField</span>{' '}
                  /&gt;
                </span>
              </div>
              <div>
                {' '}
                <span class='hljs-tag'>
                  {'       '}&lt;<span class='text-red-400'>Register</span>{' '}
                  <span class='text-orange-300'>className</span>=
                  <span class='text-green-300'>"mt-1"</span> /&gt;
                </span>
              </div>
              <div>
                {' '}
                <span class='hljs-tag'>
                  {'     '}&lt;/<span class='text-red-400'>div</span>&gt;
                </span>
              </div>
              <div>
                {' '}
                <span class='hljs-tag'>
                  {'     '}&lt;<span class='text-red-400'>Countdown</span>{' '}
                  <span class='text-orange-300'>className</span>=
                  <span class='text-green-300'>"mt-4 self-center"</span> /&gt;
                </span>
              </div>
              <div>
                {' '}
                <span class='hljs-tag'>
                  {'   '}&lt;/<span class='text-red-400'>div</span>&gt;
                </span>
              </div>
              <div>
                {' '}
                <span class='opacity-50'>);</span>
              </div>
              <div>
                <span class='opacity-50'>{'}'}</span>
              </div>
            </code>
          </div>
        </div>
      </div>
    </main>
  );
});

export const head: DocumentHead = {
  title: 'Builder.io Velocity',
  meta: [
    {
      name: 'description',
      content: 'AI Launch Event!',
    },
  ],
};
