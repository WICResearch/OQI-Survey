const scriptURL =
  "https://script.google.com/macros/s/AKfycbx498RteNL0Z6RA1u0yfL0Cx_CeFxGD-UvMV62RM0FublMepjFRAwZElvxXt5qGFeNE/exec";

const scaleOptions = [
  "Strongly Disagree",
  "Somewhat Disagree",
  "Neutral",
  "Somewhat Agree",
  "Strongly Agree"
];

let currentPage = 0;
const answers = {};

const pages = [
  {
    title: "Local Agency Operations",
    description:
      "Please indicate your level of agreement with each statement about this session.",
    fields: [
      {
        type: "scale",
        name: "localAgencyOperationsPresenterClear",
        label: "The presenter communicated clearly."
      },
      {
        type: "scale",
        name: "localAgencyOperationsOrganized",
        label: "The session was well organized."
      },
      {
        type: "scale",
        name: "localAgencyOperationsGoodUseOfTime",
        label: "The session was a good use of my time."
      },
      {
        type: "scale",
        name: "localAgencyOperationsEasyToFollow",
        label: "The session was easy to follow."
      }
    ]
  },
  {
    title: "Local Agency Operations",
    fields: [
      {
        type: "textarea",
        name: "localAgencyOperationsSuggestions",
        label:
          "Do you have any suggestions for improvement for future sessions on this topic? (Local Agency Operations)",
        required: false
      }
    ]
  },
  {
    title: "Outreach Quality Improvement, Innovation, and Best Practices",
    description:
      "Please indicate your level of agreement with each statement about this session.",
    fields: [
      {
        type: "scale",
        name: "outreachPresenterClear",
        label: "The presenter communicated clearly."
      },
      {
        type: "scale",
        name: "outreachOrganized",
        label: "The session was well organized."
      },
      {
        type: "scale",
        name: "outreachGoodUseOfTime",
        label: "The session was a good use of my time."
      },
      {
        type: "scale",
        name: "outreachEasyToFollow",
        label: "The session was easy to follow."
      }
    ]
  },
  {
    title: "Outreach Quality Improvement, Innovation, and Best Practices",
    fields: [
      {
        type: "textarea",
        name: "outreachSuggestions",
        label:
          "Do you have any suggestions for improvement for future sessions on this topic? (Outreach Quality Improvement, Innovation, and Best Practices)",
        required: false
      }
    ]
  },
  {
    title: "Grant Statement of Work Discussion",
    description:
      "Please indicate your level of agreement with each statement about this session.",
    fields: [
      {
        type: "scale",
        name: "grantStatementPresenterClear",
        label: "The presenter communicated clearly."
      },
      {
        type: "scale",
        name: "grantStatementOrganized",
        label: "The session was well organized."
      },
      {
        type: "scale",
        name: "grantStatementGoodUseOfTime",
        label: "The session was a good use of my time."
      },
      {
        type: "scale",
        name: "grantStatementEasyToFollow",
        label: "The session was easy to follow."
      }
    ]
  },
  {
    title: "Grant Statement of Work Discussion",
    fields: [
      {
        type: "textarea",
        name: "grantStatementSuggestions",
        label:
          "Do you have any suggestions for improvement for future sessions on this topic? (Grant Statement of Work Discussion)",
        required: false
      }
    ]
  },
  {
    title: "Today's Takeaway",
    fields: [
      {
        type: "textarea",
        name: "positiveTakeaway",
        label:
          "What is one (or more) positive takeaway from today's session that could help improve WV WIC?",
        required: false
      }
    ]
  }
];

const questionCard = document.getElementById("questionCard");
const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");
const submitBtn = document.getElementById("submitBtn");
const message = document.getElementById("message");

function renderPage() {
  const page = pages[currentPage];

  questionCard.innerHTML = `
    <h2>${page.title}</h2>
    ${page.description ? `<p>${page.description}</p>` : ""}
  `;

  page.fields.forEach((field) => {
    questionCard.appendChild(createField(field));
  });

  progressText.textContent = `Question ${currentPage + 1} of ${pages.length}`;

  progressFill.style.width = `${
    ((currentPage + 1) / pages.length) * 100
  }%`;

  backBtn.style.display = currentPage === 0 ? "none" : "block";

  nextBtn.style.display =
    currentPage === pages.length - 1 ? "none" : "block";

  submitBtn.style.display =
    currentPage === pages.length - 1 ? "block" : "none";

  message.textContent = "";
}

