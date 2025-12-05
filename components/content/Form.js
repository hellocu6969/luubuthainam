import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import dc from "@/lib/DataConfig";

const Form = ({ setData, data, available }) => {
  if (!available || !data.about) return null;

  return (
    <div className="w-full">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold">{dc.memories.title}</CardTitle>
          <CardDescription>{dc.memories.subtitle}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full">
            <Textarea
              className={`min-h-[100px] ${
                data.memories.length < 5 && data.memories.length !== 0 ? "border-destructive" : ""
              }`}
              placeholder={dc.memories.placeholder}
              value={data.memories}
              onChange={(e) => setData({ ...data, memories: e.target.value })}
            />
            {data.memories.length < 5 && data.memories.length !== 0 && (
              <p className="text-sm text-destructive mt-1 ml-1 animate-in slide-in-from-top-1 fade-in duration-200">
                {dc.memories.nameError}
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Form;

