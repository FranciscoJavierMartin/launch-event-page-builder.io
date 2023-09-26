import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { assets } from '@/utils/asset-utils';

export default component$(() => {
  return (
    <main>
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
      ></div>
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
