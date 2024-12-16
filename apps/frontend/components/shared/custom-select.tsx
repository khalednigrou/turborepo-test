"use client";
import { useEffect, useState } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@frontend/components/ui/select";

interface CustomSelectProps {
  options: { key: string; value: string }[];
  value: string | undefined;
  icon?: React.ReactNode;
  label?: string;
}

export default function CustomSelect({ options, value, icon, label }: CustomSelectProps) {
  const [selected, setSelected] = useState(value);

  useEffect(() => {
    setSelected(value);
  }, [value]);

  return (
    <>
      <Select value={selected} onValueChange={setSelected}>
        <SelectTrigger className="flex items-center gap-1">
          {icon && <span className="w-4 h-4">{icon}</span>}
          {label && <span className="text-xs">{label}</span>}
          <span className="font-bold">
            <SelectValue defaultValue={value} />
          </span>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {options?.map(({ key, value }) => (
              <SelectItem value={key} key={key} className="flex">{value}</SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
}
