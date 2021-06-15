import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
    return (
      <div className="w-full h-24 mb-10 mt-16 flex items-center justify-center">
        <div class="p-2">
          <a href="tel:+3607687795">
            <div class="inline-flex items-center bg-white leading-none rounded-full p-2 shadow text-teal text-sm">
              <span class="inline-flex bg-yellow-500 text-white rounded-full h-12 px-3 justify-center items-center">
                <FontAwesomeIcon icon={faPhone} className="h-6 w-6" />
              </span>
              <span class="inline-flex px-2 text-4xl font-mono tracking-wide">
                Call for a Quote
              </span>
            </div>
          </a>
        </div>
      </div>
    );
}
