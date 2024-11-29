import React from 'react'
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export default function PCard({
  name = "Dr. Vikul",
  title = "Assistant Professor",
  department = "Computing",
  description = "Leading expert in algorithms and computational physics with groundbreaking research in error correction.",
  imageUrl = "https://c-cube.geca.ac.in/static/media/vikul_sir.d377f2acce67337a9500.jpeg"
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card className="group relative w-[300px] h-[500px] overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-6 text-center transition-all duration-300 hover:shadow-lg">
        <div className="absolute -top-16 -left-16 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-purple-500/20 blur-3xl" />
        
        <div className="relative z-10 flex flex-col h-full">
          <div className="mx-auto w-full h-[200px] overflow-hidden rounded-2xl shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.8)]">
            <div className="relative h-full w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <img
                src={imageUrl}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="flex-grow flex flex-col justify-center space-y-2 mt-4">
            <h2 className="text-2xl font-bold text-white">{name}</h2>
            <p className="text-lg font-semibold text-blue-400">{title}</p>
            <p className="text-sm font-medium text-purple-300">{department}</p>
            <p className="text-sm text-gray-400">{description}</p>
          </div>

          <Button
            onClick={() => setIsModalOpen(true)}
            className="w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white transition-all hover:from-blue-600 hover:to-purple-600"
          >
            View Profile
          </Button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
      </Card>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Profile Details</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="mx-auto w-full max-w-[300px] h-[200px] rounded-2xl overflow-hidden shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              <img
                src={imageUrl}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-2 text-center">
              <h2 className="text-2xl font-bold">{name}</h2>
              <p className="text-lg font-semibold text-blue-500">{title}</p>
              <p className="text-sm font-medium text-purple-500">{department}</p>
              <p className="text-sm text-gray-600">{description}</p>
              <div className="mt-4 space-y-2">
                <h3 className="font-semibold">Additional Information</h3>
                <p className="text-sm text-gray-600">
                  Publications: 50+
                </p>
                <p className="text-sm text-gray-600">
                  Research Areas: Quantum Computing, Error Correction, Algorithm Design
                </p>
                <p className="text-sm text-gray-600">
                  Years of Experience: 10+
                </p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
