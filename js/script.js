
document.addEventListener('DOMContentLoaded', () => {
    
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            
            const user = data.results[0];
            
            
            const userInfoDiv = document.getElementById('user-info');

            
            userInfoDiv.innerHTML = `
                <img src="${user.picture.large}" alt="Véletlenszerű felhasználó képe">
                <p><strong>Név:</strong> ${user.name.first} ${user.name.last}</p>
                <p><strong>Ország:</strong> ${user.location.country}</p>
                <p><strong>Email:</strong> ${user.email}</p>
            `;
        })
        .catch(error => {
            console.error('Hiba történt az API lekérése közben:', error);
        });
});