"use client";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@frontend/components/ui/dropdown-menu"
import { Check, ListFilter } from "lucide-react"
import { cn } from "@frontend/lib/utils";

interface CustomDropdownProps {
  options: { key: string; value: string }[];
  label: string | undefined;
}

export default function CustomDropdown({ options, label }: CustomDropdownProps) {
  const [selected, setSelected] = useState<string | undefined>(undefined);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <span className="flex items-center gap-2">
          <ListFilter />
          {label}
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {options.map(({ key, value }) => (
          <DropdownMenuItem key={key} onClick={() => setSelected(value)} className={cn(selected === value && "bg-indigo-600")}>
            <span className="flex items-center gap-2">
              {selected === value && <Check />}
              {value}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}