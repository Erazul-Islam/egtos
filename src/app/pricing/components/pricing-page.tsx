import HeadingDetails from "@/components/custom/heading-details";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GitBranch, Sprout, TrendingUp } from "lucide-react";
import React from "react";

const Pricing = () => {
  return (
    <div className="max-w-[1440px] bg-[url('/how/how-bg.jpg')] bg-cover items-center mx-auto px-3 md:px-5">
      <h1 className="text-center md:pt-12 pt-6 text-3xl md:text-6xl font-semibold text-[#1A1A1A]">
        Access <span className="text-[#00A099]">Premium</span> Global Talent,
        Without The Premium Price Tag
      </h1>
      <HeadingDetails
        className="text-center md:py-12 mx-auto max-w-[702px] w-full"
        value="Unlock a smarter way to manage talent and access expertise. Explore EGTOS' flexible pricing tiers, designed to scale with your organization. Find the plan that fits your growth strategy"
      />

      <div className=" items-stretch max-w-6xl mx-auto gap-6  pb-16 md:gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
        {/* Grow Card */}
        <Card className="flex-1 bg-white shadow-lg relative z-10 flex flex-col">
          {" "}
          {/* Added flex flex-col */}
          <CardContent className="p-8 flex flex-col h-full">
            {" "}
            {/* Added flex flex-col h-full */}
            <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mb-4">
              <Sprout className="w-6 h-6 text-white" />
            </div>
            <Badge
              variant="outline"
              className="mb-4 bg-white border-gray-300 text-gray-700"
            >
              Anually
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Grow</h2>
            <p className="text-gray-600 mb-8 leading-relaxed flex-grow">
              {" "}
              {/* Added flex-grow */}
              Establish trading partner networks and trade capacity with your
              companies of choice
            </p>
            <Button
              variant="outline"
              className="w-full border-teal-600 text-teal-600 hover:bg-teal-50"
            >
              Get Started
            </Button>
          </CardContent>
        </Card>
        {/* Scale Card - Featured */}
        <Card className="flex-1 bg-teal-600 shadow-lg relative z-10 flex flex-col">
          {" "}
          {/* Added flex flex-col */}
          <CardContent className="p-8 flex flex-col h-full">
            {" "}
            {/* Added flex flex-col h-full */}
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-teal-600" />
            </div>
            <Badge variant="secondary" className="mb-4 bg-white text-gray-700">
              Anually
            </Badge>
            <h2 className="text-3xl font-bold text-white mb-4">Scale</h2>
            <p className="text-white mb-8 leading-relaxed flex-grow">
              {" "}
              {/* Added flex-grow */}
              Reach beyond your trading partner networks and tap into the global
              and diverse expert talent pool to rapidly scale to enable
              effective execution of your roadmap
            </p>
            <Button className="w-full bg-white text-teal-600 hover:bg-gray-50">
              Get Started
            </Button>
          </CardContent>
        </Card>
        {/* Predict Card */}
        <Card className="flex-1 bg-white shadow-lg relative z-10 flex flex-col">
          {" "}
          {/* Added flex flex-col */}
          <CardContent className="p-8 flex flex-col h-full">
            {" "}
            {/* Added flex flex-col h-full */}
            <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mb-4">
              <GitBranch className="w-6 h-6 text-white" />
            </div>
            <Badge
              variant="outline"
              className="mb-4 bg-white border-gray-300 text-gray-700"
            >
              Anually
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Predict</h2>
            <p className="text-gray-600 mb-8 leading-relaxed flex-grow">
              {" "}
              {/* Added flex-grow */}
              Reach beyond your trading partner networks and tap into the global
              and diverse expert talent pool to rapidly scale to enable
              effective execution of your roadmap
            </p>
            <Button
              variant="outline"
              className="w-full border-gray-400 text-gray-700 hover:bg-gray-50"
            >
              Get Started
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Pricing;
