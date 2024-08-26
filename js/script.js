$(document).ready(function () {
  //Adding a new div called references before the footer and add a few references in it.
  $("<div/>", {
    id: "references",
    html: `
                 <main class="center-content">
                        <div class="hidden">
                            <h4>References</h4>
                        </div>
                        <ul class="list">
                            <li>John Doe - Front-end Developer at Tech Corp</li>
                            <li>Jane Smith - Senior Manager at XYZ Ltd.</li>
                            <li>Michael Brown - Lead Developer at WebWorks</li>
                        </ul>
                    </main>
            `,
  }).appendTo("#mypage_centerContent");

  $("<aside>", {
    class: "leftnav",
    html: `<h4>References</h4>`,
  }).appendTo("#mypage_leftnav");

  //Changing the background color to #FFFF88 | border color to #FF1A00 | text to #CC0000.
  $("#mypage_header nav").css({
    "background-color": "#FFFF88",
    "border-color": "#FF1A00",
    color: "#CC0000",
  });

  $("#mypage_leftnav aside").css({
    "background-color": "#FFFF88",
    "border-color": "#FF1A00",
  });

  $(".leftnav h4 ").css({
    color: "#CC0000",
  });

  $(".hidden").css({
    "background-color": "#FFFF88",
  });

  $(".hidden h4").css({
    color: "#CC0000",
  });

  $("#mypage_centerContent main").css({
    "background-color": "#FFFF88",
    color: "#CC0000",
  });

  $(".year").css({
    color: "#CC0000",
  });

  $(".center-content").css({
    "border-color": "#FF1A00",
  });

  $(".list li").css({
    "border-color": "#FF1A00",
  });

  $("table").css({
    "border-color": "#FF1A00",
    color: "#CC0000",
  });

  // Hiding the element with ID mypage_footer
  $("#mypage_footer").hide();
});
