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

const ShortText = ({ setData, data, available }) => {
  if (!available || !data.memories) return null;

  return (
    <div className="w-full">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold">{dc.message.title}</CardTitle>
          <CardDescription>{dc.message.subtitle}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full">
            <Textarea
              className={`min-h-[100px] ${
                data.message.length < 5 && data.message.length !== 0 ? "border-destructive" : ""
              }`}
              placeholder={dc.message.placeholder}
              value={data.message}
              onChange={(e) => setData({ ...data, message: e.target.value })}
            />
            {data.message.length < 5 && data.message.length !== 0 && (
              <p className="text-sm text-destructive mt-1 ml-1 animate-in slide-in-from-top-1 fade-in duration-200">
                {dc.message.nameError}
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ShortText;

