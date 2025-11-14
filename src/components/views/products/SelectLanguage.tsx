import { User } from "lucide-react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { languangeOptions } from "~/constants/ChatConstant";

type SelectLanguageProps = {
  selectedLanguage?: string;
  handlelanguangeChange: (value: string) => void;
};

export default function SelectLanguage(props: SelectLanguageProps) {
  return (
    <Select
      value={props.selectedLanguage}
      onValueChange={props.handlelanguangeChange}
    >
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Choose your chat language..." />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          <SelectItem value="custom">
            <User className="mx-1 size-6" />
            Custom your own message
          </SelectItem>

          {languangeOptions.map((option, keyOption) => (
            <SelectItem key={keyOption} value={option.value}>
              <Image
                src={option.icon}
                alt={option.label}
                width={30}
                height={20}
              />
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
