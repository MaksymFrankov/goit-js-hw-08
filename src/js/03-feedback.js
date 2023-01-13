
const textInput = document.querySelector(".feedback-form");

textInput.addEventListener("input",  SaveData(e)); 


let data = JSON.parse(localStorage.getItem('feedback-form-state'));
if (data)
{
    FillForm(data);
}

function SaveData(e)
{
    data[e.target.name] = e.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(data));
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
    data = JSON.parse(localStorage.getItem('feedback-form-state'));
    console.log(data);
    event.currentTarget.reset();
    localStorage.removeItem('feedback-form-state')
}
