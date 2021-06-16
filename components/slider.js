import React from 'react'
import Whirligig from "react-whirligig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Slider() {
  let whirligig
  const next = () => whirligig.next()
  const prev = () => whirligig.prev()

  return (
    <div className="flex mt-14">
      <div className="w-16 h-72 mr-2 flex items-center text-blue-900">
        <FontAwesomeIcon onClick={prev} icon={faChevronLeft}></FontAwesomeIcon>
      </div>

      <Whirligig
        visibleSlides={4}
        gutter=".5em"
        infinte={true}
        ref={(_whirligigInstance) => {
          whirligig = _whirligigInstance;
        }}
      >
        <img
          src="20171208_142357_Original.jpg"
          className="object-cover w-72 h-72"
        />
        <img
          src="1016201773117_Original.jpg"
          className="object-cover w-72 h-72"
        />
        <img src="IMAG0170_Original.jpg" className="object-cover w-72 h-72" />
        <img src="IMAG0209_Original.jpg" className="object-cover w-72 h-72" />
        <img src="IMAG0261_Original.jpg" className="object-cover w-72 h-72" />
        <img src="IMAG0263_Original.jpg" className="object-cover w-72 h-72" />
        <img src="IMAG0297_Original.jpg" className="object-cover w-72 h-72" />
        <img
          src="IMG_20140718_153024720_Original.jpg"
          className="object-cover w-72 h-72"
        />
        <img
          src="IMG_20140715_141342414_Original.jpg"
          className="object-cover w-72 h-72"
        />
      </Whirligig>
      <div className="w-16 h-72 ml-2 flex items-center text-blue-900">
        <FontAwesomeIcon onClick={next} icon={faChevronRight}></FontAwesomeIcon>
      </div>
    </div>
  );
}
