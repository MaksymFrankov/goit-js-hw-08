import throttle from "lodash.throttle";
const textInput = document.querySelector(".feedback-form");

textInput.addEventListener("input", (event) => SaveData(event.currentTarget.elements));

const FormFeedback = document.querySelector('.feedback-form');
FormFeedback.addEventListener('submit', (event) => FormSubmit(event));


const data = JSON.parse(localStorage.getItem('feedback-form-state'));
if (data)
{
    FillForm(data);
}

function SaveData(data)
{
    d = {
        email:    data['email'].value,
        message: data['message'].value,
    }
    localStorage.setItem('feedback-form-state', JSON.stringify(d));
}

function FillForm(data)
{
    let form = document.querySelector('.feedback-form');
    form.elements['email'].value = data.email;
    form.elements['message'].value = data.message;

}

function FormSubmit(event)
{
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem('feedback-form-state')
}
