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

const AboutMe = ({ data, setData, available }) => {
  if (!available || !data.name) return null;

  return (
    <div className="w-full mb-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold">{dc.aboutMe.title}</CardTitle>
          <CardDescription>{dc.aboutMe.subtitle}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full">
            <Input
              className={`${
                data.about.length < 5 && data.about.length !== 0 ? "border-destructive" : ""
              }`}
              placeholder={dc.aboutMe.placeholder}
              value={data.about}
              onChange={(e) => setData({ ...data, about: e.target.value })}
            />
            {data.about.length < 5 && data.about.length !== 0 && (
              <p className="text-sm text-destructive mt-1 ml-1 animate-in slide-in-from-top-1 fade-in duration-200">
                {dc.aboutMe.nameError}
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutMe;

