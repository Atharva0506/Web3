import React from "react";

const Sidebar = () => {
  const obj = [
    {
      title: "Home",
      svg: "", 
    },
    {
      title: "Webinar",
      svg: "",
    },
    {
      title: "Billing",
      svg: "",
    },
    {
      title: "User Management",
      svg: "",
    },
    {
      title: "Settings",
      svg: "",
    },
  ];

  return (
    <div>
      <div>
        <button>
          <div>svg</div>
          <div>
            Webinar.<span>gg</span>
          </div>
        </button>
        <div>
          <img src="" alt="Image Here" />
        </div>
      </div>

      <nav>
        <Navbar items={obj} />
      </nav>
    </div>
  );
};

const Navbar = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <span>{item.title}</span>
          <div>{item.svg}</div> 
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
