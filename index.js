profil = () => {
    const name = prompt('name').trim();
    const date = prompt('date').trim();
    const email = prompt('email').trim();
    const age = prompt('age').trim();


    document.getElementById('profile-name').textContent = name.concat(";") ;
    document.getElementById('profile-date').textContent = date.concat(";") ;
    document.getElementById('profile-email').textContent = email.concat(";") ;
    document.getElementById('profile-age').textContent = age.concat(";") ;
};
profil();