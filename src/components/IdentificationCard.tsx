
import React, { ReactNode, useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface IdentificationCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
}

const IdentificationCard: React.FC<IdentificationCardProps> = ({
  title,
  description,
  icon,
  children,
  footer,
}) => {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow w-full">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-cable-lightGray rounded-md">
            {icon}
          </div>
          <div>
            <CardTitle className="text-lg font-bold">{title}</CardTitle>
          </div>
        </div>
        <CardDescription className="mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
      {footer && (
        <CardFooter className="border-t border-gray-100 bg-gray-50 rounded-b-lg pt-4">
          {footer}
        </CardFooter>
      )}
    </Card>
  );
};

export default IdentificationCard;
