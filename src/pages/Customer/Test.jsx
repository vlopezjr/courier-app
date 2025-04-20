import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronUp, Truck } from "lucide-react";
import React from "react";

// Data for package rows
const packageRows = Array(6).fill(null);

export default function Content() {
  return (
    <Card className="w-full max-w-[818px] rounded overflow-hidden border border-solid border-[#00000026]">
      <CardContent className="p-6">
        <header className="flex items-center gap-2 mb-8">
          <h1 className="text-xl font-bold [font-family:'Inter-Bold',Helvetica]">
            Schedule Pickup
          </h1>
          <Truck className="w-[25px] h-5" />
        </header>

        <div className="flex justify-between mb-10">
          <div className="flex flex-col gap-2">
            <Label
              htmlFor="pickup-date"
              className="font-bold text-sm [font-family:'Inter-Bold',Helvetica]"
            >
              Pick-up Date
            </Label>
            <Select>
              <SelectTrigger
                id="pickup-date"
                className="w-[248px] h-10 border-[#eaeaea] border-[1.68px] rounded-[6.74px]"
              >
                <SelectValue placeholder="Wednesday, 1th January" />
                <ChevronUp className="w-5 h-5" />
              </SelectTrigger>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <Label
              htmlFor="po-number"
              className="font-bold text-sm [font-family:'Inter-Bold',Helvetica]"
            >
              PO Number
            </Label>
            <Input
              id="po-number"
              className="w-[148px] h-10 rounded-md border-[#c6c6c6]"
              placeholder="Enter PO"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-12 mb-10">
          {/* Starting Address */}
          <div>
            <h2 className="font-bold text-base mb-6 [font-family:'Inter-Bold',Helvetica]">
              Starting Address
            </h2>

            <div className="space-y-6">
              <div className="space-y-1.5">
                <Label
                  htmlFor="start-company"
                  className="font-bold text-sm text-[#525050] [font-family:'Inter-Bold',Helvetica]"
                >
                  Company Name
                </Label>
                <Input
                  id="start-company"
                  className="h-10 rounded-md border-[#c6c6c6]"
                  placeholder="Enter Company Name"
                />
              </div>

              <div className="space-y-1.5">
                <Label
                  htmlFor="start-address"
                  className="font-bold text-sm text-[#525050] [font-family:'Inter-Bold',Helvetica]"
                >
                  Address
                </Label>
                <Input
                  id="start-address"
                  className="h-10 rounded-md border-[#c6c6c6]"
                  placeholder="Enter Address"
                />
              </div>
            </div>
          </div>

          {/* Ending Address */}
          <div>
            <h2 className="font-bold text-base mb-6 [font-family:'Inter-Bold',Helvetica]">
              Ending Address
            </h2>

            <div className="space-y-6">
              <div className="space-y-1.5">
                <Label
                  htmlFor="end-company"
                  className="font-bold text-sm text-[#525050] [font-family:'Inter-Bold',Helvetica]"
                >
                  Company Name
                </Label>
                <Input
                  id="end-company"
                  className="h-10 rounded-md border-[#c6c6c6]"
                  placeholder="Enter Company Name"
                />
              </div>

              <div className="space-y-1.5">
                <Label
                  htmlFor="end-address"
                  className="font-bold text-sm text-[#525050] [font-family:'Inter-Bold',Helvetica]"
                >
                  Address
                </Label>
                <Input
                  id="end-address"
                  className="h-10 rounded-md border-[#c6c6c6]"
                  placeholder="Enter Address"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Packages Table */}
        <div className="mb-10">
          <div className="grid grid-cols-[85px_470px_80px_80px] mb-2">
            <div className="font-bold text-sm text-[#525151] text-center [font-family:'Inter-Bold',Helvetica]">
              Packages
            </div>
            <div className="font-bold text-sm text-[#525151] text-center [font-family:'Inter-Bold',Helvetica]">
              Description
            </div>
            <div className="font-bold text-sm text-[#525151] text-center [font-family:'Inter-Bold',Helvetica]">
              Weight
            </div>
            <div className="font-bold text-sm text-[#525151] text-center [font-family:'Inter-Bold',Helvetica]">
              Price
            </div>
          </div>

          <div className="space-y-2">
            {packageRows.map((_, index) => (
              <div
                key={index}
                className="grid grid-cols-[85px_470px_80px_80px] gap-2"
              >
                <Input className="h-10 rounded-md border-[#c6c6c6]" />
                <Input className="h-10 rounded-md border-[#c6c6c6]" />
                <Input className="h-10 rounded-md border-[#c6c6c6]" />
                <Input className="h-10 rounded-md border-[#c6c6c6]" />
              </div>
            ))}
          </div>

          <div className="flex justify-end mt-4">
            <div className="grid grid-cols-2 gap-4 w-[160px]">
              <div className="font-bold text-sm text-[#525151] text-center [font-family:'Inter-Bold',Helvetica]">
                Total
              </div>
              <div className="font-bold text-sm text-[#525151] text-center [font-family:'Inter-Bold',Helvetica]">
                $0.00
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4 mt-8">
          <Button
            variant="default"
            className="w-[140px] h-10 bg-[#292d32] rounded-[10px] border border-solid border-[#d9d9d9] font-bold [font-family:'Inter-Bold',Helvetica]"
          >
            CANCEL
          </Button>
          <Button
            variant="default"
            className="w-[140px] h-10 bg-[#292d32fd] rounded-[10px] border border-solid border-[#d9d9d9] font-bold [font-family:'Inter-Bold',Helvetica]"
          >
            SUBMIT
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}