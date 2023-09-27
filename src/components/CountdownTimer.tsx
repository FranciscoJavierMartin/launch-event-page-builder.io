import {
  type Signal,
  component$,
  useSignal,
  useVisibleTask$,
} from '@builder.io/qwik';
import { calculateTimeToEvent } from '@/utils/countdown-utils';
import { type Framework } from '@/utils/framework-utils';
import TimeUnit from './TimeUnit';

export default component$<{ currentFramework: Signal<Framework> }>(
  ({ currentFramework }) => {
    const countdown = useSignal(calculateTimeToEvent());

    useVisibleTask$(({ cleanup }) => {
      const intervalId = setInterval(() => {
        countdown.value = calculateTimeToEvent();
      }, 1000);

      cleanup(() => clearInterval(intervalId));
    });

    return (
      <div class='flex gap-[10px] text-center'>
        <TimeUnit
          label='DAYS'
          value={countdown.value.days}
          currentFramework={currentFramework}
        />
        <TimeUnit
          label='HOURS'
          value={countdown.value.hours}
          currentFramework={currentFramework}
        />
        <TimeUnit
          label='MINUTES'
          value={countdown.value.minutes}
          currentFramework={currentFramework}
        />
        <TimeUnit
          label='SECONDS'
          value={countdown.value.seconds}
          currentFramework={currentFramework}
        />
      </div>
    );
  }
);
