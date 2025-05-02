"use client";

import { menuProps } from "@/types/menuProps";

export default function Menu(props: menuProps) {
  return (
    <>
      <div className="vertical-menu">
        <ul id="navigationMenu">
          <li>
            <a
              className={props.activePage === "home" ? "active" : ""}
              onClick={() => props.setActivePage("home")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              className={props.activePage === "about" ? "active" : ""}
              onClick={() => props.setActivePage("about")}
            >
              About Us
            </a>
          </li>
          <li>
            <a
              className={props.activePage === "donate" ? "active" : ""}
              onClick={() => props.setActivePage("donate")}
            >
              Ways to Help
            </a>
          </li>
          <li>
            <a
              className={props.activePage === "contact" ? "active" : ""}
              onClick={() => props.setActivePage("contact")}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
