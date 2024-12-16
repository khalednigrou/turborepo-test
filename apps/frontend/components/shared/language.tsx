"use client";
import { useEffect, useState } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@frontend/components/ui/select";

const languages = [
  { key: "JA", value: "🇯🇵" },
  { key: "EN", value: "🇬🇧" },
];

export default function Language({ value }: { value: string }) {
  const [selected, setSelected] = useState(value);

  useEffect(() => {
    setSelected(value || "JA");
  }, [value]);

  return (
    <>
      <Select value={selected} onValueChange={setSelected}>
        <SelectTrigger className="w-[80px]">
          <SelectValue placeholder="Select a language" defaultValue="JA" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {languages.map(({ key, value }) => (
              <SelectItem value={key} key={key} className="flex">
                <span>
                  {value}&nbsp;{key}
                </span>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
}
