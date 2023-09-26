import { assets } from '@/utils/asset-utils';
import { frameworks, type Framework } from '@/utils/framework-utils';
import { component$ } from '@builder.io/qwik';

type FrameworkRotationProps = {
  currentFramework: Framework;
};

export default component$<FrameworkRotationProps>(({ currentFramework }) => {
  return (
    <div class='w-[80px] h-[80px] mx-2 -mt-2 align-middle inline-flex relative'>
      {frameworks.map((name, index) => (
        <img
          key={name}
          src={assets[name]}
          width={80}
          height={80}
          class={[
            'w-full',
            'h-full',
            'object-contain',
            'object-center',
            'absolute',
            'top-0',
            'left-0',
            'transition-all',
            'duration-300',
            currentFramework === name
              ? 'opacity-100 transform-none'
              : index > frameworks.indexOf(currentFramework)
              ? 'opacity-0 -translate-y-2'
              : 'opacity-0 translate-y-2',
          ]}
        />
      ))}
    </div>
  );
});
