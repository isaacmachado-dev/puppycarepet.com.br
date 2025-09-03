module.exports = {
    theme: {
        extend: {
            keyframes: {
                bounceY: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-8%)' },
                },
            },
            animation: {
                bounceY: 'bounceY 0.6s infinite',
            },
        },
    },
}
