export const validate = (email, password) => {
    if (email.length === 0) return 'Enter an email';
    if (!email.includes('@')) return "Enter a valid email";
    
    const emailArr = email.split('@');
    if (emailArr.length < 2) return "Enter the following part after '@'";

    if (password.length < 8) return 'Password must contain 8 letters';

    // Check for at least one uppercase letter, one lowercase letter, and one digit in the password
    if (!/[A-Z]/.test(password)) return "Password must contain at least one uppercase letter";
    if (!/[a-z]/.test(password)) return "Password must contain at least one lowercase letter";
    if (!/[0-9]/.test(password)) return "Password must contain at least one number";

    return null; // Return null if all validations pass
};

