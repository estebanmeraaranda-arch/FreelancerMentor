// Función para cambiar de vista (login o signup)
function setView(view) {
    document.body.setAttribute('data-view', view);
    
    const btnLogin = document.getElementById('btn-login');
    const btnSignup = document.getElementById('btn-signup');

    if (view === 'login') {
        btnLogin.className = "flex-1 py-2 text-sm font-semibold rounded-lg transition-all duration-200 bg-white shadow-sm text-slate-900 border border-slate-200/50";
        btnSignup.className = "flex-1 py-2 text-sm font-semibold rounded-lg transition-all duration-200 text-slate-500 hover:text-slate-700 border border-transparent";
    } else {
        btnSignup.className = "flex-1 py-2 text-sm font-semibold rounded-lg transition-all duration-200 bg-white shadow-sm text-slate-900 border border-slate-200/50";
        btnLogin.className = "flex-1 py-2 text-sm font-semibold rounded-lg transition-all duration-200 text-slate-500 hover:text-slate-700 border border-transparent";
    }
}

// Detectar si la URL trae un hash para mostrar la vista correcta al cargar
document.addEventListener("DOMContentLoaded", () => {
    const hash = window.location.hash.substring(1); // 'login' o 'signup'
    if (hash === 'signup') {
        setView('signup');
    } else {
        setView('login'); // Por defecto login
    }
});

// Escuchar cambios en el hash por si el usuario navega hacia atrás o adelante
window.addEventListener('hashchange', () => {
    const hash = window.location.hash.substring(1);
    if (hash === 'signup') {
        setView('signup');
    } else if (hash === 'login') {
        setView('login');
    }
});
