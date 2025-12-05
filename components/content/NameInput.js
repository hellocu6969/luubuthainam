import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import dc from "@/lib/DataConfig";

const NameInput = ({ show, data, setData }) => {
  if (!show) return null;

  return (
    <div className="w-full">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold">{dc.nameInput.title}</CardTitle>
          <CardDescription>{dc.nameInput.subtitle}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full">
            <Input
              className={`${
                data.name.length < 2 && data.name.length !== 0 ? "border-destructive" : ""
              }`}
              placeholder={dc.nameInput.placeholder}
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
            {data.name.length < 2 && data.name.length !== 0 && (
              <p className="text-sm text-destructive mt-1 ml-1 animate-in slide-in-from-top-1 fade-in duration-200">
                {dc.nameInput.nameError}
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NameInput;

