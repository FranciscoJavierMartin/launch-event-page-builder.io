import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { assets } from '@/utils/asset-utils';
import { type Framework, frameworks } from '@/utils/framework-utils';

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
