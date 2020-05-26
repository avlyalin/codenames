import React from 'react';
import rotateImage from 'assets/images/rotate-device.svg';

const RotateDevice = React.forwardRef(function RotateDevice(props, ref) {
  return (
    <div
      ref={ref}
      className={
        'h-screen w-screen flex flex-wrap items-center content-center bg-gray-100'
      }
    >
      <div
        className={'w-full p-10'}
        dangerouslySetInnerHTML={{ __html: rotateImage }}
      />
      <span
        className={
          'w-full p-3 text-md uppercase font-bold text-center text-gray-500'
        }
      >
        Пожалуйста, переверните устройство
      </span>
    </div>
  );
});

export { RotateDevice };
