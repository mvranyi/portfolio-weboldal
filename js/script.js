// Várjuk meg, hogy a dokumentum teljesen betöltődjön
document.addEventListener('DOMContentLoaded', () => {
    // Lekérés a randomuser.me API-ról
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            // A felhasználói adatokat tartalmazó objektum
            const user = data.results[0];
            
            // HTML elem, ahová a felhasználó adatai kerülnek
            const userInfoDiv = document.getElementById('user-info');

            // Generáljuk a HTML-t a felhasználó adataival
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