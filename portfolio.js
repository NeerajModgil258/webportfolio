const form = document.getElementById("mainforms");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelector("#sumb").value = "Sending....";
  let data = new FormData(form);
  fetch(
    "https://script.google.com/macros/s/AKfycbwuqtZpskxpE3y63k-mYDako-INyla_gyN57s-9KY7NAJB-eGIRSDtr9i4KATkB-kRaOg/exec",
    {
      method: "POST",
      body: data,
    }
  )
    .then((res) => res.text())
    .then((data) => {
      console.log(data);
      alert("Your form has been submitted");
      location.reload();
    });
});

function check(event) {
  var submitted = confirm("Are you sure you want to submit the form.");
  if (submitted) {
    console.log("Okay");
  } else {
    event.preventDefault();
  }
}

function scrollhome() {
  var my_element = document.getElementById("homepage");
  my_element.scrollIntoView({
    behavior: "smooth",
  });
}

function scrollabout() {
  var my_element = document.getElementById("aboutpage");
  my_element.scrollIntoView({
    behavior: "smooth",
  });
}

function scrolleducation() {
  var my_element = document.getElementById("educationpage");
  my_element.scrollIntoView({
    behavior: "smooth",
  });
}

function scrollskills() {
  var my_element = document.getElementById("skillspage");
  my_element.scrollIntoView({
    behavior: "smooth",
  });
}

function scrollprojects() {
  var my_element = document.getElementById("projectspage");
  my_element.scrollIntoView({
    behavior: "smooth",
  });
}

function scrollcontact() {
  var my_element = document.getElementById("contactpage");
  my_element.scrollIntoView({
    behavior: "smooth",
  });
}
