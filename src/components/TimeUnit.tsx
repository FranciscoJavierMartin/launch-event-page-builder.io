import { type Signal, component$ } from '@builder.io/qwik';
import { type Framework } from '@/utils/framework-utils';
import NumberRotation from './NumberRotation';

type TimeUnitProps = {
  label: string;
  value: number;
  currentFramework: Signal<Framework>;
};

export default component$<TimeUnitProps>(
  ({ label, value, currentFramework }) => {
    return (
      <div class='flex flex-col'>
        <div class='text-white text-3xl font-semibold'>
          <NumberRotation value={value}/>
        </div>
        <div
          class={[
            'text-[8px]',
            'font-medium',
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
          {label}
        </div>
      </div>
    );
  }
);
