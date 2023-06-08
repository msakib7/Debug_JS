const hello = localStorage.getItem('Hello');
console.log(hello);

const setAge = () => {
    localStorage.setItem('Age',33);
    const ul = document.getElementById('age-list');
    const li = document.createElement('li');
    li.innerText = 'Age: 33';
    ul.appendChild(li);
}