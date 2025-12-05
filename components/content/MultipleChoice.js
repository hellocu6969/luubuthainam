import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import dc from "@/lib/DataConfig";

const MultipleChoice = ({ setData, data, available }) => {
  if (!available || !data.name) return null;

  const marks = [
    { value: 0, label: dc.handsome.label.one },
    { value: 40, label: dc.handsome.label.fouth },
    { value: 70, label: dc.handsome.label.sixth },
    { value: 100, label: dc.handsome.label.full },
  ];

  return (
    <div className="w-full">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold">{dc.handsome.title}</CardTitle>
          <CardDescription>{dc.handsome.subtitle}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="py-6 px-2">
            <Slider
              defaultValue={[40]}
              max={100}
              step={20}
              onValueChange={(val) => setData({ ...data, handsome: val[0] })}
            />
            <div className="flex justify-between mt-4 text-sm text-muted-foreground font-medium">
              <span>{dc.handsome.label.one}</span>
              <span>{dc.handsome.label.full}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MultipleChoice;

