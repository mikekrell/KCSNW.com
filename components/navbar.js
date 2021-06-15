import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
    return (
      <div className="flex h-20 w-full flex-1 pl-10 pr-10 items-center justify-between">
        <img src="logo.jpeg" className="h-14" />
        <div className="flex items-center">
          <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-4" />
          <a href="tel:+13607687795" className="font-mono text-3xl">360-768-7795</a>
        </div>
      </div>
    );
}
