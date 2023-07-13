'use client';

import { useState } from 'react';

import * as Popover from '@radix-ui/react-popover';
import * as RadioGroup from '@radix-ui/react-radio-group';
import { Cross1Icon } from '@radix-ui/react-icons';

import { CgSize } from 'react-icons/cg';

const sizes = [
  {
    title: 'Grande'
  },
  {
    title: 'Média'
  },
  {
    title: 'Pequena'
  }
];

export function SelectSize() {
  const [size, setSize] = useState(sizes[0].title);

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button
          aria-label="Select Size"
          className="bg-orange p-2 rounded-md flex justify-center items-center"
        >
          <CgSize size={20} className="text-white" />
        </button>
      </Popover.Trigger>
      <Popover.Content className="bg-card w-60 z-50 rounded-lg p-4 shadow-md">
        <h1 className="text-text text-lg font-alt font-bold leading-tight">Tamanho da pizza</h1>

        <Popover.Close className="absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1 focus:outline-none focus-visible:ring focus-visible:ring-orange focus-visible:ring-opacity-75">
          <Cross1Icon className="h-4 w-4 text-title hover:text-orange" />
        </Popover.Close>

        <form>
          <RadioGroup.Root aria-label="Pizza sizes" defaultValue={size} onValueChange={setSize}>
            <div className="mt-3 space-y-3">
              {sizes.map(size => (
                <div key={size.title} className="flex items-center">
                  <RadioGroup.Item
                    id={size.title}
                    value={size.title}
                    className="w-4 h-4 rounded-full relative radix-state-checked:bg-orange radix-state-unchecked:bg-button-dark focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:ring focus-visible:ring-orange focus-visible:ring-opacity-75 focus-visible:ring-offset-2"
                  >
                    <RadioGroup.Indicator className="leading-0 flex items-center justify-center absolute inset-0">
                      <div className="bg-white w-1.5 h-1.5 rounded-full" />
                    </RadioGroup.Indicator>
                  </RadioGroup.Item>

                  <label htmlFor={size.title} className="text-text font-medium font-alt ml-2 block">
                    {size.title}
                  </label>
                </div>
              ))}
            </div>
          </RadioGroup.Root>
        </form>

        <Popover.Arrow className="fill-orange mb-1" />
      </Popover.Content>
    </Popover.Root>
  );
}
