export default () => ({
    // ... các config khác
    cookie: {
        httpOnly: true,
        secure: true, // Đặt true nếu dùng HTTPS
        sameSite: 'lax',
        path: '/',
    },
});
