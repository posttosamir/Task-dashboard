import React, { useState } from "react";

function DisplayButton() {
  const [display, setDisplay] = useState("block");
  const [bgColor, setbgColor] = useState("red");
  const paragraph = {
    display: display,
    color: bgColor,
  };
  const DisplayHandler = () => {
    // if (bgColor === "transparent") {
    //   setbgColor("blue");
    // } else {
    //   setbgColor("transparent");
    // }
    console.log("onnn");

    bgColor === "red" ? setbgColor("blue") : setbgColor("red");

    console.log("onnn");
    // setDisplay("none");
    // setbgColor("transparent" ? "red" : "blue");
    // paragraph.style.display = "none";
  };
  return (
    <div className="container">
      <div>
        <button type="text" onClick={DisplayHandler}>
          Display
        </button>
      </div>
      <div style={paragraph}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et urna
          sem. Quisque sit amet libero metus. Morbi elementum quis elit vitae
          tincidunt. Donec rhoncus nunc nec eros pulvinar mollis. Nullam
          vestibulum, nisl in tristique consectetur, neque mi pellentesque
          ligula, id sodales enim enim sed ex. Aliquam sit amet erat nec justo
          vestibulum ultricies. Proin posuere libero at viverra accumsan.
          Aliquam vestibulum blandit sagittis. Praesent facilisis tortor sed
          finibus semper. Cras at purus eu felis rutrum pretium at sit amet mi.
          Integer mollis ex vel vulputate porttitor. Mauris ex diam, interdum
          sodales accumsan eu, convallis quis odio. Aliquam suscipit tristique
          mauris, id condimentum lacus euismod ut. Vestibulum in elit vitae quam
          semper ultrices sed id ipsum. Nulla ultricies nunc eget neque
          porttitor porta. Donec libero neque, tempor ac facilisis consectetur,
          aliquet quis sem. Sed aliquet eleifend risus ut vestibulum. Nulla eget
          tempus nisi, at vestibulum quam. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Aenean lacinia lacinia scelerisque. Aliquam
          ullamcorper mi nec bibendum ultrices. In nec massa aliquet, interdum
          eros sed, feugiat enim. Praesent nunc lorem, consequat maximus augue
          placerat, mattis accumsan nisl. Donec cursus finibus posuere. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida,
          magna in ultrices mollis, ante nisl egestas tortor, aliquam egestas
          nulla lorem vitae ligula. Donec blandit nulla et turpis accumsan, at
          elementum nulla pretium. Etiam et euismod dui. Nam quis tincidunt
          nisi. Suspendisse blandit enim vel fermentum varius. Phasellus vel
          nulla hendrerit, feugiat mi eget, fringilla nisl. Vestibulum a sem ac
          libero varius lobortis ut in eros. Vivamus sodales non nisi vel
          porttitor. Donec ullamcorper ac mi placerat ultrices. Sed vel purus
          interdum, rhoncus mauris vel, bibendum turpis. Mauris id porttitor
          lectus. Cras condimentum facilisis magna ut rutrum. Fusce maximus
          lacus nibh, quis gravida quam eleifend sed. Cras ac ullamcorper lacus,
        </p>
      </div>
    </div>
  );
}

export default DisplayButton;
