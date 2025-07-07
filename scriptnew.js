document.addEventListener('DOMContentLoaded', () => {
    // Auto-add tabindex if missing
    document.querySelectorAll('figure').forEach(fig => {
        if (!fig.hasAttribute('tabindex')) {
            fig.setAttribute('tabindex', '0');
        }
        
        // Event listeners
        fig.addEventListener('focus', highlight);
        fig.addEventListener('blur', unhighlight);
        fig.addEventListener('mouseenter', highlight);
        fig.addEventListener('mouseleave', unhighlight);
    });
    
    console.log('Gallery ready');
});

function highlight(e) {
    e.currentTarget.style.borderColor = '#e74c3c';
}

function unhighlight(e) {
    e.currentTarget.style.borderColor = '#ddd';
}
