'use client'
import { Typography } from "@material-tailwind/react";
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-8 border-t text-center text-sm">
      <div className="mb-4">Copyright © All rights reserved | AutoShare</div>
      <ul className="flex flex-wrap justify-center items-center gap-y-2 gap-x-8">
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="underline font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            About
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="underline font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Car
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="underline font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contact
          </Typography>
        </li>
      </ul>
    </footer>
  );
}