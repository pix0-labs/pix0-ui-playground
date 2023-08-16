import React from 'react';

interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Tsw = ({ checked, onChange }: ToggleSwitchProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    onChange(isChecked);
  };

  return (
    <label className="relative inline-block w-20 h-10">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className="hidden"
      />
      <span className="absolute top-0 left-0 right-0 bottom-0 cursor-pointer bg-gray-300 rounded-full transition duration-200">
        <span className="absolute h-6 w-6 left-2 bottom-2 bg-white rounded-full transition-transform">
          <input
            type="checkbox"
            checked={checked}
            onChange={handleChange}
            className="hidden"
          />
        </span>
      </span>
    </label>
  );
};

export default Tsw;
