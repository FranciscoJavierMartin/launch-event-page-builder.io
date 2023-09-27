import { component$ } from '@builder.io/qwik';

export default component$<{ value: number }>(({ value }) => {
  const values = Array.from({ length: 60 }, (_, i) => i);

  return (
    <div class='relative h-10 w-10'>
      {values.map((num) => (
        <div
          key={num}
          class={[
            'w-full',
            'h-full',
            'absolute',
            'transition-all',
            'duration-200',
            { 'opacity-100 transform-none': value === num },
            { 'opacity-0 -translate-y-2': value > num },
            { 'opacity-0 translate-y-2': value < num },
          ]}
        >
          {num}
        </div>
      ))}
    </div>
  );
});