function createField(field) {
  const wrapper = document.createElement("div");
  wrapper.className = "field";

  const label = document.createElement("label");
  label.textContent = field.label;
  wrapper.appendChild(label);

  if (field.type === "select" || field.type === "scale") {
    const select = document.createElement("select");

    select.name = field.name;
    select.required = field.required !== false;

    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Select one";

    select.appendChild(defaultOption);

    const options =
      field.type === "scale" ? scaleOptions : field.options;

    options.forEach((optionText) => {
      const option = document.createElement("option");

      option.value = optionText;
      option.textContent = optionText;

      select.appendChild(option);
    });

    if (answers[field.name]) {
      select.value = answers[field.name];
    }

    wrapper.appendChild(select);
  }

  if (field.type === "text") {
    const input = document.createElement("input");

    input.type = "text";
    input.name = field.name;
    input.required = field.required === true;
    input.value = answers[field.name] || "";

    wrapper.appendChild(input);
  }

  if (field.type === "textarea") {
    const textarea = document.createElement("textarea");

    textarea.name = field.name;
    textarea.rows = 5;
    textarea.required = field.required === true;
    textarea.value = answers[field.name] || "";

    wrapper.appendChild(textarea);
  }

  if (field.type === "checkbox") {
    const group = document.createElement("div");
    group.className = "checkbox-group";

    field.options.forEach((optionText) => {
      const optionLabel = document.createElement("label");
      const checkbox = document.createElement("input");

      checkbox.type = "checkbox";
      checkbox.name = field.name;
      checkbox.value = optionText;

      if (
        Array.isArray(answers[field.name]) &&
        answers[field.name].includes(optionText)
      ) {
        checkbox.checked = true;
      }

      checkbox.addEventListener("change", () => {
        const selected = group.querySelectorAll("input:checked");

        if (
          field.maxSelections &&
          selected.length > field.maxSelections
        ) {
          checkbox.checked = false;

          alert(
            `Please select no more than ${field.maxSelections}.`
          );
        }
      });

      optionLabel.appendChild(checkbox);
      optionLabel.append(` ${optionText}`);
      group.appendChild(optionLabel);
    });

    wrapper.appendChild(group);
  }

  return wrapper;
}

function saveCurrentPage() {
  const fields = questionCard.querySelectorAll(
    "input, select, textarea"
  );

  fields.forEach((field) => {
    if (field.type === "checkbox") {
      const checked = questionCard.querySelectorAll(
        `input[name="${field.name}"]:checked`
      );

      answers[field.name] = Array.from(checked).map(
        (item) => item.value
      );
    } else {
      answers[field.name] = field.value;
    }
  });
}

function validateCurrentPage() {
  const fields = questionCard.querySelectorAll(
    "input, select, textarea"
  );

  for (const field of fields) {
    if (!field.checkValidity()) {
      field.reportValidity();
      return false;
    }
  }

  return true;
}

nextBtn.addEventListener("click", () => {
  if (!validateCurrentPage()) {
    return;
  }

  saveCurrentPage();
  currentPage++;
  renderPage();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

backBtn.addEventListener("click", () => {
  saveCurrentPage();
  currentPage--;
  renderPage();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

document
  .getElementById("surveyForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    if (!validateCurrentPage()) {
      return;
    }

    saveCurrentPage();

    message.textContent = "Submitting...";

    submitBtn.disabled = true;
    submitBtn.textContent = "Submitting...";

    fetch(scriptURL, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(answers)
    })
      .then(() => {
        document.getElementById("surveyForm").innerHTML = `
          <div style="text-align:center; padding:60px 20px;">
            <h1 style="color:#4b2e83;">Thank You!</h1>

            <p style="font-size:20px;">
              Your response has been successfully submitted.
            </p>

            <p>
              Thank you for taking the time to provide feedback.
              Your input will help the Office of Quality Improvement
              improve future sessions.
            </p>

            <button type="button" onclick="location.reload()">
              Submit Another Response
            </button>
          </div>
        `;

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      })
      .catch((error) => {
        message.textContent =
          "There was an error submitting the survey. Please try again.";

        submitBtn.disabled = false;
        submitBtn.textContent = "Submit Survey";

        console.error("Error:", error);
      });
  });

document
  .getElementById("beginSurveyBtn")
  .addEventListener("click", () => {
    document.getElementById("introPage").style.display = "none";
    document.getElementById("surveyForm").style.display = "block";

    currentPage = 0;
    renderPage();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });








