import React from 'react';
interface Props {
  Icon: any;
  type: string;
  value?: string;
  placeholder: string;
  onChange?: Function;
}

export const FieldWithIcon = (props: Props) => {
  const { Icon, type, placeholder, value, onChange } = props;
  return (
    <div className="mt-1 mb-6 relative pb-4 border-b border-gray w-full">
      <div className="absolute inset-y-0 left-0 -top-4 pl-3 flex items-center pointer-events-none">
        <Icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
      </div>
      <input
        type={type}
        onChange={(e) => onChange!(e.target.value)}
        value={value}
        className="block w-full pl-12 rounded-md outline-none text-sm"
        placeholder={placeholder}
      />
    </div>
  );
};
