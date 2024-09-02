$(document).ready(function () {
  // Adding a new div called references before the footer
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
    html: "<h4>References</h4>",
  }).appendTo("#mypage_leftnav");

  // Applying common styles
  const styles = {
    "background-color": "#FFFF88",
    "border-color": "#FF1A00",
    color: "#CC0000",
  };

  $("#mypage_header nav, #mypage_leftnav aside, .hidden, #mypage_centerContent main, .year, table").css(styles);
  $(".leftnav h4, .hidden h4").css("color", "#CC0000");
  $(".center-content").css("border-color", "#FF1A00");
  $(".list li").css("border-color", "#FF1A00");

  // Hiding the element with ID mypage_footer
  $("#mypage_footer").hide();
});
