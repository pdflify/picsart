//import cn from 'classnames';
//import { motion } from 'framer-motion';
import { RadioGroup } from '@headlessui/react';
import { useTranslation } from 'next-i18next';

type TSelectedItem = {
  label: string;
  range: number;
};

interface ButtonGroupProps {
  items: TSelectedItem[];
  selectedValue: TSelectedItem;
  onChange: React.Dispatch<React.SetStateAction<TSelectedItem>>;
}


export default function ButtonGroup({
  items,
  selectedValue,
  onChange,
}: ButtonGroupProps) {
  const { t } = useTranslation('common');
  return (
    <RadioGroup value={selectedValue} onChange={onChange}>
      <RadioGroup.Label className="sr-only ">Button Group</RadioGroup.Label>
      <div className="inline-flex shrink-0 rounded-3xl bg-slate-300 p-[5px] dark:bg-red-500 xs:flex">
        {items.map((item) => (
          <RadioGroup.Option
            key={t(item.label)}
            value={item}
            className="outline-none"
          >
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
}
