import React from "react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import dc from "@/lib/DataConfig";

const Letter = ({ show, data, showLetter }) => {
  if (show || !showLetter) return null;

  return (
    <div className="letter-container w-full mb-8 animate-accordion-down">
      <Card className="border-border bg-card overflow-hidden shadow-sm">
        <CardContent className="pt-12 pb-12 px-8 md:px-12">
           <div className="text-center mb-12 border-b border-border pb-8">
               <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase mb-4">
                   {data.date.day}/{data.date.month}/{data.date.year} • {data.date.hour}:{data.date.minute}
               </p>
               <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 leading-tight text-foreground">
                   {data.title || "Lưu bút không tên"}
               </h1>
               <div className="flex flex-col items-center justify-center mt-6 text-foreground">
                   <span className="font-medium text-lg">{data.name}</span>
                   <span className="text-sm text-muted-foreground">{data.role}</span>
               </div>
           </div>

           <div className="prose dark:prose-invert max-w-none leading-relaxed text-foreground mx-auto">
               <div dangerouslySetInnerHTML={{ __html: data.message }} />
           </div>

           <div className="mt-12 pt-8 border-t border-border text-center">
               <p className="text-sm text-muted-foreground italic">
                   Gửi tới {dc.myself}
               </p>
           </div>
        </CardContent>
        {/* Optional Image footer if desired, or remove */}
      </Card>
    </div>
  );
};

export default Letter;

